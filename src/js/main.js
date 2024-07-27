const tabs = document.querySelectorAll('.tab');
const tabPanel = document.querySelectorAll('.tab-panel');
let allButton = Array.from(tabs)
let allPanle = Array.from(tabPanel)
 
 
allButton.map(button => {
    button.addEventListener('click', () => {     
      allButton.map(btn => {
        btn.classList.remove('bg-white', 'lg:bg-white/10', 'lg:ring-1', 'lg:ring-inset', 'lg:ring-white/10'); 
        btn.children[0].classList.remove('text-blue-600')      
        btn.children[0].classList.add('text-blue-100')      
        btn.setAttribute('aria-selected', 'false');
      });

      allPanle.map(panel => panel.classList.add('hidden')); 
      button.classList.add('bg-white', 'lg:bg-white/10', 'lg:ring-1', 'lg:ring-inset', 'lg:ring-white/10');    
      button.setAttribute('aria-selected', 'true'); 
      button.children[0].classList.add('text-blue-600')
      button.children[0].classList.remove('text-blue-100')
      const tabId = button.getAttribute('aria-controls');
      document.getElementById(tabId).classList.remove('hidden');
    });
  });

 