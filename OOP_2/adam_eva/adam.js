class Apple {
    _weight = 10;

    constructor(weight) {
        this._weight = 10;
    }

    get weight() {
        return this._weight;
    }

    decreaseWeight() {
        if (this._weight > 0) {
            this._weight--;
        }
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    say(message) {
        console.log(`${this.name} saying ${message}`);
    }

    checkApple(apple) {
        return apple.weight;
    }

    eat(apple) {
        if (apple.weight > 0) {
            apple.decreaseWeight();
            this.weight++;
            alert(`${this.name} đã ăn 1 miếng táo.`);
        } else {
            alert("Táo đã hết rồi!");
        }
    }
}

function kichban() {
    let adam = new Human('Adam', 'male', 65);
    let eva = new Human('Eva', 'female', 45);
    let apple = new Apple();

    while (apple.weight > 0) {
        adam.eat(apple);
        if (apple.weight > 0) {
            eva.eat(apple);
        }else {
            break;
        }


    }
    console.log('số cân táo là: ' + apple.weight);
    console.log(eva.weight);
    console.log(adam.weight);

}
kichban()