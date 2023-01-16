const menu = document.getElementById('menu')
function menu1() {
	if (document.getElementById('hamburger').style.display === 'none') {
		document.getElementById('hamburger').style.display = 'flex'
	} else {
		document.getElementById('hamburger').style.display = 'none'
	}
}

menu.addEventListener('click', menu1)
