(function() {
  'use strict';
  const menu = document.getElementById('menu');
  //背景画像
  const images = ['img/bg-1.jpg', 'img/bg-2.jpg', 'img/bg-3.jpg', 'img/bg-4.jpg'];
  //ハンバーガーメニュー
  menu.addEventListener('click', function() {
    if (document.body.className != 'menu-open') {
      document.body.className = 'menu-open';
    } else {
      document.body.className = '';
    }
  });
  //スライドショー
  let currentIndex = 0;
  const slide = function() {
    document.getElementById('slide-bg-img').style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex++;
    if (currentIndex == images.length) {
      currentIndex = 0;
    }
  }
  slide();
  setInterval(slide, 5000);
  const fadeIn = document.getElementsByClassName('fade-in');
  const windowHeight = window.parent.screen.height;
  //スクロールをトリガーにしたイベント
  window.addEventListener('scroll', function() {
    //高さを取得して表示
    for (let i = 0; i < fadeIn.length; i++) {
      let fadeInY = fadeIn[i].getBoundingClientRect().top;
      if (fadeInY < windowHeight - 200) {
        fadeIn[i].classList.add('scroll-in');
      }
    }
  }, false);
})();
