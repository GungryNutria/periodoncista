function openPopup(id) {
  overlay = document.getElementById('overlay' + id),
    popup = document.getElementById('popup' + id);
  overlay.classList.add('active');
  popup.classList.add('active');
}
function closePopup(id) {
  overlay = document.getElementById('overlay' + id),
    popup = document.getElementById('popup' + id);
  
  overlay.classList.remove('active');
  popup.classList.remove('active');
}


// var abrir1 = document.getElementById('abrir1'),
//     overlay1 = document.getElementById('overlay1'),
//     popup1 = document.getElementById('popup1'),
//     cerrar1 = document.getElementById('cerrar1');

//   abrir1.addEventListener('click',function(){
//   overlay1.classList.add('active');
//   popup1.classList.add('active');
// });

//   cerrar1.addEventListener('click',function(){
//   overlay1.classList.remove('active');
//   popup1.classList.remove('active');
// });

// var abrir2 = document.getElementById('abrir1'),
//     overlay2 = document.getElementById('overlay1'),
//     popup2 = document.getElementById('popup1'),
//     cerrar2 = document.getElementById('cerrar1');

//   abrir2.addEventListener('click',function(){
//   overlay2.classList.add('active');
//   popup2.classList.add('active');
// });

//   cerrar2.addEventListener('click',function(){
//   overlay2.classList.remove('active');
//   popup2.classList.remove('active');
// });

// var abrir3 = document.getElementById('abrir1'),
//     overlay3 = document.getElementById('overlay1'),
//     popup3 = document.getElementById('popup1'),
//     cerrar3 = document.getElementById('cerrar1');

//   abrir3.addEventListener('click',function(){
//   overlay3.classList.add('active');
//   popup3.classList.add('active');
// });

//   cerrar3.addEventListener('click',function(){
//   overlay3.classList.remove('active');
//   popup3.classList.remove('active');
// });

// var abrir4 = document.getElementById('abrir1'),
//     overlay4 = document.getElementById('overlay1'),
//     popup4 = document.getElementById('popup1'),
//     cerrar4 = document.getElementById('cerrar1');

//   abrir4.addEventListener('click',function(){
//   overlay4.classList.add('active');
//   popup4.classList.add('active');
// });

//   cerrar4.addEventListener('click',function(){
//   overlay4.classList.remove('active');
//   popup4.classList.remove('active');
// });

// var abrir5 = document.getElementById('abrir1'),
//     overlay5 = document.getElementById('overlay1'),
//     popup5 = document.getElementById('popup1'),
//     cerrar5 = document.getElementById('cerrar1');

//   abrir5.addEventListener('click',function(){
//   overlay5.classList.add('active');
//   popup5.classList.add('active');
// });

//   cerrar5.addEventListener('click',function(){
//   overlay5.classList.remove('active');
//   popup5.classList.remove('active');
// });
