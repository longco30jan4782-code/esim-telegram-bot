const choiceButtons = document.querySelectorAll('[data-choice]');
const userBubble = document.querySelector('#user-bubble');

choiceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    userBubble.textContent = button.dataset.choice;
    choiceButtons.forEach((item) => item.classList.remove('selected'));
    button.classList.add('selected');
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));
