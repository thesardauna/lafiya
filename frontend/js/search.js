// search.js

// DOMContentLoaded Event to ensure the DOM is fully loaded before executing search functionality
document.addEventListener('DOMContentLoaded', function () {
    // Search Input Field
    const searchInput = document.querySelector('#searchInput');
    
    // Search Results Section
    const searchResultsContainer = document.querySelector('#searchResults');

    // Dummy Data (You would replace this with actual data from your backend/database)
    const providers = [
        { name: "Lagos General Hospital", type: "Hospital", location: "Lagos", specialty: "General Medicine" },
        { name: "Dr. Adamu Yusuf", type: "Doctor", location: "Abuja", specialty: "Cardiology" },
        { name: "Zaria Diagnostic Center", type: "Clinic", location: "Zaria", specialty: "Radiology" },
        { name: "Kaduna Central Pharmacy", type: "Pharmacy", location: "Kaduna", specialty: "Pharmaceuticals" },
        { name: "Amina Children's Hospital", type: "Hospital", location: "Kano", specialty: "Pediatrics" }
    ];

    const diseases = [
        { name: "Malaria", symptoms: "Fever, chills, headache", treatment: "Antimalarial medication" },
        { name: "Diabetes", symptoms: "Increased thirst, frequent urination", treatment: "Insulin, medication" },
        { name: "Hypertension", symptoms: "High blood pressure, headache", treatment: "Lifestyle changes, medication" },
        { name: "COVID-19", symptoms: "Fever, cough, difficulty breathing", treatment: "Rest, hydration, medication" }
    ];

    // Event Listener for Search Input
    if (searchInput) {
        searchInput.addEventListener('input', function (event) {
            const query = event.target.value.toLowerCase();

            // Clear previous search results
            searchResultsContainer.innerHTML = '';

            // Perform the search if query is not empty
            if (query !== '') {
                // Search for Providers
                const providerResults = providers.filter(provider => 
                    provider.name.toLowerCase().includes(query) ||
                    provider.location.toLowerCase().includes(query) ||
                    provider.specialty.toLowerCase().includes(query)
                );

                // Search for Diseases
                const diseaseResults = diseases.filter(disease => 
                    disease.name.toLowerCase().includes(query) ||
                    disease.symptoms.toLowerCase().includes(query) ||
                    disease.treatment.toLowerCase().includes(query)
                );

                // Display Provider Results
                if (providerResults.length > 0) {
                    const providerSection = document.createElement('div');
                    providerSection.innerHTML = `<h3>Healthcare Providers</h3>`;
                    providerResults.forEach(provider => {
                        const resultItem = document.createElement('div');
                        resultItem.classList.add('search-result-item');
                        resultItem.innerHTML = `
                            <strong>${provider.name}</strong><br>
                            <small>${provider.type} - ${provider.location}</small><br>
                            <span>Specialty: ${provider.specialty}</span>
                        `;
                        providerSection.appendChild(resultItem);
                    });
                    searchResultsContainer.appendChild(providerSection);
                }

                // Display Disease Results
                if (diseaseResults.length > 0) {
                    const diseaseSection = document.createElement('div');
                    diseaseSection.innerHTML = `<h3>Disease Profiles</h3>`;
                    diseaseResults.forEach(disease => {
                        const resultItem = document.createElement('div');
                        resultItem.classList.add('search-result-item');
                        resultItem.innerHTML = `
                            <strong>${disease.name}</strong><br>
                            <span>Symptoms: ${disease.symptoms}</span><br>
                            <span>Treatment: ${disease.treatment}</span>
                        `;
                        diseaseSection.appendChild(resultItem);
                    });
                    searchResultsContainer.appendChild(diseaseSection);
                }

                // Show "No results found" if no matches
                if (providerResults.length === 0 && diseaseResults.length === 0) {
                    const noResults = document.createElement('div');
                    noResults.classList.add('no-results');
                    noResults.textContent = 'No results found.';
                    searchResultsContainer.appendChild(noResults);
                }
            }
        });
    }
});
