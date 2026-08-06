const drawer = document.querySelector('#drawer');
const drawerMask = document.querySelector('#drawerMask');
function setDrawer(open) {
  drawer.classList.toggle('open', open);
  drawerMask.classList.toggle('open', open);
  drawer.setAttribute('aria-hidden', String(!open));
}
[document.querySelector('#drawerOpen'), document.querySelector('#menuButton')]
  .forEach((button) => button.addEventListener('click', () => setDrawer(true)));
document.querySelector('#drawerClose').addEventListener('click', () => setDrawer(false));
drawerMask.addEventListener('click', () => setDrawer(false));

const roles = [...document.querySelectorAll('.role')];
const miniRoles = [...document.querySelectorAll('.mini-roles button')];
const events = [...document.querySelectorAll('.event')];
let selectedRole = null;
function filterByRole(name) {
  selectedRole = selectedRole === name ? null : name;
  roles.forEach((item) => item.classList.toggle('selected', item.dataset.role === selectedRole));
  miniRoles.forEach((item) => item.classList.toggle('selected', item.dataset.role === selectedRole));
  events.forEach((event) => event.classList.toggle('is-hidden', Boolean(selectedRole) && event.dataset.role !== selectedRole));
  document.querySelectorAll('.day').forEach((day) => {
    let next = day.nextElementSibling;
    let visible = false;
    while (next && !next.classList.contains('day')) {
      if (next.classList.contains('event') && !next.classList.contains('is-hidden')) visible = true;
      next = next.nextElementSibling;
    }
    day.classList.toggle('is-hidden', !visible);
  });
}
roles.forEach((role) => role.addEventListener('click', () => filterByRole(role.dataset.role)));
miniRoles.forEach((role) => role.addEventListener('click', () => filterByRole(role.dataset.role)));

const awareOverlay = document.querySelector('#awareOverlay');
document.querySelectorAll('.stat-aware, .aware-trigger').forEach((button) => button.addEventListener('click', () => {
  awareOverlay.classList.add('open');
  awareOverlay.setAttribute('aria-hidden', 'false');
}));
document.querySelectorAll('[data-dismiss-aware]').forEach((button) => button.addEventListener('click', () => {
  awareOverlay.classList.remove('open');
  awareOverlay.setAttribute('aria-hidden', 'true');
}));

const content = document.querySelector('#content');
const constellation = document.querySelector('.constellation');
const stickySummary = document.querySelector('#stickySummary');
let snapTimer;
content.addEventListener('scroll', () => {
  const progress = Math.max(0, Math.min(1, (content.scrollTop - 150) / 80));
  constellation.style.opacity = String(1 - progress);
  constellation.style.transform = `scale(${1 - progress * .18})`;
  stickySummary.style.opacity = String(progress);
  stickySummary.style.transform = `translateY(${(1 - progress) * 12}px)`;
  stickySummary.classList.toggle('active', progress > .92);
  clearTimeout(snapTimer);
  if (content.scrollTop > 0 && content.scrollTop < 230) {
    snapTimer = setTimeout(() => content.scrollTo({ top: content.scrollTop >= 115 ? 230 : 0, behavior: 'smooth' }), 110);
  }
}, { passive: true });

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const orbitStart = performance.now();
function animateOrbits(now) {
  roles.forEach((role) => {
    const radius = role.dataset.orbit === 'inner' ? 92 : 141;
    const start = Number(role.dataset.angle) * Math.PI / 180;
    const duration = Number(role.dataset.duration) * 1000;
    const angle = start + ((now - orbitStart) % duration) / duration * Math.PI * 2;
    role.style.transform = `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`;
  });
  requestAnimationFrame(animateOrbits);
}
if (!reduceMotion) requestAnimationFrame(animateOrbits);
