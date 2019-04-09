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
 
 // 1.click
 btn.addEventListener('click', (event) => {
    btn.style.backgroundColor = "blue";
    eventObject.stopPropogation(); //stopping the propogation since we have 2 click events
  })

// 2. mouseover x
  btn.addEventListener('mouseover', (event) => {
    btn.style.backgroundColor = "yellow";
    btn.style.color = "black";
  })

  // 3.dblclick x
  btn.addEventListener('dblclick', (event) => {
    btn.style.backgroundColor = "orange";
    btn.style.color = "purple";
  })

  //4.load
  window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

//5.keydown
window.addEventListener('keydown', (event) => {
    console.log('some one pressed a key!');
});

// 6. need to add better code here for 3
//select 
window.addEventListener('select', (event) => {
    console.log('some one pressed a key!');
});

//7.

//8.

//9.

//10.


// stopping an event from propogating:
const navigation=querySelector(".nav");
addEventListener('click', (event) => {
    navigation.style.backgroundColor = "green";
    eventObject.stopPropogation();
  })
// on line 20 we have another click event, so we need to stop them fom propogating to each other.
