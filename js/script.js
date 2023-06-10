let dayInput = document.getElementById('dayInput');
let monthInput = document.getElementById('monthInput');
let yearInput = document.getElementById('yearInput');

let dayOutput = document.getElementById('dayOutput');
let monthOutput = document.getElementById('monthOutput');
let yearOutput = document.getElementById('yearOutput');

let submissionBtn = document.getElementById('submissionBtn');
let error = '0.5px solid var(--LIGHT-RED)';

const MAX_VALID_YEAR = 9999;
const MIN_VALID_YEAR = 1700;

submissionBtn.addEventListener('click', () => {
    const D = dayInput.value;
    const M = monthInput.value;
    const Y = yearInput.value;

    if (validateDate(D, M, Y)) {
    } else {
        return;
    }

    let years = (new Date().getFullYear()) - Y;
    let months = (new Date().getMonth()) - M;
    let days = new Date().getDate() - D;

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    if (days < 0) {
        days += getNoOfDays(Y, M - 1);
    }

    // Displaying
    yearOutput.innerText = years;
    monthOutput.innerText = months;
    dayOutput.innerText = days;


});

function getNoOfDays(y, m) {
    // I'll make somethin better than this...
    return new Date(y, m, 0).getDate();
}

function validateDate(day, month, year) {

    if (year > MAX_VALID_YEAR || year < MIN_VALID_YEAR)
        return false;
    
    if (month < 1 || month > 12)
        return false;
    
    if (day < 1 || day > 31)
        return false;
    
    // February handling
    if (month == 2) {
        if (isLeap(year)) {
            return (day <= 29);
        } else {
            return (day <= 28);
        }
    }

    if (month == 4 || month == 6 || month == 9 || month == 11)
        return (day <= 30);
    
    return true;

}

function isLeap(year) {
    return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));
}
