document.getElementById('generateButton').addEventListener('click', () => {
    const minValue = parseInt(document.getElementById('minValue').value, 10);
    const maxValue = parseInt(document.getElementById('maxValue').value, 10);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(minValue) || isNaN(maxValue) || minValue >= maxValue) {
        resultDiv.innerText = 'Please enter valid minimum and maximum values.';
        return;
    }
    
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    resultDiv.innerText = `Generated number: ${randomNumber}`;
});
