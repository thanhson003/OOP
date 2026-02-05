function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += this.speed;
        console.log('Vị trí hiện tại: ' + this.left);
    }
    this.moveDown = function () {
        if (this.top < window.innerHeight - this.size) {
            this.top += this.speed;
            console.log('Vị trí hiện tại: ' + this.top);
        }
    }

}

var hero = new Hero('pokemon.jpg', 20, 10, 200, 100);

function start() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveDown();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();