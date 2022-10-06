const keys = document.querySelectorAll('#btn')

const errorMsg = document.getElementById('error')
const tipAmount = document.getElementById('tip-amount-display')
const bill = document.getElementById('display')
const numberOfPeople = document.getElementById('number-of-people')
const totalPerPerson = document.getElementById('total-amount-display')

// Reset btn
const resetBtn = document.getElementById('reset-btn')

resetBtn.addEventListener('click', function reset(){
  tipAmount.innerHTML = '$0.00'
  totalPerPerson.innerHTML = '$0.00'
})

// Adding Key Functions
keys.forEach(key => {
  key.addEventListener('click', function(e){
    e.preventDefault();

    if(numberOfPeople.value <= 0) {
 
      errorMsg.style.display = 'inline'
      numberOfPeople.style.border = '1px solid red'

    } else {
      tip =  (((parseFloat(key.value) * parseFloat(bill.value)) / parseInt(numberOfPeople.value))).toFixed(2)
      tipAmount.innerHTML = '$' + tip
      totalPerPerson.innerHTML = '$' + ((parseFloat(bill.value) / parseFloat(numberOfPeople.value)) + parseFloat(tip)).toFixed(2)

      errorMsg.style.display = 'none'
      numberOfPeople.style.border = 'none'
      
    }
    
  })
  
})

// Custom button

const custom = document.getElementById('btn-custom')

custom.addEventListener('keypress', function(e){

  if(e.key === 'Enter') {
    if(numberOfPeople.value <= 0) {
 
      errorMsg.style.display = 'inline'
      numberOfPeople.style.border = '1px solid red'

    } else {

    e.preventDefault();
    customValue = custom.value / 100

    tip =  (((customValue * parseFloat(bill.value)) / parseInt(numberOfPeople.value))).toFixed(2)
    tipAmount.innerHTML = '$' + tip
    totalPerPerson.innerHTML = '$' + ((parseFloat(bill.value) / parseFloat(numberOfPeople.value)) + parseFloat(tip)).toFixed(2)
 
    errorMsg.style.display = 'none'
    numberOfPeople.style.border = 'none'
  }
}

})
