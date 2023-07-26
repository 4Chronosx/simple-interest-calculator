function updateRate() {
    current_rate = document.querySelector('#rate').value
    document.querySelector('#rate_val').innerText = current_rate
}


function calculateFinalAmount() {
    if (validateAmount(document.querySelector('#amount').value) === true) {
        principal = document.querySelector('#amount').value
        rate = document.querySelector('#rate').value 
        years = document.querySelector('#years').value 
        /** Final Amount = Principal * (1 + rt) */
        finalAmount = principal * [1 + ((rate/100) * years)]

        currentYear = new Date().getFullYear()
        finalYear = +years + (+currentYear)

        document.querySelector('#result').innerHTML = 
        `if you deposit <mark>$${principal}</mark>,<br> at an interest rate of <mark>${rate}%</mark><br>
        You will receive an amount of <mark>$${finalAmount}</mark>,<br> in the year <mark>${finalYear}</mark><br>`;
    }
    
}

function validateAmount() {
    principal = document.querySelector('#amount').value 
    if (principal != "" && principal >= 0) {
        document.querySelector('#amount').style.border = "1px solid black";
        document.querySelector('#error').innerHTML = "";
        return true
    }
    else if (principal < 0) {
        document.querySelector('#amount').style.border = "1.5px solid red";
        document.querySelector('#error').innerHTML = "Pleaser enter a positive amount only<br>";
        return false
    }
    else {
        document.querySelector('#amount').style.border = "1.5px solid red";
        document.querySelector('#error').innerHTML = "Pleaser enter an amount<br>";
        return false
    }
} 

