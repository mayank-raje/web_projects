function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (isNaN(day) || isNaN(month) || isNaN(year) || month < 1 || month > 12) {
        document.getElementById('result').textContent = "Please enter a valid date of birth.";
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `Your age is ${age} years.`;
}