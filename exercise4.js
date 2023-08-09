// Задание 4
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
// Реализуйте его на прототипах. Определить иерархию электроприборов. Включить некоторые в розетку.
// Посчитать потребляемую мощность. Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.

// Родительская функция для всех электроприборов
function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

// Подкласс для ламп
function Lamp(name, brand, power, bulbType) {
    ElectricalAppliance.call(this, name, power); // вызов родительского конструктора с контекстом текущего объекта
    this.brand = brand;
    this.bulbType = bulbType;
    this.isPlugged = true;
}

// Установка правильной цепочки прототипов
Lamp.prototype = Object.create(ElectricalAppliance.prototype);
Lamp.prototype.constructor = Lamp;

// Подкласс для компьютеров
function Computer(name, brand, power, type, functionality) {
    ElectricalAppliance.call(this, name, power); // вызов родительского конструктора с контекстом текущего объекта
    this.brand = brand;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

// Установка правильной цепочки прототипов
Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

// Создание объектов
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

// Тестирование
tableLamp.unplug();
homePC.plugIn();

// Вывод
console.log(homePC);
console.log(tableLamp);
