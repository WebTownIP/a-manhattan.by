;(function(){
  var initialize = function () {
    var mapCanvas = document.getElementsByClassName('map');
    var mapOptions = {
      center: new google.maps.LatLng(52.425880, 31.013291),
      zoom: 18,
      mapMaker: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false
    }
    var map = new google.maps.Map(mapCanvas[0], mapOptions)

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.425880, 31.013291),
      map: map,
      title: 'Антикафе'
    })

    var contactsDiv = document.createElement('address')
    contactsDiv.className = 'contacts z-depth-2'
    contactsTitle = document.createElement('h5')
    contactsTitle.innerHTML = 'Контакты'
    contactsBody = document.createElement('div')
    contactsBody.innerHTML = '<p>Время работы: с 10.00 – до 23.00</p><p>Адрес: ул.Трудовая, д.3а, этаж 3</p><p>Телефон: +375291372132</p>'
    contactsDiv.appendChild(contactsTitle)
    contactsDiv.appendChild(contactsBody)
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(contactsDiv);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
})()
