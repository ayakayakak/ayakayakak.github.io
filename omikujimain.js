(() => {
    'use strict';

    let btn = document.getElementById('btn');

    btn.addEventListener('click', function() {
        let results = ["大吉", "中吉","小吉", "凶"]
        let n = Math.floor(Math.random() * results.length);
        this.textContent = results[n];
    });
    btn.addEventListener('mousedown', function() {
        this.className = "pushed";
    });
    btn.addEventListener('mouseup', function() {
        this.className = "";
    });
})();
