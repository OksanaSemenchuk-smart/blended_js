// todo task 1

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.map((number) => number * number);

// console.log(newNumbers);

// todo task 2

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const allValues = data.flatMap((dat) => dat.values);

// console.log(allValues);

// todo task 3

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const youngPeople = people.some((person) => person.age < 20);

// console.log(youngPeople);

// todo task 4

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const numEven = numbers.every((number) => number % 2 === 0);

// console.log(numEven);

// todo task 5

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const numNotEven = numbers.find((number) => number % 2 != 0);

// console.log(numNotEven);

// todo task 6

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const numSort = numbersArray.toSorted((a, b) => a - b);

// console.log(numSort);

// todo task 7

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// const sortArrey = stringArray.toSorted((a, b) => a.localeCompare(b));

// console.log(sortArrey);

// todo task 8

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const userSort = users.toSorted((a, b) => a.age - b.age);

// console.log(userSort);

// todo task 9

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const userOld = user.filter((us) => us.age > 20);

// console.log(userOld);

// todo task 10

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, number) => acc + number, 0);

// console.log(sum);

// todo task 11

// Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.

// const friends = [
//   {
//     passport: "03005988",
//     name: "Joseph Francis Tribbiani Jr",
//     age: 32,
//     sex: "m",
//   },
//   { passport: "03005989", name: "Chandler Muriel Bing", age: 33, sex: "m" },
//   { passport: "03005990", name: "Ross Eustace Geller", age: 33, sex: "m" },
//   { passport: "03005991", name: "Rachel Karen Green", age: 31, sex: "f" },
//   { passport: "03005992", name: "Monica Geller", age: 31, sex: "f" },
//   { passport: "03005993", name: "Phoebe Buffay", age: 34, sex: "f" },
// ];

// const getGirlsPassports = friends
//   .filter((friend) => friend.sex === "f")
//   .map((friend) => friend.passport);

// console.log(getGirlsPassports);

// todo task 12

// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.

// const products = [
//   { name: "Milk", price: 20 },
//   { name: "Bread", price: 10 },
//   { name: "Eggs", price: 15 },
// ];

// const newProducts = products
//   .filter((p) => p.price > 10)
//   .reduce((acc, p) => acc + p.price, 0);

// console.log(newProducts);

// todo task 13

// Маємо масив об'єктів, який представляє список замовлень:
// Поверніть список товарів з усіх виконаних замовлень.

// const orders = [
//   { id: 1, products: ["Milk", "Bread"], status: "completed" },
//   { id: 2, products: ["Eggs", "Juice"], status: "processing" },
//   { id: 3, products: ["Pasta", "Spices"], status: "completed" },
// ];

// const completedOrders = orders
//   .filter((order) => order.status === "completed")
//   .flatMap((order) => order.products, 1);

// console.log(completedOrders);

// todo 14

// Порахуй загальну кількість лайків в категорії  Fashion

// const posts = [
//   { title: "Post 1", likes: 20, category: "Tech" },
//   { title: "Post 2", likes: 45, category: "Fashion" },
//   { title: "Post 3", likes: 12, category: "Tech" },
//   { title: "Post 4", likes: 30, category: "Fitness" },
//   { title: "Post 5", likes: 15, category: "Fashion" },
//   { title: "Post 6", likes: 50, category: "Tech" },
// ];

// const postsLikes = posts.filter.reduce;

// todo 15

// Зібрати в allTopics масив всіх предметів всіх курсів.
// Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// console.log(courses);

// const arr = courses
//   .flatMap((course) => course.topics)
//   .filter((course, index, array) => array.indexOf(course) === index);

// console.log(arr);

// todo task class

//Напиши клас Rectangle який створює об'єкт з властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.

// class Rectangle {
//   constructor(width, height) {
//     (this.width = width), (this.height = height);
//   }

//   calculateArea() {
//     return this.width * this.height;
//   }
// }

// const r = new Rectangle(4, 5);
// console.log(r.calculateArea()); // 20

// todo task class

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(params) {
//     this.#login = params.login;
//     this.#email = params.email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client({ login: "user123", email: "user@example.com" });

// console.log(client.login); // "user123"
// console.log(client.email); // "user@example.com"

// client.login = "newUser";
// client.email = "newUser@mail.com";

// console.log(client.login);
// console.log(client.email);

// todo task class

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   sum;

//   constructor(sum) {
//     this.sum = sum;
//   }
//   number(value) {
//     this.sum = value;
//     return this;
//   }
//   getResult() {
//     return this.sum;
//   }
//   add(value) {
//     this.sum += value;
//     return this;
//   }
//   substract(value) {
//     this.sum -= value;
//     return this;
//   }
//   divide(value) {
//     this.sum /= value;
//     return this;
//   }
//   multiply(value) {
//     this.sum *= value;
//     return this;
//   }
// }
// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .substract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// todo task class

// Створи клас Phone який створює об'єкт з ластивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

// class Phone {
//   #price;
//   static MAX_PRICE = 40000;

//   constructor(price) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (newPrice <= Phone.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
// }

// todo task class

// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
//  Крім того, клас `Employee` має мати метод `getEmployeeDetails()`,
// який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   name;
//   age;
//   gender;
//   email;

//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   salary;
//   department;

//   constructor(name, age, gender, email, salary, department) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//   }

//   getEmployeeDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }

// const person = new Person("Anna", 30, "female", "anna@example.com");
// console.log("Person details:", person.getDetails());

// const employee = new Employee(
//   "Ivan",
//   40,
//   "male",
//   "ivan@example.com",
//   50000,
//   "IT"
// );
// console.log("Employee details (person):", employee.getDetails());

// console.log("Employee details (employee):", employee.getEmployeeDetails());

// const dev = new Employee(
//   "Olena",
//   28,
//   "female",
//   "olena@example.com",
//   4500,
//   "Engineering"
// );

// console.log("Employee details (employee):", dev.getEmployeeDetails());

// todo task

// Створіть клас BankAccount, який має конструктор для зберігання
// номеру рахунку та балансу.
// Додайте методи:
// withdraw - метод для зняття готівки. Отримує в якості аргументу
// суму готівки котру потрібно зняти. Готівку можна зняти за умови,
// що баланс більше або дорівнює сумі, котру хоче зняти користувач.
// Виводить повідомлення: `Знято amount грн. Залишок на рахунку: balance грн.`
// або "Недостатньо коштів на рахунку."
// deposit - метод для пововнення балансу. Отримує в якості аргументу
// суму котру користувач хоче покласти на рахунок.
// Виводить повідомлення: `Поповнено amount грн. Залишок на рахунку: balance грн.`
// checkBalance - метод для перевірки балансу.
// Виводить повідомлення `Залишок на рахунку: balance грн.`

// class BankAccount {
//   numberAccount;
//   balance;

//   constructor(numberAccount, balance) {
//     this.numberAccount = numberAccount;
//     this.balance = balance;
//   }

//   withdraw(amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//       return `Знято ${amount} грн. Залишок на рахунку: ${this.balance} грн.`;
//     } else {
//       return "Недостатньо коштів на рахунку.";
//     }
//   }

//   deposit(amount) {
//     this.balance += amount;
//     return `Поповнено ${amount} грн. Залишок на рахунку: ${this.balance} грн.`;
//   }

//   checkBalance() {
//     return `Залишок на рахунку: ${this.balance} грн.`;
//   }
// }

// const account = new BankAccount("UA123456789", 1000);

// console.log(account.checkBalance());
// console.log(account.deposit(500));
// console.log(account.withdraw(200));
// console.log(account.withdraw(2000));
// console.log(account.checkBalance());
