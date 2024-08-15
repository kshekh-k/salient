const tabs = document.querySelectorAll('.tab');
const tabPanel = document.querySelectorAll('.tab-panel');
let allButton = Array.from(tabs)
let allPanle = Array.from(tabPanel)


allButton.map(tab => {
  tab.addEventListener('click', function () {
    // Remove aria-selected and hidden classes from all tabs and panels
    allButton.map(button => {
      button.setAttribute('aria-selected', 'false')
      button.classList.remove('bg-white', 'lg:bg-white/10', 'lg:ring-1', 'lg:ring-inset', 'lg:ring-white/10');
      button.classList.add('lg:hover:bg-white/5');
      button.children[0].classList.add('text-blue-100')
      button.children[0].classList.remove('text-blue-600')
    });
    allPanle.map(panel => panel.classList.add('hidden'));
    // Set aria-selected to true for the clicked tab
    this.setAttribute('aria-selected', 'true');
    this.classList.add('bg-white', 'lg:bg-white/10', 'lg:ring-1', 'lg:ring-inset', 'lg:ring-white/10');
    this.classList.remove('lg:hover:bg-white/5');
    this.children[0].classList.remove('text-blue-100')
    this.children[0].classList.add('text-blue-600')

    // Show the corresponding tab panel
    const panelId = this.getAttribute('aria-controls');
    document.getElementById(panelId).classList.remove('hidden');
  });
});


// Responsive Menu

const menuButton = document.getElementById('menu-button');
const ResMenu = document.getElementById('responsive-menu');
const ResMenuOverlay = document.getElementById('menu-overlay');
const iconMenuBar = document.querySelector('.icon-menu-bar');
const iconMenuClose = document.querySelector('.icon-menu-close');

menuButton.addEventListener('click', () => {
  iconMenuBar.classList.add('hidden');
  iconMenuClose.classList.remove('hidden');
  ResMenu.classList.remove('hidden');
  ResMenu.classList.add('flex');
  ResMenuOverlay.classList.remove('hidden');
  ResMenuOverlay.classList.add('flex');
  ResMenu.classList.add('transition-all', 'duration-300', 'ease-in-out');
  ResMenuOverlay.classList.add('transition-all', 'duration-300', 'ease-in-out');
});

ResMenuOverlay.addEventListener('click', () => {
  iconMenuBar.classList.remove('hidden');
  iconMenuClose.classList.add('hidden');
  ResMenu.classList.add('hidden');
  ResMenu.classList.remove('flex');
  ResMenuOverlay.classList.add('hidden');
  ResMenuOverlay.classList.remove('flex');
  ResMenu.classList.remove('transition-all', 'duration-300', 'ease-in-out');
  ResMenuOverlay.classList.remove('transition-all', 'duration-300', 'ease-in-out');
});

// Get Full year dynamic
const currentYear = new Date().getFullYear()
document.getElementById('getYear').innerHTML = currentYear


// Smooth parallax effect
const desktopMenu = document.getElementById('desktop-menu');
const footerpMenu = document.getElementById('footer-menu');
const footermenuItems = Array.from(footerpMenu.children)
const deskmenuItems = Array.from(desktopMenu.children)
const resmenuItems = Array.from(ResMenu.children)
const menuItems = [...deskmenuItems, ...resmenuItems, ...footermenuItems]
menuItems.map(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const startPosition = window.pageYOffset;
    const targetPosition = targetSection.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  });
})


function openTab(evt, tabId) {
  const tabs = document.querySelectorAll('.tabsss');
  tabs.forEach(tab => {
      tab.style.display = 'none';
      tab.classList.remove('tab-active');
  });

  const activeTab = document.getElementById(tabId);
  activeTab.style.display = 'block';

  const offset = [...tabs].indexOf(activeTab) * -100;
  activeTab.style.transform = `translateX(${offset}%)`;
  activeTab.classList.add('tab-active');
}



