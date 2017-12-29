//Get modal element
var modal = document.getElementById('simpleModal');

//Get open  modal button
var modalBtn = document.getElementById('modalBtn');

//Get close button
/*This function gets an array, so adding[0] indicates that we wabt te first one. */
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Use event listener to listen for click 
modalBtn.addEventListener('click', openModal);

//Use eventListener to listen for clos click
closeBtn.addEventListener('click', closeModal);

//Add eventListener for clicks outside the modal
window.addEventListener('click', outsideClick); 



//Function to open the modal
/* This function has to change the display property with value none to display: block.  */
function openModal () {
  //chnge the display value to block
  modal.style.display = 'block';
}
// Function to close the Modal 
function closeModal () {
  //chnge the display value to none
  modal.style.display = 'none';
}

//function that runs when clicking outside modal in window
//the target should be equal to modal 
//e is an event parameter
function outsideClick (e) {
  if(e.target == modal) {
      modal.style.display = 'none';
  }
}