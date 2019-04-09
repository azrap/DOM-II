// Your code goes here



/* 
 keydown 
 wheel 
 drag / drop
 load
 focus
 resize
 scroll
 select
 
 */

 const btn=document.querySelector(".btn");
 console.log(btn);
 
 //click
 btn.addEventListener('click', (event) => {
    btn.style.backgroundColor = "blue";
  })

// mouseover x
  btn.addEventListener('mouseover', (event) => {
    btn.style.backgroundColor = "yellow";
    btn.style.color = "black";
  })

  // dblclick x
  btn.addEventListener('dblclick', (event) => {
    btn.style.backgroundColor = "orange";
    btn.style.color = "purple";
  })

  //load
  window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});