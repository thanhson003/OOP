class Temperature {
    celcius;

    constructor(celcius) {
        this.celcius = celcius;
    }

    fahrenheit() {
        return (this.celcius*1.8) + 32;
    }

    kelvin() {
        return this.celcius + 237.15;
    }
}