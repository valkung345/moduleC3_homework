// Задание 5
// Переписать консольное приложение из предыдущего юнита на классы.

// Родительский класс для всех электроприборов
class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
  
    plugIn() {
        console.log(`${this.name} is plugged!`);
        this.isPlugged = true;
    }
  
    unplug() {
        console.log(`${this.name} is unplugged!`);
        this.isPlugged = false;
    }
}

// Класс для ламп
class Lamp extends ElectricalAppliance {
    constructor(name, brand, power, bulbType) {
        super(name, power); // вызов конструктора родительского класса
        this.brand = brand;
        this.bulbType = bulbType;
        this.isPlugged = true;
    }
}

// Класс для компьютеров
class Computer extends ElectricalAppliance {
    constructor(name, brand, power, type, functionality) {
        super(name, power); // вызов конструктора родительского класса
        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false;
    }
}

// Создание объектов
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

// Тестирование
tableLamp.unplug();
homePC.plugIn();

// Вывод
console.log(homePC);
console.log(tableLamp);
