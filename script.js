const inputForm = document.getElementById('inputForm');
const outputForm = document.getElementById('outputForm');
const btn = document.getElementById('btn');
const selectedOption = document.getElementById('selectedOption');







btn.addEventListener('click', function () {

    let optSelected = selectedOption.value;

    if (optSelected == '1') {   // upper to lower
        outputForm.value = inputForm.value;
        outputForm.classList.add('transformLower');
    } else if (optSelected == '2') { // lower to upper
        outputForm.value = inputForm.value;
        outputForm.classList.add('transformUpper');
        outputForm.classList.remove('transformLower');
    }
    inputForm.value = '';
});



