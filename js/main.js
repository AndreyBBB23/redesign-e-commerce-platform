$(document).ready(function () {
    /* Start change basket totals */
    $(window).on(window.basket.events.update, function (e) {
        changeBasketTotals();
    });

    $(window).on('load', function (e) {
        changeBasketTotals();
    });

    function changeBasketTotals() {
        let header__buttons_cart = $('header .header__buttons-cart > a');
        const total = window.basket.getTotal();

        if (total) {
            plus = '+';
            header__buttons_cart.attr('data-totals', plus + total);
        } else {
            header__buttons_cart.attr('data-totals', '');
        }
    }
    /* End change basket totals */

    /* Start home slider 2 screen */
    let slider__wrapper = $('.slider .slider__wrapper');
    let slider__pagination_number = $('.slider .slider__pagination-number');

    $('.slider .slider__pagination .slider__slick-prev').click(function (e) {
        e.preventDefault();
        slider__wrapper.slick('slickPrev');
    });

    $('.slider .slider__pagination .slider__slick-next').click(function (e) {
        e.preventDefault();
        slider__wrapper.slick('slickNext');
    });

    slider__wrapper.on('init', function (event, slick) {
        generatePagination(slick.slideCount);
        paginationNumbers(slick.slideCount);
    });

    function generatePagination(slideCount) {
        let itemsPagination = '';
        for (let i = 1; i <= slideCount; i++) {
            itemsPagination += '<span class="item__pagination">' + checkSlideCount(i) + i + '</span>'
        }

        slider__pagination_number.append(itemsPagination);
    }

    function checkSlideCount(count) {
        return (count < 10) ? '0' : '';
    }

    slider__wrapper.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.slider__pagination-number'
    });

    function paginationNumbers(count) {
        slider__pagination_number.slick({
            slidesToShow: (count == 1) ? 1 : count - 1,
            slidesToScroll: 1,
            asNavFor: '.slider__wrapper',
            arrows: false,
            dots: false,
            focusOnSelect: true
        });
    }
    /* End home slider 2 screen */

    /* Start dropdown menu */
    $('.menu .navbar-nav > .nav-item.dropdown').hover(function (e) {
        $('.menu__dropdown').addClass('active');
    }, function (e) {
        setTimeout(function () {
            $('.menu__dropdown').removeClass('active');
        }, 500);
    });

    $('.header .header__buttons-menu > a').on('click', function (e) {
        e.preventDefault();
        $('.menu__dropdown').toggleClass('active');
    });
    /* End dropdown menu */

    /* Start mobile menu header */
    $('[data-trigger]').on('click', function () {
        var trigger_id = $(this).attr('data-trigger');
        $(trigger_id).toggleClass('show');
        $('body').toggleClass('offcanvas-active');
    });

    $('.btn-close').click(function (e) {
        $('.navbar-collapse').removeClass('show');
        $('body').removeClass('offcanvas-active');
    });
    /* End mobile menu header */

    /* Start lavalamp menu */
    $('.products__categories-list').lavalamp({
        duration: 1000,
        deepFocus: true
    });
    /* End lavalamp menu */

    /* Start menu slider 2 rows */
    let products__slider_wrapper = $('.products .products__slider-wrapper');
    let products__slider_number = $('.products .products__slider-number');

    $('.products__slider-pagination .products__slider-prev').click(function (e) {
        e.preventDefault();
        products__slider_wrapper.slick('slickPrev');
    });

    $('.products__slider-pagination .products__slider-next').click(function (e) {
        e.preventDefault();
        products__slider_wrapper.slick('slickNext');
    });

    products__slider_wrapper.on('init', function (event, slick) {
        generateProductsPagination(slick.slideCount);
        paginationProductsNumbers(slick.slideCount);
    });

    function generateProductsPagination(slideCount) {
        let itemsPagination = '';

        for (let i = 1; i <= slideCount; i++) {
            itemsPagination += '<span class="item__pagination">' + i + checkProductsSlideCount(slideCount, i) + '</span>'
        }

        products__slider_number.append(itemsPagination);
    }

    function checkProductsSlideCount(count, item) {
        return (count == item) ? '...' : '.';
    }

    products__slider_wrapper.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        rows: 2,
        asNavFor: '.products__slider-number',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2
                }
            }
        ]
    });

    function paginationProductsNumbers(count) {
        products__slider_number.slick({
            slidesToShow: (count == 1) ? 1 : count - 1,
            slidesToScroll: 1,
            asNavFor: '.products__slider-wrapper',
            arrows: false,
            dots: false,
            focusOnSelect: true
        });
    }
    /* End menu slider 2 rows */

    /* Start language change */
    $('#form-language button').on('click', function (e) {
        $('#form-language input[name=\'code\']').val($(this).attr('name'));
        $('#form-language').submit();
    });
    /* End language change */

    /* Start Catering slider */
    let catering__slider_wrapper = $('.catering-slider .catering-slider__wrapper');

    $('.catering-slider__pagination .catering-slider__slick-prev').click(function (e) {
        e.preventDefault();
        catering__slider_wrapper.slick('slickPrev');
    });

    $('.catering-slider__pagination .catering-slider__slick-next').click(function (e) {
        e.preventDefault();
        catering__slider_wrapper.slick('slickNext');
    });

    catering__slider_wrapper.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        swipe: false
    });
    /* End Catering slider */

});