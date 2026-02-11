class Mobile {
    constructor(name) {
        this.name = name;              // Tên điện thoại
        this.battery = 100;            // Pin (tối đa 100)
        this.isOn = false;             // Trạng thái bật/tắt
        this.draftMessage = "";        // Tin nhắn đang soạn
        this.inbox = [];               // Hộp thư đến
        this.sentMessages = [];        // Tin nhắn đã gửi
    }

    checkStatus() {
        return this.isOn ? "Điện thoại đang bật" : "Điện thoại đang tắt";
    }

    turnOn() {
        if (this.battery > 0) {
            this.isOn = true;
            console.log(this.name + " đã bật");
        } else {
            console.log("Pin yếu, không thể bật máy");
        }
    }

    turnOff() {
        this.isOn = false;
        console.log(this.name + " đã tắt");
    }

    charge() {
        if (this.battery <= 100) {
            this.battery++;
        }
        console.log("Pin hiện tại: " + this.battery);
    }

    // 4. Soạn tin nhắn
    composeMessage(message) {
        if (this.isOn) {
            this.draftMessage = message;
            this.battery--;
        } else {
            console.log("Điện thoại đang tắt");
        }
    }

    // 5. Gửi tin nhắn
    sendMessage(otherMobile) {
        if (this.isOn && this.draftMessage !== "") {
            this.sentMessages.push(this.draftMessage);
            otherMobile.receiveMessage(this.draftMessage);
            this.draftMessage = "";
            this.battery--;
        } else {
            console.log("Không thể gửi tin nhắn");
        }
    }

    // 6. Nhận tin nhắn
    receiveMessage(message) {
        if (this.isOn) {
            this.inbox.push(message);
            this.battery--;
        }
    }

    // 7. Xem hộp thư đến
    viewInbox() {
        if (this.isOn) {
            console.log("Inbox của " + this.name + ":", this.inbox);
            this.battery--;
        }
    }

    // 8. Xem tin đã gửi
    viewSentMessages() {
        if (this.isOn) {
            console.log("Tin đã gửi:", this.sentMessages);
            this.battery--;
        }
    }
}
