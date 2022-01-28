
const btn = document.getElementById('menu-btn');
const mobmenu = document.getElementById('mob-menu');

function navToggle() {
	// adds / removes open class from btn element
	btn.classList.toggle('open');
	mobmenu.classList.toggle('hidden');
	document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', navToggle)