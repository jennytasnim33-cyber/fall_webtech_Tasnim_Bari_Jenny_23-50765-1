
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("donationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const address1 = document.getElementById("address1").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value.trim();
    const country = document.getElementById("country").value;
    const email = document.getElementById("email").value.trim();
    const amountChecked = document.querySelector('input[name="amount"]:checked');
    const otherAmount = document.getElementById("otherAmount").value.trim();

 
    if (!firstName || !lastName || !address1 || !city || !state || !zip || !country || !email) {
      alert("Please fill out all required (*) fields.");
      return;
    }

   
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

  
    if (isNaN(zip)) {
      alert("Zip Code must be a number.");
      return;
    }

    if (!amountChecked) {
      alert("Please select a donation amount.");
      return;
    }


    if (amountChecked.value === "other" && otherAmount === "") {
      alert("Please enter a value for 'Other Amount'.");
      return;
    }


    alert("Form submitted successfully! Thank you for your donation.");
    form.reset();
  });
});
