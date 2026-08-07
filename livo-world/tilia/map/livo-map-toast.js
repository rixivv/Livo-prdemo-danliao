(function () {
  let hideTimer;
  const rolandSelector = '[aria-label^="罗兰："], [data-livo-roland-link="true"]';

  function prepareRolandAvatar() {
    document.querySelectorAll(rolandSelector).forEach(function (avatar) {
      avatar.dataset.livoRolandLink = "true";
      avatar.style.pointerEvents = "auto";
      avatar.style.cursor = "pointer";
      avatar.setAttribute("role", "button");
      avatar.setAttribute("tabindex", "0");
      avatar.setAttribute("aria-label", "打开罗兰单聊");
      avatar.setAttribute("title", "进入罗兰单聊");
    });
  }

  function getRolandAvatar(target) {
    return target instanceof Element
      ? target.closest('[data-livo-roland-link="true"]')
      : null;
  }

  function stopRolandMapGesture(event) {
    if (!getRolandAvatar(event.target)) return;
    event.stopImmediatePropagation();
  }

  function openRolandChat(event) {
    if (!getRolandAvatar(event.target)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.href = "../../../index.html?module=chat";
  }

  function simplifyDemoChrome() {
    const versionSection = document.querySelector('[aria-label="演示版本"]');
    if (!versionSection) return;

    const label = versionSection.querySelector("p");
    const button = versionSection.querySelector("button");
    const versionName = button?.querySelector("span");
    if (label && label.textContent !== "世界当前版本") label.textContent = "世界当前版本";
    if (versionName && versionName.textContent !== "V10") versionName.textContent = "V10";
    if (button) {
      button.disabled = true;
      button.setAttribute("aria-expanded", "false");
    }
  }

  simplifyDemoChrome();
  prepareRolandAvatar();
  const chromeObserver = new MutationObserver(simplifyDemoChrome);
  chromeObserver.observe(document.documentElement, { childList: true, subtree: true });

  const rolandObserver = new MutationObserver(prepareRolandAvatar);
  rolandObserver.observe(document.documentElement, { childList: true, subtree: true });

  document.addEventListener("pointerdown", stopRolandMapGesture, true);
  document.addEventListener("touchstart", stopRolandMapGesture, true);
  document.addEventListener("click", openRolandChat, true);
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    openRolandChat(event);
  }, true);

  document.addEventListener("click", function (event) {
    const messageTab = event.target.closest('button[aria-label="消息"]');
    if (!messageTab) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    let toast = document.getElementById("livo-map-download-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "livo-map-download-toast";
      toast.setAttribute("role", "status");
      toast.textContent = "下载APP体验完整功能";
      document.body.appendChild(toast);
    }

    let phoneFrame = messageTab.parentElement;
    while (phoneFrame && phoneFrame !== document.body) {
      const frameRect = phoneFrame.getBoundingClientRect();
      const frameRatio = frameRect.width / frameRect.height;
      if (frameRect.width >= 300 && frameRect.width <= 500 && frameRect.height >= 650 && frameRatio >= 0.4 && frameRatio <= 0.55) break;
      phoneFrame = phoneFrame.parentElement;
    }
    const rect = (phoneFrame && phoneFrame !== document.body)
      ? phoneFrame.getBoundingClientRect()
      : messageTab.getBoundingClientRect();
    toast.style.left = `${rect.left + rect.width / 2}px`;
    toast.style.top = `${rect.top + rect.height / 2}px`;
    toast.classList.remove("is-visible");
    void toast.offsetWidth;
    toast.classList.add("is-visible");

    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 1600);
  }, true);
})();
