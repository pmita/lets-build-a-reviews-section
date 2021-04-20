


/*-------------Gloabal Variables----------*/
const allReviews = [
    {
        rating: '4/5 Stars',
        reviewText: 'Test Example',
        name: 'John Doe',
        occupation: 'Founder CEO',
        img: './img/img-1.jpg'
    },
    {
        rating: '5/5 Stars',
        reviewText: 'Test Example 2',
        name: 'Jane Doe',
        occupation: 'UX Lead Designer',
        img: './img/img-2.jpg'
    },
    {
        rating: '4/5 Stars',
        reviewText: 'Test Example 3',
        name: 'Susan Boil',
        occupation: 'Software Engineer II',
        img: './img/img-3.jpg'
    },
    {
        rating: '5/5 Stars',
        reviewText: 'Test Example 4',
        name: 'Luke Doe',
        occupation: 'Product Manager',
        img: './img/img-4.jpg'
    }
]
//DOM selections
const reviewStars = document.getElementById('star-review');
const reviewText = document.getElementById('review');
const reviewName = document.getElementById('name');
const reviewOccupation = document.getElementById('occupation');
const reviewImg = document.getElementById('review-img');
const buttonPrev = document.querySelector('.button-prev');
const buttonNext = document.querySelector('.button-next');
let reviewsCounter = 0; //Initial review to display

/*---------Event Listeners-----------*/
window.addEventListener('DOMContentLoaded', ()=>{
    updateContent();
});

buttonPrev.addEventListener('click', ()=>{
    (reviewsCounter!==0) ? reviewsCounter-- : reviewsCounter = 3;
    updateContent();
});

buttonNext.addEventListener('click', ()=>{
    (reviewsCounter!==3) ? reviewsCounter++ : reviewsCounter = 0;
    updateContent();
});


/*---------Functions-------------*/
function updateContent(){
    const reviewToDisplay = allReviews[reviewsCounter]; //Select corresponding cell in reviews array
    reviewStars.textContent = reviewToDisplay.rating; //Change ratings
    reviewText.textContent = reviewToDisplay.reviewText; //Change review text
    reviewName.textContent = reviewToDisplay.name; //Change reviewer text
    reviewOccupation.textContent = reviewToDisplay.occupation; //Change reviewer occupation
    reviewImg.src = reviewToDisplay.img; //Change review img source
}