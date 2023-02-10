const weightElem = document.getElementById('weight');
const heightElem = document.getElementById('height');
const bmiElem = document.querySelector('.bmi-element');
const descElem = document.querySelector('.output-result');
const bmiCategoryElem = document.querySelector('.bmi-category');
const container = document.querySelector('.container');

let bmiMetric;
function calcBmi() {
    let height = heightElem.value;
    let weight = weightElem.value;
    let bmi = weight / (height * height);
    bmiMetric = (bmi * 10000).toFixed(1);
}

function checkCategory(value) {
    if (isFinite(value)) {
        if (value <= 18.4) {
            bmiCategoryElem.style.color = '#625301';
            bmiElem.style.color = '#625301';
            bmiElem.style.borderColor = '#625301';
            return 'Underweight';
        } else if (value >= 18.5 && value <= 24.9) {
            bmiCategoryElem.style.color = '#0077b6';
            bmiElem.style.color = '#0077b6';
            bmiElem.style.borderColor = '#0077b6';
            return 'Normal';
        } else if (value >= 25.0 && value <= 29.9) {
            bmiCategoryElem.style.color = '#8a4f02';
            bmiElem.style.color = '#8a4f02';
            bmiElem.style.borderColor = '#8a4f02';
            return 'Overweight';
        }
        else if (value >= 30.0) {
            bmiCategoryElem.style.color = '#ef233c';
            bmiElem.style.color = '#ef233c';
            bmiElem.style.borderColor = '#ef233c';
            return 'Obese';
        }
    } else {
        bmiCategoryElem.style.color = 'black';
        return ``;
    }
}

function updateUI() {
    calcBmi();
    if (isFinite(bmiMetric)) {
        bmiElem.innerHTML = bmiMetric;
    }
    bmiCategoryElem.innerHTML = checkCategory(bmiMetric);
}

container.addEventListener('input', updateUI);