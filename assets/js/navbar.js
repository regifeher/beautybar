$(document).ready(function() {
    // Hover effekt a menüpontokra
    $('.fancy-link').hover(
        function() {
            $(this).addClass('hovered');
        },
        function() {
            $(this).removeClass('hovered');
        }
    );
    // Logó hover effekt
    $('.navbar-brand').hover(
        function() {
            $('#logo').attr('src', 'assets/img/logo2.png');
        },
        function() {
            $('#logo').attr('src', 'assets/img/logo.png');
        }
    );

$(window).on('load', function () {
    window.scrollTo(0, 0);
});

function updateScrollPadding() {
    const $navbar = $('.navbar');
    const height = $navbar.outerHeight();
    $('html').css('scroll-padding-top', height + 'px');
}

    $(document).ready(function () {
        updateScrollPadding();

        $(window).on('resize', function () {
            updateScrollPadding();
        });

        // Menü nyitás / zárás figyelése jQuery-vel
        $('.navbar-toggler').on('click', function () {
            // késleltetés, hogy a lenyílás animáció megtörténjen
            setTimeout(function () {
                updateScrollPadding();
            }, 350); // animáció időtől függően állítható
        });
    });
});
