## Modules

<dl>
<dt><a href="#module_big-bang">big-bang</a></dt>
<dd></dd>
<dt><a href="#module_image">image</a></dt>
<dd></dd>
<dt><a href="#module_posn">posn</a></dt>
<dd></dd>
</dl>

<a name="module_big-bang"></a>

## big-bang

* [big-bang](#module_big-bang)
    * [~toDraw(renderFunction)](#module_big-bang..toDraw)
    * [~onTick(tickFunction)](#module_big-bang..onTick)
    * [~onMouse(mouseFunction)](#module_big-bang..onMouse)
    * [~onKey(keyFunction)](#module_big-bang..onKey)
    * [~stopWhen(lastWorld)](#module_big-bang..stopWhen)
    * [~WorldState](#module_big-bang..WorldState) : <code>\*</code>
    * [~Image](#module_big-bang..Image) : <code>\*</code>
    * [~renderFunction](#module_big-bang..renderFunction) ⇒ <code>Image</code>
    * [~tickFunction](#module_big-bang..tickFunction) ⇒ <code>WorldState</code>
    * [~MouseEvent](#module_big-bang..MouseEvent) : <code>&#x27;button-down&#x27;</code> \| <code>&#x27;button-up&#x27;</code> \| <code>&#x27;drag&#x27;</code> \| <code>&#x27;move&#x27;</code> \| <code>&#x27;enter&#x27;</code> \| <code>&#x27;leave&#x27;</code>
    * [~mouseFunction](#module_big-bang..mouseFunction) ⇒ <code>WorldState</code>
    * [~KeyEvent](#module_big-bang..KeyEvent) : <code>string</code>
    * [~keyFunction](#module_big-bang..keyFunction) ⇒ <code>WorldState</code>
    * [~lastWorld](#module_big-bang..lastWorld) ⇒ <code>boolean</code>

<a name="module_big-bang..toDraw"></a>

### big-bang~toDraw(renderFunction)
Tells bigBang to call "renderFunction" whenever an image must
be drawn to the canvas.

**Kind**: inner method of [<code>big-bang</code>](#module_big-bang)  

| Param | Type | Description |
| --- | --- | --- |
| renderFunction | <code>renderFunction</code> | Function that draws an image. |

<a name="module_big-bang..onTick"></a>

### big-bang~onTick(tickFunction)
Handler to update the world state on each tick.

**Kind**: inner method of [<code>big-bang</code>](#module_big-bang)  

| Param | Type | Description |
| --- | --- | --- |
| tickFunction | <code>tickFunction</code> | Returns a new world state based on the previous state. |

<a name="module_big-bang..onMouse"></a>

### big-bang~onMouse(mouseFunction)
Handles mouse events.

**Kind**: inner method of [<code>big-bang</code>](#module_big-bang)  

| Param | Type | Description |
| --- | --- | --- |
| mouseFunction | <code>mouseFunction</code> | Returns a new world state based on the current state and a mouse event. |

<a name="module_big-bang..onKey"></a>

### big-bang~onKey(keyFunction)
Handles key events.

**Kind**: inner method of [<code>big-bang</code>](#module_big-bang)  

| Param | Type | Description |
| --- | --- | --- |
| keyFunction | <code>keyFunction</code> | Called every time a key is pressed. |

<a name="module_big-bang..stopWhen"></a>

### big-bang~stopWhen(lastWorld)
Tells big bang to call the lastWorld callback on the start of any
world-producing callback. Returns `true` if the program should end, 
and `false` otherwise.

**Kind**: inner method of [<code>big-bang</code>](#module_big-bang)  

| Param | Type | Description |
| --- | --- | --- |
| lastWorld | <code>lastWorld</code> | Determines whether program should end. |

<a name="module_big-bang..WorldState"></a>

### big-bang~WorldState : <code>\*</code>
The representation of the current state in your world program.

**Kind**: inner typedef of [<code>big-bang</code>](#module_big-bang)  
<a name="module_big-bang..Image"></a>

### big-bang~Image : <code>\*</code>
An image able to be drawn to the canvas.

**Kind**: inner typedef of [<code>big-bang</code>](#module_big-bang)  
<a name="module_big-bang..renderFunction"></a>

### big-bang~renderFunction ⇒ <code>Image</code>
Returns an image based on a world state.

**Kind**: inner typedef of [<code>big-bang</code>](#module_big-bang)  
**Returns**: <code>Image</code> - - Image to be drawn.  

| Param | Type | Description |
| --- | --- | --- |
| worldState | <code>WorldState</code> | The world state to base the image on. |

<a name="module_big-bang..tickFunction"></a>

### big-bang~tickFunction ⇒ <code>WorldState</code>
Is called on each tick by the onTick handler.

**Kind**: inner typedef of [<code>big-bang</code>](#module_big-bang)  
**Returns**: <code>WorldState</code> - - The next world state.  

| Param | Type | Description |
| --- | --- | --- |
| ws | <code>WorldState</code> | The current world state. |

<a name="module_big-bang..MouseEvent"></a>

### big-bang~MouseEvent : <code>&#x27;button-down&#x27;</code> \| <code>&#x27;button-up&#x27;</code> \| <code>&#x27;drag&#x27;</code> \| <code>&#x27;move&#x27;</code> \| <code>&#x27;enter&#x27;</code> \| <code>&#x27;leave&#x27;</code>
Types of mouse events.

- "button-down": signals that the computer user has pushed a mouse button down
- "button-up" signals that the computer user has let go of a mouse button
- "drag" signals that the computer user is dragging the mouse. A dragging event occurs when the mouse moves while a mouse button is pressed.
- "move" signals that the computer user has moved the mouse
- "enter" signals that the computer user has moved the mouse into the canvas area
- "leave" signals that the computer user has moved the mouse out of the canvas area.

**Kind**: inner typedef of [<code>big-bang</code>](#module_big-bang)  
<a name="module_big-bang..mouseFunction"></a>

### big-bang~mouseFunction ⇒ <code>WorldState</code>
Returns a new world state based on the current state and a mouse event.

**Kind**: inner typedef of [<code>big-bang</code>](#module_big-bang)  
**Returns**: <code>WorldState</code> - - The next world state.  

| Param | Type | Description |
| --- | --- | --- |
| ws | <code>WorldState</code> | The current world state. |
| xPos | <code>number</code> | The x position of the mouse event on the canvas. |
| yPos | <code>number</code> | The y position of the mouse event on the canvas. |
| mouseEvent | <code>MouseEvent</code> | The type of mouse event. |

<a name="module_big-bang..KeyEvent"></a>

### big-bang~KeyEvent : <code>string</code>
For simplicity, we represent key events with strings, but 
not all strings are key events. The representation of key 
events comes in distinct classes. First, a single-character 
string is used to signal that the user has hit a "regular" 
key, such as

- "q" stands for the q key;
- "w" stands for the w key;
- "e" stands for the e key;
- "r" stands for the r key; and so on.

Some of these strings look somewhat unusual:

- " " stands for the space bar;
- "\r" stands for the return and enter key;
- "\t" stands for the tab key; and
- "\b" stands for the backspace key.

On rare occasions your programs may also encounter "\u007F",
which is the string representing the delete key (aka rubout).

Second, some keys have multiple-character string representations. 
Strings with more than one character denote arrow keys or other
special events, starting with the four most important ones:

- "left" is the left arrow;
- "right" is the right arrow;
- "up" is the up arrow;
- "down" is the down arrow;

Here are some others that you may encounter:
- "start"
- "cancel"
- "clear"
- "shift"
- "rshift"
- "control"
- "rcontrol"
- "menu"
- "pause"
- "capital"
- "prior"
- "next"
- "end"
- "home"
- "escape"
- "select"
- "print"
- "execute"
- "snapshot"
- "insert"
- "help"

 Function keys: "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "f13", "f14", "f15", "f16", "f17", "f18", "f19", "f20", "f21", "f22", "f23", "f24"
- "numlock"
- "scroll"

**Kind**: inner typedef of [<code>big-bang</code>](#module_big-bang)  
<a name="module_big-bang..keyFunction"></a>

### big-bang~keyFunction ⇒ <code>WorldState</code>
Returns a new world state based on the current state and a key event.

**Kind**: inner typedef of [<code>big-bang</code>](#module_big-bang)  
**Returns**: <code>WorldState</code> - - The next world state.  

| Param | Type | Description |
| --- | --- | --- |
| ws | <code>WorldState</code> | The current world state. |
| keyEvent | <code>KeyEvent</code> | The KeyEvent (string representing the key pressed). |

<a name="module_big-bang..lastWorld"></a>

### big-bang~lastWorld ⇒ <code>boolean</code>
Determines whether world program should be terminated based on a world state.

**Kind**: inner typedef of [<code>big-bang</code>](#module_big-bang)  
**Returns**: <code>boolean</code> - - `true` if world should be ended and `false` otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| ws | <code>WorldState</code> | The current world state. |

<a name="module_image"></a>

## image

* [image](#module_image)
    * [~emptyScene(width, height, [color])](#module_image..emptyScene) ⇒ <code>Image</code>
    * [~line(width, height, color)](#module_image..line) ⇒ <code>Image</code>
    * [~rectangle(width, height, mode, color)](#module_image..rectangle) ⇒ <code>Image</code>
    * [~square(side, mode, color)](#module_image..square) ⇒ <code>Image</code>
    * [~circle(radius, mode, color)](#module_image..circle) ⇒ <code>Image</code>
    * [~text(txt, size, color)](#module_image..text) ⇒ <code>Image</code>
    * [~triangle(side, mode, color)](#module_image..triangle) ⇒ <code>Image</code>
    * [~frame(image)](#module_image..frame) ⇒ <code>Image</code>
    * [~colorFrame(color, image)](#module_image..colorFrame) ⇒ <code>Image</code>
    * [~placeImage(image, x, y, scene)](#module_image..placeImage) ⇒ <code>Image</code>
    * [~placeImages(images, posns, scene)](#module_image..placeImages) ⇒ <code>Image</code>
    * [~placeImageAlign(image, x, y, xPlace, yPlace, scene)](#module_image..placeImageAlign) ⇒ <code>Image</code>
    * [~placeImagesAlign(images, posns, xPlace, yPlace, scene)](#module_image..placeImagesAlign) ⇒ <code>Image</code>
    * [~overlayAlign(xPlace, yPlace, ...images)](#module_image..overlayAlign) ⇒ <code>Image</code>
    * [~overlayXY(i1, x, y, i2)](#module_image..overlayXY) ⇒ <code>Image</code>
    * [~overlay(i1, i2, ...is)](#module_image..overlay) ⇒ <code>Image</code>
    * [~underlay(i1, i2, ...is)](#module_image..underlay) ⇒ <code>Image</code>
    * [~underlayXY(i1, x, y, i2)](#module_image..underlayXY) ⇒ <code>Image</code>
    * [~aboveAlign(xPlace, ...imgs)](#module_image..aboveAlign) ⇒ <code>Image</code>
    * [~above(...is)](#module_image..above) ⇒ <code>Image</code>
    * [~besideAlign(yPlace, ...imgs)](#module_image..besideAlign) ⇒ <code>Image</code>
    * [~beside(...is)](#module_image..beside) ⇒ <code>Image</code>

<a name="module_image..emptyScene"></a>

### image~emptyScene(width, height, [color]) ⇒ <code>Image</code>
Returns an empty scene based on a given width, height, and color.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The empty scene.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| width | <code>number</code> |  | The width. |
| height | <code>number</code> |  | The height. |
| [color] | <code>string</code> | <code>&quot;\&quot;white\&quot;&quot;</code> | The color. |

<a name="module_image..line"></a>

### image~line(width, height, color) ⇒ <code>Image</code>
Returns and image of a line.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The line drawn.  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | The width. |
| height | <code>number</code> | The height. |
| color | <code>string</code> | The color. |

<a name="module_image..rectangle"></a>

### image~rectangle(width, height, mode, color) ⇒ <code>Image</code>
Returns and image of a rectangle.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The rectangle image.  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | The width. |
| height | <code>number</code> | The height. |
| mode | <code>&quot;outline&quot;</code> \| <code>&quot;solid&quot;</code> | The outline mode. |
| color | <code>string</code> | The color. |

<a name="module_image..square"></a>

### image~square(side, mode, color) ⇒ <code>Image</code>
Returns and image of a square.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The square image.  

| Param | Type | Description |
| --- | --- | --- |
| side | <code>number</code> | The side length. |
| mode | <code>&quot;outline&quot;</code> \| <code>&quot;solid&quot;</code> | The outline mode. |
| color | <code>string</code> | The color. |

<a name="module_image..circle"></a>

### image~circle(radius, mode, color) ⇒ <code>Image</code>
Returns and image of a circle.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The circle image.  

| Param | Type | Description |
| --- | --- | --- |
| radius | <code>number</code> | The radius. |
| mode | <code>&quot;outline&quot;</code> \| <code>&quot;solid&quot;</code> | The outline mode. |
| color | <code>string</code> | The color. |

<a name="module_image..text"></a>

### image~text(txt, size, color) ⇒ <code>Image</code>
Returns and image of text.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The text image.  

| Param | Type | Description |
| --- | --- | --- |
| txt | <code>string</code> | The text to be drawn. |
| size | <code>number</code> | The font size of the text to be drawn. |
| color | <code>string</code> | The color. |

<a name="module_image..triangle"></a>

### image~triangle(side, mode, color) ⇒ <code>Image</code>
Returns and image of an equilateral triangle.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The triangle's image.  

| Param | Type | Description |
| --- | --- | --- |
| side | <code>number</code> | The side length. |
| mode | <code>&quot;outline&quot;</code> \| <code>&quot;solid&quot;</code> | The outline mode. |
| color | <code>string</code> | The color. |

<a name="module_image..frame"></a>

### image~frame(image) ⇒ <code>Image</code>
Returns an image just like image, except with a black, single pixel frame drawn around the bounding box of the image.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The new image with the frame around it.  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>Image</code> | The image to put the frame around. |

<a name="module_image..colorFrame"></a>

### image~colorFrame(color, image) ⇒ <code>Image</code>
Returns an image just like image, except with single pixel frame drawn around the bounding box of the image in a given color.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The new image with the frame around it.  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | The color of the frame to be drawn. |
| image | <code>Image</code> | The image to put the frame around. |

<a name="module_image..placeImage"></a>

### image~placeImage(image, x, y, scene) ⇒ <code>Image</code>
Places image onto scene with its center at the coordinates (x,y) and crops the resulting image so that it has the same size as scene. The coordinates are relative to the top-left of scene.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The image inside of the scene.  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>Image</code> | The image to place into the scene. |
| x | <code>number</code> | The x position to place the image. |
| y | <code>number</code> | The y position to place the image. |
| scene | <code>Image</code> | The scene to place the image into. |

<a name="module_image..placeImages"></a>

### image~placeImages(images, posns, scene) ⇒ <code>Image</code>
Places each image in `images` into scene like `placeImage` would, using the coordinates in `posns` as the `x` and `y` arguments to `placeImage`.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| images | <code>Array.&lt;Image&gt;</code> | The images to place into the scene. |
| posns | <code>Array.&lt;Posn&gt;</code> | The positions of each image. |
| scene | <code>Image</code> | The scene to place the images into. |

<a name="module_image..placeImageAlign"></a>

### image~placeImageAlign(image, x, y, xPlace, yPlace, scene) ⇒ <code>Image</code>
Like `placeImage`, but uses image’s `xPlace` and `yPlace` to anchor the image. Also, like `placeImage`, `placeImageAlign` crops the resulting image so that it has the same size as `scene`.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>Image</code> | The image to place into the scene. |
| x | <code>number</code> | The x position to place the image. |
| y | <code>number</code> | The y position to place the image. |
| xPlace | <code>string</code> | The x alignment of the image placement. |
| yPlace | <code>string</code> | The y alignment of the image placement. |
| scene | <code>Image</code> | The scene to place the image into. |

<a name="module_image..placeImagesAlign"></a>

### image~placeImagesAlign(images, posns, xPlace, yPlace, scene) ⇒ <code>Image</code>
Like `placeImages` except that it places the images with respect to `xPlace` and `yPlace`.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| images | <code>Array.&lt;Image&gt;</code> | The images to place into the scene. |
| posns | <code>Array.&lt;Posn&gt;</code> | The positions of each image. |
| xPlace | <code>string</code> | The x alignment of the image placement. |
| yPlace | <code>string</code> | The y alignment of the image placement. |
| scene | <code>Image</code> | The scene to place the images into. |

<a name="module_image..overlayAlign"></a>

### image~overlayAlign(xPlace, yPlace, ...images) ⇒ <code>Image</code>
Overlays all of its image arguments, much like the `overlay` function, but using `xPlace` and `yPlace` to determine where the images are lined up. For example, if `xPlace` and `yPlace` are both "middle", then the images are lined up on their centers.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| xPlace | <code>string</code> | The x alignment of the image placement. |
| yPlace | <code>string</code> | The y alignment of the image placement. |
| ...images | <code>Image</code> | The images to place into the scene. |

<a name="module_image..overlayXY"></a>

### image~overlayXY(i1, x, y, i2) ⇒ <code>Image</code>
Constructs an image by overlaying i1 on top of i2. The images are initially lined up on their upper-left corners and then i2 is shifted to the right by x pixels and down by y pixels.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| i1 | <code>Image</code> | The image to place into i2. |
| x | <code>number</code> | The x position to place i1. |
| y | <code>number</code> | The y position to place i1. |
| i2 | <code>Image</code> | The image to go under i1. |

<a name="module_image..overlay"></a>

### image~overlay(i1, i2, ...is) ⇒ <code>Image</code>
Overlays all of its arguments building a single image. The first argument goes on top of the second argument, which goes on top of the third argument, etc. The images are all lined up on their centers.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| i1 | <code>Image</code> | The image to place on top. |
| i2 | <code>Image</code> | The image to go under i1. |
| ...is | <code>Image</code> | The following sequence of images to place under i2. |

<a name="module_image..underlay"></a>

### image~underlay(i1, i2, ...is) ⇒ <code>Image</code>
Underlays all of its arguments building a single image.
It behaves like overlay, but with the arguments in the reverse order. That is, the first argument goes underneath of the second argument, which goes underneath the third argument, etc. The images are all lined up on their centers.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| i1 | <code>Image</code> | The image to place on the bottom. |
| i2 | <code>Image</code> | The image to go directly above i1. |
| ...is | <code>Image</code> | The following sequence of images to place above i2. |

<a name="module_image..underlayXY"></a>

### image~underlayXY(i1, x, y, i2) ⇒ <code>Image</code>
Constructs an image by underlaying i1 underneath i2. The images are initially lined up on their upper-left corners and then i2 is shifted to the right by x pixels to and down by y pixels.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| i1 | <code>Image</code> | The image to place below i2. |
| x | <code>number</code> | The x position to place i1. |
| y | <code>number</code> | The y position to place i1. |
| i2 | <code>Image</code> | The image to go above i1. |

<a name="module_image..aboveAlign"></a>

### image~aboveAlign(xPlace, ...imgs) ⇒ <code>Image</code>
Constructs an image by placing all of the argument images in a vertical row, lined up as indicated by the `xPlace` argument. For example, if `xPlace` is "middle", then the images are placed above each other with their centers lined up.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| xPlace | <code>string</code> | The alignment of the images on the x axis. |
| ...imgs | <code>Image</code> | The images to align. |

<a name="module_image..above"></a>

### image~above(...is) ⇒ <code>Image</code>
Constructs an image by placing all of the argument images in a vertical row, aligned along their centers.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| ...is | <code>Image</code> | The sequence of images to place on top of one another, with the lowest first and the highest last in the array. |

<a name="module_image..besideAlign"></a>

### image~besideAlign(yPlace, ...imgs) ⇒ <code>Image</code>
Constructs an image by placing all of the argument images in a horizontal row, lined up as indicated by the `yPlace` argument. For example, if `yPlace` is "middle", then the images are placed side by side with their centers lined up with each other.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| yPlace | <code>string</code> | The alignment of the images on the y axis. |
| ...imgs | <code>Image</code> | The images to align. |

<a name="module_image..beside"></a>

### image~beside(...is) ⇒ <code>Image</code>
Constructs an image by placing all of the argument images in a horizontal row, aligned along their centers.

**Kind**: inner method of [<code>image</code>](#module_image)  
**Returns**: <code>Image</code> - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| ...is | <code>Image</code> | The sequence of images to place on top of one another, with the leftmost first and the rightmost last in the array. |

<a name="module_posn"></a>

## posn

* [posn](#module_posn)
    * [~posn(x, y)](#module_posn..posn) ⇒ <code>Posn</code>
    * [~posnX(posn)](#module_posn..posnX) ⇒ <code>number</code>
    * [~posnY(posn)](#module_posn..posnY) ⇒ <code>number</code>

<a name="module_posn..posn"></a>

### posn~posn(x, y) ⇒ <code>Posn</code>
Constructs a new `posn` at the given position.

**Kind**: inner method of [<code>posn</code>](#module_posn)  
**Returns**: <code>Posn</code> - - The resulting posn.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The x position of the posn. |
| y | <code>number</code> | The y position of the posn. |

<a name="module_posn..posnX"></a>

### posn~posnX(posn) ⇒ <code>number</code>
Returns the x position of a given Posn.

**Kind**: inner method of [<code>posn</code>](#module_posn)  
**Returns**: <code>number</code> - - The x position of `posn`.  

| Param | Type | Description |
| --- | --- | --- |
| posn | <code>Posn</code> | The Posn to get the x position of. |

<a name="module_posn..posnY"></a>

### posn~posnY(posn) ⇒ <code>number</code>
Returns the y position of a given Posn.

**Kind**: inner method of [<code>posn</code>](#module_posn)  
**Returns**: <code>number</code> - - The y position of `posn`.  

| Param | Type | Description |
| --- | --- | --- |
| posn | <code>Posn</code> | The Posn to get the x position of. |

