
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
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/inicio/',
      url: 'inicio.html',
    },
  ]
  // ... other parameters
});

var mainView = app.views.create('.view-main');

var jugador1 = "dfdfdf";
var jugador2 = "dfdfdf";



// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
  console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
  // Do something here when page loaded and initialized

})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="inicio"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  $$('#comenzarcont').on('click', function () {
    alert('andando');
    jugador1 = $$('#jugador1').val();
    jugador2 = $$('#jugador2').val();
    alert(jugador2 + jugador1);
  })
  alert('Helsddssdsdsdo');
  console.log(jugador2);
})

$$(document).on('page:init', '.page[data-name="inicio"]', function (e) {

  console.log(e);

})