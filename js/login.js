
//getting the id of the button and add the event handler which is a click event . adn then add a function here the functionality will be added . 
document.getElementById("submit-button").addEventListener("click",function(event){
    //prevent default will be prevent the browser reloading during the typing of the input field . 
    event.preventDefault();
    // getting the phone number from the input field using the id of the phone number.
    const phoneNumber = document.getElementById("mobile-number").value;
    // getting the pin number of the input field using the id . 
    const pinNumber = document.getElementById("pin-number").value;

    let errorExist = document.getElementById("error");

    if(phoneNumber == "01796059406" && pinNumber == "1234"){
        console.log("Login Success.");
        window.location.href = "../practice/home.html";
    }
    else{
        if(!errorExist){
            
                const newPara = document.createElement("p");
                newPara.id= "error";
        newPara.innerText = "Wrong phone number or password! \n Please enter the correct 11 digit phone number and 4 digit pin number.";
        newPara.style.color = "red";
        newPara.style.fontSize = "16px";
        newPara.style.textAlign = "center";
        newPara.style.paddingTop = "20px";
        document.getElementById("fieldset-id").appendChild(newPara);
        }
        else{
             existingError.innerText = "Wrong phone number or password! \n Please enter the correct 11 digit phone number and 4 digit pin number.";
        }
    }
    
    
})

