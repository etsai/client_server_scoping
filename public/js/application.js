$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('#awesomeness_holder').text($(this).attr('data-heading'));
  });

  function skill_from_params() {
    param_array = window.location.href.split('/')
    return param_array[param_array.length-1]
  }

  $('.skill_teller').on('click', function() {
    $('#skill_holder').text(skill_from_params);
  });

  $('.meal_teller').on('click', function(e) {
    $.ajax({
      type: 'POST',
      url: this.action
    }).done(function(response){
      $('#meal_holder').text(response.food)
    })
  });
});


// Modify the meals page so the button updates the heading with a random meal from the meals instance variable.