function update() {
    var ele = document.getElementById("myprogressbar");
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
        if(width >= 100) {
            clearInterval(identity);
        } else {
            width++;
            ele.style.width = width + '%';
            ele.innerHTML = width * 1 + '%';
        }
    }
}