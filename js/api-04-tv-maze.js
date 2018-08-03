/*
##### TV Maze
https://www.tvmaze.com/ap

1. What is the average rating for the show Better Call Saul?

2. When was the premiere date for the 9th season of Friends?

3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?
*/
const answerElement_tvmaze = document.getElementById('tvmaze-1')
url = 'http://api.tvmaze.com/shows/618'

request.get(url).then(function(names){
  elements = names.body;
  ratingShow = elements.rating.average
  console.log(ratingShow)
  answerElement_tvmaze.innerHTML += ratingShow;
})

//2. When was the premiere date for the 9th season of Friends?

const answerElement_tvmaze_2 = document.getElementById('tvmaze-2')
friends = 'http://api.tvmaze.com/shows/431/episodebynumber?season=9&number=1';
request.get(friends).then(function(names){
    elements = names.body;
    console.log(elements);
    premiere = elements.airdate;
    console.log(premiere);
    answerElement_tvmaze_2.innerHTML += premiere;
  })



//3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?

const answerElement_tvmaze_3 = document.querySelector('#tvmaze-3')

walking = 'http://api.tvmaze.com/people/10257/castcredits';
request.get(walking).then(function(names){
    elements = names.body;
    console.log(elements)
    appears = elements.length;
    answerElement_tvmaze_3.innerHTML += appears;
  })
