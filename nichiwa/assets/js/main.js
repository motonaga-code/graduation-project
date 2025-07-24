'use strict';

$(function() {
  // ハンバーガーメニューの開閉
  $('.header__btn').on('click', function(){
    $('.nav').toggleClass('active');
  });

  $('.nav__btn, .nav__item a').on('click', function(){
    $('.nav').removeClass('active');
  });

  // メインビジュアル画像設定
  var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
  var responsiveImage;

  if (windowwidth > 768) {
    responsiveImage = [
      { src: './assets/images/mainvisual-pc1.jpg' },
      { src: './assets/images/mainvisual-pc2.jpg' },
      { src: './assets/images/mainvisual-pc3.jpg' },
      { src: './assets/images/mainvisual-pc4.jpg' },
    ];
  } else {
    responsiveImage = [
      { src: './assets/images/img_sp_01.jpg' },
      { src: './assets/images/img_sp_02.jpg' },
      { src: './assets/images/img_sp_03.jpg' }
    ];
  }

  // Vegasスライダーの設定
  $('#slider').vegas({
    slides: responsiveImage,
    transition: 'fade',
    transitionDuration: 2000,
    delay: 5000,
    animation: 'kenburns'
  });
});

// フェードインアニメーション設定
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  });

  const targets = document.querySelectorAll('.fade-in');
  targets.forEach((target) => observer.observe(target));
});