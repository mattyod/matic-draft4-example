$(document).ready(function () {
  $('.new-block').hide();
  $('.parent').on('click', function () {
    $(this).next('.new-block').toggle(200);
  });
});
