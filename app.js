
/*
    Quick functional project that is very widely used in webpages. In this scenario
    we need to display some review and the user the option to browse through different
    reviews. Currently we are browsing over hard coded reviews, but this could easily be
    amended for reviews coming from an api. Objects for this project are:
    #Project the current review details onto the UI
    #Give the user the optio to browse through the reviews (click next or previous)
    #Update the UI accordingly

    Remember to always apply clean code principles in every project you are making! Here are
    some basic rules to have at the back of your mind:
    #Leave commects whenever your code is doing something complicated
    #Try giving your variables usefull names. Best if their name describes what they correspond to
    #Re-factor your code once you get something done. Chances are you can make better
*/

/*-------------Gloabal Variables----------*/
const allReviews = [
    {
        rating: '4/5 Stars',
        reviewText: 'Getting up everyday and having a meaningfu impact on the world through the work we are doing is something I could never change. This service has helped us achieve those goals',
        name: 'John Doe',
        occupation: 'Founder CEO',
        img: './img/img-1.jpg'
    },
    {
        rating: '5/5 Stars',
        reviewText: 'Creating pleasing and minimal designs for our customer project can be challenging. This service simply takes the unneccesary communicaitons out of the picture. Project done faster',
        name: 'Jane Doe',
        occupation: 'UX Lead Designer',
        img: './img/img-2.jpg'
    },
    {
        rating: '4/5 Stars',
        reviewText: 'We code, we drink coffee, we use this product',
        name: 'Susan Boil',
        occupation: 'Software Engineer II',
        img: './img/img-3.jpg'
    },
    {
        rating: '5/5 Stars',
        reviewText: 'How can we both make great product designs and also make sure our people are having fun creating them? We use this product',
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