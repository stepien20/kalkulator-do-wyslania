const bequal = document.querySelector(`#bequal`);
const bclear = document.querySelector(`#bclear`);
const display = document.querySelector(`p[id="display"]`);
const memorynum=document.querySelector(`p[id="pamiecnum"]`);
const memoryop=document.querySelector(`p[id="pamiecop"]`);
///
const reverse=document.querySelector(`#breverse`);
const bdot=document.querySelector(`#bdot`);
const broot=document.querySelector(`broot`)
const bpower=document.querySelector(`bpower`)
let wynik=0;
let licz1 = "";
let licz2 = "";
let licz3="";
let operacja = "";
// tablica operacji
const operacje={
  dod: "+",
  odej: "-", 
  mnoz: "*",
  dziel: "/"
};
//dodanie kazdemu przyciskowi operacji funkcji po kliknieciu
for (const operator in operacje){
 document.querySelector(`#${operator}`).addEventListener(`click`,function(){
  display.innerHTML = "";
  if (operacja!=""){
    switch (operacja) {
      case "+":
        wynik=eval(licz1) + eval(licz2)
        licz1=wynik
        licz2=''
        operacja=''
        break;
        case "-":
        wynik=eval(licz1) - eval(licz2)
        licz1=wynik
        licz2=''
        operacja=''
        break;
      case "*":
        wynik=eval(licz1) * eval(licz2)
        licz1=wynik
        licz2=''
        operacja=''
        break;
      case "/":
      if(!licz2){display.innerHTML="nie można podzielić przez 0"; break;}
        wynik=eval(licz1) / eval(licz2)
        licz1=wynik
        licz2=''
        operacja=''
        break;
      default:
        display.innerHTML = "error";
        licz1=''
        licz2=''
        operacja=''
    }
  }
  operacja = operacje[operator];
  memorynum.innerText = licz1;
  memoryop.innerText = operacja;
  licz2=''
  
 })
}
//tablica przyciskow liczb
const tab_buttons=[]
for (let i=0;i<10;i++){
  tab_buttons.push(document.querySelector(`#b${i}`))
}
//przypisanie funkcji dla kazdego przycisku
for (let i=0;i<10;i++){
  tab_buttons[i].addEventListener(`click`, function(){
    display.innerText += i;
    if (operacja === "") {
      licz1 += this.value;
    } else {
      licz2 += this.value;
    }

})
}

//potega
// bpower.addEventListener(`click`,function(){
  
// })





bclear.addEventListener(`click`, function () {
  display.innerHTML = "";
  licz1 = licz2 = operacja = "";
  memorynum.innerText=""
  memoryop.innerText=""
});

bequal.addEventListener(`click`, function () {
  display.innerHTML=''
  if(licz2==''||operacja==''||licz1==''){
    display.innerHTML =licz1;
    memorynum.innerText='';
    memoryop.innerText='';
    return 0;
  }
  
  switch (operacja) {
    case "+":
      wynik=Number(licz1) + Number(licz2)
      display.innerHTML += wynik;
      licz1=wynik
      licz2=''
      operacja=''
      break;
      case "-":
      wynik=Number(licz1) - Number(licz2)
      display.innerHTML += wynik;
      licz1=wynik
      licz2=''
      operacja=''
      break;
    case "*":
      wynik=Number(licz1) * Number(licz2)
      display.innerHTML += wynik;
      licz1=wynik
      licz2=''
      operacja=''
      break;
    case "/":
    if(!licz2){display.innerHTML="nie można podzielić przez 0"; break;}
      wynik=Number(licz1) / Number(licz2)
      display.innerHTML += wynik;
      licz1=wynik
      licz2=''
      operacja=''
      break;
    default:
      display.innerHTML = "error";
      licz1=''
      licz2=''
      operacja=''
  }
});