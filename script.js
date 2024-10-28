document.getElementById('symptom-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const symptoms = Array.from(document.querySelectorAll('input[name="symptoms"]:checked')).map(el => el.value);
    const resultDiv = document.getElementById('result');

    const prediction = checkSymptoms(symptoms);
    resultDiv.textContent = prediction;
});

function checkSymptoms(symptoms) {
    const symptomsSet = new Set(symptoms);
    
    if (symptomsSet.has('fever') && symptomsSet.has('cough')) {
        return 'You may have COVID-19. Please consult a healthcare professional.';
    } else if (symptomsSet.has('shortness_of_breath')) {
        return 'Seek immediate medical attention.';
    } else if (symptomsSet.has('fatigue') && symptomsSet.has('loss_of_taste')) {
        return 'These could be potential COVID-19 symptoms. Consult a healthcare professional.';
    } else {
        return 'Your symptoms do not indicate COVID-19. However, monitor your health and consult a doctor if needed.';
    }
}
