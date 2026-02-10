class Remote {
    code = ''

    constructor() {
        this.code = ''
        this.volume = 43
    }

    change() {

    }

    upVolume() {
        this.volume++;
    }

    downVolume() {
        this.volume--;
    }
}

class Tivi{
    constructor(channel) {
        this.channel = channel
    }
}