



function playGame() {

    console.log("playGame() was called");
     //initialize and set variables when the HTML body loads  
     var computerLetter = "";      
     var guessesLeft = 9; 
     var userPressed = "";
     var userGuesses = []; //create empty array to store user guesses        
     var wins = 0;
     var losses = 0;       
       
     function generateLetter() {
         console.log("generateLetter() was called");
         var computerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
         var totalLetters = computerLetters.length; // = 26   
         var fraction = Math.random(); //returns 0 to .999
         var letterIndex = Math.floor((fraction * totalLetters) + 1); //((26*.999)+1)=26.974=26         
         computerLetter = computerLetters[letterIndex];
         console.log("computerLetter = " + computerLetter);
         //document.getElementById("secret").textContent = computerLetter;
         return computerLetter;
     };
     generateLetter(); //run the function to generate the letter when the HTML body loads
                  
     //displays this stuff on the screen when the HTML body loads  
     document.getElementById("secret").textContent = "";      
     document.getElementById("wins").textContent = wins;
     console.log("wins = " + wins);
     document.getElementById("losses").textContent = losses;        
     console.log("losses = " + losses);
     document.getElementById("guesses-left").textContent = guessesLeft;  
     console.log("guessesLeft = " + guessesLeft);  
     document.getElementById("guesses-sofar").textContent = userGuesses;
     console.log("userGuesses[] = " + userGuesses);
 

     // This function is run whenever the user presses a key     
     document.onkeyup = function(event) {
         console.log("onkeyup function was called");
         //console.log("event.key = " + event.key);
         userPressed = event.key;   
         console.log("userPressed = " + userPressed);
         userGuesses.push(userPressed); //add the letter to the array 
         console.log("userGuesses[] = " + userGuesses);                     
         guessesLeft = guessesLeft - 1;  
         console.log("guessesLeft = " + guessesLeft);   

         //update this stuff on the screen with each key press
         document.getElementById("guesses-left").textContent = guessesLeft;             
         document.getElementById("guesses-sofar").textContent = userGuesses;   
         document.getElementById("secret").textContent = "";            

                         
         //if user still has guesses then keep playing
         if (guessesLeft > 0) {
                 // user wins
                 if (userPressed === computerLetter) {
                             
                     wins = wins + 1;
                     console.log("wins = " + wins);
                     document.getElementById("wins").textContent = wins;
                                             
                     guessesLeft = 9;
                     console.log("guessesLeft = " + guessesLeft);   
                     document.getElementById("guesses-left").textContent = guessesLeft;                           
                     
                     userGuesses = [];  
                     console.log("userGuesses[] = " + userGuesses);
                     document.getElementById("guesses-sofar").textContent = userGuesses;

                     /* for some reasons it sometimes fires these alerts without having guessed the right key!!!
                     alert('Correct! You WON!');
                     alert('The winning letter was "' + computerLetter + '".'); */

                     document.getElementById("secret").style.color = "#00CD00";
                     document.getElementById("secret").textContent = 'Correct! The winning letter was "' + computerLetter + '". Try guessing a new letter...';

                     generateLetter(); 
                 }
                
               /*  else {
                     //do something else
                    
                 };      */               
                
         //user has no more guesses so they lose
         } else { 
                    
             losses = losses + 1;
             document.getElementById("losses").textContent = losses;        
             console.log("losses = " + losses);
             
             guessesLeft = 9;   
             document.getElementById("guesses-left").textContent = guessesLeft;  
             console.log("guessesLeft = " + guessesLeft);  

             userGuesses = [];  
             console.log("userGuesses[] = " + userGuesses);
             document.getElementById("guesses-sofar").textContent = userGuesses;

             /* for some reason it fires these alerts after 8 keypresses and leaves 1 guess remaining!!!
             alert('Sorry! You LOST!');
             alert('The winning letter was "' + computerLetter + '".');  */

             document.getElementById("secret").style.color = "red";
             document.getElementById("secret").textContent = 'Nope! The winning letter was "' + computerLetter + '". Try guessing a new letter...';          

             generateLetter();                           

         };

     
         
            
     }; 

 };