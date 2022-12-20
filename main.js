//Global variables
let slAdult;
let foreignAdult;
let slChild;
let foreignChild;
let infant;

let hours;
let hoursCost;
let numOfTourists;
let total;
let a;
let b;
let c;
let d;
let e;
let favourite;


//Getting element by Id bcuz need to add event-listeners.
const form = document.getElementById('trainticket');
const date = document.getElementById('cal');
const fullname = document.getElementById('nme');
const code = document.getElementById('mob1');
const number = document.getElementById('mob');
const email = document.getElementById('mail');
const coEmail = document.getElementById('coEmail');
const gender = document.getElementById('gndr');
const duration = document.getElementById('hrs');
const btnAdd = document.getElementById('add');
const btnOrder = document.getElementById('order');
//Add to favourite buttons
const btnAddToFav = document.getElementById('addFavourites');
const btnOrderFav = document.getElementById('orderFavourites');
//Validations
const overallOrder = document.getElementById('overallOrder');
const costOutpt = document.getElementById('costOutput');
const nameValid = document.getElementById('nameValid');
const numberValid = document.getElementById('numberValid');
const emailValid = document.getElementById('emailValid');
const coEmailValid = document.getElementById('coEmailValid');


const dateSelected = document.getElementById('cal');

document.addEventListener('change', () =>{
  let date = dateSelected.value;
})



window.addEventListener('load', init);

function init(){
  slAdult = 1200.00;
  foreignAdult = 5500.00;
  slChild = 700.00;
  foreignChild = 2700.00;

  infant = 0;
  slAdultCount = 0;
  foreignAdultCount = 0;
  slChildCount = 0;
  foreignChildCount = 0;
  infantCount = 0;
  a=0;
  b=0;
  c=0;
  d=0;
  e=0;
  hours = "3 hours";     //default
  numOfTourists = slAdult + foreignAdult + slChild + foreignChild + infant;
  total = slAdult*a + foreignAdult*b + slChild*c + foreignChild*d + infant*e;
}




//   **** INCREMENT AND DECREMENT PART ****


//SL adult
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

plus.addEventListener("click", ()=>{
     a++;
     num.innerText = a;
     console.log(a);

     slAdultCount = parseInt(a);
    
})
minus.addEventListener("click", ()=>{
     if(a>0){

     a--;
     num.innerText = a;
     console.log(a);

     slAdultCount = parseInt(a);
    
  }
})



//Foreign adult
const plus1 = document.querySelector(".plus1");
const minus1 = document.querySelector(".minus1");
const num1 = document.querySelector(".num1");

plus1.addEventListener("click", ()=>{
    b++;
    num1.innerText = b;
    console.log(b);

    foreignAdultCount = parseInt(b);
})
minus1.addEventListener("click", ()=>{
    if(b>0){

    b--;
    num1.innerText = b;
    console.log(b);

    foreignAdultCount = parseInt(b);
  }
})



//SL child
const plus2 = document.querySelector(".plus2");
const minus2 = document.querySelector(".minus2");
const num2 = document.querySelector(".num2");

plus2.addEventListener("click", ()=>{
    c++;
    num2.innerText = c;
    console.log(c);

    slChildCount = parseInt(c);
})
minus2.addEventListener("click", ()=>{
    if(c>0){

    c--;
    num2.innerText = c;
    console.log(c);

    slChildCount = parseInt(c);
  }
})



//Foreign child
const plus3 = document.querySelector(".plus3");
const minus3 = document.querySelector(".minus3");
const num3 = document.querySelector(".num3");

plus3.addEventListener("click", ()=>{
    d++;
    num3.innerText = d;
    console.log(d);

    foreignChildCount = parseInt(d);
})
minus3.addEventListener("click", ()=>{
    if(d>0){

    d--;
    num3.innerText = d;
    console.log(d);

    foreignChildCount = parseInt(d);
  }
})



//Infant
const plus4 = document.querySelector(".plus4");
const minus4 = document.querySelector(".minus4");
const num4 = document.querySelector(".num4");

plus4.addEventListener("click", ()=>{
    e++;
   
    num4.innerText = e;
    console.log(e);

    infantCount = parseInt(e);
})
minus4.addEventListener("click", ()=>{
    if(e>0){

    e--;
    num4.innerText = e;
    console.log(e);

    infantCount = parseInt(e);
  }
})







  btnAdd.addEventListener("click", AddToOrder);
  btnOrder.addEventListener("click", PlaceOrder);


function AddToOrder(){
  
  if (duration.value == "3 hours"){
    slAdult = 1200.00;
    foreignAdult = 5500.00;
    slChild = 700.00;
    foreignChild = 2700.00;

    total = slAdult*slAdultCount + foreignAdult*foreignAdultCount + slChild*slChildCount + foreignChild*foreignChildCount + infant*infantCount;
    overallOrder.innerText = `Total : ${slAdult*slAdultCount + foreignAdult*foreignAdultCount + slChild*slChildCount + foreignChild*foreignChildCount + infant*infantCount} LKR`;
  }
  else if(duration.value == "1/2 day"){
    slAdult = 1200.00 + 350.00;
    foreignAdult = 5500.00 + 450.00;
    slChild = 700.00 + 350.00;
    foreignChild = 2700.00 + 450.00;

    total = slAdult*slAdultCount + foreignAdult*foreignAdultCount + slChild*slChildCount + foreignChild*foreignChildCount + infant*infantCount;
    overallOrder.innerText = `Total : ${slAdult*slAdultCount + foreignAdult*foreignAdultCount + slChild*slChildCount + foreignChild*foreignChildCount + infant*infantCount} LKR`;
  }

  else{
    slAdult = 1200.00 + 600.00;
    foreignAdult = 5500.00 + 800.00;
    slChild = 700.00 + 600.00;
    foreignChild = 2700.00 + 800.00;

    total = slAdult*slAdultCount + foreignAdult*foreignAdultCount + slChild*slChildCount + foreignChild*foreignChildCount + infant*infantCount;
    overallOrder.innerText = `Total : ${slAdult*slAdultCount + foreignAdult*foreignAdultCount + slChild*slChildCount + foreignChild*foreignChildCount + infant*infantCount} LKR`;
  }
  //Name validation
  
let fName = fullname.value;
if (fName === ''){
  nameValid.innerHTML = 'Enter your full name';
  
}
else{
  nameValid.innerHTML = '';
}

//Number validation
let mNumber = number.value;
if(mNumber.length !== 9){
  numberValid.innerHTML = 'Enter a valid phone number';
}
else{
  numberValid.innerHTML = '';
}

//Email validation
let Email = email.value;
if(Email === ''){
  emailValid.innerHTML = 'Enter your email';
}
else{
  emailValid.innerHTML = '';
}

//CoEmail validation
 let cemail = coEmail;
 if(Email != cemail){
   coEmailValid.innerHTML = 'Check your entered email again';
 }
 else{
   coEmailValid.innerHTML = '';
 }

if (fName!=='' && mNumber.length === 9 && Email !== '' && cemail !== '' && Email === cemail){
  slAdult = 1200.00;
  foreignAdult = 5500.00;
  slChild = 700.00;
  foreignChild = 2700.00;
  infant = 0.00;

  overallOrder.innerText = `The Total is: ${total}LKR `;

}

};

 
function PlaceOrder(){
  slAdult = 1200.00;
  foreignAdult = 5500.00;
  slChild = 700.00;
  foreignChild = 2700.00;
  infant = 0.00;

  total = slAdult*slAdultCount + foreignAdult*foreignAdultCount + slChild*slChildCount + foreignChild*foreignChildCount + infant*infantCount;
   costOutpt.innerHTML =`Booked date : ${date.value} <br>
                         <br> Name : ${fullname.value} <br>
                         <br> Gender : ${gender.value} <br>
                         <br> Phone number : ${number.value} <br>
                         <br> Email : ${email.value} <br>
                         <br> Total : ${slAdult*slAdultCount + foreignAdult*foreignAdultCount + slChild*slChildCount + foreignChild*foreignChildCount + infant*infantCount}LKR`

}




 //Add to favourite
btnAddToFav.addEventListener('click',() =>{
  if (duration.value == "3 hours"){
    slAdult = 1200.00;
    foreignAdult = 5500.00;
    slChild = 700.00;
    foreignChild = 2700.00;

    total = slAdult*slAdultCount + foreignAdult*foreignAdultCount + slChild*slChildCount + foreignChild*foreignChildCount + infant*infantCount;
    
  }

  else if(duration.value == "1/2 day"){
    slAdult = 1200.00 + 350.00;
    foreignAdult = 5500.00 + 450.00;
    slChild = 700.00 + 350.00;
    foreignChild = 2700.00 + 450.00;

    total = slAdult*slAdultCount + foreignAdult*foreignAdultCount + slChild*slChildCount + foreignChild*foreignChildCount + infant*infantCount;
    
  }

  else{
    slAdult = 1200.00 + 600.00;
    foreignAdult = 5500.00 + 800.00;
    slChild = 700.00 + 600.00;
    foreignChild = 2700.00 + 800.00;

    total = slAdult*slAdultCount + foreignAdult*foreignAdultCount + slChild*slChildCount + foreignChild*foreignChildCount + infant*infantCount;

     
  }


  favourite.push({slAdult:slAdultCount,foreignAdult:foreignAdultCount,slChild:slChildCount,foreignChild:foreignChildCount,infant:infantCount,time:duration.value,amount:total});

  let favouriteJSON = JSON.stringify(favourite[favourite.length-1]);
  console.log(favouriteJSON + " Your favourite is added")

  localStorage.setFav('favourite',favouriteJSON);
    slAdultCount = 0, foreignAdultCount = 0, slChildCount = 0, foreignChildCount = 0, infantCount = 0;
    num.innerText = 0, num1.innerText = 0, num2.innerText = 0, num3.innerText = 0, num4.innerText = 0;
    total = 0;
    overallOrder.innerText = ` `;
});



//Order favourite