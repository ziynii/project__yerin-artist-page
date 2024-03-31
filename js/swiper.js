// 풀페이지 스크롤 슬라이드
var swiper = new Swiper(".fullpage-slider", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 비디오 슬라이드
var swiper = new Swiper(".video-carousel", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".video-button-next",
    prevEl: ".video-button-prev",
  },
});

// 앨범 슬라이드
var swiper = new Swiper(".discography__carousel", {
  navigation: {
    nextEl: ".btn--next",
    prevEl: ".btn--prev",
  },
  direction: "vertical",
  on: {
    // 슬라이드 초기 상태
    init: function () {
      var initialIndex = this.realIndex;

      $(".album .title").eq(initialIndex).addClass("active");
      $(".album__thumb").eq(initialIndex).addClass("active");
      $(".album").eq(initialIndex).addClass("active");
    },

    // 슬라이드 전환시 상태
    slideChange: function () {
      $(".album .title").removeClass("active");
      $(".album__thumb").removeClass("active");
      $(".album")
        .eq(this.realIndex - 1)
        .removeClass("active");

      $(".album .title").eq(this.realIndex).addClass("active");
      $(".album__thumb").eq(this.realIndex).addClass("active");
      $(".album").eq(this.realIndex).addClass("active");
    },
  },
});

// news section sns 슬라이드
var swiper = new Swiper(".sns-carousel", {
  slidesPerView: "auto",
  centeredSlides: true,
  breakpoints: {
    768: {
      centeredSlides: false,
    },
  },
  spaceBetween: 24,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

// news section 기사 슬라이드
var swiper = new Swiper(".article-carousel", {
  slidesPerView: "auto",
  spaceBetween: 24,
  centeredSlides: true,
  breakpoints: {
    768: {
      centeredSlides: false,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
