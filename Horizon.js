const carousel = document.querySelector('.carousel-wrapper');

const prev=document.querySelector('.prev');
const next=document.querySelector('.next');
var section=0;
next.addEventListener('mouseover',function(){
  section=(section<3)?section+1:3;
carousel.style.transform='translate(' +(section)*-25 + '%)';
});
next.addEventListener('click',function(){
  section=(section<3)?section+1:3;
carousel.style.transform='translate(' +(section)*-25 + '%)';
});
prev.addEventListener('click',function(){
  section=(section>0)?section-1:0;
carousel.style.transform='translate(' +(section)*-25 + '%)';
});
prev.addEventListener('mouseover',function(){
  section=(section>0)?section-1:0;
carousel.style.transform='translate(' +(section)*-25 + '%)';
});