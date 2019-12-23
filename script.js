window.onload = function() {
    task1.onclick = function() {
        let sumDollar = +prompt("Введіть суму доларів для конвертації");
        let nameValuta = prompt("Введіть валюту для конвертації (EUR; UAH; AZN) ");
        let sumObn = 0;
        switch (nameValuta) {
            case "EUR":
                sumObn = sumDollar * 0.88;
                break;
            case "UAH":
                sumObn = sumDollar * 23;
                break;
            case "AZN":
                sumObn = sumDollar * 1.7;
                break;
            default:
                alert("Ви ввели неправильне значення");
                break;

        }
        alert(`Ви отримали ${sumObn} ${nameValuta}`);

    }
    task2.onclick = function() {
        let sumaBuy = +prompt("Введіть суму витрачених коштів");
        let discount = 0;
        if (sumaBuy <= 0) {
            alert("Введіть суму більше 0");
        } else if (sumaBuy >= 200 && sumaBuy < 300) {
            discount = sumaBuy * 3 / 100;
        } else if (sumaBuy >= 300 && sumaBuy < 500) {
            discount = sumaBuy * 5 / 100;
        } else if (sumaBuy >= 500) {
            discount = sumaBuy * 7 / 100;
        } else {
            alert("Для знижки потрібно витрати більше коштів");
        }
        if (sumaBuy <= 0) {} else {
            alert(`Ваша знижка рівна ${discount.toFixed(2)} грн. сума до оплати ${(sumaBuy-discount).toFixed(2)} грн.`)
        }
    }
    task3.onclick = function() {
        //     ⦁	Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
        let circleLong = +prompt("Введіть довжину кола");
        let squareLong = +prompt("Введіть периметр квадрата");
        if (circleLong > 0 && squareLong > 0) {
            let circleDiametr = circleLong / Math.PI;
            let squareSide = squareLong / 4;
            if (squareSide >= circleDiametr) {
                alert("Ваше коло поміститься у квадрат");
            } else {
                alert("Ваше коло не поміститься у квадрат");
            }
        } else {
            alert("Кожне значення повинне бути більше 0");
        }
    }
    task4.onclick = function() {
        alert("Давайте зіграємо у вікторину. За кожну правильну відповідь ви отримуєте 2 бали. Поїхали!");
        let taskOne = +prompt("Горіло сім лампочок. Три з них згасли. Скільки лампочок залишилося?  Варіанти: 3 чи 4 чи 7 ");
        let taskTwo = prompt("Який чарівний предмет був у Аладіна: сопілка чи лампа чи паличка. ");
        let taskThree = +prompt("В якому році людина вперше побувала у космосі: 1967 чи 1961 чи 2001");
        const question1 = 7;
        const question2 = "лампа";
        const question3 = 1961;
        let rezult1 = 0;
        let rezult2 = 0;
        let rezult3 = 0;
        if (taskOne === question1) {
            rezult1 = 2;
        }
        if (taskTwo === question2) {
            rezult2 = 2
        }
        if (taskThree === question3) {
            rezult3 = 2;
        }
        let finishrezult = rezult1 + rezult2 + rezult3;
        if (finishrezult > 0) {
            alert(`Вітаємо!!! Ви набрали ${finishrezult} балів`)
        } else {
            alert(`Треба братись за розум! Ваш результат ${finishrezult}`)
        }
    }
    task5.onclick = function() {
        let day = +prompt("Введіть будь ласка день року (між 1 та 31 )");
        let mounth = +prompt("Введіть будь місяць року (між 1 та 12)");
        let year = +prompt("Введіть будь ласка рік");
        if (day > 31 || mounth > 12) {
            alert("Ви ввели неправильний день або місяць для продовження потрібно перезапустити програму");
        }
        let nextDay;
        let nextMounth = 1;
        let nextYear;

        // Day&mounth
        if (day === 28 && mounth === 2 && (year % 400 === 0 || (year % 4 == 0 && year % 100 != 0))) {
            nextDay = day + 1;
            nextMounth = mounth;
        } else if (day === 29 && mounth === 2 && (year % 400 === 0 || (year % 4 == 0 && year % 100 != 0))) {
            nextDay = 1;
            nextMounth = ++mounth;
        } else if (day === 28 && mounth === 2) {
            nextDay = 1;
            nextMounth = ++mounth;
        } else if (day === 30 && (mounth === 4 || mounth === 6 || mounth === 9 || mounth === 11)) {
            nextDay = 1;
        } else if (day === 31 && (mounth === 1 || mounth == 3 || mounth == 5 || mounth === 7 || mounth === 8 || mounth === 10 || mounth === 12)) {
            nextDay = 1;
        } else if (day >= 1 && day <= 31) {
            nextDay = ++day;
            nextMounth = mounth;
        }
        // year
        if (day === 31 && mounth === 12) {
            nextYear = ++year;
        } else {
            nextYear = year;
        }
        alert(`Наступна дата за вказаною вами ${nextDay}.${nextMounth}.${nextYear}`)
    }
    task6.onclick = function() {
        let firstNumber = +prompt("Введіть перше число");
        let secondNumber = +prompt("Введіть друге число");
        alert(`Сума вказаних чисел рівна ${firstNumber+secondNumber}`)
    }
    task7.onclick = function() {
        alert("Давайте зіграємо у КОСТІ!!!")
        alert(`На першому кубику випало ${Math.floor(Math.random() * (6 - 1 + 1)) + 1} На другому кубику випало ${Math.floor(Math.random() * (6 - 1 + 1)) + 1}`)
    }
    task8.onclick = function() {
        alert("Давайте зіграємо у ОРЕЛ ЧИ РЕШКА!!!")
        let value = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        if (value === 2) {
            alert(`Випала РЕШКА`);
        } else {
            alert(`Випав ОРЕЛ`);
        }
    }
    task9.onclick = function() {
        let userNumber = prompt("Введіть число більше 1")
        alert(`Випадкове число із діапазону від 1 до ${userNumber} рівне ${Math.random() * (userNumber - 1) + 1}`)
    }
    task10.onclick = function() {
        let userNumber1 = +prompt("Введіть перше число");
        let userNumber2 = +prompt("Введіть друге число");
        let userNumberMax = Math.max(userNumber1, userNumber2);
        let userNumberMin = Math.min(userNumber1, userNumber2);
        alert(`Випадкове число із діапазону від ${userNumberMin} до ${userNumberMax} рівне ${Math.random() * (userNumberMax -userNumberMin) + 1}`)
    }
    task11.onclick = function() {
        let question = prompt("Чи знаєте ви офіційну назву мови програмування JavaScript");
        if (question == "ECMAScript" || "ecmascript" || "Ecmascript") {
            alert("Правильно!!!")
        } else {
            alert("Нажаль ні - це ECMAScript");
        }
    }
    task12.onclick = function() {
        let userNumber1 = +prompt("Введіть перше число");
        let userNumber2 = +prompt("Введіть друге число");
        let suma = userNumber1 + userNumber2;
        (suma < 4) ? alert("Мало"): alert("Багато");
    }


}