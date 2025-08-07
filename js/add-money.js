// cash out section
document.getElementById("cash-out-button").addEventListener("click", function (event) {
    event.preventDefault();
    // making the cash-out section visible and others hidden
    document.getElementById("cash-out").style.display = "block";
    document.getElementById("payment-details").style.display = "none";
    document.getElementById("add-money").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("bonus").style.display = "none";
    document.getElementById("pay-bills").style.display = "none";

    // calling the withdraw button to do task
    document.getElementById("withdraw-request").addEventListener("click", function (event) {
        event.preventDefault()

        // checking if the pin is right or wrong

        const pin = document.getElementById("withdraw-pin").value;
        if (pin === "1234") {
            const balance = document.getElementById("balance");

            const amountRequest = document.getElementById("withdraw-ammount").value;

            const totalBalance = parseInt(balance.innerText) - parseInt(amountRequest);

            console.log(totalBalance);

            // replacing with the old balance
            balance.innerText = totalBalance;
            confirm(amountRequest + " USD cashed out from your account. \n Your main balanace is " + totalBalance + "USD Thank you.")


            // creating new element to add in the transaction section which will be show the last transaction 
            const newtransaction = document.createElement("div");
            newtransaction.innerHTML = `
             <div class="flex justify-between items-center px-4 py-3">
                 <div class="flex">
                  <img src="assets/wallet1.png" class="p-3" alt="">
                 <div>
                   <h3 class="text-base text-[#080808B2] font-semibold py-1">Cash out</h3>
                     <p class="text-xs font-[#080808B2]">Today 01:44 AM</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
             </div>`;

             document.getElementById("payment-details").appendChild(newtransaction);

             
        }

        else {

            //creating a element which show what is wrong 
            const newPara = document.createElement("p");
            newPara.id = "error";
            newPara.innerText = "Wrong account number or pin number! \n Please enter the 4 digit pin number";
            newPara.style.color = "red";
            newPara.style.fontSize = "16px";
            newPara.style.textAlign = "center";
            newPara.style.paddingBottom = "20px";
            document.getElementById("cash-out").appendChild(newPara);
        }



    })



})

// add money section 

document.getElementById("add-money-buttons").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("add-money").style.display = "block";
    document.getElementById("payment-details").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("bonus").style.display = "none";
    document.getElementById("pay-bills").style.display = "none";

    document.getElementById("add-request").addEventListener("click", function (event) {
        event.preventDefault()

        const pin = document.getElementById("pinNumber").value;
        if (pin === "1234") {
            const balance = document.getElementById("balance");

            const amountRequest = document.getElementById("input-ammount").value;

            const totalBalance = parseInt(balance.innerText) + parseInt(amountRequest);

            console.log(totalBalance);

            balance.innerText = totalBalance;
            confirm(amountRequest + " USD added to your account. \n Your main balanace is " + totalBalance + "USD Thank you.")


                        // creating new element to add in the transaction section which will be show the last transaction 
            const newtransaction = document.createElement("div");
            newtransaction.innerHTML = `
             <div class="flex justify-between items-center px-4 py-3">
                 <div class="flex">
                  <img src="assets/wallet1.png" class="p-3" alt="">
                 <div>
                   <h3 class="text-base text-[#080808B2] font-semibold py-1">Add money : Bank</h3>
                     <p class="text-xs font-[#080808B2]">Today 01:44 AM</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
             </div>`;

             document.getElementById("payment-details").appendChild(newtransaction);

        }

        else {

            const newPara = document.createElement("p");
            newPara.id = "error";
            newPara.innerText = "Wrong account number or pin number! \n Please enter the 4 digit pin number";
            newPara.style.color = "red";
            newPara.style.fontSize = "16px";
            newPara.style.textAlign = "center";
            newPara.style.paddingBottom = "20px";
            document.getElementById("add-money").appendChild(newPara);
        }



    })


})

// transfer money section

document.getElementById("transferMoneyButton").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("transfer-money").style.display = "block";
    document.getElementById("payment-details").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("add-money").style.display = "none";
    document.getElementById("bonus").style.display = "none";
    document.getElementById("pay-bills").style.display = "none";

    document.getElementById("sendMoney").addEventListener("click", function (event) {
        event.preventDefault()

        const pin = document.getElementById("sendPin").value;
        if (pin === "1234") {
            const balance = document.getElementById("balance");

            const amountRequest = document.getElementById("send-request").value;

            const totalBalance = parseInt(balance.innerText) - parseInt(amountRequest);

            console.log(totalBalance);

            balance.innerText = totalBalance;
            confirm(amountRequest + " USD has been tranfered from your account. \n Your main balanace is " + totalBalance + "USD Thank you.")



                        // creating new element to add in the transaction section which will be show the last transaction 
            const newtransaction = document.createElement("div");
            newtransaction.innerHTML = `
             <div class="flex justify-between items-center px-4 py-3">
                 <div class="flex">
                  <img src="assets/wallet1.png" class="p-3" alt="">
                 <div>
                   <h3 class="text-base text-[#080808B2] font-semibold py-1">Send money : Unknown user</h3>
                     <p class="text-xs font-[#080808B2]">Today 01:44 AM</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
             </div>`;

             document.getElementById("payment-details").appendChild(newtransaction);

        }

        else {

            const newPara = document.createElement("p");
            newPara.id = "error";
            newPara.innerText = "Wrong account number or pin number! \n Please enter the 4 digit pin number";
            newPara.style.color = "red";
            newPara.style.fontSize = "16px";
            newPara.style.textAlign = "center";
            newPara.style.paddingBottom = "20px";
            document.getElementById("transfer-money").appendChild(newPara);
        }



    })


})

// bonus getting section

document.getElementById("bonus-button").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("bonus").style.display = "block";
    document.getElementById("payment-details").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("add-money").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("pay-bills").style.display = "none";

    document.getElementById("bonus-money").addEventListener("click", function (event) {
        event.preventDefault()

        const coupon = document.getElementById("coupon-value").value;
        if (coupon === "Raj") {
            const balance = document.getElementById("balance");



            const totalBalance = parseInt(balance.innerText) + parseInt(500);

            console.log(totalBalance);

            balance.innerText = totalBalance;
            confirm(500 + " USD Bonus has been added to you account. \n Your main balanace is " + totalBalance + "USD Thank you.")



                        // creating new element to add in the transaction section which will be show the last transaction 
            const newtransaction = document.createElement("div");
            newtransaction.innerHTML = `
             <div class="flex justify-between items-center px-4 py-3">
                 <div class="flex">
                  <img src="assets/wallet1.png" class="p-3" alt="">
                 <div>
                   <h3 class="text-base text-[#080808B2] font-semibold py-1">Bonus : $500</h3>
                     <p class="text-xs font-[#080808B2]">Today 01:44 AM</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
             </div>`;

             document.getElementById("payment-details").appendChild(newtransaction);

        }

        else {

            const newPara = document.createElement("p");
            newPara.id = "error";
            newPara.innerText = "Wrong coupon \n please added the right coupon. ";
            newPara.style.color = "red";
            newPara.style.fontSize = "16px";
            newPara.style.textAlign = "center";
            newPara.style.paddingBottom = "20px";
            document.getElementById("bonus").appendChild(newPara);
        }



    })



})

// bill pay section

document.getElementById("bills-button").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("pay-bills").style.display = "block";
    document.getElementById("add-money").style.display = "none";
    document.getElementById("payment-details").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("bonus").style.display = "none";

    document.getElementById("pay-request").addEventListener("click", function (event) {
        event.preventDefault()

        const pin = document.getElementById("pin-bill").value;
        if (pin === "1234") {
            const balance = document.getElementById("balance");

            const amountRequest = document.getElementById("bill-ammount").value;

            const totalBalance = parseInt(balance.innerText) - parseInt(amountRequest);

            console.log(totalBalance);

            balance.innerText = totalBalance;
            confirm(amountRequest + " USD bill had been paid. \n Your main balanace is " + totalBalance + "USD Thank you.")

                        // creating new element to add in the transaction section which will be show the last transaction 
            const newtransaction = document.createElement("div");
            newtransaction.innerHTML = `
             <div class="flex justify-between items-center px-4 py-3">
                 <div class="flex">
                  <img src="assets/wallet1.png" class="p-3" alt="">
                 <div>
                   <h3 class="text-base text-[#080808B2] font-semibold py-1">Paid bill</h3>
                     <p class="text-xs font-[#080808B2]">Today 01:44 AM</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
             </div>`;

             document.getElementById("payment-details").appendChild(newtransaction);

        }

        else {

            const newPara = document.createElement("p");
            newPara.id = "error";
            newPara.innerText = "Wrong account number or pin number! \n Please enter the 4 digit pin number";
            newPara.style.color = "red";
            newPara.style.fontSize = "16px";
            newPara.style.textAlign = "center";
            newPara.style.paddingBottom = "20px";
            document.getElementById("pay-bills").appendChild(newPara);
        }



    })


})


document.getElementById("transaction-button").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("pay-bills").style.display = "none";
    document.getElementById("add-money").style.display = "none";
    document.getElementById("payment-details").style.display = "block";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("bonus").style.display = "none";


})




