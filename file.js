function buynow(){
    Swal.fire("Garden Bed & Extension Kit Price: $99.99!");
}
function shopbestsellers(){
    Swal.fire({
        icon: "error",
        title: "Page is Under Process!",
      });
     
}
function submit(){
    Swal.fire({
        title: "Email Submitted!",
        icon: "success",
        draggable: true
      });
}
function sendmessage(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Message Sent Successfully",
      });
}
let scrollUpBtn = document.getElementById("scrollUpBtn");


window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = "block"; 
    } else {
        scrollUpBtn.style.display = "none";
    }
};


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
