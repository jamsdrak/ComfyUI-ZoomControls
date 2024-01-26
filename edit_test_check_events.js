(just logical thinking)
if x key press (

    check mouse event for mousedown (

        if clear (

            check mosue event for movement (

                if movement (

                    set origin point, mesuere mouse movement, set value only positive value set


                    on value increases (

                        zoom out

                        on click let go end function
                        on mouse leave canvas end funtion
                        
                    ) else (

                        restore canvas scale
                        
                    )                   
    
                )            
    
            ) else (

    
            )
    
        ) else (
    
        )
    
    )
    
    
)





function isKeyPressed(event) {
  let text = "";
  if (event.ctrlKey) {
    text = "The Ctrl key was pressed!";
  } else {
    text = "The Ctrl key was NOT pressed!";
  }
  document.getElementById("demo").innerHTML = text;
}


    
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
