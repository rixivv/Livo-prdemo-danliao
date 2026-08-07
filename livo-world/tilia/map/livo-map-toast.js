(function () {
  let hideTimer;

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
  const chromeObserver = new MutationObserver(simplifyDemoChrome);
  chromeObserver.observe(document.documentElement, { childList: true, subtree: true });

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
