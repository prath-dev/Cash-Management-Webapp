let billAmount = document.querySelector("#bill-amt");
let cashGiven = document.querySelector("#cash-given");
let checkButton = document.querySelector("#check");
let message = document.querySelector("#error-message");
let noOfNotes = document.querySelectorAll(".no-of-notes");


let availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click",  validateBillAndCashAmount ) ; 
  function validateBillAndCashAmount () 
 {
    HideMessage();
    if (Number(billAmount.value) > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            let AmountToBeReturned = cashGiven.value - billAmount.value ; 
            calculateChange(AmountToBeReturned);
        } else {
            showMessage("do you want to wash plates") ; 
              
             
        }


    } else {
        showMessage("Invalid Bill Amt") ;
    }
}

function calculateChange(AmountToBeReturned) {
    for (i = 0; i < availableNotes.length; i++) {
        let numberOfNotes = Math.trunc(
            AmountToBeReturned / availableNotes[i]
        );
        AmountToBeReturned = AmountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}






function HideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg
}