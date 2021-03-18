
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const toggleBar = document.getElementsByClassName('menu-area')[0];

toggleButton.addEventListener('click', () => {
	toggleBar.classList.toggle('active');
	
});