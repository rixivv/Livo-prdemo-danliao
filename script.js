const screens = [...document.querySelectorAll(".screen")];
const topicSheet = document.querySelector("#topicSheet");
const traceSheet = document.querySelector("#traceSheet");
const topicActionMenu = document.querySelector("#topicActionMenu");
const dialogBox = document.querySelector("#dialogBox");
const deleteDialog = document.querySelector("#deleteDialog");
const sharePage = document.querySelector("#sharePage");
const mapSharePage = document.querySelector("#mapSharePage");
const echoDetailPage = document.querySelector("#echoDetailPage");
const randomEchoSheet = document.querySelector("#randomEchoSheet");
const mapImage = document.querySelector(".map-image");
const rangeSheet = document.querySelector("#rangeSheet");
const statSheets = [...document.querySelectorAll(".stat-sheet")];
const flameModal = document.querySelector("#flameModal");
const mosaicModal = document.querySelector("#mosaicModal");
const moreMenu = document.querySelector("#moreMenu");
const regenerateToast = document.querySelector("#regenerateToast");
const readingModal = document.querySelector("#readingModal");
const rangeButton = document.querySelector('[data-action="range"]');
const centerFireButton = document.querySelector('[data-action="open-flame"]');
const phone = document.querySelector(".phone");
const homeChatForm = document.querySelector("#homeChatForm");
const homeChatInput = document.querySelector("#homeChatInput");
const homeChatSend = document.querySelector(".home-chat-send");
const homeChatState = document.querySelector("#homeChatState");
const homeComposerDock = document.querySelector("#homeComposerDock");
const homeLiveSceneButton = document.querySelector("#homeLiveSceneButton");
const homeLiveCallButton = document.querySelector("#homeLiveCallButton");
const homeTopLiveCallButton = document.querySelector("#homeTopLiveCallButton");
const homeLiveCall = document.querySelector("#homeLiveCall");
const homeLiveCallMessages = document.querySelector("#homeLiveCallMessages");
const homeLiveCallStatus = document.querySelector("#homeLiveCallStatus");
const homeLiveCallForm = document.querySelector("#homeLiveCallForm");
const homeLiveCallInput = document.querySelector("#homeLiveCallInput");
const homeLiveCallState = document.querySelector("#homeLiveCallState");
const homeLiveCallSend = document.querySelector("#homeLiveCallSend");
const homeLiveCallEnd = document.querySelector("#homeLiveCallEnd");
const homeLiveScene = document.querySelector("#homeLiveScene");
const homeLiveSceneComposer = document.querySelector("#homeLiveSceneComposer");
const homeLiveSceneForm = document.querySelector("#homeLiveSceneForm");
const homeLiveSceneInput = document.querySelector("#homeLiveSceneInput");
const homeLiveSceneSend = document.querySelector("#homeLiveSceneSend");
const homeLiveSceneDescription = document.querySelector("#homeLiveSceneDescription");
const homeLiveSceneCardTitle = document.querySelector("#homeLiveSceneCardTitle");
const homeLiveSceneMedia = document.querySelector(".home-live-scene-media");
const homeLiveSceneVideo = document.querySelector("#homeLiveSceneVideo");
const homeLiveSceneReplay = document.querySelector("#homeLiveSceneReplay");
const homeLiveSceneClose = document.querySelector("#homeLiveSceneClose");
const homeAwayState = document.querySelector("#homeAwayState");
const homeAwayMessages = document.querySelector("#homeAwayMessages");
const homeAwaySchedule = document.querySelector("#homeAwaySchedule");
const homeAwayFind = document.querySelector("#homeAwayFind");
const homeDeepFeelingCard = document.querySelector("#homeDeepFeelingCard");
const homeLocationLabel = document.querySelector(".home-location-pill span");
const homeVoiceToggle = document.querySelector("#homeVoiceToggle");
const homeCameraButton = document.querySelector("#homeCameraButton");
const homeCameraPreview = document.querySelector("#homeCameraPreview");
const homeCameraVideo = document.querySelector("#homeCameraVideo");
const cameraPreviewVisibilityToggle = document.querySelector("#cameraPreviewVisibilityToggle");
const liveSceneEntryVisibilityToggle = document.querySelector("#liveSceneEntryVisibilityToggle");
const composerLayoutOptions = [...document.querySelectorAll("[data-composer-layout]")];
const homeChatToast = document.querySelector("#homeChatToast");
const homeProfileEntry = document.querySelector(".home-profile-entry");
const homeMoodButton = document.querySelector(".home-mood-button");
const homeButterflyButton = document.querySelector(".home-butterfly-button");
const homeChatThread = document.querySelector("#homeChatThread");
const versionTabs = [...document.querySelectorAll(".version-tab")];
const versionPanels = [...document.querySelectorAll(".version-panel")];
const entryButtons = [...document.querySelectorAll(".entry-option")];
const userStageButtons = [...document.querySelectorAll(".user-stage-option")];
const stageNoticeText = document.querySelector("#stageNoticeText");
const stageNoticeAction = document.querySelector("#stageNoticeAction");
const stageNoticeIcon = document.querySelector(".new-trace-icon");
const flameStatusDescription = document.querySelector("#flameStatusDescription");
const introScreen = document.querySelector(".intro-screen");
const mapScreen = document.querySelector(".map-screen");
const introTitle = document.querySelector(".intro-copy h1");
const introDescription = document.querySelector(".intro-copy p");
const introEntry = document.querySelector(".intro-entry");
const homeScreen = document.querySelector(".home-screen");
const lifeEmotion = document.querySelector("#lifeEmotion");
const lifeBehavior = document.querySelector("#lifeBehavior");
const lifeEnvironment = document.querySelector("#lifeEnvironment");
const lifeStreamDescription = document.querySelector("#lifeStreamDescription");
const lifeStreamProgress = document.querySelector("#lifeStreamProgress");
const lifeStreamReplay = document.querySelector("#lifeStreamReplay");
const defaultStateReset = document.querySelector("#defaultStateReset");
const returnVisitTrigger = document.querySelector("#returnVisitTrigger");
const departureDemoTrigger = document.querySelector("#departureDemoTrigger");
const homeSoundButton = document.querySelector(".home-sound-button");
const returnToMapControls = [...document.querySelectorAll("[data-return-to-map]")];
const rolandMicroexpressionVideo = document.querySelector("#rolandMicroexpressionVideo");
const rolandReturnVideo = document.querySelector("#rolandReturnVideo");
const rolandDepartureVideo = document.querySelector("#rolandDepartureVideo");
const rolandDigitalHumanVideo = document.querySelector("#rolandDigitalHumanVideo");
const rolandDepartureFrame = document.querySelector("#rolandDepartureFrame");
const rolandJoyHeartsGif = document.querySelector("#rolandJoyHeartsGif");
const digitalHumanApiStatus = document.querySelector("#digitalHumanApiStatus");
const digitalHumanApiState = document.querySelector("#digitalHumanApiState");
const digitalHumanApiDetail = document.querySelector("#digitalHumanApiDetail");
let randomRefreshTimer;
let introSequenceRun = 0;
let mapSequenceRun = 0;
let regenerateToastTimer;
let homeChatToastTimer;
let homeChatReplyTimer;
let lifeStreamTimer;
let lifeStreamIndex = 0;
let lifeAudioContext;
let lifeAudioMaster;
let lifeAudioPad;
let lifeAudioNoise;
let lifeAudioFilter;
let lifeAudioEnabled = false;
let trainRhythmTimer;
let footstepTimer;
let rolandDepartureTimer;
let rolandAwayTimer;
let rolandUserIdleTimer;
let homeChatTypewriterTimer;
let deepFeelingTypewriterTimer;
let joyHeartsTimer;
let returnVisitMode = "off";
let returnGreetingTextStarted = false;
let digitalHumanTaskId = "";
let digitalHumanPollTimer;
const ROLAND_WRITE_START = 0;
const ROLAND_WRITE_END = 5;
const ROLAND_SPEAK_START = 5;
const ROLAND_SPEAK_END = 10;
const ROLAND_WATCH_FALLBACK_START = 3;
const ROLAND_WATCH_FALLBACK_END = 5;
const ROLAND_USER_IDLE_DELAY = 10 * 60 * 1000;
const DIGITAL_HUMAN_API_BASE = "/api/experiment/digital-human";
const initialHomeChatMarkup = homeChatThread?.innerHTML || "";

function setDigitalHumanApiStatus(state, title, detail) {
  if (digitalHumanApiStatus) digitalHumanApiStatus.dataset.state = state;
  if (digitalHumanApiState) digitalHumanApiState.textContent = title;
  if (digitalHumanApiDetail) digitalHumanApiDetail.textContent = detail;
}

async function checkDigitalHumanApi() {
  if (window.location.protocol === "file:") {
    setDigitalHumanApiStatus("offline", "需要通过 API 服务打开", "请运行 API 版服务，不要直接双击 index.html。");
    return false;
  }
  try {
    const response = await fetch(`${DIGITAL_HUMAN_API_BASE}/status`, { cache: "no-store" });
    const result = await response.json();
    if (!response.ok || !result.configured) {
      setDigitalHumanApiStatus("offline", "API 密钥未配置", "请在 .env 中填写 VIDU_API_KEY 后重新启动。");
      return false;
    }
    setDigitalHumanApiStatus("ready", "Vidu 数字人已连接", `${result.model} · 回复时实时生成`);
    return true;
  } catch {
    setDigitalHumanApiStatus("offline", "本地 API 服务未启动", "请在 api-experiment-version 目录启动服务。");
    return false;
  }
}

function waitForDigitalHuman(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function pollDigitalHumanTask(taskId) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 8 * 60 * 1000) {
    const response = await fetch(`${DIGITAL_HUMAN_API_BASE}/${encodeURIComponent(taskId)}`, { cache: "no-store" });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "查询数字人任务失败");
    if (result.state === "success" && result.video_url) return result.video_url;
    if (result.state === "failed") throw new Error(result.err_code || "数字人生成失败");
    setDigitalHumanApiStatus(
      "generating",
      result.state === "queueing" ? "正在排队" : "罗兰正在生成回复",
      `任务 ${taskId.slice(0, 8)}… · 完成后自动播放`
    );
    await waitForDigitalHuman(2500);
  }
  throw new Error("生成等待超时，请稍后重试");
}

function playDigitalHumanVideo(videoUrl) {
  if (!rolandDigitalHumanVideo) return;
  rolandDigitalHumanVideo.src = videoUrl;
  rolandDigitalHumanVideo.currentTime = 0;
  rolandDigitalHumanVideo.muted = !lifeAudioEnabled;
  homeScreen?.classList.add("digital-human-video-active", "chat-active");
  rolandDigitalHumanVideo.play().catch(() => {
    rolandDigitalHumanVideo.muted = true;
    rolandDigitalHumanVideo.play().catch(() => {});
  });
}

async function generateDigitalHumanReply(reply, userMessage) {
  if (window.location.protocol === "file:") {
    setDigitalHumanApiStatus("offline", "API 版尚未通过服务打开", "当前仍保留文字回复，请从本地 API 地址进入。");
    return;
  }
  window.clearTimeout(digitalHumanPollTimer);
  setDigitalHumanApiStatus("generating", "正在提交数字人任务", "罗兰的文字回复已完成，正在生成对应口型与微表情。");
  try {
    const response = await fetch(DIGITAL_HUMAN_API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: reply.text,
        resolution: "720p",
        prompt: `严格沿用输入首帧，不重新构图。固定9:16竖屏机位，保持罗兰坐在和平号包厢桌前的大小、位置、裁切和光线完全一致。锁定成年男性脸型、银白色头发、绿色眼睛、绿色发带、棕金色马甲、白色衬衣、黑色高领和腕表；保持精致乙女游戏半厚涂、古典工业时代、冷蓝雪夜与暖金灯光画风。用户刚刚说：“${userMessage.slice(0, 120)}”。罗兰的心理与动作：${reply.stage}。他面向用户，以温和、克制、聪明而敏锐的方式说出回复。只允许准确口型、细微呼吸、自然眨眼和极轻的发尾摆动；背景、窗框、桌面、稿纸和灯具稳定。禁止镜头移动、人物漂移、五官变化、服装变化、场景变形、字幕、水印和新增人物。`
      })
    });
    const task = await response.json();
    if (!response.ok) throw new Error(task.message || "创建数字人任务失败");
    digitalHumanTaskId = task.task_id;
    const videoUrl = await pollDigitalHumanTask(task.task_id);
    if (digitalHumanTaskId !== task.task_id) return;
    playDigitalHumanVideo(videoUrl);
    setDigitalHumanApiStatus("success", "数字人回复已生成", "已缓存到本地，可直接重复播放。");
  } catch (error) {
    setDigitalHumanApiStatus("error", "本次生成未完成", error.message || "请检查 API 配置后重试。");
  }
}

rolandDigitalHumanVideo?.addEventListener("ended", () => {
  homeScreen?.classList.remove("digital-human-video-active");
  waitForUserResponse();
});

checkDigitalHumanApi();

const lifeStreamStates = [
  {
    className: "life-idle",
    duration: 1500,
    emotion: "平静",
    behavior: "注视你，等待回应",
    environment: "包厢 · 风雪夜",
    description: "罗兰没有催促，只是安静地看着你，给你留下回答的时间。"
  },
  {
    className: "life-observe",
    duration: 1500,
    emotion: "释然",
    behavior: "确认你暂时沉默",
    environment: "列车平稳行驶",
    description: "确认你暂时不会开口后，他缓慢收回目光，没有表现出失落。"
  },
  {
    className: "life-tunnel",
    duration: 1500,
    emotion: "警觉",
    behavior: "动作停顿",
    environment: "列车驶入隧道",
    description: "雪夜被隧道遮没，车厢逐渐转暗。环境变化让罗兰停下动作。"
  },
  {
    className: "life-alert",
    duration: 1500,
    emotion: "戒备",
    behavior: "观察环境动静",
    environment: "隧道 · 掠过的壁灯",
    description: "隧道灯影掠过车窗。罗兰短暂留意四周，判断是否存在异常。"
  },
  {
    className: "life-recover",
    duration: 1500,
    emotion: "放松",
    behavior: "确认没有异常",
    environment: "隧道 · 稳定行驶",
    description: "确认只是列车正常行驶后，他的呼吸和肩颈重新放松下来。"
  },
  {
    className: "life-continue",
    duration: 1500,
    emotion: "平静",
    behavior: "整理稿纸，拿起钢笔",
    environment: "包厢 · 冷暖交错",
    description: "罗兰将注意力重新放回桌面，整理稿纸，继续自己的写作。"
  },
  {
    className: "life-write",
    duration: 1050,
    emotion: "专注",
    behavior: "低头继续写作",
    environment: "列车持续行驶",
    description: "即使你没有输入，罗兰仍按照自己的节奏生活，继续完成未写完的故事。"
  }
];

function createLifeNoiseBuffer(context) {
  const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < data.length; index += 1) {
    data[index] = (Math.random() * 2 - 1) * (0.72 + Math.sin(index / 1300) * 0.16);
  }
  return buffer;
}

function playTrainClack(accent = false) {
  if (!lifeAudioEnabled || !lifeAudioContext || !lifeAudioMaster) return;
  const now = lifeAudioContext.currentTime;
  const oscillator = lifeAudioContext.createOscillator();
  const gain = lifeAudioContext.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(accent ? 72 : 92, now);
  oscillator.frequency.exponentialRampToValueAtTime(42, now + .12);
  gain.gain.setValueAtTime(accent ? .16 : .075, now);
  gain.gain.exponentialRampToValueAtTime(.0001, now + .16);
  oscillator.connect(gain).connect(lifeAudioMaster);
  oscillator.start(now);
  oscillator.stop(now + .17);
}

function playFootsteps() {
  window.clearTimeout(footstepTimer);
  [0, 520, 1180].forEach((delay, index) => {
    footstepTimer = window.setTimeout(() => playTrainClack(index === 1), delay);
  });
}

function initLifeAudio() {
  if (lifeAudioContext) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  lifeAudioContext = new AudioContextClass();
  lifeAudioMaster = lifeAudioContext.createGain();
  lifeAudioMaster.gain.value = 0;
  lifeAudioMaster.connect(lifeAudioContext.destination);

  lifeAudioPad = lifeAudioContext.createGain();
  lifeAudioPad.gain.value = .5;
  lifeAudioPad.connect(lifeAudioMaster);
  [130.8, 196, 261.6].forEach((frequency, index) => {
    const oscillator = lifeAudioContext.createOscillator();
    const gain = lifeAudioContext.createGain();
    oscillator.type = index === 1 ? "triangle" : "sine";
    oscillator.frequency.value = frequency;
    gain.gain.value = index === 2 ? .11 : .16;
    oscillator.connect(gain).connect(lifeAudioPad);
    oscillator.start();
  });

  lifeAudioFilter = lifeAudioContext.createBiquadFilter();
  lifeAudioFilter.type = "lowpass";
  lifeAudioFilter.frequency.value = 720;
  lifeAudioNoise = lifeAudioContext.createGain();
  lifeAudioNoise.gain.value = .16;
  const noise = lifeAudioContext.createBufferSource();
  noise.buffer = createLifeNoiseBuffer(lifeAudioContext);
  noise.loop = true;
  noise.connect(lifeAudioFilter).connect(lifeAudioNoise).connect(lifeAudioMaster);
  noise.start();

  trainRhythmTimer = window.setInterval(() => {
    playTrainClack(false);
    window.setTimeout(() => playTrainClack(false), 210);
  }, 1480);
}

function syncLifeAudioState(state) {
  if (!lifeAudioEnabled || !lifeAudioContext) return;
  const now = lifeAudioContext.currentTime;
  const settings = {
    "life-idle": [.72, .46, .14, 820],
    "life-observe": [.76, .5, .18, 1200],
    "life-tunnel": [.82, .34, .3, 360],
    "life-alert": [.78, .3, .22, 520],
    "life-recover": [.72, .42, .16, 760],
    "life-continue": [.74, .52, .15, 1050],
    "life-write": [.72, .48, .14, 920]
  }[state.className] || [.72, .46, .14, 820];
  lifeAudioMaster.gain.cancelScheduledValues(now);
  lifeAudioMaster.gain.linearRampToValueAtTime(settings[0], now + .8);
  lifeAudioPad.gain.linearRampToValueAtTime(settings[1], now + 1);
  lifeAudioNoise.gain.linearRampToValueAtTime(settings[2], now + .7);
  lifeAudioFilter.frequency.linearRampToValueAtTime(settings[3], now + .9);
  if (state.className === "life-alert") playFootsteps();
}

async function setLifeAudioEnabled(enabled) {
  initLifeAudio();
  if (!lifeAudioContext || !lifeAudioMaster) return;
  lifeAudioEnabled = enabled;
  if (enabled) {
    await lifeAudioContext.resume();
    homeSoundButton?.classList.add("is-active");
    homeSoundButton?.setAttribute("aria-label", "关闭场景声音");
    syncLifeAudioState(lifeStreamStates[lifeStreamIndex]);
    window.setTimeout(() => playTrainClack(true), 80);
    showHomeChatToast("场景声音已开启");
  } else {
    const now = lifeAudioContext.currentTime;
    lifeAudioMaster.gain.cancelScheduledValues(now);
    lifeAudioMaster.gain.linearRampToValueAtTime(0, now + .35);
    homeSoundButton?.classList.remove("is-active");
    homeSoundButton?.setAttribute("aria-label", "开启场景声音");
    showHomeChatToast("场景声音已关闭");
  }
}

function setLifeStreamState(state) {
  if (!homeScreen) return;
  lifeStreamStates.forEach((item) => homeScreen.classList.remove(item.className));
  homeScreen.classList.add(state.className);
  if (lifeEmotion) lifeEmotion.textContent = state.emotion;
  if (lifeBehavior) lifeBehavior.textContent = state.behavior;
  if (lifeEnvironment) lifeEnvironment.textContent = state.environment;
  if (lifeStreamDescription) lifeStreamDescription.textContent = state.description;
  const moodLabel = document.querySelector(".home-mood-button span");
  if (moodLabel) moodLabel.textContent = state.emotion;
  if (lifeStreamProgress) {
    lifeStreamProgress.classList.remove("is-running");
    lifeStreamProgress.style.setProperty("--life-duration", `${state.duration}ms`);
    void lifeStreamProgress.offsetWidth;
    lifeStreamProgress.classList.add("is-running");
  }
  syncLifeAudioState(state);
}

function runLifeStream() {
  window.clearTimeout(lifeStreamTimer);
  const state = lifeStreamStates[lifeStreamIndex];
  setLifeStreamState(state);
  lifeStreamTimer = window.setTimeout(() => {
    lifeStreamIndex = (lifeStreamIndex + 1) % lifeStreamStates.length;
    runLifeStream();
  }, state.duration);
}

runLifeStream();

function updateReturnVisitStatus(mode) {
  if (mode === "greeting") {
    if (lifeEmotion) lifeEmotion.textContent = "期待";
    if (lifeBehavior) lifeBehavior.textContent = "主动向你打招呼";
    if (lifeEnvironment) lifeEnvironment.textContent = "包厢 · 风雪夜";
    if (lifeStreamDescription) {
      lifeStreamDescription.textContent = "你离开超过5分钟后再次进入。罗兰停下手里的事，主动回应你的到来。";
    }
    setRolandMood("期待");
    return;
  }
  if (mode === "writing") {
    if (lifeEmotion) lifeEmotion.textContent = "专注";
    if (lifeBehavior) lifeBehavior.textContent = "低头继续写作";
    if (lifeEnvironment) lifeEnvironment.textContent = "包厢 · 风雪夜";
    if (lifeStreamDescription) {
      lifeStreamDescription.textContent = "你已经有一段时间没有回应。罗兰收回目光，继续写自己的小说。";
    }
    setRolandMood("专注");
    return;
  }
  if (lifeEmotion) lifeEmotion.textContent = "随和";
  if (lifeBehavior) lifeBehavior.textContent = "注视你，等待回应";
  if (lifeEnvironment) lifeEnvironment.textContent = "包厢 · 风雪夜";
  if (lifeStreamDescription) {
    lifeStreamDescription.textContent = "问候结束后，罗兰保持自然的呼吸与注视，继续和你对话。";
  }
  setRolandMood("随和");
}

function stopReturnVisit({ resumeDefaultVideo = true } = {}) {
  window.clearTimeout(rolandUserIdleTimer);
  window.clearTimeout(homeChatTypewriterTimer);
  stopRolandDepartureVideo();
  homeChatThread?.querySelectorAll(".is-typewriting").forEach((bubble) => {
    bubble.classList.remove("is-typewriting");
  });
  returnVisitMode = "off";
  returnGreetingTextStarted = false;
  homeScreen?.classList.remove("return-greeting-active", "return-loop-active");
  homeScreen?.classList.remove("watch-video-active");
  returnVisitTrigger?.classList.remove("is-active");
  if (rolandReturnVideo) {
    rolandReturnVideo.pause();
    rolandReturnVideo.muted = true;
    rolandReturnVideo.currentTime = 0;
  }
  if (resumeDefaultVideo) rolandMicroexpressionVideo?.play().catch(() => {});
}

function startRolandWriting() {
  window.clearTimeout(rolandUserIdleTimer);
  if (!rolandReturnVideo || returnVisitMode === "off") return;
  returnVisitMode = "writing";
  homeScreen?.classList.remove("return-greeting-active", "watch-video-active");
  homeScreen?.classList.add("return-loop-active", "chat-active");
  rolandMicroexpressionVideo?.pause();
  rolandReturnVideo.muted = true;
  rolandReturnVideo.currentTime = ROLAND_WRITE_START;
  rolandReturnVideo.play().catch(() => {});
  updateReturnVisitStatus("writing");
}

function waitForUserResponse() {
  window.clearTimeout(rolandUserIdleTimer);
  if (returnVisitMode === "off") return;
  returnVisitMode = "watching";
  homeScreen?.classList.remove("return-greeting-active");
  homeScreen?.classList.remove("watch-video-active");
  homeScreen?.classList.add("return-loop-active", "chat-active");
  rolandMicroexpressionVideo?.pause();
  rolandReturnVideo.muted = true;
  rolandReturnVideo.currentTime = ROLAND_SPEAK_START;
  rolandReturnVideo.play().catch(() => {});
  if (homeChatInput) {
    homeChatInput.disabled = false;
    homeChatInput.placeholder = "和罗兰开始冒险";
  }
  updateReturnVisitStatus("loop");
  resizeHomeChatInput();
  rolandUserIdleTimer = window.setTimeout(startRolandWriting, ROLAND_USER_IDLE_DELAY);
}

function startRolandSpeaking(mode = "speaking") {
  if (!rolandReturnVideo) return;
  window.clearTimeout(lifeStreamTimer);
  window.clearTimeout(rolandUserIdleTimer);
  returnVisitMode = mode;
  if (!liveSceneEntrySelected) {
    rolandMicroexpressionVideo?.pause();
    rolandReturnVideo?.pause();
    rolandDigitalHumanVideo?.pause();
    homeScreen?.classList.remove(
      "return-greeting-active",
      "return-loop-active",
      "watch-video-active",
      "digital-human-video-active"
    );
    homeScreen?.classList.add("chat-active");
    return;
  }
  homeScreen?.classList.remove("return-greeting-active", "return-loop-active", "watch-video-active");
  homeScreen?.classList.add(
    mode === "greeting" ? "return-greeting-active" : "return-loop-active",
    "chat-active"
  );
  rolandMicroexpressionVideo?.pause();
  rolandReturnVideo.muted = true;
  rolandReturnVideo.currentTime = Math.min(
    ROLAND_SPEAK_START,
    Math.max(0, rolandReturnVideo.duration - 1)
  );
  rolandReturnVideo.play().catch(() => {});
}

function playReturnGreeting() {
  window.clearTimeout(lifeStreamTimer);
  window.clearTimeout(homeChatReplyTimer);
  window.clearTimeout(rolandDepartureTimer);
  window.clearTimeout(rolandAwayTimer);
  clearRolandDepartureFrame();
  stopReturnVisit({ resumeDefaultVideo: false });
  returnVisitMode = "greeting-intro";
  returnGreetingTextStarted = false;
  homeScreen?.classList.remove(
    "chat-active",
    "role-hurt",
    "role-leaving",
    "role-away",
    ...lifeStreamStates.map((state) => state.className)
  );
  returnVisitTrigger?.classList.add("is-active");
  if (homeChatThread) homeChatThread.innerHTML = "";
  if (homeChatInput) {
    homeChatInput.value = "";
    homeChatInput.disabled = true;
    homeChatInput.placeholder = "罗兰正在向你打招呼…";
  }
  updateReturnVisitStatus("greeting");
  if (!rolandReturnVideo) {
    appendHomeChatTypewriter(
      "你回来了。我还以为，今晚只能继续和这些稿纸作伴。",
      "罗兰停下手里的事，抬眼看向你。那一点放松很快又被温和的笑意藏了起来。",
      waitForUserResponse
    );
    return;
  }
  homeScreen?.classList.add("return-greeting-active", "chat-active");
  rolandMicroexpressionVideo?.pause();
  rolandReturnVideo.muted = true;
  rolandReturnVideo.currentTime = 0;
  rolandReturnVideo.play().catch(() => {});
}

returnVisitTrigger?.addEventListener("click", playReturnGreeting);

rolandReturnVideo?.addEventListener("timeupdate", () => {
  if (returnVisitMode === "greeting-intro") {
    if (rolandReturnVideo.currentTime >= ROLAND_SPEAK_START && !returnGreetingTextStarted) {
      returnGreetingTextStarted = true;
      appendHomeChatTypewriter(
        "你回来了。我还以为，今晚只能继续和这些稿纸作伴。",
        "罗兰停下手里的事，抬眼看向你。那一点放松很快又被温和的笑意藏了起来。",
        () => {},
        { initialDelay: 100, characterDelay: 170, punctuationDelay: 300 }
      );
    }
    return;
  }
  if (!["greeting", "speaking", "watching", "watching-fallback", "writing"].includes(returnVisitMode)) return;
  const isWriting = returnVisitMode === "writing";
  const isWatchFallback = returnVisitMode === "watching-fallback";
  const isConversationPlayback =
    returnVisitMode === "greeting" ||
    returnVisitMode === "speaking" ||
    returnVisitMode === "watching";
  const requestedEnd = isConversationPlayback
    ? ROLAND_SPEAK_END
    : isWriting
      ? ROLAND_WRITE_END
      : ROLAND_WATCH_FALLBACK_END;
  const requestedStart = isConversationPlayback
    ? ROLAND_SPEAK_START
    : isWriting
      ? ROLAND_WRITE_START
      : ROLAND_WATCH_FALLBACK_START;
  const loopEnd = Math.min(requestedEnd, rolandReturnVideo.duration || requestedEnd);
  const loopStart = Math.min(requestedStart, Math.max(0, loopEnd - 1));
  if (rolandReturnVideo.currentTime >= loopEnd || rolandReturnVideo.currentTime < loopStart) {
    rolandReturnVideo.currentTime = loopStart;
    rolandReturnVideo.play().catch(() => {});
  }
});

rolandReturnVideo?.addEventListener("ended", () => {
  if (returnVisitMode !== "greeting-intro") return;
  waitForUserResponse();
  homeChatInput?.focus();
});

lifeStreamReplay?.addEventListener("click", () => {
  window.clearTimeout(rolandDepartureTimer);
  window.clearTimeout(rolandAwayTimer);
  stopReturnVisit();
  homeScreen?.classList.remove("role-hurt", "role-leaving", "role-away");
  if (homeChatInput) {
    homeChatInput.disabled = false;
    homeChatInput.placeholder = "和罗兰开始冒险";
  }
  if (rolandMicroexpressionVideo) {
    rolandMicroexpressionVideo.loop = true;
    rolandMicroexpressionVideo.muted = true;
    rolandMicroexpressionVideo.currentTime = 0;
    rolandMicroexpressionVideo.play().catch(() => {});
  }
  lifeStreamIndex = 0;
  setLifeAudioEnabled(true);
  runLifeStream();
});

defaultStateReset?.addEventListener("click", () => {
  window.clearTimeout(lifeStreamTimer);
  window.clearTimeout(homeChatReplyTimer);
  window.clearTimeout(rolandDepartureTimer);
  window.clearTimeout(rolandAwayTimer);
  window.clearTimeout(homeChatToastTimer);
  if (homeComposerMode === "call") stopHomeLiveCall();
  if (homeComposerMode === "scene") stopHomeLiveScene();
  stopReturnVisit({ resumeDefaultVideo: false });
  lifeStreamIndex = 0;
  homeScreen?.classList.remove(
    "chat-active",
    "role-hurt",
    "role-leaving",
    "role-away",
    "return-greeting-active",
    "return-loop-active",
    ...lifeStreamStates.map((state) => state.className)
  );
  if (homeChatThread) homeChatThread.innerHTML = initialHomeChatMarkup;
  if (homeChatInput) {
    homeChatInput.value = "";
    homeChatInput.disabled = false;
    homeChatInput.placeholder = "和罗兰开始冒险";
  }
  if (rolandMicroexpressionVideo) {
    rolandMicroexpressionVideo.currentTime = 0;
    rolandMicroexpressionVideo.play().catch(() => {});
  }
  homeChatToast?.classList.remove("visible");
  if (lifeAudioEnabled) setLifeAudioEnabled(false);
  resizeHomeChatInput();
  runLifeStream();
});

homeSoundButton?.addEventListener("click", () => {
  setLifeAudioEnabled(!lifeAudioEnabled);
});

function returnToTiliaMap(event) {
  event.preventDefault();
  const mapUrl = new URL("./livo-world/tilia/map/index.html", window.location.href);
  let cameFromMap = false;
  try {
    const navigationEntries = window.navigation?.entries?.() || [];
    const currentIndex = window.navigation?.currentEntry?.index ?? navigationEntries.length - 1;
    const previousEntryUrl = navigationEntries[currentIndex - 1]?.url || document.referrer;
    const previousUrl = new URL(previousEntryUrl);
    cameFromMap = previousUrl.pathname.includes("/livo-world/tilia/map/");
  } catch (_error) {
    cameFromMap = false;
  }

  if (cameFromMap) {
    window.history.back();
    return;
  }
  window.location.assign(mapUrl.href);
}

returnToMapControls.forEach((control) => {
  control.addEventListener("click", returnToTiliaMap);
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    window.clearTimeout(lifeStreamTimer);
    rolandMicroexpressionVideo?.pause();
    rolandReturnVideo?.pause();
    return;
  }
  if (["greeting-intro", "greeting", "speaking", "watching", "watching-fallback", "writing"].includes(returnVisitMode)) {
    rolandReturnVideo?.play().catch(() => {});
    return;
  }
  lifeStreamIndex = 0;
  rolandMicroexpressionVideo?.play().catch(() => {});
  runLifeStream();
});

function resizeHomeChatInput() {
  if (!homeChatInput) return;
  homeChatInput.style.height = "auto";
  homeChatInput.style.height = `${Math.min(homeChatInput.scrollHeight, 80)}px`;
  const hasMessage = Boolean(homeChatInput.value.trim());
  if (homeChatSend) homeChatSend.disabled = !hasMessage;
  if (homeChatState) homeChatState.hidden = !hasMessage;
}

let homeSpeechRecognition;
let homeMicrophoneStream;
let homeCameraStream;
let homeVoiceSubmitTimer;
let homeVoiceActive = false;
let homeCameraActive = false;
let homeCameraPreviewVisible = true;
let liveSceneEntryVisible = true;
let liveSceneEntrySelected = false;
let composerLayout = "one";
let homeCameraDragState;
let homeComposerMode = "chat";
let homeLiveSceneTypewriterTimer;
let homeLiveScenePerformanceTimer;
let homeLiveCallTypewriterTimer;
const awayEchoes = [
  "这里空空荡荡，没有人回应",
  "安静得只剩下风声",
  "包厢里没有传来回应"
];
let awayEchoIndex = 0;
let homeStoryAdvanceIndex = 0;
let homeInspirationEnabled = true;

const HOME_STORY_ADVANCES = [
  {
    stage: "罗兰用指节轻敲桌面，像是在替尚未说完的故事寻找合适的节拍。",
    text: "其实，这趟列车上的每个人都藏着秘密。你的那一个，我可以等你愿意时再告诉我。"
  },
  {
    stage: "他将稿纸翻到新的一页，笔尖悬停片刻，目光却始终没有从你身上移开。",
    text: "不过在那之前，陪我把这一章写完吧。或许你会在故事里认出一些熟悉的影子。"
  },
  {
    stage: "窗外的雪林向后退去，罗兰微微侧身，为你让出桌边的位置。",
    text: "坐近一点。和平号的夜还很长，我们有足够的时间慢慢说。"
  }
];

function setHomeControlIcon(button, source) {
  const image = button?.querySelector("img");
  if (image) image.src = source;
}

function syncHomeVoiceIcon() {
  setHomeControlIcon(
    homeVoiceToggle,
    homeVoiceActive ? "./assets/live-call-mic.svg" : "./assets/live-call-mic-off.svg"
  );
}

function syncHomeCameraIcon() {
  setHomeControlIcon(
    homeCameraButton,
    homeCameraActive ? "./assets/live-call-video.svg" : "./assets/live-call-video-off.svg"
  );
}

function showHomeLiveSceneLastFrame() {
  if (!homeLiveSceneVideo) return;
  homeLiveSceneVideo.pause();
  const seekToEnd = () => {
    if (Number.isFinite(homeLiveSceneVideo.duration) && homeLiveSceneVideo.duration > 0) {
      homeLiveSceneVideo.currentTime = Math.max(0, homeLiveSceneVideo.duration - 0.04);
    }
  };
  if (homeLiveSceneVideo.readyState >= 1) {
    seekToEnd();
  } else {
    homeLiveSceneVideo.addEventListener("loadedmetadata", seekToEnd, { once: true });
  }
  if (homeLiveSceneReplay) homeLiveSceneReplay.hidden = false;
}

function startHomeLiveSceneTypewriter(content) {
  if (!homeLiveSceneDescription) return;
  window.clearTimeout(homeLiveSceneTypewriterTimer);
  const text = content || homeLiveSceneDescription.dataset.text || "";
  let index = 0;
  homeLiveSceneDescription.textContent = "";
  homeLiveSceneDescription.classList.add("is-typewriting");
  const typeNextCharacter = () => {
    index += 1;
    homeLiveSceneDescription.textContent = text.slice(0, index);
    if (index >= text.length) {
      homeLiveSceneDescription.classList.remove("is-typewriting");
      return;
    }
    const character = text[index - 1];
    const delay = /[，。！？…]/.test(character) ? 180 : 42;
    homeLiveSceneTypewriterTimer = window.setTimeout(typeNextCharacter, delay);
  };
  homeLiveSceneTypewriterTimer = window.setTimeout(typeNextCharacter, 260);
}

function syncHomeCameraPreviewVisibility() {
  if (homeCameraPreview) {
    homeCameraPreview.hidden = !homeCameraActive || !homeCameraPreviewVisible;
  }
  cameraPreviewVisibilityToggle?.classList.toggle("is-on", homeCameraPreviewVisible);
  cameraPreviewVisibilityToggle?.setAttribute("aria-checked", String(homeCameraPreviewVisible));
}

function syncLiveSceneEntryVisibility() {
  homeComposerDock?.classList.toggle("live-scene-entry-hidden", !liveSceneEntryVisible);
  homeLiveSceneButton?.setAttribute("aria-hidden", String(!liveSceneEntryVisible));
  if (homeLiveSceneButton) homeLiveSceneButton.disabled = !liveSceneEntryVisible;
  liveSceneEntryVisibilityToggle?.classList.toggle("is-on", liveSceneEntryVisible);
  liveSceneEntryVisibilityToggle?.setAttribute("aria-checked", String(liveSceneEntryVisible));
}

function syncComposerLayout() {
  const isLayoutTwo = composerLayout === "two";
  const isLayoutThree = composerLayout === "three";
  const isLayoutFour = composerLayout === "four";
  homeScreen?.classList.toggle("composer-layout-two", isLayoutTwo);
  homeScreen?.classList.toggle("composer-layout-three", isLayoutThree);
  homeScreen?.classList.toggle("composer-layout-four", isLayoutFour);
  composerLayoutOptions.forEach((button) => {
    const selected = button.dataset.composerLayout === composerLayout;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  setHomeControlIcon(
    homeLiveCallButton,
    "./assets/composer-live-companion-figma.svg"
  );
  setHomeControlIcon(
    homeLiveSceneButton,
    isLayoutFour
      ? (liveSceneEntrySelected ? "./assets/composer-layout-four-scene-selected.svg" : "./assets/composer-layout-four-scene.svg")
      : (isLayoutThree
        ? (liveSceneEntrySelected ? "./assets/composer-layout-three-scene-selected.svg" : "./assets/composer-layout-three-scene.svg")
        : (liveSceneEntrySelected ? "./assets/composer-live-scene-selected.svg" : "./assets/composer-live-call.svg"))
  );
}

function syncLiveSceneEntrySelection() {
  homeScreen?.classList.toggle("realtime-performance-enabled", liveSceneEntrySelected);
  homeLiveSceneButton?.classList.toggle("is-selected", liveSceneEntrySelected);
  homeLiveSceneButton?.setAttribute("aria-pressed", String(liveSceneEntrySelected));
  homeLiveSceneButton?.setAttribute("aria-label", liveSceneEntrySelected ? "关闭实时演绎" : "开启实时演绎");
  setHomeControlIcon(
    homeLiveSceneButton,
    composerLayout === "four"
      ? (liveSceneEntrySelected ? "./assets/composer-layout-four-scene-selected.svg" : "./assets/composer-layout-four-scene.svg")
      : (composerLayout === "three"
        ? (liveSceneEntrySelected ? "./assets/composer-layout-three-scene-selected.svg" : "./assets/composer-layout-three-scene.svg")
        : (liveSceneEntrySelected ? "./assets/composer-live-scene-selected.svg" : "./assets/composer-live-call.svg"))
  );
  if (liveSceneEntrySelected && !homeScreen?.classList.contains("role-away")) {
    rolandMicroexpressionVideo?.play().catch(() => {});
  } else {
    rolandMicroexpressionVideo?.pause();
    rolandReturnVideo?.pause();
    rolandDigitalHumanVideo?.pause();
    homeScreen?.classList.remove(
      "return-greeting-active",
      "return-loop-active",
      "watch-video-active",
      "digital-human-video-active"
    );
  }
}

function syncHomeLiveCallInputState() {
  if (!homeLiveCallInput) return;
  const hasMessage = Boolean(homeLiveCallInput.value.trim());
  homeLiveCallForm?.classList.toggle("has-message", hasMessage);
  if (homeLiveCallSend) homeLiveCallSend.disabled = !hasMessage;
  if (homeLiveCallState) homeLiveCallState.hidden = !hasMessage;
}

function appendHomeAwayMessage(type, text) {
  if (!homeAwayMessages) return;
  const message = document.createElement("div");
  message.className = `home-away-message home-away-message-${type}`;
  message.textContent = text;
  homeAwayMessages.appendChild(message);
}

function showHomeAwayState() {
  if (homeAwayState) homeAwayState.hidden = false;
  homeScreen?.classList.add("role-away");
  if (homeChatInput) {
    homeChatInput.disabled = false;
    homeChatInput.placeholder = "罗兰离开了";
    homeChatInput.focus();
  }
}

function showHomeDeepFeeling(onComplete) {
  window.clearTimeout(deepFeelingTypewriterTimer);
  if (homeDeepFeelingCard) homeDeepFeelingCard.hidden = false;
  homeScreen?.classList.add("deepfeeling-active");
  const textElement = homeDeepFeelingCard?.querySelector("p");
  if (!textElement) {
    onComplete?.();
    return;
  }
  const fullText = textElement.dataset.fullText || textElement.textContent.trim();
  textElement.dataset.fullText = fullText;
  textElement.textContent = "";
  const characters = Array.from(fullText);
  let index = 0;
  const typeNextCharacter = () => {
    textElement.textContent += characters[index] || "";
    index += 1;
    if (index >= characters.length) {
      onComplete?.();
      return;
    }
    const lastCharacter = characters[index - 1];
    const delay = /[，。！？、]/u.test(lastCharacter) ? 110 : 36;
    deepFeelingTypewriterTimer = window.setTimeout(typeNextCharacter, delay);
  };
  deepFeelingTypewriterTimer = window.setTimeout(typeNextCharacter, 180);
}

function hideHomeDeepFeeling() {
  window.clearTimeout(deepFeelingTypewriterTimer);
  if (homeDeepFeelingCard) homeDeepFeelingCard.hidden = true;
  homeScreen?.classList.remove("deepfeeling-active");
}

function setHomeComposerMode(mode) {
  homeComposerMode = mode;
  const isCall = mode === "call";
  const isScene = mode === "scene";
  homeScreen?.classList.toggle("live-call-active", isCall);
  homeScreen?.classList.toggle("live-scene-active", isScene);
  if (homeComposerDock) homeComposerDock.hidden = isCall || isScene;
  if (homeLiveCall) homeLiveCall.hidden = !isCall;
  if (homeLiveScene) homeLiveScene.hidden = !isScene;
  if (homeLiveSceneComposer) homeLiveSceneComposer.hidden = !isScene;
}

function appendHomeLiveCallMessage(kind, text) {
  if (!homeLiveCallMessages || !text) return;
  const row = document.createElement("div");
  row.className = `home-live-call-message-row is-${kind}`;
  const bubble = document.createElement("p");
  bubble.className = `home-live-call-message is-${kind}`;
  const useTypewriter = kind === "role";
  bubble.textContent = useTypewriter ? "" : text;
  row.appendChild(bubble);
  homeLiveCallMessages.appendChild(row);
  while (homeLiveCallMessages.children.length > 2) {
    homeLiveCallMessages.firstElementChild?.remove();
  }
  if (!useTypewriter) return row;
  window.clearTimeout(homeLiveCallTypewriterTimer);
  bubble.classList.add("is-typewriting");
  let characterIndex = 0;
  const typeNextCharacter = () => {
    characterIndex += 1;
    bubble.textContent = text.slice(0, characterIndex);
    if (characterIndex >= text.length) {
      bubble.classList.remove("is-typewriting");
      return;
    }
    const currentCharacter = text[characterIndex - 1];
    homeLiveCallTypewriterTimer = window.setTimeout(
      typeNextCharacter,
      /[，。！？；…]/.test(currentCharacter) ? 150 : 55
    );
  };
  homeLiveCallTypewriterTimer = window.setTimeout(typeNextCharacter, 180);
  return row;
}

function advanceHomeStory(button) {
  if (button.getAttribute("aria-busy") === "true") return;
  if (!button.closest(".home-dialogue-row")) return;
  button.disabled = true;
  button.setAttribute("aria-busy", "true");
  clearHomeConversationForNewTurn();
  const typingBubble = appendHomeChatTyping();
  window.setTimeout(() => {
    const next = HOME_STORY_ADVANCES[homeStoryAdvanceIndex % HOME_STORY_ADVANCES.length];
    homeStoryAdvanceIndex += 1;
    typingBubble?.remove();
    appendHomeChatTypewriter(next.text, next.stage);
    startRolandSpeaking("speaking");
  }, 900);
}

async function startHomeLiveCall() {
  if (homeComposerMode === "scene") stopHomeLiveScene();
  window.clearTimeout(lifeStreamTimer);
  if (liveSceneEntrySelected && !homeScreen?.classList.contains("role-away")) {
    rolandMicroexpressionVideo?.play().catch(() => {});
  } else {
    rolandMicroexpressionVideo?.pause();
  }
  rolandReturnVideo?.pause();
  rolandDepartureVideo?.pause();
  rolandDigitalHumanVideo?.pause();
  setHomeComposerMode("call");
  if (homeLiveCallStatus) homeLiveCallStatus.textContent = "罗兰正在听你讲…";
  if (homeLiveCallStatus) homeLiveCallStatus.hidden = false;
  if (homeLiveCallMessages) homeLiveCallMessages.replaceChildren();
  homeLiveCall?.classList.remove("is-typing");
  if (homeLiveCallInput) homeLiveCallInput.value = "";
  syncHomeLiveCallInputState();
  if (!homeVoiceActive) await startHomeVoiceInput();
  if (!homeCameraActive) await startHomeCamera();
}

function stopHomeLiveCall() {
  stopHomeVoiceInput();
  stopHomeCamera();
  homeLiveCall?.classList.remove("is-typing");
  if (homeLiveCallStatus) homeLiveCallStatus.hidden = false;
  setHomeComposerMode("chat");
  if (!homeScreen?.classList.contains("role-away")) {
    rolandMicroexpressionVideo?.play().catch(() => {});
    runLifeStream();
  }
  homeChatInput?.focus();
}

function startHomeLiveScene() {
  if (homeComposerMode === "call") stopHomeLiveCall();
  setHomeComposerMode("scene");
  homeScreen?.classList.add("chat-active");
  rolandMicroexpressionVideo?.pause();
  if (homeLiveSceneCardTitle) homeLiveSceneCardTitle.textContent = "接下来发生…";
  if (homeLiveSceneDescription) homeLiveSceneDescription.textContent = "";
  homeLiveSceneMedia?.classList.remove("is-performing");
  showHomeLiveSceneLastFrame();
  homeLiveSceneInput?.focus();
}

function stopHomeLiveScene() {
  window.clearTimeout(homeLiveSceneTypewriterTimer);
  window.clearTimeout(homeLiveScenePerformanceTimer);
  homeLiveSceneDescription?.classList.remove("is-typewriting");
  if (homeLiveSceneDescription) homeLiveSceneDescription.textContent = "";
  homeLiveSceneMedia?.classList.remove("is-performing");
  if (homeLiveSceneReplay) homeLiveSceneReplay.hidden = true;
  homeLiveSceneVideo?.pause();
  if (homeLiveSceneVideo) homeLiveSceneVideo.currentTime = 0;
  setHomeComposerMode("chat");
  if (!homeScreen?.classList.contains("role-away")) {
    rolandMicroexpressionVideo?.play().catch(() => {});
  }
  homeChatInput?.focus();
}

function stopHomeVoiceInput() {
  homeVoiceActive = false;
  window.clearTimeout(homeVoiceSubmitTimer);
  homeVoiceToggle?.setAttribute("aria-pressed", "false");
  homeVoiceToggle?.setAttribute("aria-label", "打开麦克风");
  syncHomeVoiceIcon();
  const recognition = homeSpeechRecognition;
  homeSpeechRecognition = undefined;
  if (recognition) {
    recognition.onresult = null;
    recognition.onerror = null;
    recognition.onend = null;
    try {
      recognition.stop();
    } catch {}
  }
  homeMicrophoneStream?.getTracks().forEach((track) => track.stop());
  homeMicrophoneStream = undefined;
}

async function startHomeVoiceInput() {
  if (!navigator.mediaDevices?.getUserMedia) {
    showHomeChatToast("请通过本地 API 服务打开后使用麦克风");
    return;
  }
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showHomeChatToast("语音输入将在接入 API 后启用");
    return;
  }
  try {
    homeMicrophoneStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    homeVoiceActive = true;
    homeVoiceToggle?.setAttribute("aria-pressed", "true");
    homeVoiceToggle?.setAttribute("aria-label", "关闭麦克风");
    syncHomeVoiceIcon();
    homeSpeechRecognition = new SpeechRecognition();
    homeSpeechRecognition.lang = "zh-CN";
    homeSpeechRecognition.interimResults = true;
    homeSpeechRecognition.continuous = true;
    homeSpeechRecognition.onresult = (event) => {
      let transcript = "";
      let hasFinalResult = false;
      for (let index = event.resultIndex; index < event.results.length; index += 1) {
        transcript += event.results[index][0].transcript;
        hasFinalResult ||= event.results[index].isFinal;
      }
      if (homeChatInput) homeChatInput.value = transcript;
      resizeHomeChatInput();
      if (hasFinalResult && transcript.trim()) {
        window.clearTimeout(homeVoiceSubmitTimer);
        homeVoiceSubmitTimer = window.setTimeout(() => {
          if (!homeChatInput?.disabled && homeChatInput?.value.trim()) {
            homeChatForm?.requestSubmit();
          }
        }, 600);
      }
    };
    homeSpeechRecognition.onerror = (event) => {
      if (event.error !== "no-speech") {
        stopHomeVoiceInput();
        showHomeChatToast("麦克风暂时无法识别，请再试一次", 5000);
      }
    };
    homeSpeechRecognition.onend = () => {
      if (!homeVoiceActive) return;
      try {
        homeSpeechRecognition.start();
      } catch {}
    };
    homeSpeechRecognition.start();
    showHomeChatToast("麦克风已开启，罗兰正在听");
  } catch {
    stopHomeVoiceInput();
    showHomeChatToast("请允许访问麦克风");
  }
}

function stopHomeCamera() {
  homeCameraActive = false;
  homeCameraButton?.setAttribute("aria-pressed", "false");
  homeCameraButton?.setAttribute("aria-label", "打开摄像头");
  syncHomeCameraIcon();
  homeCameraStream?.getTracks().forEach((track) => track.stop());
  homeCameraStream = undefined;
  if (homeCameraVideo) homeCameraVideo.srcObject = null;
  if (homeCameraPreview) homeCameraPreview.hidden = true;
}

async function startHomeCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    showHomeChatToast("请通过本地 API 服务打开后使用摄像头");
    return;
  }
  try {
    homeCameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 480 }, height: { ideal: 640 } },
      audio: false
    });
    homeCameraActive = true;
    homeCameraButton?.setAttribute("aria-pressed", "true");
    homeCameraButton?.setAttribute("aria-label", "关闭摄像头");
    syncHomeCameraIcon();
    if (homeCameraVideo) {
      homeCameraVideo.srcObject = homeCameraStream;
      await homeCameraVideo.play();
    }
    syncHomeCameraPreviewVisibility();
    showHomeChatToast("摄像头已开启，罗兰可以看到你");
  } catch {
    stopHomeCamera();
    showHomeChatToast("请允许访问摄像头");
  }
}

function moveHomeCameraPreview(clientX, clientY) {
  if (!homeCameraPreview || !homeScreen || !homeCameraDragState) return;
  const screenRect = homeScreen.getBoundingClientRect();
  const scaleX = screenRect.width / homeScreen.clientWidth || 1;
  const scaleY = screenRect.height / homeScreen.clientHeight || 1;
  const minLeft = 8;
  const maxLeft = homeScreen.clientWidth - homeCameraPreview.offsetWidth - 8;
  const minTop = 88;
  const maxTop = homeScreen.clientHeight - homeCameraPreview.offsetHeight - 92;
  const localX = (clientX - screenRect.left) / scaleX;
  const localY = (clientY - screenRect.top) / scaleY;
  const nextLeft = Math.min(
    Math.max(localX - homeCameraDragState.offsetX, minLeft),
    Math.max(minLeft, maxLeft)
  );
  const nextTop = Math.min(
    Math.max(localY - homeCameraDragState.offsetY, minTop),
    Math.max(minTop, maxTop)
  );
  homeCameraPreview.style.left = `${nextLeft}px`;
  homeCameraPreview.style.top = `${nextTop}px`;
  homeCameraPreview.style.bottom = "auto";
}

homeCameraPreview?.addEventListener("pointerdown", (event) => {
  if (!homeCameraActive) return;
  const screenRect = homeScreen?.getBoundingClientRect();
  const previewRect = homeCameraPreview.getBoundingClientRect();
  const scaleX = screenRect && homeScreen ? screenRect.width / homeScreen.clientWidth || 1 : 1;
  const scaleY = screenRect && homeScreen ? screenRect.height / homeScreen.clientHeight || 1 : 1;
  homeCameraDragState = {
    pointerId: event.pointerId,
    offsetX: (event.clientX - previewRect.left) / scaleX,
    offsetY: (event.clientY - previewRect.top) / scaleY
  };
  homeCameraPreview.classList.add("is-dragging");
  homeCameraPreview.setPointerCapture(event.pointerId);
  event.preventDefault();
});

homeCameraPreview?.addEventListener("pointermove", (event) => {
  if (!homeCameraDragState || homeCameraDragState.pointerId !== event.pointerId) return;
  moveHomeCameraPreview(event.clientX, event.clientY);
});

function finishHomeCameraDrag(event) {
  if (!homeCameraPreview || !homeCameraDragState || homeCameraDragState.pointerId !== event.pointerId) return;
  homeCameraPreview.classList.remove("is-dragging");
  if (homeCameraPreview.hasPointerCapture(event.pointerId)) {
    homeCameraPreview.releasePointerCapture(event.pointerId);
  }
  homeCameraDragState = undefined;
}

homeCameraPreview?.addEventListener("pointerup", finishHomeCameraDrag);
homeCameraPreview?.addEventListener("pointercancel", finishHomeCameraDrag);

function showHomeChatToast(message, duration = 1800) {
  if (!homeChatToast) return;
  window.clearTimeout(homeChatToastTimer);
  homeChatToast.textContent = message;
  homeChatToast.classList.add("visible");
  homeChatToastTimer = window.setTimeout(() => {
    homeChatToast.classList.remove("visible");
  }, duration);
}

function scrollHomeChatToBottom() {
  if (!homeChatThread) return;
  homeChatThread.scrollTop = homeChatThread.scrollHeight;
}

function appendHomeChatMessage(type, text, stageDirection = "") {
  if (!homeChatThread) return null;
  const bubble = document.createElement("article");
  bubble.className = `home-message home-message-${type}`;
  if (stageDirection) {
    const stage = document.createElement("span");
    stage.className = "home-message-stage";
    stage.textContent = stageDirection;
    bubble.appendChild(stage);
  }
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  bubble.appendChild(paragraph);
  homeChatThread.appendChild(bubble);
  scrollHomeChatToBottom();
  return bubble;
}

function clearHomeConversationForNewTurn() {
  if (!homeChatThread) return;
  window.clearTimeout(homeChatTypewriterTimer);
  homeScreen?.classList.remove("return-greeting-active", "return-loop-active");
  homeChatThread.classList.remove("inspiration-active", "inspiration-layout");
  homeChatThread.querySelectorAll(
    ".home-dialogue-row, .home-message, .home-inspiration-replies"
  ).forEach((element) => element.remove());
}

function hideHomeInspirationReplies() {
  if (!homeChatThread) return;
  homeChatThread.classList.remove("inspiration-active");
  homeChatThread.querySelector(".home-inspiration-replies")?.remove();
}

function syncHomeInspirationButton(button) {
  if (!button) return;
  button.classList.toggle("is-active", homeInspirationEnabled);
  button.setAttribute("aria-pressed", String(homeInspirationEnabled));
}

function showHomeInspirationReplies(button) {
  if (!homeChatThread || !homeInspirationEnabled) return null;
  hideHomeInspirationReplies();
  homeScreen?.classList.add("chat-active");
  homeChatThread.classList.add("inspiration-layout");
  syncHomeInspirationButton(button);
  const replies = document.createElement("section");
  replies.className = "home-inspiration-replies";
  replies.setAttribute("aria-label", "灵感回复选项");
  replies.innerHTML = `
    <span class="home-inspiration-title">灵感回复</span>
    <div class="home-inspiration-reply">
      <button class="home-inspiration-edit" type="button" data-inspiration-edit="等会儿楼下见！" aria-label="编辑回复：等会儿楼下见！"><img src="./assets/home-edit-reply.svg" alt="" /></button>
      <button class="home-inspiration-send" type="button" data-inspiration-reply="等会儿楼下见！"><span>等会儿楼下见！</span></button>
    </div>
    <div class="home-inspiration-reply">
      <button class="home-inspiration-edit" type="button" data-inspiration-edit="等会儿楼下见！我怎么会忘记呢！" aria-label="编辑回复：等会儿楼下见！我怎么会忘记呢！"><img src="./assets/home-edit-reply.svg" alt="" /></button>
      <button class="home-inspiration-send" type="button" data-inspiration-reply="等会儿楼下见！我怎么会忘记呢！"><span>等会儿楼下见！我怎么会忘记呢！</span></button>
    </div>
    <div class="home-inspiration-reply">
      <button class="home-inspiration-edit" type="button" data-inspiration-edit="谢谢你的辅导，如我复习了，有什么奖励吗？" aria-label="编辑回复：谢谢你的辅导，如我复习了，有什么奖励吗？"><img src="./assets/home-edit-reply.svg" alt="" /></button>
      <button class="home-inspiration-send" type="button" data-inspiration-reply="谢谢你的辅导，如我复习了，有什么奖励吗？"><span>谢谢你的辅导，如我复习了，有什么奖励吗？</span></button>
    </div>`;
  homeChatThread.appendChild(replies);
  homeChatThread.classList.add("inspiration-active");
  scrollHomeChatToBottom();
  return replies;
}

function toggleHomeInspirationReplies(button) {
  if (!homeChatThread || button.closest(".home-quick-functions")?.classList.contains("is-pending")) return;
  homeInspirationEnabled = !homeInspirationEnabled;
  syncHomeInspirationButton(button);
  if (homeInspirationEnabled) {
    showHomeInspirationReplies(button);
    return;
  }
  hideHomeInspirationReplies();
}

const initialHomeInspirationButton = homeChatThread?.querySelector('button[aria-label="灵感回复"]');
syncHomeInspirationButton(initialHomeInspirationButton);
showHomeInspirationReplies(initialHomeInspirationButton);

function attachHomeQuickFunctions(bubble, pending = false) {
  if (!homeChatThread || !bubble) return null;
  hideHomeInspirationReplies();
  [...homeChatThread.querySelectorAll(".home-dialogue-row")].forEach((row) => row.remove());
  [...homeChatThread.querySelectorAll(".home-message-user")].forEach((message) => message.remove());
  [...homeChatThread.querySelectorAll(".home-message-role:not(.home-message-typing)")]
    .filter((message) => message !== bubble)
    .forEach((message) => message.remove());
  const row = document.createElement("div");
  row.className = "home-dialogue-row";
  const quickFunctions = document.createElement("div");
  quickFunctions.className = "home-quick-functions";
  quickFunctions.classList.toggle("is-pending", pending);
  quickFunctions.setAttribute("aria-label", "快捷功能");
  quickFunctions.innerHTML = `
    <button type="button" aria-label="继续"><img src="./assets/home-continue.svg" alt="" /></button>
    <button type="button" aria-label="灵感回复" aria-pressed="${homeInspirationEnabled}"><img src="./assets/home-lamp.svg" alt="" /></button>`;
  syncHomeInspirationButton(quickFunctions.querySelector('button[aria-label="灵感回复"]'));
  homeChatThread.appendChild(row);
  row.append(bubble, quickFunctions);
  return quickFunctions;
}

function appendHomeChatTypewriter(text, stageDirection = "", onComplete, timing = {}) {
  const {
    initialDelay = 180,
    characterDelay = 55,
    punctuationDelay = 150
  } = timing;
  window.clearTimeout(homeChatTypewriterTimer);
  const bubble = appendHomeChatMessage("role", "", stageDirection);
  const quickFunctions = attachHomeQuickFunctions(bubble, true);
  const paragraph = bubble?.querySelector("p");
  if (!bubble || !paragraph) {
    onComplete?.();
    return null;
  }
  bubble.classList.add("is-typewriting");
  let characterIndex = 0;
  const typeNextCharacter = () => {
    characterIndex += 1;
    paragraph.textContent = text.slice(0, characterIndex);
    scrollHomeChatToBottom();
    if (characterIndex < text.length) {
      const currentCharacter = text[characterIndex - 1];
      const delay = /[，。！？；…]/.test(currentCharacter)
        ? punctuationDelay
        : characterDelay;
      homeChatTypewriterTimer = window.setTimeout(typeNextCharacter, delay);
      return;
    }
    bubble.classList.remove("is-typewriting");
    quickFunctions?.classList.remove("is-pending");
    if (homeInspirationEnabled) {
      showHomeInspirationReplies(quickFunctions?.querySelector('button[aria-label="灵感回复"]'));
    }
    onComplete?.();
  };
  homeChatTypewriterTimer = window.setTimeout(typeNextCharacter, initialDelay);
  return bubble;
}

function appendHomeChatTyping() {
  if (!homeChatThread) return null;
  const bubble = document.createElement("article");
  bubble.className = "home-message home-message-role home-message-typing";
  bubble.setAttribute("aria-label", "罗兰正在回复");
  bubble.innerHTML = "<i></i><i></i><i></i>";
  homeChatThread.appendChild(bubble);
  scrollHomeChatToBottom();
  return bubble;
}

function setRolandMood(label, className) {
  const moodLabel = document.querySelector(".home-mood-button span");
  if (moodLabel) moodLabel.textContent = label;
  if (lifeEmotion) lifeEmotion.textContent = label;
  homeScreen?.classList.remove("role-hurt", "role-leaving", "role-away");
  if (className) homeScreen?.classList.add(className);
}

function playJoyHearts() {
  window.clearTimeout(joyHeartsTimer);
  homeScreen?.classList.remove("joy-hearts-active");
  if (rolandJoyHeartsGif) {
    const source = rolandJoyHeartsGif.src;
    rolandJoyHeartsGif.src = "";
    rolandJoyHeartsGif.src = source;
  }
  void homeScreen?.offsetWidth;
  homeScreen?.classList.add("joy-hearts-active");
  setRolandMood("雀跃");
  if (lifeBehavior) lifeBehavior.textContent = "藏不住的欣喜";
  if (lifeEnvironment) lifeEnvironment.textContent = "包厢 · 粉色心光";
  if (lifeStreamDescription) {
    lifeStreamDescription.textContent = "你的表达让罗兰短暂露出没有完全藏好的雀跃。";
  }
  joyHeartsTimer = window.setTimeout(() => {
    homeScreen?.classList.remove("joy-hearts-active");
  }, 5600);
}

function clearRolandDepartureFrame() {
  rolandDepartureFrame?.classList.remove("is-visible");
  homeScreen?.classList.remove("role-departure-tunnel", "role-wiping");
}

function stopRolandDepartureVideo() {
  homeScreen?.classList.remove("departure-video-active", "departure-video-transitioning");
  if (!rolandDepartureVideo) return;
  rolandDepartureVideo.pause();
  rolandDepartureVideo.currentTime = 0;
}

function captureRolandDepartureFrame() {
  if (!rolandDepartureFrame) return false;
  const source =
    returnVisitMode !== "off" && rolandReturnVideo?.readyState >= 2
      ? rolandReturnVideo
      : rolandMicroexpressionVideo;
  if (!source || source.readyState < 2 || !source.videoWidth || !source.videoHeight) return false;
  const width = Math.max(1, Math.round(rolandDepartureFrame.clientWidth));
  const height = Math.max(1, Math.round(rolandDepartureFrame.clientHeight));
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  rolandDepartureFrame.width = Math.round(width * ratio);
  rolandDepartureFrame.height = Math.round(height * ratio);
  const context = rolandDepartureFrame.getContext("2d");
  if (!context) return false;
  const scale = Math.max(
    rolandDepartureFrame.width / source.videoWidth,
    rolandDepartureFrame.height / source.videoHeight
  );
  const drawWidth = source.videoWidth * scale;
  const drawHeight = source.videoHeight * scale;
  context.clearRect(0, 0, rolandDepartureFrame.width, rolandDepartureFrame.height);
  try {
    context.drawImage(
      source,
      (rolandDepartureFrame.width - drawWidth) / 2,
      (rolandDepartureFrame.height - drawHeight) / 2,
      drawWidth,
      drawHeight
    );
  } catch {
    return false;
  }
  rolandDepartureFrame.classList.add("is-visible");
  return true;
}

function triggerRolandDeparture() {
  window.clearTimeout(lifeStreamTimer);
  window.clearTimeout(rolandDepartureTimer);
  window.clearTimeout(rolandAwayTimer);
  const captured = captureRolandDepartureFrame();
  stopReturnVisit({ resumeDefaultVideo: false });
  rolandMicroexpressionVideo?.pause();
  rolandReturnVideo?.pause();
  setRolandMood("悲伤");
  homeScreen?.classList.add(captured ? "role-departure-tunnel" : "role-leaving");
  if (lifeBehavior) lifeBehavior.textContent = "动作停顿，准备离开";
  if (lifeEnvironment) lifeEnvironment.textContent = "列车驶入隧道";
  if (lifeStreamDescription) {
    lifeStreamDescription.textContent = "车身轻震，包厢骤暗。罗兰停在这一刻，身影逐渐从画面中被擦去。";
  }
  if (lifeAudioEnabled && lifeAudioContext && lifeAudioMaster) {
    const now = lifeAudioContext.currentTime;
    lifeAudioMaster.gain.cancelScheduledValues(now);
    lifeAudioMaster.gain.linearRampToValueAtTime(.42, now + 1.2);
    lifeAudioPad?.gain.linearRampToValueAtTime(.18, now + 1.2);
    lifeAudioNoise?.gain.linearRampToValueAtTime(.13, now + 1.2);
    lifeAudioFilter?.frequency.linearRampToValueAtTime(880, now + 1.2);
  }
  rolandDepartureTimer = window.setTimeout(() => {
    if (captured) homeScreen?.classList.add("role-wiping");
    if (lifeBehavior) lifeBehavior.textContent = "身影逐渐消失";
  }, captured ? 520 : 900);
  rolandAwayTimer = window.setTimeout(() => {
    homeScreen?.classList.remove("role-leaving", "role-departure-tunnel", "role-wiping");
    homeScreen?.classList.add("role-away");
    rolandDepartureFrame?.classList.remove("is-visible");
    if (lifeBehavior) lifeBehavior.textContent = "暂时离开";
    if (lifeEnvironment) lifeEnvironment.textContent = "空包厢 · 风雪声";
    if (homeChatInput) {
      homeChatInput.disabled = false;
      homeChatInput.placeholder = "给罗兰发送消息";
      homeChatInput.focus();
    }
  }, captured ? 3150 : 3600);
}

function completeRolandDepartureVideo() {
  if (rolandDepartureVideo) {
    rolandDepartureVideo.pause();
    if (Number.isFinite(rolandDepartureVideo.duration)) {
      rolandDepartureVideo.currentTime = Math.max(0, rolandDepartureVideo.duration - 0.04);
    }
  }
  showHomeAwayState();
  if (lifeBehavior) lifeBehavior.textContent = "暂时离开";
  if (lifeEnvironment) lifeEnvironment.textContent = "包厢 · 离开后的静默";
  if (lifeStreamDescription) {
    lifeStreamDescription.textContent = "罗兰已经离开，画面停留在他走出当前空间后的最后一刻。";
  }
  if (homeChatInput) {
    homeChatInput.disabled = false;
    homeChatInput.placeholder = "罗兰离开了";
    homeChatInput.focus();
  }
}

function triggerRolandDepartureVideo() {
  hideHomeDeepFeeling();
  window.clearTimeout(lifeStreamTimer);
  window.clearTimeout(rolandDepartureTimer);
  window.clearTimeout(rolandAwayTimer);
  clearRolandDepartureFrame();
  window.clearTimeout(rolandUserIdleTimer);
  returnVisitMode = "off";
  returnGreetingTextStarted = false;
  returnVisitTrigger?.classList.remove("is-active");
  setRolandMood("悲伤");
  homeScreen?.classList.remove("role-leaving", "role-away", "departure-video-active");
  homeScreen?.classList.add("departure-video-transitioning");
  if (lifeBehavior) lifeBehavior.textContent = "结束交谈，转身离开";
  if (lifeEnvironment) lifeEnvironment.textContent = "和平号包厢 · 深夜";
  if (lifeStreamDescription) {
    lifeStreamDescription.textContent = "罗兰听见你的请求，克制地结束交谈，随后离开当前空间。";
  }
  if (!rolandDepartureVideo) {
    triggerRolandDeparture();
    return;
  }
  rolandDepartureVideo.muted = true;
  rolandDepartureVideo.currentTime = 0;
  rolandDepartureVideo.play().then(() => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        homeScreen?.classList.add("departure-video-active");
        rolandDepartureTimer = window.setTimeout(() => {
          homeScreen?.classList.remove("departure-video-transitioning");
          homeScreen?.classList.remove("return-greeting-active", "return-loop-active", "watch-video-active");
          rolandMicroexpressionVideo?.pause();
          rolandReturnVideo?.pause();
        }, 1180);
      });
    });
  }).catch(() => {
    stopRolandDepartureVideo();
    triggerRolandDeparture();
  });
}

rolandDepartureVideo?.addEventListener("ended", completeRolandDepartureVideo);

function getRolandReply(message) {
  if (/我很开心/.test(message)) {
    return {
      stage: "罗兰看着你，眼底那点谨慎的审视悄悄松开，像是也被你的好心情感染了。",
      text: "那就好。看来今晚的和平号，也并不只有风雪值得记住。",
      joy: true
    };
  }

  if (!/不想你|不喜欢你/.test(message) && /想你|喜欢你/.test(message)) {
    return {
      stage: "罗兰的目光在你脸上停得久了一些。那点来不及藏好的欣喜掠过眼底，随后才被他收进温和的笑意里。",
      text: "这种话，不该随便对一个擅长记住细节的人说。因为我可能会当真。",
      joy: true
    };
  }

  if (/^(离开|请离开|你离开|请你离开)[。！!]?$/u.test(message)) {
    return {
      stage: "罗兰沉默片刻，将钢笔轻轻放在稿纸旁，随后从座位上起身。",
      text: "……好。我先离开。",
      departureVideo: true
    };
  }
  if (/我讨厌你|讨厌你|不喜欢你|别烦我|不想见你|你走开/.test(message)) {
    return {
      stage: "罗兰背对着你，握住门把的手停了一瞬。",
      text: "等了你那么久，竟然等来一句讨厌我。哼，我可不是什么大度的人，还是会伤心的。算了，我走！",
      departureVideo: liveSceneEntrySelected,
      anger: true
    };
  }
  if (/你是谁|身份|小说家|叫什么|名字/.test(message)) {
    return {
      stage: "他合上稿本，封面恰好遮住下面那张写满批注的乘客名单。",
      text: "罗兰。一个靠编故事谋生的人——至少今晚，你可以这样相信。"
    };
  }
  if (/哪里|包厢|和平号|去哪|终点|维萨/.test(message)) {
    return {
      stage: "车轮碾过接缝，窗外的北地雪原被夜色迅速吞没。",
      text: "这里是和平号，正从维萨驶向万晁。路还很长，足够每个人藏好自己的秘密。"
    };
  }
  if (/回家|万晁|父亲|鸿雁|家乡/.test(message)) {
    return {
      stage: "他看了你一会儿，语气依旧轻柔，眼神却没有半分松懈。",
      text: "回乡的路从来不只通向故土。有人等你回去，也会有人不希望你平安抵达。"
    };
  }
  if (/药|身体|心脏|不舒服|脸色/.test(message)) {
    return {
      stage: "他把药片抵在舌下，若无其事地将银色药盒收回掌心，笑意却淡了一瞬。",
      text: "只是旧毛病。别露出那种表情，我还没脆弱到需要你同情。"
    };
  }
  if (/试剂|XK|公式|箱子|秘密/.test(message)) {
    return {
      stage: "他的视线在行李箱锁扣上停了一瞬，随即若无其事地翻过一页稿纸。",
      text: "XK-101、配方、那只从不离身的箱子……知道答案的人，通常活得不够久。你确定还要继续问？"
    };
  }
  if (/做什么|写什么|小说|稿/.test(message)) {
    return {
      stage: "他用指节压住稿纸的一角，没有让你看见下面露出的乘客名单。",
      text: "写小说。至少，这是我希望你相信的答案。"
    };
  }
  if (/施塔恩|中将|军官/.test(message)) {
    return {
      stage: "罗兰侧耳听了听走廊里的脚步声，随后用钢笔轻点稿纸。",
      text: "施塔恩中将当然值得尊敬。只是尊敬与信任，从来不是一回事。你认为他有多可靠？"
    };
  }
  if (/相信|信任|帮我|保护/.test(message)) {
    return {
      stage: "他低低笑了一声，那双眼睛却像在审视一份尚未落笔的供词。",
      text: "相信我？这是今晚最危险的一句话。不过，如果有人想动你的箱子，我会比你更早知道。"
    };
  }
  if (/走|下车|离开|下一站/.test(message)) {
    return {
      stage: "他望向覆着薄霜的车窗，倒影里的神情一时难辨真假。",
      text: "如果你想跟我走，我们就在下一站下车。"
    };
  }
  if (/你好|晚上好|在吗|罗兰/.test(message)) {
    return {
      stage: "他从稿纸上抬起眼，目光在你脸上停留片刻。",
      text: "晚上好。和平号的夜太长，幸好这间包厢里终于有了些值得期待的事。"
    };
  }
  return {
    stage: "他轻轻转动钢笔，似乎在分辨这句话背后的真正意图，纸下隐约露出一角乘客名单。",
    text: "继续说吧。故事、谎言或秘密都可以——我一向擅长分辨它们。"
  };
}

homeChatInput?.addEventListener("input", resizeHomeChatInput);
homeLiveCallButton?.addEventListener("click", startHomeLiveCall);
homeTopLiveCallButton?.addEventListener("click", startHomeLiveCall);
homeLiveCallEnd?.addEventListener("click", stopHomeLiveCall);
homeLiveSceneButton?.addEventListener("click", () => {
  liveSceneEntrySelected = !liveSceneEntrySelected;
  syncLiveSceneEntrySelection();
  showHomeChatToast(liveSceneEntrySelected ? "实时演绎已开启" : "实时演绎已关闭");
});
homeLiveSceneClose?.addEventListener("click", stopHomeLiveScene);
homeLiveCallInput?.addEventListener("focus", () => {
  homeLiveCall?.classList.add("is-typing");
});
homeLiveCallInput?.addEventListener("input", () => {
  syncHomeLiveCallInputState();
});
homeLiveCallState?.addEventListener("click", () => {
  if (!homeLiveCallInput || homeLiveCallInput.disabled) return;
  const start = homeLiveCallInput.selectionStart ?? homeLiveCallInput.value.length;
  const end = homeLiveCallInput.selectionEnd ?? start;
  const selectedText = homeLiveCallInput.value.slice(start, end);
  const insertion = `（${selectedText}）`;
  homeLiveCallInput.setRangeText(insertion, start, end, "end");
  const caretPosition = selectedText ? start + insertion.length : start + 1;
  homeLiveCallInput.setSelectionRange(caretPosition, caretPosition);
  homeLiveCallInput.dispatchEvent(new Event("input", { bubbles: true }));
  homeLiveCallInput.focus();
});
homeLiveCallForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = homeLiveCallInput?.value.trim();
  if (!message || !homeChatInput || !homeChatForm) return;
  appendHomeLiveCallMessage("user", message);
  homeChatInput.value = message;
  homeChatInput.dispatchEvent(new Event("input", { bubbles: true }));
  homeLiveCallInput.value = "";
  syncHomeLiveCallInputState();
  homeChatForm.requestSubmit();
});
document.addEventListener("pointerdown", (event) => {
  if (!homeLiveCall?.classList.contains("is-typing")) return;
  if (homeLiveCallForm?.contains(event.target)) return;
  homeLiveCall.classList.remove("is-typing");
  if (homeLiveCallStatus) {
    homeLiveCallStatus.textContent = "罗兰正在听你讲…";
    homeLiveCallStatus.hidden = false;
  }
});
homeLiveSceneInput?.addEventListener("input", () => {
  if (homeLiveSceneSend) homeLiveSceneSend.disabled = !homeLiveSceneInput.value.trim();
});
homeLiveSceneForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = homeLiveSceneInput?.value.trim();
  if (!message) return;
  clearHomeConversationForNewTurn();
  appendHomeChatMessage("user", message);
  const typingBubble = appendHomeChatTyping();
  window.clearTimeout(homeLiveSceneTypewriterTimer);
  window.clearTimeout(homeLiveScenePerformanceTimer);
  homeLiveSceneDescription?.classList.remove("is-typewriting");
  homeLiveSceneMedia?.classList.remove("is-performing");
  if (homeLiveSceneReplay) homeLiveSceneReplay.hidden = true;
  if (homeLiveSceneCardTitle) homeLiveSceneCardTitle.textContent = "你的演绎指令";
  if (homeLiveSceneDescription) homeLiveSceneDescription.textContent = message;
  homeLiveSceneInput.value = "";
  homeLiveSceneInput.disabled = true;
  if (homeLiveSceneSend) homeLiveSceneSend.disabled = true;
  homeLiveScenePerformanceTimer = window.setTimeout(() => {
    typingBubble?.remove();
    homeLiveSceneMedia?.classList.add("is-performing");
    if (homeLiveSceneReplay) homeLiveSceneReplay.hidden = true;
    if (homeLiveSceneVideo) homeLiveSceneVideo.currentTime = 0;
    homeLiveSceneVideo?.play().catch(() => {});
    if (homeLiveSceneCardTitle) homeLiveSceneCardTitle.textContent = "接下来发生…";
    startHomeLiveSceneTypewriter();
    const reply = getRolandReply(message);
    appendHomeChatTypewriter(reply.text, reply.stage, () => {
      homeLiveSceneInput.disabled = false;
      homeLiveSceneInput.focus();
    });
  }, 900);
});
homeLiveSceneVideo?.addEventListener("ended", () => {
  homeLiveSceneMedia?.classList.remove("is-performing");
  if (homeLiveSceneReplay) homeLiveSceneReplay.hidden = false;
});
homeLiveSceneReplay?.addEventListener("click", () => {
  if (homeLiveSceneReplay) homeLiveSceneReplay.hidden = true;
  if (homeLiveSceneVideo) homeLiveSceneVideo.currentTime = 0;
  homeLiveSceneMedia?.classList.add("is-performing");
  homeLiveSceneVideo?.play().catch(() => {});
});
homeVoiceToggle?.addEventListener("click", () => {
  if (homeVoiceActive) {
    stopHomeVoiceInput();
    showHomeChatToast("麦克风已关闭");
    return;
  }
  startHomeVoiceInput();
});
homeCameraButton?.addEventListener("click", () => {
  if (homeCameraActive) {
    stopHomeCamera();
    showHomeChatToast("摄像头已关闭");
    return;
  }
  startHomeCamera();
});
cameraPreviewVisibilityToggle?.addEventListener("click", () => {
  homeCameraPreviewVisible = !homeCameraPreviewVisible;
  syncHomeCameraPreviewVisibility();
  showHomeChatToast(homeCameraPreviewVisible ? "摄像头小窗已显示" : "摄像头小窗已隐藏");
});
liveSceneEntryVisibilityToggle?.addEventListener("click", () => {
  liveSceneEntryVisible = !liveSceneEntryVisible;
  syncLiveSceneEntryVisibility();
  showHomeChatToast(liveSceneEntryVisible ? "实时演绎入口已显示" : "实时演绎入口已隐藏");
});
composerLayoutOptions.forEach((button) => {
  button.addEventListener("click", () => {
    const requestedLayout = button.dataset.composerLayout;
    composerLayout = ["one", "two", "three", "four"].includes(requestedLayout) ? requestedLayout : "one";
    syncComposerLayout();
  });
});
syncComposerLayout();
window.addEventListener("beforeunload", () => {
  stopHomeVoiceInput();
  stopHomeCamera();
});
homeChatInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    homeChatForm?.requestSubmit();
  }
});

homeChatState?.addEventListener("click", () => {
  if (!homeChatInput || homeChatInput.disabled) return;
  const start = homeChatInput.selectionStart ?? homeChatInput.value.length;
  const end = homeChatInput.selectionEnd ?? start;
  const selectedText = homeChatInput.value.slice(start, end);
  const insertion = `（${selectedText}）`;
  homeChatInput.setRangeText(insertion, start, end, "end");
  const caretPosition = selectedText ? start + insertion.length : start + 1;
  homeChatInput.setSelectionRange(caretPosition, caretPosition);
  homeChatInput.dispatchEvent(new Event("input", { bubbles: true }));
  resizeHomeChatInput();
  homeChatInput.focus();
});

homeChatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = homeChatInput?.value.trim();
  if (!message) return;
  document.querySelector(".home-screen")?.classList.add("chat-active");
  homeChatInput.value = "";
  resizeHomeChatInput();
  if (homeScreen?.classList.contains("role-away")) {
    appendHomeChatMessage("user", message);
    appendHomeAwayMessage("user", message);
    homeChatInput.disabled = false;
    window.clearTimeout(homeChatReplyTimer);
    homeChatReplyTimer = window.setTimeout(() => {
      appendHomeAwayMessage("notice", awayEchoes[awayEchoIndex % awayEchoes.length]);
      awayEchoIndex += 1;
      homeChatInput?.focus();
    }, 420);
    return;
  }
  clearHomeConversationForNewTurn();
  appendHomeChatMessage("user", message);
  homeChatInput.disabled = true;
  const typingBubble = appendHomeChatTyping();
  window.clearTimeout(homeChatReplyTimer);
  homeChatReplyTimer = window.setTimeout(() => {
    typingBubble?.remove();
    const reply = getRolandReply(message);
    const deliverRolandReply = () => {
      if (reply.anger) setRolandMood("恼怒", "role-hurt");
      if (homeComposerMode === "call") {
        appendHomeLiveCallMessage("role", reply.text);
        if (homeLiveCallStatus && !homeLiveCall?.classList.contains("is-typing")) {
          homeLiveCallStatus.textContent = "罗兰正在回应你…";
        }
      }
      startRolandSpeaking();
      if (reply.joy) playJoyHearts();
      appendHomeChatTypewriter(reply.text, reply.stage, () => {
        if (reply.departureVideo) {
          rolandDepartureTimer = window.setTimeout(triggerRolandDepartureVideo, 500);
          return;
        }
        if (reply.departure) {
          triggerRolandDeparture();
          return;
        }
        waitForUserResponse();
        generateDigitalHumanReply(reply, message);
        homeChatInput?.focus();
      });
    };

    if (reply.departureVideo) {
      showHomeDeepFeeling(() => {
        rolandDepartureTimer = window.setTimeout(() => {
          hideHomeDeepFeeling();
          deliverRolandReply();
        }, 600);
      });
      return;
    }
    deliverRolandReply();
  }, 900 + Math.min(message.length * 18, 700));
});

homeAwaySchedule?.addEventListener("click", () => showHomeChatToast("正在查看罗兰的日程"));
[homeProfileEntry, homeMoodButton, homeButterflyButton].forEach((button) => {
  button?.addEventListener("click", () => showHomeChatToast("下载APP体验完整功能"));
});
homeAwayFind?.addEventListener("click", () => {
  window.clearTimeout(homeChatReplyTimer);
  window.clearTimeout(rolandDepartureTimer);
  window.clearTimeout(rolandAwayTimer);
  const mapUrl = new URL("./livo-world/tilia/map/index.html", window.location.href);
  mapUrl.searchParams.delete("roland");
  mapUrl.hash = "roland=restaurant";
  window.location.assign(mapUrl.href);
});

const chatEntryParams = new URLSearchParams(window.location.search);
if (chatEntryParams.get("location") === "restaurant") {
  if (homeLocationLabel) homeLocationLabel.textContent = "餐车";
  if (homeChatThread) {
    homeChatThread.innerHTML = `
      <div class="home-dialogue-row">
        <article class="home-dialogue-bubble">
          <p>餐车的灯光映在玻璃杯沿。罗兰听见脚步声，转过身看向你，神情里的意外很快化成一点克制的笑意。</p>
          <strong>“你终于来找我了？”</strong>
        </article>
        <div class="home-quick-functions" aria-label="快捷功能">
          <button type="button" aria-label="继续"><img src="./assets/home-continue.svg" alt="" /></button>
          <button type="button" aria-label="灵感回复"><img src="./assets/home-lamp.svg" alt="" /></button>
        </div>
      </div>`;
  }
}

departureDemoTrigger?.addEventListener("click", () => {
  window.clearTimeout(rolandDepartureTimer);
  window.clearTimeout(rolandAwayTimer);
  stopReturnVisit();
  homeScreen?.classList.remove("role-hurt", "role-leaving", "role-away");
  clearRolandDepartureFrame();
  if (!homeChatInput) return;
  homeChatInput.value = "";
  homeChatInput.disabled = false;
  homeChatInput.placeholder = "和罗兰开始冒险";
  resizeHomeChatInput();
  if (rolandMicroexpressionVideo) {
    rolandMicroexpressionVideo.loop = true;
    rolandMicroexpressionVideo.muted = true;
    rolandMicroexpressionVideo.currentTime = 0;
    rolandMicroexpressionVideo.play().catch(() => {});
  }
  lifeStreamIndex = 0;
  setLifeAudioEnabled(true);
  runLifeStream();
  homeChatInput.focus();
});

const introTitleText = "你们的每次靠近，都会留下痕迹，\n也会点亮火光";
const introDescriptionText = "这些痕迹会在火光的照亮下慢慢连接，\n生长成属于你的心迹地图";
const introSequenceClasses = [
  "sequence-playing",
  "background-revealing",
  "star-visible",
  "entry-dot-visible",
  "entry-message-visible",
  "entry-link-visible",
  "sequence-complete"
];
const mapSequenceClasses = [
  "map-sequence-playing",
  "contours-growing",
  "dots-visible",
  "mountains-visible",
  "labels-visible",
  "map-sequence-complete"
];

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function typeIntroText(element, text, speed, run) {
  element.textContent = "";
  element.classList.add("is-typing");
  for (const character of Array.from(text)) {
    if (run !== introSequenceRun) return false;
    element.textContent += character;
    await wait(/[，。]/.test(character) ? speed * 2 : speed);
  }
  element.classList.remove("is-typing");
  return run === introSequenceRun;
}

function cancelIntroSequence() {
  introSequenceRun += 1;
  introTitle?.classList.remove("is-typing");
  introDescription?.classList.remove("is-typing");
}

function resetIntroVisuals() {
  introScreen?.classList.remove(...introSequenceClasses);
}

async function playIntroSequence() {
  if (!introScreen || !introTitle || !introDescription || !introEntry) return;
  const run = ++introSequenceRun;
  resetIntroVisuals();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    introTitle.textContent = introTitleText;
    introDescription.textContent = introDescriptionText;
    return;
  }

  introTitle.textContent = "";
  introDescription.textContent = "";
  introScreen.classList.add("sequence-playing");
  void introScreen.offsetWidth;
  introScreen.classList.add("background-revealing");

  await wait(280);
  if (!(await typeIntroText(introTitle, introTitleText, 86, run))) return;
  await wait(850);
  if (run !== introSequenceRun) return;
  introScreen.classList.add("star-visible");

  await wait(850);
  if (!(await typeIntroText(introDescription, introDescriptionText, 70, run))) return;
  await wait(360);
  if (run !== introSequenceRun) return;
  introScreen.classList.add("entry-dot-visible");

  await wait(520);
  if (run !== introSequenceRun) return;
  introScreen.classList.add("entry-message-visible");

  await wait(700);
  if (run !== introSequenceRun) return;
  introScreen.classList.add("entry-link-visible", "sequence-complete");
}

function playNewTraceNotice() {
  if (!stageNoticeIcon) return;
  stageNoticeIcon.classList.remove("is-flashing");
  void stageNoticeIcon.offsetWidth;
  stageNoticeIcon.classList.add("is-flashing");
}

function cancelMapSequence() {
  mapSequenceRun += 1;
}

function resetMapVisuals() {
  mapScreen?.classList.remove(...mapSequenceClasses);
}

async function playMapSequence() {
  if (!mapScreen) return;
  const run = ++mapSequenceRun;
  resetMapVisuals();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  mapScreen.classList.add("map-sequence-playing");
  void mapScreen.offsetWidth;
  mapScreen.classList.add("contours-growing");

  await wait(980);
  if (run !== mapSequenceRun) return;
  mapScreen.classList.add("dots-visible");

  await wait(1220);
  if (run !== mapSequenceRun) return;
  mapScreen.classList.add("mountains-visible");

  await wait(680);
  if (run !== mapSequenceRun) return;
  mapScreen.classList.add("labels-visible");

  await wait(760);
  if (run !== mapSequenceRun) return;
  mapScreen.classList.add("map-sequence-complete");
}

function showScreen(name) {
  const previousScreen = screens.find((screen) => screen.classList.contains("active"))?.dataset.screen;
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === name);
  });
  phone.classList.toggle("home-active", name === "home");
  if (name !== "map") closeTopic();
  if (name !== "map") closeTrace();
  if (name !== "map") closeTopicMenu();
  if (name !== "map") closeSharePage();
  if (name !== "map") closeMapSharePage();
  if (name !== "map") closeRange();
  if (name !== "map") closeStatSheets();
  if (name !== "map") closeFlameModal();
  if (name !== "map") closeMosaicModal();
  if (name !== "map") closeMoreMenu();
  if (name !== "map") hideRegenerateToast();
  if (name !== "map") closeReadingGuide();
  if (name !== "map") closeEchoDetail();
  if (name === "intro") playIntroSequence();
  else cancelIntroSequence();
  if (name === "map" && previousScreen !== "map" && phone.dataset.userStage === "first") playMapSequence();
  else if (name !== "map") cancelMapSequence();
  else if (phone.dataset.userStage !== "first") {
    cancelMapSequence();
    resetMapVisuals();
  }
}

function openTopic() {
  showScreen("map");
  closeTrace();
  closeSharePage();
  closeMapSharePage();
  closeTopicMenu();
  closeMoreMenu();
  closeReadingGuide();
  closeMosaicModal();
  closeRange();
  closeStatSheets();
  mapImage.classList.add("selected");
  topicSheet.classList.add("open");
  topicSheet.classList.remove("expanded");
  dialogBox.classList.remove("expanded");
  topicSheet.querySelector(".expand-button").firstChild.textContent = "展开";
}

function closeTopic() {
  closeTopicMenu();
  mapImage.classList.remove("selected");
  topicSheet.classList.remove("open", "expanded");
  dialogBox.classList.remove("expanded");
}

function openTrace() {
  showScreen("map");
  closeTopic();
  closeSharePage();
  closeMapSharePage();
  closeMoreMenu();
  closeReadingGuide();
  closeMosaicModal();
  closeRange();
  closeStatSheets();
  traceSheet.classList.add("open");
  traceSheet.setAttribute("aria-hidden", "false");
}

function closeTrace() {
  traceSheet.classList.remove("open");
  traceSheet.setAttribute("aria-hidden", "true");
}

function openTopicMenu() {
  closeMoreMenu();
  closeReadingGuide();
  topicActionMenu.classList.add("open");
  topicActionMenu.setAttribute("aria-hidden", "false");
}

function closeTopicMenu() {
  topicActionMenu.classList.remove("open");
  topicActionMenu.setAttribute("aria-hidden", "true");
}

function openSharePage() {
  closeTopicMenu();
  closeMapSharePage();
  sharePage.classList.add("open");
  sharePage.setAttribute("aria-hidden", "false");
}

function closeSharePage() {
  sharePage.classList.remove("open");
  sharePage.setAttribute("aria-hidden", "true");
}

function openMapSharePage() {
  showScreen("map");
  closeTopic();
  closeTopicMenu();
  closeSharePage();
  closeRange();
  closeStatSheets();
  closeFlameModal();
  closeMosaicModal();
  closeMoreMenu();
  closeReadingGuide();
  closeEchoDetail();
  mapSharePage.classList.add("open");
  mapSharePage.setAttribute("aria-hidden", "false");
}

function closeMapSharePage() {
  mapSharePage.classList.remove("open");
  mapSharePage.setAttribute("aria-hidden", "true");
}

function openEchoDetail() {
  echoDetailPage.classList.add("open");
  echoDetailPage.setAttribute("aria-hidden", "false");
}

function closeEchoDetail() {
  echoDetailPage.classList.remove("open");
  echoDetailPage.setAttribute("aria-hidden", "true");
}

function refreshRandomEcho(target) {
  if (randomEchoSheet.classList.contains("loading-state")) return;
  window.clearTimeout(randomRefreshTimer);
  target.classList.add("loading");
  target.disabled = true;
  target.setAttribute("aria-busy", "true");
  randomEchoSheet.classList.add("loading-state");
  randomRefreshTimer = window.setTimeout(() => {
    target.classList.remove("loading");
    target.disabled = false;
    target.removeAttribute("aria-busy");
    randomEchoSheet.classList.remove("loading-state");
  }, 1600);
}

function toggleExpand() {
  const expanded = !topicSheet.classList.contains("expanded");
  topicSheet.classList.toggle("expanded", expanded);
  dialogBox.classList.toggle("expanded", expanded);
  topicSheet.querySelector(".expand-button").firstChild.textContent = expanded ? "收起" : "展开";
}

function openRange() {
  closeTopicMenu();
  closeSharePage();
  closeMapSharePage();
  closeMoreMenu();
  closeReadingGuide();
  closeMosaicModal();
  closeTopic();
  closeStatSheets();
  rangeSheet.classList.add("open");
  rangeSheet.setAttribute("aria-hidden", "false");
}

function closeRange() {
  rangeSheet.classList.remove("open");
  rangeSheet.setAttribute("aria-hidden", "true");
}

function selectRange(target) {
  const selected = !target.classList.contains("selected");
  target.classList.toggle("selected", selected);
  target.setAttribute("aria-checked", String(selected));

  const selectedRanges = [...rangeSheet.querySelectorAll('.range-option.selected:not(:disabled)')]
    .map((option) => option.dataset.range);
  document.querySelectorAll("[data-range-avatar]").forEach((avatar) => {
    avatar.hidden = !selectedRanges.includes(avatar.dataset.rangeAvatar);
  });
  rangeButton.setAttribute(
    "aria-label",
    selectedRanges.length ? `已选择：${selectedRanges.join("、")}` : "暂未选择角色"
  );
}

function openStatSheet(id) {
  showScreen("map");
  closeTopicMenu();
  closeSharePage();
  closeMapSharePage();
  closeMoreMenu();
  closeReadingGuide();
  closeMosaicModal();
  closeTopic();
  closeRange();
  closeFlameModal();
  statSheets.forEach((sheet) => {
    const open = sheet.id === id;
    sheet.classList.toggle("open", open);
    sheet.setAttribute("aria-hidden", String(!open));
  });
}

function closeStatSheets() {
  window.clearTimeout(randomRefreshTimer);
  randomEchoSheet.classList.remove("loading-state");
  const refreshButton = randomEchoSheet.querySelector(".random-refresh");
  refreshButton.classList.remove("loading");
  refreshButton.disabled = false;
  refreshButton.removeAttribute("aria-busy");
  statSheets.forEach((sheet) => {
    sheet.classList.remove("open");
    sheet.setAttribute("aria-hidden", "true");
  });
}

function openFlameModal() {
  showScreen("map");
  closeTopicMenu();
  closeSharePage();
  closeMapSharePage();
  closeMoreMenu();
  closeReadingGuide();
  closeMosaicModal();
  closeTopic();
  closeRange();
  closeStatSheets();
  flameModal.classList.add("open");
  flameModal.setAttribute("aria-hidden", "false");
  centerFireButton?.setAttribute("aria-expanded", "true");
}

function closeFlameModal() {
  flameModal.classList.remove("open");
  flameModal.setAttribute("aria-hidden", "true");
  centerFireButton?.setAttribute("aria-expanded", "false");
}

function openMosaicModal() {
  showScreen("map");
  closeTopicMenu();
  closeSharePage();
  closeMapSharePage();
  closeMoreMenu();
  closeReadingGuide();
  closeTopic();
  closeRange();
  closeStatSheets();
  closeFlameModal();
  mosaicModal.classList.add("open");
  mosaicModal.setAttribute("aria-hidden", "false");
}

function closeMosaicModal() {
  mosaicModal.classList.remove("open");
  mosaicModal.setAttribute("aria-hidden", "true");
}

function openMoreMenu() {
  showScreen("map");
  closeTopicMenu();
  closeSharePage();
  closeMapSharePage();
  closeReadingGuide();
  moreMenu.classList.add("open");
  moreMenu.setAttribute("aria-hidden", "false");
}

function closeMoreMenu() {
  moreMenu.classList.remove("open");
  moreMenu.setAttribute("aria-hidden", "true");
}

function showRegenerateToast() {
  closeMoreMenu();
  window.clearTimeout(regenerateToastTimer);
  regenerateToast.classList.add("open");
  regenerateToast.setAttribute("aria-hidden", "false");
  regenerateToastTimer = window.setTimeout(hideRegenerateToast, 1800);
}

function hideRegenerateToast() {
  window.clearTimeout(regenerateToastTimer);
  regenerateToast.classList.remove("open");
  regenerateToast.setAttribute("aria-hidden", "true");
}

function openReadingGuide() {
  closeMoreMenu();
  readingModal.classList.add("open");
  readingModal.setAttribute("aria-hidden", "false");
}

function closeReadingGuide() {
  readingModal.classList.remove("open");
  readingModal.setAttribute("aria-hidden", "true");
}

function showVersion(version) {
  versionTabs.forEach((tab) => {
    const selected = tab.dataset.version === version;
    tab.classList.toggle("selected", selected);
    tab.setAttribute("aria-selected", String(selected));
  });
  versionPanels.forEach((panel) => {
    const active = panel.dataset.versionPanel === version;
    panel.classList.toggle("active", active);
    panel.hidden = !active;
  });
  if (version === "v1") showDemoScene("intro");
  if (version === "v2") showDemoScene("range");
  if (version === "v3") showDemoScene("topic");
}

function showDemoScene(scene) {
  closeTopic();
  closeRange();
  if (scene === "intro") showScreen("intro");
  if (scene === "range") {
    showScreen("map");
    openRange();
  }
  if (scene === "topic") openTopic();
}

function setEntry(entry) {
  if (!["chat", "world"].includes(entry)) return;
  entryButtons.forEach((button) => {
    const selected = button.dataset.entry === entry;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-checked", String(selected));
  });
  phone.dataset.entry = entry;
}

function setUserStage(stage) {
  if (!["first", "second", "inactive"].includes(stage)) return;

  userStageButtons.forEach((button) => {
    const selected = button.dataset.userStage === stage;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-checked", String(selected));
    button.querySelector(".user-stage-state").textContent = selected ? "当前" : "切换";
  });

  phone.dataset.userStage = stage;
  phone.classList.remove("inactive-card-dismissed");

  closeTopic();
  closeRange();
  closeStatSheets();
  closeFlameModal();
  closeMosaicModal();
  closeMoreMenu();
  closeReadingGuide();
  closeSharePage();
  closeMapSharePage();
  closeEchoDetail();

  stageNoticeText.textContent = stage === "inactive"
    ? "好久不见，钟辰时仍记得你们留下的心迹"
    : "你的心迹地图被火光又照亮了一些";
  stageNoticeAction.textContent = "去看看";
  flameStatusDescription.textContent = stage === "inactive"
    ? "你不在的这段时间，火光逐渐暗了下来"
    : "心迹地图正在长成，心中火光逐渐被点亮…";

  showScreen(stage === "inactive" ? "map" : "home");
  if (stage !== "inactive") playNewTraceNotice();
}

function enterCurrentStage() {
  if (phone.dataset.userStage === "first") {
    showScreen("intro");
    return;
  }
  showScreen("map");
}

function leaveMapForCurrentStage() {
  if (phone.dataset.userStage === "first") {
    showScreen("intro");
    return;
  }
  showScreen("home");
}

document.addEventListener("click", (event) => {
  const inspirationEdit = event.target.closest("[data-inspiration-edit]");
  if (inspirationEdit && homeChatThread?.contains(inspirationEdit)) {
    const message = inspirationEdit.dataset.inspirationEdit;
    if (message && homeComposerMode === "scene" && homeLiveSceneInput) {
      homeLiveSceneInput.value = message;
      homeLiveSceneInput.dispatchEvent(new Event("input", { bubbles: true }));
      homeLiveSceneInput.focus();
    } else if (message && homeChatInput) {
      homeChatInput.value = message;
      homeChatInput.dispatchEvent(new Event("input", { bubbles: true }));
      resizeHomeChatInput();
      homeChatInput.focus();
    }
    return;
  }
  const inspirationReply = event.target.closest("[data-inspiration-reply]");
  if (inspirationReply && homeChatThread?.contains(inspirationReply)) {
    const message = inspirationReply.dataset.inspirationReply;
    if (message && homeComposerMode === "scene" && homeLiveSceneInput) {
      homeLiveSceneInput.value = message;
      homeLiveSceneInput.dispatchEvent(new Event("input", { bubbles: true }));
      homeLiveSceneForm?.requestSubmit();
    } else if (message && homeChatInput) {
      homeChatInput.value = message;
      homeChatInput.dispatchEvent(new Event("input", { bubbles: true }));
      resizeHomeChatInput();
      homeChatForm?.requestSubmit();
    }
    return;
  }
  const inspirationButton = event.target.closest('button[aria-label="灵感回复"]');
  if (inspirationButton && homeChatThread?.contains(inspirationButton)) {
    toggleHomeInspirationReplies(inspirationButton);
    return;
  }
  const continueButton = event.target.closest('button[aria-label="继续"]');
  if (continueButton && homeChatThread?.contains(continueButton)) {
    advanceHomeStory(continueButton);
    return;
  }
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;
  if (action === "home" || action === "intro" || action === "map") showScreen(action);
  if (action === "topic") openTopic();
  if (action === "open-trace") openTrace();
  if (action === "close-trace") closeTrace();
  if (action === "close-topic") closeTopic();
  if (action === "open-topic-menu") openTopicMenu();
  if (action === "open-share-page") openSharePage();
  if (action === "close-share-page") closeSharePage();
  if (action === "open-map-share") openMapSharePage();
  if (action === "close-map-share") closeMapSharePage();
  if (action === "open-echo-detail") openEchoDetail();
  if (action === "close-echo-detail") closeEchoDetail();
  if (action === "refresh-random") refreshRandomEcho(target);
  if (action === "expand") toggleExpand();
  if (action === "range") openRange();
  if (action === "close-range") closeRange();
  if (action === "open-random") openStatSheet("randomEchoSheet");
  if (action === "open-fate") openStatSheet("randomSheet");
  if (action === "open-fate-detail") openStatSheet("fateSheet");
  if (action === "back-to-role-sheet") openStatSheet("randomSheet");
  if (action === "close-stat") closeStatSheets();
  if (action === "open-flame") openFlameModal();
  if (action === "close-flame") closeFlameModal();
  if (action === "open-mosaic-topic") openMosaicModal();
  if (action === "close-mosaic-topic") closeMosaicModal();
  if (action === "open-more-menu") openMoreMenu();
  if (action === "regenerate-map") showRegenerateToast();
  if (action === "open-reading-guide") openReadingGuide();
  if (action === "close-reading-guide") closeReadingGuide();
  if (action === "select-range") selectRange(target);
  if (action === "version") showVersion(target.dataset.version);
  if (action === "demo-scene") showDemoScene(target.dataset.scene);
  if (action === "entry") setEntry(target.dataset.entry);
  if (action === "user-stage") setUserStage(target.dataset.userStage);
  if (action === "stage-entry") enterCurrentStage();
  if (action === "map-back") leaveMapForCurrentStage();
  if (action === "toggle-report") {
    const reportGuide = target.closest(".report-guide");
    const collapsed = reportGuide?.classList.toggle("is-collapsed") || false;
    target.setAttribute("aria-expanded", String(!collapsed));
    target.setAttribute("aria-label", collapsed ? "展开方案说明" : "收起方案说明");
  }
  if (action === "dismiss-inactive-card") phone.classList.add("inactive-card-dismissed");
  if (action === "delete") {
    closeTopicMenu();
    if (!deleteDialog.open) deleteDialog.show();
    phone.classList.add("delete-open");
  }
  if (action === "cancel-delete") {
    deleteDialog.close();
    phone.classList.remove("delete-open");
  }
  if (action === "confirm-delete") {
    deleteDialog.close();
    phone.classList.remove("delete-open");
    closeTopic();
    showScreen("map");
  }
});
