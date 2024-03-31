$(document).ready(function () {
  $(".tab-item").click(function () {
    var tabTarget = $(this);
    var target = tabTarget.data("tab");

    $(".tab-item").removeClass("is-active");
    $(".news__content .content").removeClass("is-select");

    $("#" + target).addClass("is-select");
    tabTarget.addClass("is-active");
  });
});
