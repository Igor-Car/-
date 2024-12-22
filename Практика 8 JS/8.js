// Задача 1: Массив из 15 случайных чисел и среднее арифметическое положительных
function task1() {
    let arr = [];
    // Заполняем массив случайными числами от -10 до 30
    for (let i = 0; i < 15; i++) {
        arr.push(Math.floor(Math.random() * 41) - 10);
    }
    
    // Находим среднее арифметическое положительных элементов
    let sum = 0;
    let count = 0;
    for (let num of arr) {
        if (num > 0) {
            sum += num;
            count++;
        }
    }
    
    console.log("Массив:", arr);
    console.log("Среднее арифметическое положительных:", sum / count);
}

// Задача 2: Замена отрицательных элементов их квадратами
function task2() {
    let n = 15; // Можно изменить размер массива (n>10)
    let arr = [];
    
    // Заполняем массив случайными числами
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 41) - 20);
    }
    
    console.log("Исходный массив:", arr);
    
    // Заменяем отрицательные элементы их квадратами
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = arr[i] * arr[i];
        }
    }
    
    console.log("Массив после замены:", arr);
}

// Задача 3: Статистика по массиву
function task3() {
    let arr = [];
    // Заполняем массив случайными числами
    for (let i = 0; i < 15; i++) {
        arr.push(Math.floor(Math.random() * 41) - 20);
    }
    
    let positiveSum = 0, positiveCount = 0;
    let negativeSum = 0, negativeCount = 0;
    let zeroCount = 0;
    
    for (let num of arr) {
        if (num > 0) {
            positiveSum += num;
            positiveCount++;
        } else if (num < 0) {
            negativeSum += num;
            negativeCount++;
        } else {
            zeroCount++;
        }
    }
    
    console.log("Массив:", arr);
    console.log("Среднее арифметическое положительных:", positiveSum / positiveCount);
    console.log("Среднее арифметическое отрицательных:", negativeSum / negativeCount);
    console.log("Количество нулей:", zeroCount);
}

// Задача 4: Симулятор случайных значений
function task4() {
    const ITERATIONS = 1000000;
    let redCount = 0;
    let maxRedStreak = 0;
    let currentRedStreak = 0;
    
    for (let i = 0; i < ITERATIONS; i++) {
        let value = Math.floor(Math.random() * 3); // 0 - красный, 1 - черный, 2 - белый
        
        if (value === 0) { // если выпал красный
            currentRedStreak++;
            maxRedStreak = Math.max(maxRedStreak, currentRedStreak);
        } else {
            currentRedStreak = 0;
        }
    }
    
    console.log("Максимальное число раз подряд выпадало красное значение:", maxRedStreak);
}

// Запуск всех задач
console.log("Задача 1:");
task1();
console.log("\nЗадача 2:");
task2();
console.log("\nЗадача 3:");
task3();
console.log("\nЗадача 4:");
task4();