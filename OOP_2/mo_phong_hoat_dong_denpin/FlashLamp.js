let Battery = function (){
    this.setEnergy = function (energy){
        this.energy = energy;
    };
    this.getEnergy = function (){
        return this.energy;
    };
    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
        }
    }
};

let FlashLamp = function (){
    this.setBattery = function (battery){
        this.battery = battery;
    };
    this.getBatteryInfo = function (){
        return this.battery.getEnergy();
    }
    this.light = function (){
        if (this.status){
            console.log("Linghting");
        }else {
            console.log("No Linghting");
        }
    };
    this.turn_On = function (){
        this.status = true;
    }
    this.turn_Off = function (){
        this.status = false;
    }
}

let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.writeln("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.writeln("Turn on<br/>")
flashLamp.turn_On();
flashLamp.light();
document.writeln("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.writeln("Turn off<br/>")
flashLamp.turn_Off();
flashLamp.light();