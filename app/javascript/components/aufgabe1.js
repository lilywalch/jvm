// function storyScroll(target,duration){
//   var target = document.querySelector(target);
//   var targetPosition = target.getBoundingClientRect();
//   var startPosition = window.pageYOffset;
//   var distance = targetPosition - startPosition;
//   var startTime = null;

//   function animation(currentTime){
//     if(startTime === null ) startTime = currentTime;
//     var timeElapsed = currentTime - startTime;
//     var run = ease(timeElapsed,startPosition,distance,duration);
//     window.scrollTo(0,run);
//     if(timeElapsed < duration) requestAnimationFrame(animation);
//   }

//   function ease (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2*t*t + b;
//     t--;
//     return -c/2 * (t*(t-2) - 1) + b;
// };


//   requestAnimationFrame(animation);
// }

// function smoothScroll() {
// var button = document.querySelector('.btn-read');

// button.addEventListener('click',function(){
//   storyScroll('.text-container', 1000)
// });
// };


// => {
//   const button = document.querySelector('.btn-read');
  // Math.easeInOutQuad = !!!!
//   // button.addEventListener('click', () => {
//   //   window.scrollBy({ top: 1000, left: 0, behavior: "smooth" });
//   // });

//   button.onclick = function() {
//   window.scrollBy({ top: 800, left: 0, behavior: "smooth" });
// }

// };

// export { storyScroll };
// export { smoothScroll };

// // $(".btn-read").click(function() {
// //     $('html,body').animate({
// //         scrollTop: $(".text-container").offset().top},
// //         'slow');
// // });
