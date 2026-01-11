const URL = 'https://crudcrud.com/api/a3e850d647114ff49aadb9cc58b2ef7a/booking';


function bookBusTicket(event) {
    event.preventDefault()

    const bookingDetails = {
        name: event.target.name.value,
        email: event.target.email.value,
        phone:event.target.phone.value,
        busNo:event.target.bus.value
    }
    axios.post(URL,bookingDetails).then(response=>{
        console.log(response.data);
    }).catch(err=>{
        console.log(err);
    })
    document.getElementById("name").value =""
    document.getElementById("email").value =""
    document.getElementById("phone").value =""
    document.getElementById("bus").value =""
}

