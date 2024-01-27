// samples openart.ai
// framework-3c2b2ea11736477d.js    -   work for a custom zoom buttons         -       function dJ() {}      even listener




//     NEED TO EDIT THIS TO ADD below to add   more event listenenr for button scale with arrows key
//*********************************************************************************************************************
//*********************************************************************************************************************




    //****************************************

    //Scale and Offset
    function DragAndScale(element, skip_events) {
        this.offset = new Float32Array([0, 0]);
        this.scale = 1;
        this.max_scale = 10;
        this.min_scale = 0.1;
        this.onredraw = null;
        this.enabled = true;
        this.last_mouse = [0, 0];
        this.element = null;
        this.visible_area = new Float32Array(4);

        if (element) {
            this.element = element;
            if (!skip_events) {
                this.bindEvents(element);
            }
        }
    }

    LiteGraph.DragAndScale = DragAndScale;

    DragAndScale.prototype.bindEvents = function(element) {
        this.last_mouse = new Float32Array(2);

        this._binded_mouse_callback = this.onMouse.bind(this);

		LiteGraph.pointerListenerAdd(element,"down", this._binded_mouse_callback);
		LiteGraph.pointerListenerAdd(element,"move", this._binded_mouse_callback);
		LiteGraph.pointerListenerAdd(element,"up", this._binded_mouse_callback);

        element.addEventListener(
            "mousewheel",
            this._binded_mouse_callback,
            false
        );
        element.addEventListener("wheel", this._binded_mouse_callback, false);
    };

    DragAndScale.prototype.computeVisibleArea = function( viewport ) {
        if (!this.element) {
            this.visible_area[0] = this.visible_area[1] = this.visible_area[2] = this.visible_area[3] = 0;
            return;
        }
        var width = this.element.width;
        var height = this.element.height;
        var startx = -this.offset[0];
        var starty = -this.offset[1];
		if( viewport )
		{
			startx += viewport[0] / this.scale;
			starty += viewport[1] / this.scale;
			width = viewport[2];
			height = viewport[3];
		}
        var endx = startx + width / this.scale;
        var endy = starty + height / this.scale;
        this.visible_area[0] = startx;
        this.visible_area[1] = starty;
        this.visible_area[2] = endx - startx;
        this.visible_area[3] = endy - starty;
    };

    DragAndScale.prototype.onMouse = function(e) {
        if (!this.enabled) {
            return;
        }

        var canvas = this.element;
        var rect = canvas.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        e.canvasx = x;
        e.canvasy = y;
        e.dragging = this.dragging;
        
		var is_inside = !this.viewport || ( this.viewport && x >= this.viewport[0] && x < (this.viewport[0] + this.viewport[2]) && y >= this.viewport[1] && y < (this.viewport[1] + this.viewport[3]) );

		//console.log("pointerevents: DragAndScale onMouse "+e.type+" "+is_inside);
		
        var ignore = false;
        if (this.onmouse) {
            ignore = this.onmouse(e);
        }

        if (e.type == LiteGraph.pointerevents_method+"down" && is_inside) {
            this.dragging = true;
			LiteGraph.pointerListenerRemove(canvas,"move",this._binded_mouse_callback);
			LiteGraph.pointerListenerAdd(document,"move",this._binded_mouse_callback);
			LiteGraph.pointerListenerAdd(document,"up",this._binded_mouse_callback);
        } else if (e.type == LiteGraph.pointerevents_method+"move") {
            if (!ignore) {
                var deltax = x - this.last_mouse[0];
                var deltay = y - this.last_mouse[1];
                if (this.dragging) {
                    this.mouseDrag(deltax, deltay);
                }
            }
        } else if (e.type == LiteGraph.pointerevents_method+"up") {
            this.dragging = false;
			LiteGraph.pointerListenerRemove(document,"move",this._binded_mouse_callback);
			LiteGraph.pointerListenerRemove(document,"up",this._binded_mouse_callback);
			LiteGraph.pointerListenerAdd(canvas,"move",this._binded_mouse_callback);
        } else if ( is_inside &&
            (e.type == "mousewheel" ||
            e.type == "wheel" ||
            e.type == "DOMMouseScroll")
        ) {
            e.eventType = "mousewheel";
            if (e.type == "wheel") {
                e.wheel = -e.deltaY;
            } else {
                e.wheel =
                    e.wheelDeltaY != null ? e.wheelDeltaY : e.detail * -60;
            }

            //from stack overflow
            e.delta = e.wheelDelta
                ? e.wheelDelta / 40
                : e.deltaY
                ? -e.deltaY / 3
                : 0;
            this.changeDeltaScale(1.0 + e.delta * 0.05);
        }

        this.last_mouse[0] = x;
        this.last_mouse[1] = y;

		if(is_inside)
		{
	        e.preventDefault();
		    e.stopPropagation();
		    return false;
		}
    };


















//*********************************************************************************************************************
//*********************************************************************************************************************








// (just logical thinking)
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
