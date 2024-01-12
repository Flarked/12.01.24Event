const phone = document.getElementById('phone');

phone.addEventListener('keydown', function (event) {
    let isDigit = false;
    if (event.key >= 0 && event.key <= 9) {
        isDigit = true;
    }
    if (isDigit == true) {
        console.log('Number');
    } else {
        console.log('Other symbol');
    }
})