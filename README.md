JUST GONA ADD BASIC two press key for ZoomIN(1) and ZoomOUT(2). just simple code to be added to file "litegraph.core.js". 
will update how after testing

well i can't seem to figure out why when i zoom using the keybind snaps to a node corner and the canvas crashes, still testing, the code has to many kwydown calls from varius files and twice in one, really weird

![44142no](https://github.com/jamsdrak/ComfyUI-ZoomControls/assets/135140984/dca8b2a3-7f96-44e7-bbca-f36e2caebff2)

Solve the corner issue, but Can't figure out why the canvas freezes it does zoom but is freez (the grid dissapiers, and everything inside turns into a jpg basically)

trying not to change to much code, the cause key events are not bind to canvas information at this step adjustMouseEvent... gets will  need to



Only Editing the files necesaries to implement the Zoom controls in ComfyUI. For testing and for future import change for pulls into ComfyUi or as a separetly addon. Also maybe the idea of implementing some basic Navigation controls with the arrow keys and a button layout in the comfy-menu




After reading for 1h  and tryn to edit a few thigns i see there are this function inside in "litegraph.core.js"  for line 5032 - DragAndScale. will check later


5073 DragAndScale.prototype.onMouse 


