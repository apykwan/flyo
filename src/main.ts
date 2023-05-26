import './style.css';

type SvgInHtml = HTMLElement & SVGElement;

const themeToggleBtn = document.getElementById('theme-toggle') as HTMLButtonElement;
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon') as SvgInHtml;
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon') as SvgInHtml;

 if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    // Show light icon
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    themeToggleDarkIcon.classList.remove('hidden');
  }

  // Listen for toggle button click
  themeToggleBtn.addEventListener('click', toggleMode)

  function toggleMode(): void {
    // Toggle
    themeToggleLightIcon.classList.toggle('hidden');
    themeToggleDarkIcon.classList.toggle('hidden');

    // If is set in localstorage
    if (localStorage.getItem('color-theme')) {
      // If light, make dark and save in localstorage
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else if (localStorage.getItem('color-theme') === 'dark') {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    } else {
      // If not in localstorage
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  }