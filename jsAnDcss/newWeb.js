var button1 = document.getElementById('buttons1');
var button2 = document.getElementById('buttons2');

button1.addEventListener('click', function(e){
    button2.classList.toggle('hideFirst');
    button1.classList.add('hideFirst');
    e.preventDefault();
})
button2.addEventListener('click', function(e){
    button1.classList.toggle('hideFirst');
    button2.classList.add('hideFirst');
    e.preventDefault();
})


hed = document.querySelector('h2')
hed.style.color = 'cyan';
hed.innerHTML = `<b>Light on off by clicking below button</b>`;