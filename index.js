const URL = 'https://crudcrud.com/api/a3e850d647114ff49aadb9cc58b2ef7a/booking';


function bookBusTicket(event) {
    event.preventDefault()

    const bookingDetails = {
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        busNo: event.target.bus.value
    }
    axios.post(URL, bookingDetails).then(response => {
        displayBookingDetails(response.data);
    }).catch(err => {
        console.log(err);
    })
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("phone").value = ""
    document.getElementById("bus").value = ""
}

function displayBookingDetails(user) {
    const parent = document.getElementById('bookingList');
    let userItem = document.createElement('li');
    userItem.id=user._id;

    userItem.appendChild(document.textContent(`
        ${user.name} - ${user.email} - ${user.phone} - ${user.bus}`));

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
    
        editBtn.addEventListener('click', () => {
            document.getElementById('name').value = user.name;
            document.getElementById('email').value = user.email;
            document.getElementById('phone').value = user.phone;
            document.getElementById('bus').value = user.busNo;
    
            axios.delete(`${URL}/${user._id}`)
                .then(() => parent.removeChild(userItem))
                .catch(err => console.log(err));
        });

        

}