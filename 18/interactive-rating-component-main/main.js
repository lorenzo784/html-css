const numberContainer = document.querySelector('.rating-state__number-container');
const rateNumber = document.querySelector('.thankyou-state__result--number');
const submitButton = document.querySelector('.rating-state__button');
const ratingState = document.querySelector('.rating-state');
const thanyouState = document.querySelector('.thankyou-state');

numberContainer.addEventListener('click', function(e) {
    let numberSelected = e.target.innerText;
    rateNumber.innerText = numberSelected;
    if(numberSelected >= 1 || numberSelected <= 5){
        submitButton.addEventListener('click', function(e) {
            ratingState.style.display = 'none';
            thanyouState.style.display = 'flex';
        });
    }
});
