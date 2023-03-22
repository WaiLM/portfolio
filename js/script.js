$('#burger').on('click', function() {
  $('#modal-menu').toggleClass('hidden')
})

$('#close-btn').on('click', function() {
  $('#modal-menu').toggleClass('hidden')
})

$('#close-modal').on('click', function() {
  $('#modal-menu').toggleClass('hidden')
})

$('#close-modal-2').on('click', function() {
  $('#modal-menu').toggleClass('hidden')
})

$('#close-modal-3').on('click', function() {
  $('#modal-menu').toggleClass('hidden')
})

// Get the button:
let mybutton = document.getElementById("topbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}