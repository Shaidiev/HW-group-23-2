//Задание №1

    let inputNum = document.querySelector('#card-number')

    inputNum.addEventListener("input", (event) => {
        const cardNumber = event.target.value;
        const maskedCardNumber = maskCard(cardNumber);
        event.target.value = maskedCardNumber;
        cardNumber = max.length
    });

    function maskCard(cardNumber, maskChar = "X") {
    const maskedChars = cardNumber.length -10;
    const maskedStr = maskChar.repeat(maskedChars);
    const visibleStart = cardNumber.substring(0, 6);
    const visibleEnd = cardNumber.substring(cardNumber.length - 4);
    return visibleStart + maskedStr + visibleEnd;
    }

console.log(maskCard('4917582569874215', '*'))

//Задание №2

let changeFirstIndex = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

console.log(changeFirstIndex('SHAIDIEV'))

//Задание №3

let yourName = document.querySelector('#YourName')
let resultName = document.querySelector('#resultName')


yourName.addEventListener('input', (event) => {
    let yorNameValue = event.target.value;
    maskedName = (name, namechar = '_') => {
        let namePart = name.split(' ')
        let firstName = namePart; 
        let resultShow = []  
        let resultString = '' 
        for (let i = 0 ; i < firstName.length; i++){
            let show = namePart[i]
            const maskedChars = namePart[i].length - 2;
             const maskedStr = namechar.repeat(maskedChars)
             let maskFirstName = show.substring(0, 1);
             let maskLastFirstName = show.substring(show.length - 1);
            let result = maskFirstName + maskedStr + maskLastFirstName;
            resultShow.push(result)
            resultString = resultShow.toString()
            }
            resultName.innerHTML = resultString;
        console.log(resultString)
    }
    maskedName(yorNameValue);
})

  



  
        

  