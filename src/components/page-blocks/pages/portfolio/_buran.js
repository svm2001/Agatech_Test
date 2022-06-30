function meterCounter (){
    let range = document.querySelector('.js-range');
    let output = document.querySelector('.js-buran-meter-counter');
    let KSG10 = document.querySelector('.main__meter--10B');
    let KSG60 = document.querySelector('.main__meter--60B');
    let KSG100 = document.querySelector('.main__meter--100B');
    let value = range.value;

    output.innerHTML = range.value;

    if (value >= 6 && value <= 333) {
        KSG10.classList.add('actual');
        KSG60.classList.remove('actual');
        KSG100.classList.remove('actual');
    }

    if(value >= 333 && value <= 666) {
        KSG60.classList.add('actual');
        KSG10.classList.remove('actual');
        KSG100.classList.remove('actual');
    }

    if(value >= 666 && value <= 990) {
        KSG100.classList.add('actual');
        KSG10.classList.remove('actual');
        KSG60.classList.remove('actual');
    }
}