const URL = 'https://crudcrud.com/api/cbbd178a98e34b38935bfdeb2c7345e6/booking';

function bookBusTicket(event) {
    event.preventDefault();

    const bookingDetails = {
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        busNo: event.target.bus.value
    };

    axios.post(URL, bookingDetails)
        .then(response => {
            displayBookingDetails(response.data);
        })
        .catch(err => console.log(err));

    event.target.reset();
}

function displayBookingDetails(user) {
    const parent = document.getElementById('bookingList');

    const userItem = document.createElement('li');
    userItem.id = user._id;
    userItem.innerHTML = `
        <span>${user.name} - ${user.email} - ${user.phone} - ${user.busNo}</span>
    `;

    // Edit Button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';

    editBtn.addEventListener('click', () => {
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        document.getElementById('phone').value = user.phone;
        document.getElementById('bus').value = user.busNo;

        axios.delete(`${URL}/${user._id}`)
            .then(() => parent.removeChild(userItem))
            .catch(err => console.log(err));
    });

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    deleteBtn.addEventListener('click', () => {
        axios.delete(`${URL}/${user._id}`)
            .then(() => parent.removeChild(userItem))
            .catch(err => console.log(err));
    });

    userItem.appendChild(editBtn);
    userItem.appendChild(deleteBtn);
    parent.appendChild(userItem);
}