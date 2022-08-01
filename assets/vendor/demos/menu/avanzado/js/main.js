$(document).ready(function () { 
    $('#ver-burger').on('click', function () {
       $('#listado-burger').toggle('slow')
    })
    $('#ver-burger').on('click', function (e) {
       var uno = $('#listado-burger').offset().top
       e.preventDefault()
       $('html, body').animate({
          scrollTop: uno - 250
       }, 800)
    })
    $('#ver-drinks').on('click', function () {
       $('#listado-drinks').toggle('slow')
    })
    $('#ver-drinks').on('click', function (e) {
       var uno = $('#listado-drinks').offset().top
       e.preventDefault()
       $('html, body').animate({
          scrollTop: uno - 250
       }, 800)
    })
})