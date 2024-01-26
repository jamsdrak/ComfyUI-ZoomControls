


    
let mouseDown = false;
let mouseUp = true;

canvas.addEventListener('mousedown', (event) => {
  mouseDown = !mouseDown; // toggle mouseDown true/false;      
});

canvas.addEventListener('mousemove', (event) => {
  if (mouseDown) {
  redraw(event.clientX, event.clientY);
  }
});

canvas.addEventListener('mouseup', (event) => {
  mouseDown = !mouseDown; // toggle mouseDown true/false;
});
    
      
      element.addEventListener(
            "mousewheel",
            
        );



        addEventListener("mousemove", onMouseMove);
