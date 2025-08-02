// simple FAQ accordion
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.faq-item').forEach(item=>{
    const q=item.querySelector('.faq-question');
    q.addEventListener('click',()=>{
      item.classList.toggle('open');
    });
  });

// simple auto-scroll carousel
const carousel=document.querySelector('.volunteer-carousel');
if(carousel){setInterval(()=>{carousel.scrollBy({left:200,behavior:'smooth'});
  if(Math.abs(carousel.scrollLeft+carousel.clientWidth-carousel.scrollWidth)<5){carousel.scrollTo({left:0,behavior:'smooth'});} },3000);} });
