
// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];

const notes = [];

keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below


// Write a named function with event handler properties
function keyPlay(event) {
event.target.style.backgroundColor = 'pink';
}
function keyReturn(event) {
event.target.style.backgroundColor = '';
}

 
function note(key) {
  key.addEventListener('mousedown', keyPlay); // Attach event handler to each key
  key.addEventListener('mouseup', keyReturn); // Optional: return key color on mouse up
}
// Write a loop that runs the array elements through the function
notes.forEach(note);

// Write a loop that runs the array elements through the function
 

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
   nextTwo.hidden = false;
   nextOne.hidden = true;
   document.getElementById("letter-note-five").innerHTML="D"
   document.getElementById("letter-note-six").innerHTML="C"
};

nextTwo.onclick = function() {
   nextThree .hidden = false;
   nextTwo.hidden = true;
   document.getElementById("word-five").innerHTML="DEAR";
   document.getElementById("word-six").innerHTML="FRI";
   lastLyric.style.display="inline-block";
};


// Write anonymous event handler property and function for the second progress button


// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function() {
      startOver.hidden = false;
      nextThree.hidden = true;
      // change the lyrick 
        document.getElementById('word-one').innerHTML = 'HAP-';
        document.getElementById('word-two').innerHTML = 'PY';
        document.getElementById('word-three').innerHTML = 'BIRTH';
        document.getElementById('word-four').innerHTML = 'DAY';
        document.getElementById('word-five').innerHTML = 'TO';
        document.getElementById('word-six').innerHTML = 'YOU!';
        // changing what notes to play
        document.getElementById('letter-note-one').innerHTML = 'F';
        document.getElementById('letter-note-two').innerHTML = 'F';
        document.getElementById('letter-note-three').innerHTML = 'E';
        document.getElementById('letter-note-four').innerHTML = 'C';
        document.getElementById('letter-note-five').innerHTML = 'D';
        document.getElementById('letter-note-six').innerHTML = 'C';
        //last lyrics
        lastLyric.style.display='none';
        
      };
       

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
      nextOne.hidden = false;
      startOver.hidden = true;
      document.getElementById('word-one').innerHTML = 'HAP-';
      document.getElementById('letter-note-one').innerHTML = 'G';
      document.getElementById('word-two').innerHTML = 'PY';
      document.getElementById('letter-note-two').innerHTML = 'G';
      document.getElementById('word-three').innerHTML = 'BIRTH-';
      document.getElementById('letter-note-three').innerHTML = 'A';
      document.getElementById('word-four').innerHTML = 'DAY';
      document.getElementById('letter-note-four').innerHTML = 'G';
      document.getElementById('word-five').innerHTML = 'TO';
      document.getElementById('letter-note-five').innerHTML = 'C';
      document.getElementById('word-six').innerHTML = 'YOU!';
      document.getElementById('letter-note-six').innerHTML = 'B';
}