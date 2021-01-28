$(document).ready(function () {
  console.log('jQuery loaded');

  const $h1 = $('h1');
  console.log($h1);

  $h1.css('background-color', 'blue');

  $('h2').addClass('froggy');

  const $h2 = $('h2');
  $h2.addClass('froggy');

  console.log($h2);

  // $('.froggy').css('background-color', 'blue');

  console.log('javascript loaded!');
});
