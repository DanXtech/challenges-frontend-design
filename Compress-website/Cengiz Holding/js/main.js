var main = (function () {
    "use strict";

    var e = {
        d: $(document),
        w: $(window),
        body: $("body"),
    };

    var swiperAnimation = new SwiperAnimation();

    var sliderSlider = function () {
        //var sliderSwiperThumbs = new Swiper(".js-slider-thumbs", {
        //    loop: true,
        //    slidesPerView: 3,
        //    loopedSlides: 10,
        //    spaceBetween: 5,
        //    centeredSlides: true,
        //    slideToClickedSlide: true,
        //    watchSlidesVisibility: true,
        //    watchSlidesProgress: true,

        //    breakpoints: {
        //        1920: {
        //            spaceBetween: 10,
        //        },
        //    },
        //});

        var sliderSwiper = new Swiper(".js-slider-swiper", {
            loop: true,
            loopedSlides: 10,
            speed: 1500,
            //allowTouchMove: false,
            spaceBetween: 30,
            autoplay: {
                delay: 5000,
            },
            effect: "fade",
            navigation: {
                nextEl: ".js-slider-swiper-nav .slider-nav__button--next",
                prevEl: ".js-slider-swiper-nav .slider-nav__button--prev",
            },
            on: {
                init: function () {
                    swiperAnimation.init(this).animate();
                },
                slideChange: function () {
                    swiperAnimation.init(this).animate();
                },
            },
        });

        //sliderSwiper.controller.control = sliderSwiperThumbs;
        //sliderSwiperThumbs.controller.control = sliderSwiper;
    };

    var mobilePanelFN = function () {
        var mobilePanelIdName = "mobilePanel";
        var mobilePanelId = "#" + mobilePanelIdName;
        var mobilePanel = $(mobilePanelId);
        var mobilePanelClose = $(".mp-close");
        var menuLink = $(".js-menu-toggle");

        if (mobilePanel.length != 0) {
            var bodyScrollRightWidth = window.innerWidth - document.getElementsByTagName("html")[0].clientWidth;
            menuLink.sidr({
                name: mobilePanelIdName,
                body: false,
                side: "left",
                onOpen: function () {
                    //if (bodyScrollRightWidth > 0) {
                    $("body, html").css("overflow", "hidden");
                    $("body, html").css("padding-left", bodyScrollRightWidth);
                    $("header").css("padding-left", bodyScrollRightWidth);

                    //}
                    $(".mp-overlay").remove();
                    mobilePanel.after(
                        "<div class='mp-overlay modal-backdrop fade in show' style='z-index: 1052'></div>"
                    );
                },
                onClose: function () {
                    if ($(".mn-overlay").length == 0) {
                        //if (bodyScrollRightWidth) {
                        $("body, html").css("overflow", "");
                        $("body, html").css("padding-left", "");
                        $("header").css("padding-left", "");
                        //}
                    }
                    $(".mp-overlay").remove();
                },
            });
        }

        mobilePanelClose.click(function (e) {
            e.preventDefault();
            $.sidr("close", mobilePanelIdName);
        });

        e.d.on("click", function (e) {
            if ($(e.target).closest(mobilePanelId).length == 0 && $(e.target).closest(".modal").length == 0) {
                $.sidr("close", mobilePanelIdName);
            }
        });

        e.w.resize(function () {
            if (e.w.outerWidth() > 1199) {
                $.sidr("close", mobilePanelIdName);
            }
        });
    };

    var mobileSubMenu = function () {
        $(".mobile-sub-menu__link").on("click", function () {
            $(".mobile-sub-menu__item ul").slideUp();
            $(".mobile-sub-menu__link").removeClass("active");
            if ($(this).next().is(":hidden")) {
                $(this).next().slideDown();
                $(this).addClass("active");
            } else {
                $(this).next().slideUp();
            }
        });
    };

    var cardSlider = function () {
        var cardSwiper = new Swiper(".js-card-swiper", {
            spaceBetween: 15,
            slidesPerView: 1.3,

            breakpoints: {
                // when window width is >= 480px
                480: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                },
                // when window width is >= 640px
                1200: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                },
            },
        });
    };

    var contactMap = function () {
        //var locations = data;

        var element = document.getElementById("contact-map-info");
        var attrs = element.getAttributeNames().reduce((acc, name) => {
            return { ...acc, [name]: element.getAttribute(name) };
        }, {});

        var mapStyle = [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8ec3b9"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1a3646"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#64779e"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#334e87"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6f9ba5"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3C7680"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#304a7d"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2c6675"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#255763"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#b0d5ce"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3a4762"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0e1626"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#4e6d70"
                    }
                ]
            }
        ]


        var mapOptions = {
            center: new google.maps.LatLng(attrs.datalat, attrs.datalong),
            zoom: 12,
            styles: mapStyle,
        };

        var iconBase = "./Content/images/icons/pin-contact.svg";
        var infoWindow = new google.maps.InfoWindow();
        var latlngbounds = new google.maps.LatLngBounds();
        var map = new google.maps.Map(document.getElementById("contact-map"), mapOptions);
        var myLatlng = new google.maps.LatLng(attrs.datalat, attrs.datalong);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: iconBase,
        });
        latlngbounds.extend(marker.position);
        var bounds = new google.maps.LatLngBounds();
        map.setCenter(latlngbounds.getCenter());
        //map.fitBounds(latlngbounds);

    }

    var mapRender = function (data) {
        var locations = data;

        var mapStyle = [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8ec3b9"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1a3646"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#64779e"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#334e87"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6f9ba5"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3C7680"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#304a7d"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2c6675"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#255763"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#b0d5ce"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3a4762"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0e1626"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#4e6d70"
                    }
                ]
            }
        ]


        var mapOptions = {
            center: new google.maps.LatLng(locations[0].lat, locations[0].lang),
            zoom: 8,
            styles: mapStyle,
        };

        var iconBase = "./Content/images/icons/pin-koyu-mavi.svg";
        var infoWindow = new google.maps.InfoWindow();
        var latlngbounds = new google.maps.LatLngBounds();
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        for (var i = 0; i < locations.length; i++) {
            var data = locations[i];
            console.log(data.flag)
            var myLatlng = new google.maps.LatLng(data.lat, data.lang);

            if (data.flag == "Mavi") {
                iconBase = "./Content/images/icons/pin-mavi.svg";
            } else if (data.flag == "Turuncu") {
                iconBase = "./Content/images/icons/pin-turuncu.svg";
            } else if (data.flag == "Sarı") {
                iconBase = "./Content/images/icons/pin-sari.svg";
            } else if (data.flag == "Kırmızı") {
                iconBase = "./Content/images/icons/pin-kirmizi.svg";
            } else if (data.flag == "Cengiz Holding") {
                iconBase = "./Content/images/icons/pin-white.svg";
            } else if (data.flag == "Gri") {
                iconBase = "./Content/images/icons/pin-gri.svg";
            }
            else {
                iconBase = "./Content/images/icons/pin-koyu-mavi.svg";
            }
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon: iconBase,
                title: data.title,
                address: data.address,
                flag: data.flag,
            });
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    infoWindow.setContent(
                        '<div class="info-window"><div class="infow-window__img"><img src="./Content/images/icons/pin.svg" width="33" height="32"></div><div class="info-window__content"><h3>' +
                        data.title +
                        "</h3>" + "<p>" + data.address + "</p>" + "</div></div>"
                    );
                    infoWindow.open(map, marker);
                });
            })(marker, data);
            latlngbounds.extend(marker.position);
        }
        var bounds = new google.maps.LatLngBounds();
        map.setCenter(latlngbounds.getCenter());
        map.fitBounds(latlngbounds);
    };

    var mapCategory = function (category) {
        var mapNode = document.querySelectorAll(".js-map-node");
        var mapNodes = [...mapNode];
        var locations = mapNodes.map((data) => {
            return {
                category: data.dataset.category,
                title: data.dataset.title,
                address: data.dataset.address,
                lat: data.dataset.lat,
                lang: data.dataset.lang,
                flag: data.dataset.flag,
            };
        });
        var activeLocations = locations.filter(function (location) {
            return location.category === category;
        });

        mapRender(activeLocations.length > 0 ? activeLocations : locations);
    };

    var mapHomepage = function () {
        var defaultCategory = $("input[name='mapCategory']:checked").val();
        mapCategory(defaultCategory);

        $("input[name='mapCategory']").on("change", function () {
            var category = $(this).val();
            mapCategory(category);
        });
    };

    var counter = function () {
        $(".js-count").each(function () {
            $(this).counterUp({
                delay: 10,
                time: 1000,
            });
        });
    };

    var newsSlider = function () {
        var newsSwiper = new Swiper(".js-news-swiper", {
            spaceBetween: 20,
            slidesPerView: 1,

            breakpoints: {
                // when window width is >= 480px
                480: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                },
                // when window width is >= 640px
                1200: {
                    spaceBetween: 20,
                    slidesPerView: 4.5,
                },
            },
        });
    };

    var events = function () {
        $(".js-main-search").on("click", function (e) {
            var dataMain = $(this).data("main-search");
            if (dataMain === "show") {
                $(".mp-close")[0].click();
                setTimeout(function () {
                    $(".search-overlay").addClass("search-overlay--active");
                    $(".search-overlay__wrapper").addClass("animate__fadeInDown");
                    $("body").addClass("noscroll");
                }, 100);
            } else {
                $(".search-overlay").removeClass("search-overlay--active");
                $(".search-overlay__wrapper").removeClass("animate__fadeInDown");
                $("body").removeClass("noscroll");
            }
        });
    };

    var customSelect = function () {
        $('.js-custom-select').select2({ minimumResultsForSearch: -1, });
    }

    var filter = function (e) {
        $('#js-filter').change(function (e) {

            $('.js-filter-items > div').each(function (i, e) {

                if (e.getAttribute("data-filter").includes($('#js-filter :selected').val())) {
                    $(e).show()
                } else {
                    $(e).hide()
                }

            })
        })
    }

    var videoGalleryFancy = function (swiper) {
        if (!$($('[data-fancybox="video-gallery"]')).length > 0) return true
        Fancybox.bind('[data-fancybox="video-gallery"]', {
            on: {
                reveal: (fancybox, slide) => {
                    $('.fancybox__slide .fancybox__caption').css('width', $('.fancybox__slide .fancybox__content').width())
                }
            },
            Thumbs: {
                autoStart: false,
            },
            caption: function (fancybox, carousel, slide) {
                return (
                    `<div class="flex item-center justify-beetween">
                        ${slide.caption}
                      </div>`
                );
            },
        });
    }

    var contactForm = function () {
        if ($('#contact')) {
            $("#contact").validate({
                ignore: ":hidden",

                errorPlacement: function (error, element) {
                    console.log($(element))
                    var placement = $(element).data('error');
                    if ($(element).hasClass('kvkk')) {
                        $(element).next().addClass('form-error')
                    }
                    if (placement) {
                        $(placement).append(error)
                    }
                    if ($(element).hasClass('js-custom-select')) {

                        $(element).next().addClass('js-error')
                        /*$(element).next().find('.selection').find('.select2-selection').addClass('form-error')*/
                    }
                },

                errorElement: 'div',
                errorClass: 'form-error',
            });

            $('#contact').submit(function (e) {
                var isvalidate = $('#contact').valid();
                e.preventDefault();

                grecaptcha.ready(function () {
                    grecaptcha.execute('6Lf2ny0mAAAAAOpKi1ukIhJzDKSYvKxL_jBG5ZIV', {
                        action: 'submit',
                    }).then(function (token) {
                        if (!isvalidate) {

                        } else {
                            $('#js-send-form').prop('disabled', true);
                            var data = {
                                Name: $('#Name').val(),
                                Email: $('#Email').val(),
                                Message: $('#Message')[0].value,
                                Subject: $('#Subject').val(),
                                Captcha: token,
                            }

                            $.ajax({
                                type: "POST",
                                url: "/contact",
                                data: JSON.stringify(data),
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                success: function (data) {
                                    if (document.getElementsByTagName('html')[0].attributes.lang.value == 'tr') {
                                        new swal({
                                            title: 'Başarılı!',
                                            text: 'Mesajınız Başarıyla İletilmiştir.',
                                            type: 'success',
                                            icon: 'success',
                                            confirmButtonText: 'Tamam',
                                        })

                                    } else {
                                        new swal({
                                            title: 'Success!',
                                            text: 'Your message has been sent successfully.',
                                            type: 'success',
                                            icon: 'success',
                                            confirmButtonText: 'Ok',
                                        })
                                    }
                                    $('#contact')[0].reset();
                                },
                                error: function (errMsg) {
                                    $('#js-send-form').prop('disabled', false);
                                    if (document.getElementsByTagName('html')[0].attributes.lang.value == 'tr') {
                                        new swal({
                                            title: 'Hata!',
                                            text: 'Beklenmedik Bir Hata Oluştu. Lütfen Daha Sonra Tekrar Deneyiniz.',
                                            type: 'error',
                                            icon: 'error',
                                            confirmButtonText: 'Tamam',

                                        })
                                    } else {
                                        new swal({
                                            title: 'Error!',
                                            text: 'An unexpected error has occurred. Please try later.',
                                            type: 'error',
                                            icon: 'error',
                                            confirmButtonText: 'Ok',

                                        })
                                    }

                                }
                            });
                        }
                    })
                })
            })
        }

        $('.js-custom-select').change(function (e) {
            if ($(this).val() != "") {
                $(this).next().removeClass('js-error')
            } else {
                $(this).next().addClass('js-error')
            }
        })
    }

    var mobilePanelFN = function () {
        var mobilePanelIdName = "mobilePanel";
        var mobilePanelId = "#" + mobilePanelIdName;
        var mobilePanel = $(mobilePanelId);
        var mobilePanelClose = $(".mp-close");
        var menuLink = $(".js-menu-toggle");

        if (mobilePanel.length != 0) {
            var bodyScrollRightWidth = window.innerWidth - document.getElementsByTagName("html")[0].clientWidth;
            menuLink.sidr({
                name: mobilePanelIdName,
                body: false,
                side: "left",
                onOpen: function () {
                    //if (bodyScrollRightWidth > 0) {
                    $("body, html").css("overflow", "hidden");
                    $("body, html").css("padding-left", bodyScrollRightWidth);
                    $("header").css("padding-left", bodyScrollRightWidth);

                    //}
                    $(".mp-overlay").remove();
                    mobilePanel.after(
                        "<div class='mp-overlay modal-backdrop fade in show' style='z-index: 1052'></div>"
                    );

                    /*
                     * if search overlay is active
                     */
                    if ($(".search-overlay").hasClass("search-overlay--active")) {
                        $(".search-overlay").removeClass("search-overlay--active");
                        $(".search-overlay__wrapper").removeClass("animate__fadeInDown");
                        $("body").removeClass("noscroll");
                    }
                },
                onClose: function () {
                    if ($(".mn-overlay").length == 0) {
                        //if (bodyScrollRightWidth) {
                        $("body, html").css("overflow", "");
                        $("body, html").css("padding-left", "");
                        $("header").css("padding-left", "");
                        //}
                    }
                    $(".mp-overlay").remove();
                },
            });
        }

        mobilePanelClose.click(function (e) {
            e.preventDefault();
            $.sidr("close", mobilePanelIdName);
        });

        e.d.on("click", function (e) {
            if ($(e.target).closest(mobilePanelId).length == 0 && $(e.target).closest(".modal").length == 0) {
                $.sidr("close", mobilePanelIdName);
            }
        });

        e.w.resize(function () {
            if (e.w.outerWidth() > 1199) {
                $.sidr("close", mobilePanelIdName);
            }
        });
    };

    var mobileSubMenu = function () {
        $(".mobile-sub-menu__link").on("click", function () {
            $(".mobile-sub-menu__item ul").slideUp();
            $(".mobile-sub-menu__link").removeClass("active");
            if ($(this).next().is(":hidden")) {
                $(this).next().slideDown();
                $(this).addClass("active");
            } else {
                $(this).next().slideUp();
            }
        });
    };

    var mobileMenu = function () {
        $(".js-mobile-link").on("click", function () {
            $(".mobile-menu--main").addClass("mobile-menu--left");
            $(this).next().removeClass("mobile-menu--left");
            $(this).next().addClass("mobile-menu--right");
            $(".mp-brand").addClass("left");
        });

        $(".js-link-back").on("click", function () {
            $(".mobile-menu--main").removeClass("mobile-menu--left");
            $(".mobile-menu--sub").removeClass("mobile-menu--right");
            $(".mp-brand").removeClass("left");
        });
    };

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function cookie() {
        $("#js-cookie-close").click(function () {
            setCookie("cookie", true, 365)
            $('.cookie').addClass('js-hide');
        })
        if (getCookie("cookie") != "") {
            $('.cookie').addClass('js-hide');
        } else {
        }
    }

    function stickyHeader() {
        window.addEventListener('wheel', function (event) {
            //event.preventDefault();

            if (event.deltaY < 0) {
                $('.header').addClass('js-fixed')
                $('.header').removeClass('js-down')
            }
            else if (event.deltaY > 0) {
                $('.header').removeClass('js-fixed')
                $('.header').addClass('js-down')
            }
        });
    }

    var init = function () {
        events();
        mobilePanelFN();
        mobileSubMenu();
        mobileMenu();
        if ($('.js-slider-thumbs')) {
            sliderSlider();
        }
        mobilePanelFN();
        mobileSubMenu();
        cardSlider();
        customSelect();
        filter();
        videoGalleryFancy();
        if (document.getElementById("map") != null) {
            mapHomepage();
        }
        contactForm();
        counter();
        newsSlider();
        cookie();
        stickyHeader();
        //if ($('#contact').length > 0) {

        //    contactMap()
        //}
    };

    return {
        init: init,
    };
})();

$(window).resize(function () {
    var pageWidth = $('.mile-stones').innerWidth() / 2;
    var imageWidth = $('.timeline__img').innerWidth();
    var space = pageWidth - imageWidth;
    $('.timeline__line').css("width", space);
    $('.timeline__line:even').css("left", -space);
});

$("document").ready(function () {

    var pageWidth = $('.mile-stones').innerWidth() / 2;
    var imageWidth = $('.timeline__img').innerWidth();
    var space = pageWidth - imageWidth;
    $('.timeline__line').css("width", space);
    $('.timeline__line:even').css("left", -(space - 6));
    $('.timeline__line:odd').css("right", -(space - 6));

    $('#js-loader').remove()
    main.init();
    //setTimeout(() => {
    //}, 2500);

    AOS.init({
        once: true,
    });
});
