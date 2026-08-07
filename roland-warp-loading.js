(() => {
  const overlay = document.querySelector("#homeWarpLoading");
  const canvas = document.querySelector("#homeWarpCanvas");
  const progressRing = document.querySelector("#homeWarpProgress");
  if (!overlay || !canvas || !progressRing) return;

  const ctx = canvas.getContext("2d", { alpha: false });
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let frame = 0;
  let finishTimer = 0;
  let resolver;
  let width = 375;
  let height = 812;
  let dpr = 1;
  let cycleStart = 0;
  let duration = 4;
  let beforeReveal;

  const seeded = (index) => {
    const value = Math.sin(index * 127.1 + 91.7) * 43758.5453;
    return value - Math.floor(value);
  };
  const noise = (value) => Math.sin(value * 1.13) * .52 + Math.sin(value * 2.31 + 1.7) * .31 + Math.sin(value * 4.73 + .4) * .17;
  const smooth = (value) => value <= 0 ? 0 : value >= 1 ? 1 : value * value * (3 - 2 * value);

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    width = bounds.width || 375;
    height = bounds.height || 812;
    dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function finish() {
    cancelAnimationFrame(frame);
    beforeReveal?.();
    beforeReveal = undefined;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => overlay.classList.add("is-leaving"));
    });
    finishTimer = window.setTimeout(() => {
      overlay.hidden = true;
      overlay.classList.remove("is-active", "is-leaving");
      overlay.setAttribute("aria-hidden", "true");
      const complete = resolver;
      resolver = undefined;
      complete?.();
    }, 500);
  }

  function draw(now) {
    const elapsed = (now - cycleStart) / 1000;
    const progress = smooth(Math.min(1, elapsed / duration));
    progressRing.style.setProperty("--progress", progress.toFixed(4));
    progressRing.setAttribute("aria-valuenow", Math.round(progress * 100));
    const accelerated = elapsed * (.2 + Math.pow(progress, 2.1) * 1.5) * (reduceMotion ? .45 : 1);
    const edgeFade = smooth(Math.min(elapsed / .28, Math.max(0, (duration - elapsed) / .35)));
    const centerX = width * (.5 + noise(elapsed * .12) * .014);
    const centerY = height * (.42 + noise(elapsed * .1 + 3) * .012);

    ctx.fillStyle = "#070910";
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "screen";

    for (let index = 0; index < 176; index += 1) {
      const angle = seeded(index * 9 + 2) * Math.PI * 2 + noise(elapsed * .08 + index * .13) * .035;
      const lane = .02 + seeded(index * 9 + 3) * .98;
      const speed = .24 + seeded(index * 9 + 4) * 1.12;
      const travel = (accelerated * speed + lane) % 1;
      const depth = Math.pow(travel, 2.18);
      const radius = depth * Math.max(width, height) * (.6 + seeded(index * 9 + 5) * .22);
      const squash = .82 + seeded(index * 9 + 6) * .08;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius * squash;
      const weightSeed = seeded(index * 17 + 9);
      const weight = weightSeed < .56 ? .42 : weightSeed < .87 ? 1 : weightSeed < .97 ? 1.65 : 2.45;
      const size = (.2 + depth * (1.35 + seeded(index * 9 + 7) * 2)) * weight;
      const alpha = (.06 + depth * .72) * edgeFade;
      const color = index % 8 === 0 ? "216,197,215" : "232,232,230";
      const length = 36 * (1.1 + depth * 6.4);
      const dx = Math.cos(angle);
      const dy = Math.sin(angle) * squash;
      const norm = Math.hypot(dx, dy);
      const unitX = dx / norm;
      const unitY = dy / norm;
      const normalX = -unitY;
      const normalY = unitX;
      const pulse = .76 + ((Math.sin(elapsed * (3.5 + seeded(index) * 2.4) + index) + 1) * .5) * .58;
      const half = Math.max(.15, size * 1.14 * pulse);
      const tailX = x - unitX * length;
      const tailY = y - unitY * length;
      const frontX = x + unitX * half;
      const frontY = y + unitY * half;
      const beam = ctx.createLinearGradient(frontX, frontY, tailX, tailY);
      beam.addColorStop(0, `rgba(${color},${Math.min(1, alpha * 1.4 * pulse)})`);
      beam.addColorStop(.18, `rgba(${color},${alpha * .68})`);
      beam.addColorStop(.64, `rgba(${color},${alpha * .14})`);
      beam.addColorStop(1, `rgba(${color},0)`);
      ctx.fillStyle = beam;
      ctx.shadowColor = `rgba(${color},${alpha * .3})`;
      ctx.shadowBlur = size * (1 + pulse);
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(x + normalX * half, y + normalY * half);
      ctx.arc(x, y, half, Math.atan2(normalY, normalX), Math.atan2(-normalY, -normalX), true);
      ctx.closePath();
      ctx.fill();
    }

    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = "source-over";
    if (elapsed >= duration) {
      finish();
      return;
    }
    frame = requestAnimationFrame(draw);
  }

  function start(options = {}) {
    window.clearTimeout(finishTimer);
    cancelAnimationFrame(frame);
    beforeReveal = typeof options.beforeReveal === "function" ? options.beforeReveal : undefined;
    duration = reduceMotion ? 1.2 : 3 + Math.random() * 2;
    cycleStart = performance.now();
    progressRing.style.setProperty("--progress", "0");
    progressRing.setAttribute("aria-valuenow", "0");
    overlay.hidden = false;
    overlay.setAttribute("aria-hidden", "false");
    overlay.classList.remove("is-leaving");
    resize();
    requestAnimationFrame(() => overlay.classList.add("is-active"));
    frame = requestAnimationFrame(draw);
    return new Promise((resolve) => { resolver = resolve; });
  }

  addEventListener("resize", resize, { passive: true });
  window.RolandWarpLoading = { start };
})();
