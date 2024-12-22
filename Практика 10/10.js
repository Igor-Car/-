
function replaceNegatives(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = arr[i] * arr[i];
        }
    }
    return arr;
}

// Пример использования
let numbers = [-5, 2, -3, 1, -8, 4, -2, 7, -9, 6, -1];
console.log(replaceNegatives(numbers));

class UserName {
    constructor(name) {
        this.name = name;
    }
    
    showName() {
        console.log(`Имя пользователя: ${this.name}`);
    }
}

// Использование
let user = new UserName("Иван");
user.showName(); // Выведет: Имя пользователя: Иван

class NameReverser {
    constructor(name) {
        this.name = name;
    }
    
    reverseName() {
        return this.name.split('').reverse().join('');
    }
    
    showReversedName() {
        console.log(`Перевернутое имя: ${this.reverseName()}`);
    }
}

// Использование
let myName = new NameReverser("Мария");
myName.showReversedName(); // Выведет: Перевернутое имя: яираМ