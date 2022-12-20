const donation = document.getElementById('slct');
const cardNumber = document.getElementById('card-number');
const expiryMonth = document.getElementById('ex-month');
const expiryYear = document.getElementById('ex-year');
const CVC = document.getElementById('cvc');
const cardName = document.getElementById('card-name');
const Name = document.getElementById('name');
const submit = document.getElementById('pay');

const nameValid = document.getElementById('nameValid');
const cardNumberValid = document.getElementById('cardNumberValid');
const cvcValid = document.getElementById('cvcValid');
const cardNameValid = document.getElementById('cardNameValid');

let cNumber = cardNumber.value;
let fName = Name.value;
let cvc = CVC.value;
let cName = cardName.value;

submit.addEventListener("click", ()=>{
    console.log(fName);

    //card number
    
    if (cNumber === ''){
        cardNumberValid.innerHTML = 'Enter your card number';
    }
    else{
        cardNumberValid.innerHTML = '';
    }

    //name
    
    if (fName === ''){
        nameValid.innerHTML = 'Enter your name';
    }
    else{
        nameValid.innerHTML = '';
    }

    //cvc
    
    if (cvc === ''){
        cvcValid.innerHTML = 'Enter your card CVC/CVV number';
    }
    else{
        cvcValid.innerHTML = '';
    }

    //card name
   
    if (cName === ''){
        cardNameValid.innerHTML = 'Enter your card name';
    }
    else{
        cardNameValid.innerHTML = '';
    }
    
});




