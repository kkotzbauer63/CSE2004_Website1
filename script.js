/*table button for EQ filter data*/

const toggleButton = document.querySelector('#toggleTableBtn');
const eqTable = document.querySelector('#eqTable');

toggleButton.addEventListener('click', (event) => {
    console.log('Button clicked:', event);

    //hide or display table
    eqTable.classList.toggle('hidden');

    //swap text based on waht is displayed
    if (eqTable.classList.contains('hidden')) {
        toggleButton.textContent = 'Show EQ Table';
    } else {
        toggleButton.textContent = 'Hide EQ Table';
    }
});

