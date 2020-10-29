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
      path: '/contador2/',
      url: 'contador2.html',
      options: {
        transition: 'f7-circle',
      },
    },
    {
      path: '/index/',
      url: 'index.html',
      options: {
        transition: 'f7-circle',
      },
    },
  ]
  // ... other parameters
});
//declaraciones globales
var mainView = app.views.create('.view-main');
let player = "";
let jugador1 = "1";
let jugador2 = "";
let jugador3 = "";
let jugador4 = "";
let jugador5 = "";
let jugador6 = "";
var botonPulsado = "";
let chequedpoint = "";
let pointscheck = "";
let valor2 = 0;
let puntosEq1 = 0;
let puntosEq2 = 0;
let puntosEq3 = 0;
let puntosEq4 = 0;
let puntosEq5 = 0;
let puntosEq6 = 0;
let vueltas = 0;
let tiradasPlayer1 = 0;
var dados = ["1", "2", "3", "4", "5", "6"];
var jugadores = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis"];
var losJuegos = [20, 30, 40, 50, 100];
var tipoDeJuego = ["1", "2", "3", "4", "5", "6", "E", "F", "P", "G", "GD", "TOTAL"];
let cantidadJugadores = 0;
//declaraciones globales

//esta funcion suma los valores totales al final de la columna de cada equipo
function sumarValor(v) {
  var sumarEsto = v;
  switch (player) {
    case jugadores[1]: puntosEq1 += parseInt(sumarEsto); $$('.' + player + 'points').text(puntosEq1);
      break;
    case jugadores[2]: puntosEq2 += parseInt(sumarEsto); $$('.' + player + 'points').text(puntosEq2);
      break;
    case jugadores[3]: puntosEq3 += parseInt(sumarEsto); $$('.' + player + 'points').text(puntosEq3);
      break;
    case jugadores[4]: puntosEq4 += parseInt(sumarEsto); $$('.' + player + 'points').text(puntosEq4);
      break;
    case jugadores[5]: puntosEq5 += parseInt(sumarEsto); $$('.' + player + 'points').text(puntosEq5);
      break;
    case jugadores[6]: puntosEq6 += parseInt(sumarEsto); $$('.' + player + 'points').text(puntosEq6);
      break;
  }
}
//esta funcion suma los valores totales al final de la columna de cada equipo

//esta funcion evita que si el boton ya fue clickeado vuelva a sumar ese valor 
function restarValor() {
  switch (player) {
    case jugadores[1]: tiradasJugador1 -= 1; puntosEq1 -= (parseInt($$('#' + botonPulsado + '>a').text()));
      break;
    case jugadores[2]: tiradasJugador2 -= 1; puntosEq2 -= (parseInt($$('#' + botonPulsado + '>a').text()));
      break;
    case jugadores[3]: tiradasJugador3 -= 1; puntosEq3 -= (parseInt($$('#' + botonPulsado + '>a').text()));
      break;
    case jugadores[4]: tiradasJugador4 -= 1; puntosEq4 -= (parseInt($$('#' + botonPulsado + '>a').text()));
      break;
    case jugadores[5]: tiradasJugador5 -= 1; puntosEq5 -= (parseInt($$('#' + botonPulsado + '>a').text()));
      break;
    case jugadores[6]: tiradasJugador6 -= 1; puntosEq6 -= (parseInt($$('#' + botonPulsado + '>a').text()));
      break;
  }
}//esta funcion evita que si el boton ya fue clickeado vuelva a sumar ese valor 

//esta funcion pinta los valores correspondientes al modal dependiendo de que boton se haya clickeado
function mostrar(num) {
  valor2 = parseInt(num);
  $$('.ejecuta').on('click', function () {
    botonPulsado = (this.id);
    player = (this.value);
  })
  if (valor2 > 6) {
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
  } else {
    for (let i = 0; i <= 5; i++) {
      pointscheck = num * i;
      $$('#' + i).text(pointscheck);
      chequedpoint = num;
    }
  }
}//esta funcion pinta los valores correspondientes al modal dependiendo de que boton se haya clickeado

//esta funcion anota los puntos en los lugares correspondientes
function anotar(r) {
  switch (r) {
    case 1:
      if ((parseInt($$('#' + botonPulsado + '>a').text())) > 0) { restarValor(); }
      if ($$('input:checked').val() <= 5) {
        var suma = parseInt($$('input:checked').val()) * valor2;
        $$('#' + botonPulsado + '>a').text(suma);
        $$('#' + botonPulsado).on('click', sumarValor(suma));
      } else if ($$('input:checked').val() == 6) {
        $$('#' + botonPulsado + '>a').text('-');
      }
      else {
        $$('#' + botonPulsado + '>a').text('x');
      }
      break;
    case 2:
      if ((parseInt($$('#' + botonPulsado + '>a').text())) > 0) { restarValor(); }
      if ($$('input:checked').val() == 1) {
        $$('#' + botonPulsado + '>a').html(valor2);
        $$('#' + botonPulsado).on('click', sumarValor(valor2));
      }
      else if ($$('input:checked').val() == 2) {
        valor2 += 5;
        $$('#' + botonPulsado + '>a').html(valor2);
        $$('#' + botonPulsado).on('click', sumarValor(valor2));
      } else if ($$('input:checked').val() == 6) {
        $$('#' + botonPulsado + '>a').text('-');
      }
      else if ($$('input:checked').val() == 7) {
        $$('#' + botonPulsado + '>a').text('x');
      } break;
  }
}//esta funcion anota los puntos en los lugares correspondientes

function limpiar() {
  $$('.unopoints').text("0");
  $$('.dospoints').text("0");
  $$('.trespoints').text("0");
  $$('.cuatropoints').text("0");
  $$('.cincopoints').text("0");
  $$('.seispoints').text("0");
  puntosEq1 = 0;
  puntosEq2 = 0;
  puntosEq3 = 0;
  puntosEq4 = 0;
  puntosEq5 = 0;
  puntosEq6 = 0;
  cantidadJugadores = 0;
  $$('.limpiaEste').text("-");
}

function terminar() {
  if (puntosEq1 > puntosEq2 && puntosEq1 > puntosEq3 && puntosEq1 > puntosEq4 && puntosEq1 > puntosEq5 && puntosEq1 > puntosEq6) { alert('gano equipo 1'); }
  if (puntosEq1 > puntosEq2 && puntosEq1 > puntosEq3 && puntosEq1 > puntosEq4 && puntosEq1 > puntosEq5 && puntosEq1 > puntosEq6) { alert('gano equipo 1'); }
  if (puntosEq1 > puntosEq2 && puntosEq1 > puntosEq3 && puntosEq1 > puntosEq4 && puntosEq1 > puntosEq5 && puntosEq1 > puntosEq6) { alert('gano equipo 1'); }
  if (puntosEq1 > puntosEq2 && puntosEq1 > puntosEq3 && puntosEq1 > puntosEq4 && puntosEq1 > puntosEq5 && puntosEq1 > puntosEq6) { alert('gano equipo 1'); }
  limpiar();
  location.reload();
  jugador1 = "1";
  jugador2 = "";
  jugador3 = "";
  jugador4 = "";
  jugador5 = "";
  jugador6 = "";
}

$$('#inicio').on('click', function () {
  cantidadJugadores = parseInt($$('input:checked').val());
})
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () { });

$$(document).on('page:init', function (e) { })
// con esto pintamos la cantidad de input correspondientes dependiendo de cuantos jugadores se hayan elegido
$$(document).on('page:init', '.page[data-name="inicio"]', function (e) {
  for (let i = 1; i <= cantidadJugadores; i++) {
    $$('#ingresoDeJugadores').append('<li class="item-content item-input "><div div class= "item-inner" ><div class="item-title item-label usuarios">Jugador' + i + '</div><div class="item-input-wrap"><input type="text" name="username" minlength="1" maxlength="10"placeholder="jugador' + i + ' " class="usuarios" id="jugador' + i + '"><span class="input-clear-button"></span></div></div></li > ');
  }// con esto pintamos la cantidad de input correspondientes dependiendo de cuantos jugadores se hayan elegido

  $$('#comenzarcont').on('click', function () {
    jugador1 = $$('#jugador1').val();
    jugador2 = $$('#jugador2').val();
    jugador3 = $$('#jugador3').val();
    jugador4 = $$('#jugador4').val();
    jugador5 = $$('#jugador5').val();
    jugador6 = $$('#jugador6').val();

    if ($$('#jugador1').val() == "" || $$('#jugador2 ').val() == "" || $$('#jugador3 ').val() == "" || $$('#jugador4 ').val() == "" || $$('#jugador5 ').val() == "" || $$('#jugador6 ').val() == "") {
      alert('se asignaran los nombres faltantes automaticamente');
    }
    if ($$('#jugador1').val() == "") { jugador1 = "j1"; }
    if ($$('#jugador2').val() == "") { jugador2 = "j2"; }
    if ($$('#jugador3').val() == "") { jugador3 = "j3"; }
    if ($$('#jugador4').val() == "") { jugador4 = "j4"; }
    if ($$('#jugador5').val() == "") { jugador5 = "j5"; }
    if ($$('#jugador5').val() == "") { jugador6 = "j6"; }
  })
})

$$(document).on('page:init', '.page[data-name="contador2"]', function (e) {
  function asignarNombres() {
    $$("#estosJugadores1").text(jugador1);
    $$('#estosJugadores2').text(jugador2);
    $$('#estosJugadores3').text(jugador3);
    $$('#estosJugadores4').text(jugador4);
    $$('#estosJugadores5').text(jugador5);
    $$('#estosJugadores6').text(jugador6);
  }
  //este for anidado pinta los botones correspondientes para poder anotar
  $$('#contador').append('<div id="btntipodejuego" class="col"><div class="button button-round">juegos</div></div>');
  for (let d = 0; d < tipoDeJuego.length; d++) {
    $$('#btntipodejuego').append('<button class="button button-outline button-round">' + tipoDeJuego[d] + '</button>');
  }
  for (let t = 1; t <= cantidadJugadores; t++) {
    $$('#contador').append('<div id="' + jugadores[t] + '" class="col"><div class="button button-round" id="estosJugadores' + t + '"></div>');
    for (let i = 1; i <= dados.length; i++) {
      $$('#' + jugadores[t]).append('<button value="' + jugadores[t] + '" class="button button-round ejecuta"  id="' + jugadores[t] + i + '"> <a class="link button button-outline button-round sheet-open limpiaEste ejecuta" href="#" data-sheet=".my-sheet" onclick="mostrar(' + i + ')">-</a></button>');
    }
    for (let i = 0; i < losJuegos.length; i++) {
      $$('#' + jugadores[t]).append('<button value="' + jugadores[t] + '" class="button button-round ejecuta" id="' + jugadores[t] + dados[1] + i + '"> <a class="link button button-outline button-round sheet-open ejecuta limpiaEste" href="#" data-sheet=".my-sheet2" onclick="mostrar(' + losJuegos[i] + ')" >-</a></button>');
    } $$('#' + jugadores[t]).append('<button class="button button-round ' + jugadores[t] + 'points' + '  ">0</button>');
  } asignarNombres();
  //este for anidado pinta los botones correspondientes para poder anotar
})

