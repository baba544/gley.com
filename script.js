const buttons = document.querySelectorAll('.social-button');
const profileLink = document.getElementById('profileLink');
const socialIcon = document.getElementById('socialIcon');
const handleEl = document.getElementById('profileHandle');
const descEl = document.getElementById('profileDesc');
const clickSound = document.getElementById('clickSound');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Відтворення звуку кліку
    clickSound.currentTime = 0;
    clickSound.play();

    // Отримуємо дані з кнопки
    const url = button.getAttribute('data-url');
    const icon = button.getAttribute('data-icon');
    const handleText = button.getAttribute('data-handle');
    const descText = button.getAttribute('data-desc');

    // Оновлюємо посилання, іконку та тексти у суцільній кнопці
    profileLink.href = url;
    socialIcon.src = icon;
    handleEl.textContent = handleText;
    descEl.textContent = descText;
  });
});

profileLink.addEventListener('click', () => {
  // Звук при кліку на суцільну кнопку
  clickSound.currentTime = 0;
  clickSound.play();
});