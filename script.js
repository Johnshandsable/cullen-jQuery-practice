$(document).ready(function () {
  console.log('jQuery loaded');

  const $h1 = $('h1');
  // console.log($h1);

  $h1.css('background-color', 'blue');

  $('h2').addClass('froggy');

  const $h2 = $('h2');
  $h2.addClass('froggy');

  // console.log($h2);

  // $('.froggy').css('background-color', 'blue');

  console.log('javascript loaded!');

  let someRandVariable = 'as;ldfjkaslkdfj';

  $('#js-formSubmit').on('click', function (event) {
    event.preventDefault();
    console.log('button clicked');
    $('#js-uselessList').append(`<li> 
    ${someRandVariable} - ${someRandVariable} - ${someRandVariable}
    </li>`);
  });

  $('#js-formSubmit').on('click', function () {
    $('body').append(`<button class="deleteButton">Delete Me</button>`);
  });

  $('body').on('click', '.deleteButton', function () {
    $(this).parent().remove(); // it kinda worked
    // $(this).remove();
  });
});
