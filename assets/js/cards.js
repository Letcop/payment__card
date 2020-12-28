$(document).ready(function () {
  $('.close_button').click(function () {
    $('.payment_card').hide();
  })

  $(".card_content").hide();
  $(".visa__card").show();

  $(".radio_wrap").click(function () {
    var radioWrap = $(this).attr("data-radio");
    $(".card_content").hide();
    $("." + radioWrap).show();
    $("." + radioWrap).show();
  });

  $("#card_name").keypress(function (event) {
    var inputValue = event.which;
    if (!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) {
      event.preventDefault();
    }
  });
  $('.qiwi_number').mask('+998(00)000-00-00');;

});

