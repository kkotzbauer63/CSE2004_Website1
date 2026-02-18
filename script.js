/*table button for EQ filter data*/

const toggleButton = document.querySelector('#toggleTableBtn');
const eqTable = document.querySelector('#eqTable');
const preamp = document.querySelector('#preamp');

toggleButton.addEventListener('click', (event) => {
    console.log('Button clicked:', event);

    //hide or display table and preamp
    eqTable.classList.toggle('hidden');
    preamp.classList.toggle('hidden');

    //swap text based on what is displayed
    if (eqTable.classList.contains('hidden')) {
        toggleButton.textContent = 'Show EQ Table';
    } else {
        toggleButton.textContent = 'Hide EQ Table';
    }
});

