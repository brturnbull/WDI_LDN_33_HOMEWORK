document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");

   document.querySelector('#toggle').addEventListener('click', function(){
       document.getElementsByClassName('circle animated infinite')[0].classList.toggle('pulse');
     });

   document.querySelector().addEventListener('change', () {
     document.getElementById('city')[0].classList.innerHTML().value(e.options[e.selectedIndex].value);
   })

   const form = document.getElementById('subscribe');
   form.addEventListener('submit', function(){
   document.getElementsByClassName('submit')[0].classList.add('submitted');
   event.preventDefault();
 });

 });
