document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Voorkomt herladen van de pagina

    // Haal gegevens op uit de velden
    const name = document.getElementById('name').value;
    const question = document.getElementById('question').value;

    // Maak een object met de gegevens
    const formData = { 
        name: name, 
        question: question 
    };

    // Stuur de gegevens naar de JSON-bestand
    try {
        const response = await fetch('http://localhost:3000/save-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Formulier succesvol verzonden!');
        } else {
            alert('Er is een fout opgetreden bij het verzenden.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Kon geen verbinding maken met de server.');
    }
});