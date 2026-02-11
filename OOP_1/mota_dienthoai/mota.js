let phone1 = new Mobile("Nokia");
let phone2 = new Mobile("iPhone");

phone1.turnOn();
phone2.turnOn();

phone1.composeMessage("Xin chào!");
phone1.sendMessage(phone2);

phone2.viewInbox();
phone1.viewSentMessages();

phone2.charge()