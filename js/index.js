// Your code goes here



/* 
 wheel 
 drag / drop
 focus
 resize

 
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

// 6. need to add better code here for
window.addEventListener('keyup', (event) => {
    console.log('some one let go of a key!');
});


//7. adding events to the intro
const intro=querySelector(".intro");
intro.addEventListener('select', (event) => {
    intro.style.color='purple';
});

//8.

intro.addEventListener('scroll', (event) => {
    intro.style.color='blue';
});

//9.
intro.addEventListener('scroll', (event) => {
    intro.style.color='blue';
});

//10.
intro.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';    
  });


// stopping an event from propogating:
const navigation=querySelector(".nav");
addEventListener('click', (event) => {
    navigation.style.backgroundColor = "green";
    eventObject.stopPropogation();
  })
// on line 20 we have another click event, so we need to stop them fom propogating to each other.
