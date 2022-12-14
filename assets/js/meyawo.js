
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

$('.zatvori').click(function(){

    $('ul.nav').toggleClass('show');
});

// function show() {
//     var element = document.getElementById("mesag");
//     element.classList.add("mesagge");
//   }

function sendEmail(){
    Email.send({
        SecureToken : "0a864a7d-1548-467a-89cd-4b8bed7d98bb",
        To : 'sebastienzunec@gmail.com',
        From : 'sebwebswiss@gmail.com',
        Subject : "Poruka iz forme Portfolio",
        Body : "Ime: " + document.getElementById('name').value + "<br>" +
        "Email adresa: " + document.getElementById('mail').value  + "<br>" + 
        "Poruka: " + document.getElementById('comment').value 
    }).then(
        document.getElementById("mesag").style.display = "block");
        
    //   message => alert("The message has been sent"));
    setTimeout(() => {
        document.getElementById("mesag").style.display = "none"
        console.log('sada');
      }, 2000);


    
    }