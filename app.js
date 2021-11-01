$(document).ready(function () {
    $('.tab').click(function(){
        // $('body').addClass('hello')
        $('.master').slideToggle()
        // $('.hello').click(function(){})
    })
})

$(document).on('click', function (e) {
    if(!$(e.target).hasClass('tab'))
      $(".master").slideUp();
  });


