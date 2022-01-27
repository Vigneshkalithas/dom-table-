async function postData(){

    var forData = {
        firstname :document.getElementById("first-name").value,
        lastname : document.getElementById("last-name").value,
        address : document.getElementById("address").value,
        pincode : document.getElementById("pincode").value,
        gender : document.getElementById("genders").value,
        state : document.getElementById("states").value,
        country :document.getElementById("country").value,
        food : document.getElementById("food").value
    }
      

    try{
        var postData = await fetch("https://61f1b9df072f86001749f34c.mockapi.io/userdata",{
        method:"POST",
        body: JSON.stringify(forData),
        headers : {
            "Content-type" : "application/json"
        }
    })
    alert("Data Stored")
    getData()

    } catch (error) {
        alert("something went wrong")
    }
}

async function getData(){
    try{
        var userData = await fetch("https://61f1b9df072f86001749f34c.mockapi.io/userdata");
        var users = await userData.json();
        var tbody = document.getElementById("tbody");
        tbody.innerText ="";
        users.forEach(user => {

            var tr = document.createElement("tr");


            var idTd = document.createElement("td");
            idTd.innerText = user.id;

            var firstnameTd = document.createElement("td");
            firstnameTd.innerText = user.firstname;

            var lastnameTd = document.createElement("td");
            lastnameTd.innerText = user.lastname;

            var addressTd = document.createElement("td");
            addressTd.innerText = user.address;

            var pincodeTd = document.createElement("td");
            pincodeTd.innerText = user.pincode;

            var genderTd = document.createElement("td");
            genderTd.innerText = user.gender;

            var stateTd = document.createElement("td");
            stateTd.innerText = user.state;

            var countryTd = document.createElement("td");
            countryTd.innerText = user.country;

            var foodTd = document.createElement("td");
            foodTd.innerText = user.food;


            tr.appendChild(idTd)
            tr.appendChild(firstnameTd)
            tr.appendChild(lastnameTd)
            tr.appendChild(addressTd)
            tr.appendChild(pincodeTd)
            tr.appendChild(genderTd)
            tr.appendChild(stateTd)
            tr.appendChild(countryTd)
            tr.appendChild(foodTd)

            tbody.appendChild(tr)
            

        });
    } catch(error){

    }
}

getData()