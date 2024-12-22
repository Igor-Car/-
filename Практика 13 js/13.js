// Создаем символы
const idSymbol = Symbol.for('id');
const statusSymbol = Symbol.for('status');
const accessSymbol = Symbol.for('access');

// Создаем объект "Клиент банка"
const bankClient = {
    name: "Анна",
    accountNumber: "4276123456789",
    balance: 50000,
    [idSymbol]: "B001",
    [statusSymbol]: "VIP"
};

// Создаем объект "Работник клиники"
const clinicWorker = {
    name: "Иван",
    specialization: "Терапевт",
    experience: 5,
    [idSymbol]: "M001",
    [accessSymbol]: "full"
};

// Создаем объект "Гражданин РФ"
const citizen = {
    name: "Петр",
    passportNumber: "4510 123456",
    birthDate: "01.01.1990",
    [idSymbol]: "C001"
};

// Вывод обычных свойств
console.log("Клиент банка:", {
    name: bankClient.name,
    accountNumber: bankClient.accountNumber,
    balance: bankClient.balance
});

console.log("Работник клиники:", {
    name: clinicWorker.name,
    specialization: clinicWorker.specialization,
    experience: clinicWorker.experience
});

console.log("Гражданин РФ:", {
    name: citizen.name,
    passportNumber: citizen.passportNumber,
    birthDate: citizen.birthDate
});

// Вывод символьных свойств
console.log("Символьные свойства банковского клиента:");
console.log("ID:", bankClient[idSymbol]);
console.log("Статус:", bankClient[statusSymbol]);

console.log("Символьные свойства работника клиники:");
console.log("ID:", clinicWorker[idSymbol]);
console.log("Уровень доступа:", clinicWorker[accessSymbol]);

console.log("Символьные свойства гражданина:");
console.log("ID:", citizen[idSymbol]);

const number = +prompt('Загадайте цифру до 9', '');

switch (number) {
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
        alert('Вы ввели число 2');
        break;
    case 3:
        alert('Вы ввели число 3');
        break;
    case 4:
        alert('Вы ввели число 4');
        break;
    case 5:
        alert('Вы ввели число 5');
        break;
    case 6:
        alert('Вы ввели число 6');
        break;
    case 7:
        alert('Вы ввели число 7');
        break;
    case 8:
    case 9:
        alert('Вы ввели число 8, а может и 9');
        break;
    default:
        alert('Некорректный ввод');
}

const min = 30; // Пример значения

switch (true) {
    case (min >= 0 && min < 15):
        console.log('Первая четверть часа');
        break;
    case (min >= 15 && min < 30):
        console.log('Вторая четверть часа');
        break;
    case (min >= 30 && min < 45):
        console.log('Третья четверть часа');
        break;
    case (min >= 45 && min < 60):
        console.log('Четвертая четверть часа');
        break;
    default:
        console.log('Некорректное значение минут');
}

const str = prompt("Введите строку с цифрами:", "");
const phoneNumber = "9876543210"; // Ваш номер телефона

if (str) {
    // Проверка первого символа
    switch (str[0]) {
        case '1':
        case '2':
        case '3':
            console.log('Первая цифра 1, 2 или 3');
            break;
        default:
            console.log('нет');
    }
    
    // Проверка наличия номера телефона
    if (str.includes(phoneNumber)) {
        console.log('Номер телефона найден в строке');
    } else {
        console.log('Номер телефона не найден в строке');
    }
} else {
    console.log('Строка пуста');
}