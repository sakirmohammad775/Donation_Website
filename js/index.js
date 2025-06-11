const donateButtons = document.querySelectorAll('.donate-btn');

donateButtons.forEach(btn => { // Loop through each button
    btn.addEventListener('click', function (e) { // Add event listener to each button
        e.preventDefault();

        const target = btn.getAttribute('data-target'); // Get the target element from the button's data attribute
        const input = document.getElementById(`input-${target}`); // Get the input element with the matching ID
        const amount = parseFloat(input.value);

        if (isNaN(amount)) {
            alert('Please enter a valid number');
            return;
        }
        if (amount <= 0) {
            alert('Please enter a positive donation amount');
            return;
        }

        const totalEl = document.getElementById(`${target}-total`); // Get the total element
        const currentTotal = parseFloat(totalEl.textContent);
        const newTotal = currentTotal + amount;
        totalEl.textContent = newTotal;

        const balanceEl = document.getElementById('my-balance');
        const currentBalance = parseFloat(balanceEl.textContent);

        if (amount > currentBalance) {
            alert('Insufficient balance');
            return;
        }

        const newBalance = currentBalance - amount;
        balanceEl.textContent = newBalance;

        // Add to history
        const historyList = document.getElementById('history-list');
        const historyItem = document.createElement('div');
        historyItem.className = 'p-4 bg-base-200 rounded-lg shadow';
        historyItem.innerHTML = `
      <h3 class="font-bold text-lg">${amount} Taka is Donated for ${target.charAt(0).toUpperCase() + target.slice(1)} Campaign</h3>
      <p class="text-sm text-gray-600">Date : ${new Date().toString()}</p>
    `;
        historyList.prepend(historyItem); // Add on top

        // Reset input
        input.value = '';

    });
});







//toggle section
const donationTab = document.getElementById('donation-tab');
const historyTab = document.getElementById('history-tab');
const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');

// Show Donation section by default
donationSection.classList.remove('hidden');
historySection.classList.add('hidden');

// Donation Button Click
donationTab.addEventListener('click', () => {
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
});

// History Button Click
historyTab.addEventListener('click', () => {
    historySection.classList.remove('hidden');
    donationSection.classList.add('hidden');
});


