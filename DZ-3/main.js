
//Задание №1

let nums = '123456789'

function rvrs(obj){
    let result = [];
    for(let i = obj.length - 1; i >= 0; i--){
    result.push(obj[i])
}
return [result.join('')]

}
console.log(rvrs(nums))

//Задание №2

let numbr = Number('5')

function sumOfnumbr (number) {
    let sums = 0;
    for (let x = 1; x <= number; x++) {
        sums += x;
    }
    console.log(number, sums)
}

(sumOfnumbr(numbr))

//Задание №3
        function fromOne () {
        let sum = 0;
        let num = 0;
        while (sum < 99){
           sum ++;
           if (sum % 2 !== 0)console.log(sum)
           num += sum;
        }
        console.log(num)
    }

    fromOne()
    
//Задание №4

function dayOfWeek () {

let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
let arrWeek = [];

for (let x = 0; x < week.length; x++){
    if (week[x] == 'saturday' || week[x] == 'sunday'){
        arrWeek.push(week[x].toUpperCase())
    } else{
        arrWeek.push(week[x])
    }

    }
    console.log(arrWeek)
}

dayOfWeek()
