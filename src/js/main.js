const tabs = document.querySelectorAll('.tab');
const tabPanel = document.querySelectorAll('.tab-panel');
let allButton = Array.from(tabs)
let allPanle = Array.from(tabPanel)
 
 
allButton.map(tab => {
  tab.addEventListener('click', function() {
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



 

 