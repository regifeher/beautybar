$(document).ready(function () {
  $('#kapcsolatForm').on('submit', function (e) {
    e.preventDefault(); // Ne töltse újra az oldalt

    $.ajax({
      type: 'POST',
      url: 'emailnekem.php',
      data: $(this).serialize(),
      success: function (valasz) {
        $('#modalUzenetSzoveg').text(valasz);
        const modal = new bootstrap.Modal(document.getElementById('uzenetModal'));
        modal.show();
        $('#kapcsolatForm')[0].reset(); // üríti az űrlapot siker esetén
      },
      error: function () {
        $('#modalUzenetSzoveg').text("Hiba történt az üzenetküldés során. Kérjük, próbálja meg később.");
        const modal = new bootstrap.Modal(document.getElementById('uzenetModal'));
        modal.show();
      }
    });
  });
});