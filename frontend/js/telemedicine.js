// telemedicine.js

// DOMContentLoaded Event to ensure the DOM is fully loaded before executing telemedicine functionality
document.addEventListener('DOMContentLoaded', function () {
    // DOM elements for telemedicine functionality
    const scheduleButton = document.querySelector('#scheduleButton');
    const telemedicineContainer = document.querySelector('#telemedicineServices');
    const appointmentForm = document.querySelector('#appointmentForm');
    const appointmentDate = document.querySelector('#appointmentDate');
    const appointmentTime = document.querySelector('#appointmentTime');
    const doctorSelect = document.querySelector('#doctorSelect');
    const confirmationMessage = document.querySelector('#confirmationMessage');

    // Dummy Data (You would replace this with actual data from your backend/database)
    const telemedicineServices = [
        { name: "Dr. Aisha Bello", specialty: "Pediatrics", availability: ["Monday", "Wednesday", "Friday"] },
        { name: "Dr. Chike Obi", specialty: "Cardiology", availability: ["Tuesday", "Thursday"] },
        { name: "Dr. Tunde Afolabi", specialty: "General Practice", availability: ["Monday", "Tuesday", "Thursday"] },
    ];

    // Populate the doctor selection dropdown
    function populateDoctors() {
        telemedicineServices.forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor.name;
            option.textContent = `${doctor.name} - ${doctor.specialty}`;
            doctorSelect.appendChild(option);
        });
    }

    // Event Listener for Schedule Appointment button
    if (scheduleButton) {
        scheduleButton.addEventListener('click', function () {
            if (appointmentForm.checkValidity()) {
                const selectedDoctor = doctorSelect.value;
                const date = appointmentDate.value;
                const time = appointmentTime.value;

                // Simulate appointment scheduling (In a real application, you would send this data to your backend)
                confirmationMessage.textContent = `Appointment scheduled with ${selectedDoctor} on ${date} at ${time}.`;
                confirmationMessage.style.display = 'block';
                appointmentForm.reset(); // Reset the form after submission
            } else {
                confirmationMessage.textContent = 'Please fill out all fields correctly.';
                confirmationMessage.style.display = 'block';
            }
        });
    }

    // Initialize the telemedicine services on page load
    populateDoctors();
});
