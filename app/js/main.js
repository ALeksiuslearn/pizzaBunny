$(function () {
  $(".inner__menu-btn").on('click', function () {
    $('.inner__menu').addClass("active");
  });
  if ($(".items").length) {
    let mixer = mixitup(".items");
  }
});