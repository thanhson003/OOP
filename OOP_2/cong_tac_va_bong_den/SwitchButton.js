class ElectricLamp {
    constructor(status) {
        this.status = status;
    }
    getStatus() {
        return this.status;
    }
    turnOn(){
        return this.status = true;
    }
    turnOff(){
        return this.status = false;
    }
}

class SwitchButton {
    constructor(ElectricLamp, status) {
        this.status = status;
        this.lamp = ElectricLamp
    }

    connectToLamp(Electric){
         this.lamp = Electric
    }
    switchOn(){
        this.status = true;
        this.lamp.turnOn()
    }
    switchOff(){
        this.status = false;
        this.lamp.turnOff()
    }
}
let electricLamp_1 = new ElectricLamp(false);

let switchButton_1 = new SwitchButton(electricLamp_1,false);

function kichban(){
    for (let i=1; i<=10; i++){
        if (i%2===1){
            switchButton_1.switchOn();
        }else {
            switchButton_1.switchOff();
        }
        console.log("Lần" + i + " - Trạng thái đèn: " + electricLamp_1.getStatus());
    }
}
kichban();
