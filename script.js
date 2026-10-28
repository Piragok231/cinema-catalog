// Находим кнопку переключения и корневой элемент страницы
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    // Получаем текущую тему
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    // Меняем её на противоположную
    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-theme', 'dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
    }
});
