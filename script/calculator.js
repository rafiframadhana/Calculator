let calculation = localStorage.getItem('calculation');

calculationProgress();

function updateCalculation(value) {
    calculation += value;
    calculationProgress();
    saveCalculation();
}

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}

function calculationProgress() {
    document.querySelector('.js-calculation-progress').innerHTML = calculation;
    saveCalculation();
}

function clearCalculation() {
    document.querySelector('.js-calculation-progress').innerHTML = ' ';
    saveCalculation();
}