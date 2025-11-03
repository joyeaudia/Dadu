const ratings = document.querySelectorAll('.rating')
const ratingContainer = document.querySelector('.rating-container')
// FIX 1: Remove '#' from getElementById
const sendBtn = document.getElementById('send') 
const panel = document.querySelector('#panel')

// Declare selectedRating so it's accessible everywhere
let selectedRating = 'Satisfied' // Set a default value

ratingContainer.addEventListener('click', (e) => {
    // Check if the click target or its parent is a .rating div
    let clickedRating = e.target.closest('.rating'); 
    
    if (clickedRating) {
        removeActive()
        clickedRating.classList.add('active')
        // Get the text from the <small> element inside the clicked rating div
        selectedRating = clickedRating.querySelector('small').innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
    // FIX 4: Replace Font Awesome icon with an emoji/span since FA is not linked
    panel.innerHTML = `
        <span style="font-size: 30px; color: #ff0000;">💕</span>
        <strong>Thank You Bruh for your feedback!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}