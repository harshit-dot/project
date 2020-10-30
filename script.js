$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
});
document.querySelector('form').addEventListener('submit', function(e){
    const task=document.getElementById('task').value;
    const email=document.getElementById('email').value;
    localStorage.setItem('name',task);
    localStorage.setItem('email',email);
    const news=document.getElementById('news').value;
    localStorage.setItem('want newsletter',news);
    const text=document.getElementById('text').value;
    localStorage.setItem('text',text);
    alert('Thank you!');
    e.preventDefault();
    
});