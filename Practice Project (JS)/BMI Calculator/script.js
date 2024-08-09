function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    let result;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result = 'Please enter valid weight and height.';
    } else {
        const bmi = weight / (height * height);
        result = `Your BMI is ${bmi.toFixed(2)}.`;

        if (bmi < 18.5) {
            result += ' You are underweight.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result += ' You have a normal weight.';
        } else if (bmi >= 25 && bmi < 29.9) {
            result += ' You are overweight.';
        } else {
            result += ' You are obese.';
        }
    }

    document.getElementById('result').textContent = result;
}
