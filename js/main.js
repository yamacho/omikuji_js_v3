(function() {
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function() {
    var n = Math.floor(Math.random() * 3);

    switch (n) {
      case 0:
        this.textContent = '大吉';
        break;
      case 1:
        this.textContent = '中吉';
        break;
      case 2:
        this.textContent = '凶';
        break;
    }
  });

  btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
  });

  btn.addEventListener('mouseup', function() {
    this.className = '';
  });
})();
