var x = true; // the navbar is visible.

function hideNav(){

    var navbar = document.querySelector(".side-bar");

    if(x == true){
     navbar.style.display='none';
     x = false;
    } else{
        navbar.style.display='block';
        x = true;
    }


}