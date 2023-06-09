let num = prompt("Введите целое число", "");
        if (num % 100 >= 11 && num % 100 <= 14) {
            switch (num % 100) {
                case 11:
                case 12:
                case 13:
                case 14:
                    alert(`На ветке сидит ${num} ворон`)
                    break;
            }
        }
        else {
            switch (num % 10) {
                case 0:
                    alert(`На ветке сидит ${num} ворон`)
                    break;
                case 1:
                    alert(`На ветке сидит ${num} ворона`)
                    break;
                case 2:
                case 3:
                case 4:
                    alert(`На ветке сидит ${num} вороны`)
                    break;
                case 5:
                case 6:
                case 7:
                case 9:
                    alert(`На ветке сидит ${num} ворон`)
                    break;
                default:
                    alert(`Число нецелое или это не число`)
                    break;
            }
        }
