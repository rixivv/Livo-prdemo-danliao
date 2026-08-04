(() => {
  const ensureMapBase = () => {
    if (document.querySelector("base")) return;
    const base = document.createElement("base");
    base.href = "../../";
    document.head.prepend(base);
  };
  ensureMapBase();
  new MutationObserver(ensureMapBase).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
  const legacyMapParams = new URLSearchParams(window.location.search);
  if (legacyMapParams.get("roland") === "restaurant" && window.location.hash !== "#roland=restaurant") {
    const cleanMapUrl = new URL(window.location.href);
    cleanMapUrl.searchParams.delete("roland");
    cleanMapUrl.hash = "roland=restaurant";
    window.location.replace(cleanMapUrl.href);
    return;
  }
  const ROLAND_FRAME_SRC = "figma/tilia/pin-frame-roland.svg";
  const mapHashParams = new URLSearchParams(window.location.hash.slice(1));
  const rolandAtRestaurant = mapHashParams.get("roland") === "restaurant";
  let toastTimer = 0;
  let restaurantPinTemplate = null;
  let restaurantPinHost = null;

  function applyCharacterStates(root = document) {
    const selector = '[role="img"][aria-label*="："]';
    const pins = [
      ...(root.matches?.(selector) ? [root] : []),
      ...(root.querySelectorAll?.(selector) || [])
    ];
    pins.forEach((pin) => {
      const frame = pin.querySelector('img[src*="pin-frame-char.svg"], img[src*="pin-frame-roland.svg"]');
      if (!frame) return;
      if (pin.getAttribute("aria-label")?.startsWith("罗兰：")) {
        frame.src = ROLAND_FRAME_SRC;
        pin.classList.remove("livo-disabled-character-pin");
        pin.classList.toggle("livo-roland-at-restaurant", rolandAtRestaurant);
        return;
      }
      pin.classList.add("livo-disabled-character-pin");
    });
  }

  function ensureRestaurantRolandPin() {
    if (!rolandAtRestaurant) return;
    const persistentPin = document.querySelector('[data-livo-restaurant-roland="true"]');
    if (persistentPin) {
      applyCharacterStates(persistentPin);
      return;
    }
    const sourcePin = document.querySelector('[role="img"][aria-label^="罗兰："]:not([data-livo-restaurant-roland])');
    if (sourcePin) {
      restaurantPinTemplate = sourcePin.cloneNode(true);
      restaurantPinHost = sourcePin.parentElement;
      sourcePin.classList.add("livo-roland-source-hidden");
    }
    if (!restaurantPinTemplate || !restaurantPinHost?.isConnected) return;
    const fixedPin = restaurantPinTemplate.cloneNode(true);
    fixedPin.dataset.livoRestaurantRoland = "true";
    fixedPin.classList.remove("livo-roland-source-hidden");
    fixedPin.classList.add("livo-roland-at-restaurant");
    restaurantPinHost.append(fixedPin);
    applyCharacterStates(fixedPin);
  }

  function rolandPinFromEvent(event) {
    const directPin = event.target.closest?.('[role="img"][aria-label^="罗兰："]');
    if (directPin) return directPin;
    const portrait = event.target.closest?.('img[src*="avatar-char-b.png"]');
    return portrait?.closest?.('[role="img"][aria-label^="罗兰："]') || null;
  }

  function disabledPinFromEvent(event) {
    const pin = event.target.closest?.('[role="img"][aria-label*="："]');
    if (!pin || pin.getAttribute("aria-label")?.startsWith("罗兰：")) return null;
    return pin;
  }

  function showDownloadToast() {
    const frame = document.querySelector("[data-phone-frame]");
    if (!frame) return;
    let toast = frame.querySelector(".livo-map-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "livo-map-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      frame.append(toast);
    }
    window.clearTimeout(toastTimer);
    toast.textContent = "下载APP体验完整功能";
    toast.classList.add("visible");
    toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 1800);
  }

  function enterRolandChat(event) {
    const pin = rolandPinFromEvent(event);
    if (!pin) return;
    event.preventDefault();
    event.stopPropagation();
    const chatUrl = new URL("../../../index.html", window.location.href);
    if (rolandAtRestaurant) chatUrl.searchParams.set("location", "restaurant");
    window.location.assign(chatUrl.href);
  }

  document.addEventListener("pointerdown", enterRolandChat, true);
  document.addEventListener("pointerdown", (event) => {
    if (!disabledPinFromEvent(event)) return;
    event.preventDefault();
    event.stopPropagation();
    showDownloadToast();
  }, true);
  document.addEventListener("click", (event) => {
    if (!rolandPinFromEvent(event) && !disabledPinFromEvent(event)) return;
    event.preventDefault();
    event.stopPropagation();
  }, true);

  applyCharacterStates();
  ensureRestaurantRolandPin();
  new MutationObserver((records) => {
    records.forEach((record) => {
      record.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) applyCharacterStates(node);
      });
    });
    ensureRestaurantRolandPin();
  }).observe(document.body, { childList: true, subtree: true });
  if (rolandAtRestaurant) window.setInterval(ensureRestaurantRolandPin, 500);
})();
