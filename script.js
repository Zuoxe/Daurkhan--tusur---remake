new Swiper('.events-swiper-container',{
    slidesPerView: 3,
    spaceBetween: 60,
    navigation:{
        nextEl:'.swiper-button--next',
        prevEl:'.swiper-button--prev'
    },
    pagination:{
        el:'.swiper--pagination',
        clicable:true,
    },
});



let center = [56.493953473786746,84.96284370468867];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 17
	});

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: './images/Group-location.png',
        iconImageSize:[90,71],
        iconImageOffset:[-5,-65]

	});
    

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark);

}

ymaps.ready(init);