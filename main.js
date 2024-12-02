
let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color:   rgb(2, 83, 205);'>|</span>",
});
 
typewriter
  .pauseFor(200)
  .typeString('<span style="color:  rgb(2, 83, 205);">UX    UI    FRONTEND</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();


