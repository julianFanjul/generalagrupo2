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
var player = false;
var jugador1 = "";
var jugador2 = "";
var chequedpoint = "";
var pointscheck = "";
var valor2 = 0;
var puntosEq1 = 0;
var puntosEq2 = 0;
var vueltas = 0;

//las funcionas mostrar colocan los valores correspondientes al modal que se abre cuando tocas poner los puntos

//funcion mostrar es la que se ejecuta cuando queres anotar un numero del 1 al 6
function mostrar(num) {
  valor2 = parseInt(num);
  $$('.player2').on('click', function () {
    player = "2";
    console.log('andando player 2 ' + player);
  })
  $$('.player1').on('click', function () {
    player = "1"
    console.log('andando player 1 ' + player);
  })
  for (let i = 0; i <= 5; i++) {
    pointscheck = num * i;
    $$('#' + i).text(pointscheck);
    chequedpoint = num;
  }
}
//funcion mostrar es la que se ejecuta cuando queres anotar un numero del 1 al 6

//funcion mostrar2 es la que se ejecuta cuando tenes que mostrar para escalera poker o generala
function mostrar2(num) {
  valor2 = parseInt(num);
  for (let i = 0; i <= 2; i++) {
    if (i == 1) { pointscheck = num; } else if (i == 2) { pointscheck = num + 5; }
    $$('#e' + i).text(pointscheck);
    switch (num) {
      case 20: chequedpoint = "7";
        break;
      case 30: chequedpoint = "8";
        break;
      case 40: chequedpoint = "9";
        break;
      case 50: chequedpoint = "10";
        break;
      case 100: chequedpoint = "11";
        break;
    }
    chequedpoint = num;
  }
}
//funcion mostrar2 es la que se ejecuta cuando tenes que mostrar para escalera poker o generala
//las funcionas mostrar colocan los valores correspondientes al modal que se abre cuando tocas poner los puntos

function anotar(r) {
  switch (r) {
    case 1:
      if ($$('input:checked').val() <= 5) {
        var multiplo = $$('input:checked').val();
        var suma = parseInt(multiplo) * valor2;
        $$('#' + player + chequedpoint).text(suma);
        if (player == "1") { console.log('sumando a equipo1'); puntosEq1 += parseInt(suma); $$('#totalEq1').text(puntosEq1); } else if (player == "2") { console.log('sumando a equipo2'); puntosEq2 += parseInt(suma); $$('#totalEq2').text(puntosEq2); }
      } else if ($$('input:checked').val() == 6) {
        $$('#' + player + chequedpoint).text('-');
      } else {
        $$('#' + player + chequedpoint).text('x');
      }
      break;
    case 2:

      if ($$('input:checked').val() == 1) {
        $$('#' + player + chequedpoint).html(valor2);
        if (player == 1) {
          puntosEq1 += parseInt(valor2);
          $$('#totalEq1').text(puntosEq1);
        } else if (player == 2) {
          puntosEq2 += parseInt(valor2);
          $$('#totalEq2').text(puntosEq2);
        }
      }
      else if ($$('input:checked').val() == 2) {
        valor2 += 5;
        if (player == "1") { puntosEq1 += valor2; $$('#totalEq1').text(puntosEq1); } else if (player == "2") { puntosEq2 += valor2; $$('#totalEq2').text(puntosEq2); }
        $$('#' + player + chequedpoint).html(valor2);
      } else if ($$('input:checked').val() == 6) {
        $$('#' + player + chequedpoint).text('-');
      } else {
        $$('#' + player + chequedpoint).text('x');
      }
      break;
  }
}


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

$$(document).on('page:init', '.page[data-name="contador"]', function (e) {
  $$('#player1').text(jugador1.toUpperCase());
  $$('#player2').text(jugador2.toUpperCase());
})