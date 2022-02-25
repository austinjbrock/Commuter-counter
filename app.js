let countDisplay= document.getElementById('count-el') 
let savePassengerBtn = document.getElementById('save-btn')
let displaySavedPassengers = document.getElementById('saved-passengers')
let decrementBtn = document.getElementById('decrement-btn')
let noPassengerMessage = 'Currently No Passengers'


let count = 0;

let addPassengerBtn = document.getElementById('increment-btn')

addPassengerBtn.addEventListener('click',() => {
   countDisplay.innerHTML = count+=1
}) 


decrementBtn.addEventListener('click', () =>{
   countDisplay.innerHTML = count -=1;
   
   if(count< 1){
      countDisplay.innerHTML = noPassengerMessage
      displaySavedPassengers.textContent = ''
   }

})

savePassengerBtn.addEventListener('click', () => {
   displaySavedPassengers.textContent += `${count},`
})