$(document).ready(function () {
    /* NAVBAR LOGIC */

    const showNavBar = () => {
        $(".navbar").css({
            visibility: "visible",
            top: "0",
            "transition-delay": "0s"
        });
    };

    const hideNavBar = () => {
        $(".navbar").css({
            visibility: "hidden",
            top: "-200px",
            transition: "visibility 0s ease 0.7s, top 0.7s ease"
        });
    };

    let lastScrollTop = 0;

    $(window).on("scroll", () => {
        if ($(this).scrollTop() < 10) {
            showNavBar();
            return;
        }

        if (Math.abs($(this).scrollTop() - lastScrollTop) < 10) return;

        if ($(this).scrollTop() < lastScrollTop) {
            // if scrolled upwards..
            showNavBar();
            console.log('show')
        }
        else {
            // if scrolled downwards..
            hideNavBar();
            console.log('hode')
        }

        // update last scroll position
        lastScrollTop = $(this).scrollTop();
    });

    $(window).on("resize", () => {
        if ($(window).width() < 400) {
            $("#navbar-title").text("F.H.R.F.");
            $("#navbar-title").css({
                "font-size": "1.5em"
            });
        } else if ($(window).width() < 450) {
            $("#navbar-title").text("FIRST HUMAN RIGHTS FOUNDATION");
            $("#navbar-title").css({
                "font-size": "0.8em"
            });
        } else if ($(window).width() < 525) {
            $("#navbar-title").text("FIRST HUMAN RIGHTS FOUNDATION");
            $("#navbar-title").css({
                "font-size": "1em"
            });
        } else {
            $("#navbar-title").text("FIRST HUMAN RIGHTS FOUNDATION");
            $("#navbar-title").css({
                "font-size": "1.25em"
            });
        }
    });

    /* ENDOF NAVBAR LOGIC */
});
