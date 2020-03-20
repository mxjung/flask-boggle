// let answer = $('.word-guess');

// answer.on("Submit", submitHandler);
// function submitHandler(evt) {
//   console.log('inside');
//   evt.preventDefault();
// }





// $formInput = $('.word-guess');

// $button = $('button');
// $button.on('click', eventHandler);

$('.guessing-word').on('submit', eventHandler);


async function eventHandler(evt) {
  console.log('evt stopped');
  evt.preventDefault();

  // let wordGuess = $formInput[0].value;

  const wordGuess = $('.word-guess').val();
  // await updateServer(wordGuess);
  const response = await axios.get('/guess',
    { params: { response: wordGuess } }
  )
}





// async function updateServer(wordGuess) {
//   console.log("in here");
//   const response = await axios.get('/guess', 
//     {Params: {"word": wordGuess}}
//   )
//   return;
// }