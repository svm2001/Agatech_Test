const runningText = document.querySelector('.discount__running-text');
const buttonDiscount = document.querySelector('.button--discount');

if(runningText) {
    runningText.addEventListener('mouseover', function (){
        buttonDiscount.classList.add('active');
    })
}

