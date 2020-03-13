const info = document.querySelector('.tabs__nav'),
	tab = document.querySelectorAll('.tabs__nav__item'),
	tabBlock = document.querySelectorAll('.tabs__block');

function hideContent(a) {
	//Циклом скрываем все табы, кроме активного
	for (let i = a; i < tabBlock.length; i++) {
		tabBlock[i].classList.remove('show');
		tabBlock[i].classList.add('hide');
		tab[i].classList.remove('color'); //Цвет вкладки
	}
}

hideContent(1); //В функцию передаём индекс массива, начиная с которога хотим скрыть последующие табы. По умолчанию открыт первый таб с индексом 0, остальные, начиная с индекса 1, закрыты

function showContent(b) {
	if (tabBlock[b].classList.contains('hide')) {
		tabBlock[b].classList.remove('hide');
		tabBlock[b].classList.add('show');
		tab[b].classList.add('color'); //Цвет вкладки
	}
}

info.addEventListener('click', function (e) {
	const target = e.target;
	if (target && target.classList.contains('tabs__nav__item')) {
		for (let i = 0; i < tab.length; i++) {
			if (target == tab[i]) {
				hideContent(0);
				showContent(i);
				break;
			}
		}
	}
});
