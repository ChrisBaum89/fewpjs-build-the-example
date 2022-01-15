// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  errorBanner = document.querySelector('div#modal')
  errorBanner.classList.toggle('hidden')
  likeButtons = document.querySelectorAll("span.like-glyph")
  for (let i = 0; i < likeButtons.length; i++){
    likeButtons[i].addEventListener("click", () => {
      likeButton = likeButtons[i]

      //call server and perform like/unlike if response received
      //unhide error message if response not received
      mimicServerCall()
        .then(function(serverResponded){
          errorBanner.classList.toggle('hidden', true)
          if (likeButton.innerText == EMPTY_HEART) {
            likeButton.innerText = FULL_HEART
            likeButton.classList.toggle('activated-heart')
          } else {
            likeButton.innerText = EMPTY_HEART
            likeButton.classList.toggle('activated-heart')
          }
        })
        .catch(function(error){
          errorBanner.innerText = error
          errorBanner.classList.toggle('hidden')
        })

    })}})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
