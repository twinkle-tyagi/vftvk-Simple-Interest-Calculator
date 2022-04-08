function compute()
{
    let principal = document.getElementById("principal").value;

    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;

    let dateNow = new Date();
    let yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    let resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";
}

function SliderValue()
{
    let slider = document.getElementById("rate");
    let output = document.getElementById("rate_display");
    output.innerHTML = slider.value; // Display the default slider value

    
    slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}