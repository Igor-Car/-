
// Задача 2: Информация о покупателе
let customer = {
    name: "Иван Петров",
    age: 25,
    email: "ivan@example.com",
    phone: "+7 (999) 123-45-67",
    address: "ул. Ленина, 123",
    orderHistory: ["Заказ №1", "Заказ №2"],
    loyaltyPoints: 150,
    
    // Метод для вывода основной информации
    showInfo() {
        console.log(`Имя: ${this.name}`);
        console.log(`Возраст: ${this.age}`);
        console.log(`Email: ${this.email}`);
    }
};

// Задача 3: Объекты с взаимосвязями
let users = [
    {
        id: 1,
        name: "Анна",
        age: 28,
        orders: [1, 3]
    },
    {
        id: 2,
        name: "Петр",
        age: 35,
        orders: [2]
    }
];

let orders = [
    {
        id: 1,
        restaurantId: 1,
        dishes: ["Пицца", "Салат"],
        total: 1200
    },
    {
        id: 2,
        restaurantId: 2,
        dishes: ["Суши"],
        total: 1500
    },
    {
        id: 3,
        restaurantId: 1,
        dishes: ["Паста"],
        total: 800
    }
];

let restaurants = [
    {
        id: 1,
        name: "Итальянская кухня",
        rating: 4.5
    },
    {
        id: 2,
        name: "Суши-бар",
        rating: 4.7
    }
];

// Функция для поиска заказов пользователя
function getUserOrders(userId) {
    let user = users.find(u => u.id === userId);
    if (!user) return null;
    
    let userOrders = orders.filter(order => user.orders.includes(order.id));
    return userOrders.map(order => {
        let restaurant = restaurants.find(r => r.id === order.restaurantId);
        return {
            dishes: order.dishes,
            restaurant: restaurant.name,
            total: order.total
        };
    });
}

// Задача 4: Функция-конструктор для группы
function Student(name) {
    this.name = name;
    this.group = "ИСП-310";
    this.isStudent = true;
}

let groupMembers = [
    new Student("Алексей"),
    new Student("Мария"),
    new Student("Дмитрий"),
    new Student("Елена")
];

// Задача 5: Конструктор объекта студента
function StudentInfo(name, age, group, averageGrade) {
    this.name = name;
    this.age = age;
    this.group = group;
    this.averageGrade = averageGrade;
    
    this.showInfo = function() {
        console.log(`
            Студент: ${this.name}
            Возраст: ${this.age}
            Группа: ${this.group}
            Средний балл: ${this.averageGrade}
        `);
    };
    
    this.isExcellent = function() {
        return this.averageGrade >= 4.5;
    };
}

// Примеры использования:
console.log("--- Задача 2: Информация о покупателе ---");
customer.showInfo();

console.log("\n--- Задача 3: Заказы пользователя ---");
console.log(getUserOrders(1));

console.log("\n--- Задача 4: Список группы ---");
groupMembers.forEach(student => console.log(student.name));

console.log("\n--- Задача 5: Информация о студенте ---");
let student1 = new StudentInfo("Иван Иванов", 20, "ИСП-310", 4.7);
student1.showInfo();
console.log("Отличник:", student1.isExcellent());