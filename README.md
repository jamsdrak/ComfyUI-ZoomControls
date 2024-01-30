JUST GONA ADD BASIC two press key for ZoomIN(1) and ZoomOUT(2). just simple code to be added to file "litegraph.core.js". 
will update how after testing

well i can't seem to figure out why when i zoom using the keybind snaps to a node corner and the canvas crashes, still testing, the code has to many kwydown calls from varius files and twice in one, really weird

![chrome_mkeqx0al4e](https://github.com/jamsdrak/ComfyUI-ZoomControls/assets/135140984/b40e7560-6d57-49d0-99dc-559c988c12f2)

Solve the corner issue, but Can't figure out why the canvas freezes it does zoom but is freez




Only Editing the files necesaries to implement the Zoom controls in ComfyUI. For testing and for future import change for pulls into ComfyUi or as a separetly addon. Also maybe the idea of implementing some basic Navigation controls with the arrow keys and a button layout in the comfy-menu




After reading for 1h  and tryn to edit a few thigns i see there are this function inside in "litegraph.core.js"  for line 5032 - DragAndScale. will check later


5073 DragAndScale.prototype.onMouse 


