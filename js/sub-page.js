(function() {
  'use strict';
  const menu = document.getElementById('menu');
  //ハンバーガーメニュー
  menu.addEventListener('click', function() {
    if (document.body.className != 'menu-open') {
      document.body.className = 'menu-open';
    } else {
      document.body.className = '';
    }
  });
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
