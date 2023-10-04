document.addEventListener('DOMContentLoaded', function() {
    const ageForm = document.getElementById('age-form');
    const dobInput = document.getElementById('dob');
    const resultElement = document.getElementById('result');
    const stopwatchElement = document.getElementById('stopwatch');
    
    ageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const dob = new Date(dobInput.value);
        
        if (!isNaN(dob.getTime())) {
            ageForm.style.display = 'none'; // Hide the form
            resultElement.classList.add('visible'); // Show the result
            stopwatchElement.classList.add('visible'); // Show the stopwatch
            stopwatchElement.classList.add('minimalist'); // Apply minimalist style
            resultElement.innerHTML = '<span class="age">Age</span>';
            startStopwatch(dob);
        } else {
            alert('Please enter a valid date of birth.');
        }
    });
    
    function startStopwatch(dob) {
        setInterval(() => {
            const now = new Date();
            const ageInMillis = now - dob;
            
            const totalAgeInSeconds = ageInMillis / 1000; // Convert age to seconds
            const totalAgeInYears = totalAgeInSeconds / (365 * 24 * 60 * 60); // Convert age to years
            const integerPart = Math.floor(totalAgeInYears);
            const decimalPart = (totalAgeInYears - integerPart).toFixed(9); // Keep 6 decimal places
            
            stopwatchElement.innerHTML = `<span class="larger">${integerPart}</span> <span class="smaller">.${decimalPart.substring(2)} years</span>`;
        }, 100);
    }
});
