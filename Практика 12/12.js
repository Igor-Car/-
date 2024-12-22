const arr1 = [1, 2, 3, 4, 5];

// Увеличение на 10
const arrPlus10 = arr1.map(item => item + 10);
console.log('Увеличение на 10:', arrPlus10); // [11, 12, 13, 14, 15]

// Увеличение в 3 раза
const arrTimes3 = arr1.map(item => item * 3);
console.log('Увеличение в 3 раза:', arrTimes3); // [3, 6, 9, 12, 15]

const birthYears = [1990, 1985, 2000, 1995, 2005];
const currentYear = new Date().getFullYear();

const ages = birthYears.map(year => currentYear - year);
console.log('Возраст:', ages);

const users = [
    { name: 'Дима', role: 'user', age: 25 },
    { name: 'Ромчик', role: 'admin', age: 30 },
    { name: 'Игорь', role: 'user', age: 28 },
    { name: 'Даша', role: 'admin', age: 35 }
];

// Получаем список админов
const admins = users.filter(user => user.role === 'admin');
console.log('Администраторы:', admins.map(admin => admin.name));

const students = [
    { name: 'Дима', grade: 4.5 },
    { name: 'Ромчик', grade: 5.0 },
    { name: 'Игорь', grade: 4.0 },
    { name: 'Даша', grade: 4.8 }
];

const averageGrade = students.reduce((acc, student) => acc + student.grade, 0) / students.length;
console.log('Средний балл:', averageGrade.toFixed(2));

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(arr, fn) {
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]));
    }
    return newArray;
}

// Функция проверки длины строки
const checkLength = mapForEach(strArray, function(item) {
    return item.length <= 3 ? 0 : 1;
});

console.log('Результат проверки длины:', checkLength);

// Альтернативное решение с использованием map
const checkLengthMap = strArray.map(item => item.length <= 3 ? 0 : 1);
console.log('Результат проверки длины (map):', checkLengthMap);