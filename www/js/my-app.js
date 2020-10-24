
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/inicio/',
      url: 'inicio.html',
      options: {
        transition: 'f7-circle',
      },
    },
    //https://framework7.io/docs/view.html para transicion de pagina a pagina
    {
      path: '/contador/',
      url: 'contador.html',
      options: {
        transition: 'f7-circle',
      },
    },
  ]
  // ... other parameters
});

var mainView = app.views.create('.view-main');

var jugador1 = "";
var jugador2 = "";
var chequedpoint = "";
var pointscheck = "";
valor2 = 0;
var puntosEq1 = 0;




// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {

});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
  // Do something here when page loaded and initialized

})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="inicio"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  $$('#comenzarcont').on('click', function () {
    jugador1 = $$('#jugador1').val();
    jugador2 = $$('#jugador2').val();
  })

})

$$(document).on('page:init', '.page[data-name="inicio"]', function (e) {



})

function mostrar(num) {
  valor2 = parseInt(num);
  for (let i = 0; i <= 5; i++) {
    pointscheck = num * i;
    $$('#' + i).text(pointscheck);
    console.log(pointscheck);
    chequedpoint = num;
  }
}


function anotar() {

  if ($$('input:checked').val() <= 5) {
    var multiplo = $$('input:checked').val();
    var valor1 = parseInt(multiplo);
    var suma = valor1 * valor2;
    $$('#b' + chequedpoint).text(suma);
    puntosEq1 += parseInt(suma);
    $$('#totalEq1').text(puntosEq1);
  } else if ($$('input:checked').val() == 6) {
    $$('#b' + chequedpoint).text('-');
  } else {
    $$('#b' + chequedpoint).text('x');
  }


}




$$(document).on('page:init', '.page[data-name="contador"]', function (e) {
  $$('#player1').text(jugador1);
  $$('#player2').text(jugador2);







})