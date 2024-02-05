## Functions

<dl>
<dt><a href="#bigBang">bigBang(initWorld, ...handlers)</a></dt>
<dd><p>Starts a world program in the initial state defined by initWorld.</p>
</dd>
<dt><a href="#toDraw">toDraw(renderFunction)</a></dt>
<dd><p>Tells bigBang to call &quot;renderFunction&quot; whenever an image must
be drawn to the canvas.</p>
</dd>
<dt><a href="#onTick">onTick(tickFunction)</a></dt>
<dd><p>Handler to update the world state on each tick.</p>
</dd>
<dt><a href="#onMouse">onMouse(mouseFunction)</a></dt>
<dd><p>Handles mouse events.</p>
</dd>
<dt><a href="#onKey">onKey(keyFunction)</a></dt>
<dd><p>Handles key events.</p>
</dd>
<dt><a href="#stopWhen">stopWhen(lastWorld)</a></dt>
<dd><p>Tells big bang to call the lastWorld callback on the start of any
world-producing callback. Returns <code>true</code> if the program should end, 
and <code>false</code> otherwise.</p>
</dd>
<dt><a href="#emptyScene">emptyScene(width, height, [color])</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Returns an empty scene based on a given width, height, and color.</p>
</dd>
<dt><a href="#line">line(width, height, color)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Returns and image of a line.</p>
</dd>
<dt><a href="#rectangle">rectangle(width, height, mode, color)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Returns and image of a rectangle.</p>
</dd>
<dt><a href="#square">square(side, mode, color)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Returns and image of a square.</p>
</dd>
<dt><a href="#circle">circle(radius, mode, color)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Returns and image of a circle.</p>
</dd>
<dt><a href="#text">text(txt, size, color)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Returns and image of text.</p>
</dd>
<dt><a href="#triangle">triangle(side, mode, color)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Returns and image of an equilateral triangle.</p>
</dd>
<dt><a href="#frame">frame(image)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Returns an image just like image, except with a black, single pixel frame drawn around the bounding box of the image.</p>
</dd>
<dt><a href="#colorFrame">colorFrame(color, image)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Returns an image just like image, except with single pixel frame drawn around the bounding box of the image in a given color.</p>
</dd>
<dt><a href="#placeImage">placeImage(image, x, y, scene)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Places image onto scene with its center at the coordinates (x,y) and crops the resulting image so that it has the same size as scene. The coordinates are relative to the top-left of scene.</p>
</dd>
<dt><a href="#placeImages">placeImages(images, posns, scene)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Places each image in <code>images</code> into scene like <code>placeImage</code> would, using the coordinates in <code>posns</code> as the <code>x</code> and <code>y</code> arguments to <code>placeImage</code>.</p>
</dd>
<dt><a href="#placeImageAlign">placeImageAlign(image, x, y, xPlace, yPlace, scene)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Like <code>placeImage</code>, but uses image’s <code>xPlace</code> and <code>yPlace</code> to anchor the image. Also, like <code>placeImage</code>, <code>placeImageAlign</code> crops the resulting image so that it has the same size as <code>scene</code>.</p>
</dd>
<dt><a href="#placeImagesAlign">placeImagesAlign(images, posns, xPlace, yPlace, scene)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Like <code>placeImages</code> except that it places the images with respect to <code>xPlace</code> and <code>yPlace</code>.</p>
</dd>
<dt><a href="#overlayAlign">overlayAlign(xPlace, yPlace, ...images)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Overlays all of its image arguments, much like the <code>overlay</code> function, but using <code>xPlace</code> and <code>yPlace</code> to determine where the images are lined up. For example, if <code>xPlace</code> and <code>yPlace</code> are both &quot;middle&quot;, then the images are lined up on their centers.</p>
</dd>
<dt><a href="#overlayXY">overlayXY(i1, x, y, i2)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Constructs an image by overlaying i1 on top of i2. The images are initially lined up on their upper-left corners and then i2 is shifted to the right by x pixels and down by y pixels.</p>
</dd>
<dt><a href="#overlay">overlay(i1, i2, ...is)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Overlays all of its arguments building a single image. The first argument goes on top of the second argument, which goes on top of the third argument, etc. The images are all lined up on their centers.</p>
</dd>
<dt><a href="#underlay">underlay(i1, i2, ...is)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Underlays all of its arguments building a single image.
It behaves like overlay, but with the arguments in the reverse order. That is, the first argument goes underneath of the second argument, which goes underneath the third argument, etc. The images are all lined up on their centers.</p>
</dd>
<dt><a href="#underlayXY">underlayXY(i1, x, y, i2)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Constructs an image by underlaying i1 underneath i2. The images are initially lined up on their upper-left corners and then i2 is shifted to the right by x pixels to and down by y pixels.</p>
</dd>
<dt><a href="#aboveAlign">aboveAlign(xPlace, ...imgs)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Constructs an image by placing all of the argument images in a vertical row, lined up as indicated by the <code>xPlace</code> argument. For example, if <code>xPlace</code> is &quot;middle&quot;, then the images are placed above each other with their centers lined up.</p>
</dd>
<dt><a href="#above">above(...is)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Constructs an image by placing all of the argument images in a vertical row, aligned along their centers.</p>
</dd>
<dt><a href="#besideAlign">besideAlign(yPlace, ...imgs)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Constructs an image by placing all of the argument images in a horizontal row, lined up as indicated by the <code>yPlace</code> argument. For example, if <code>yPlace</code> is &quot;middle&quot;, then the images are placed side by side with their centers lined up with each other.</p>
</dd>
<dt><a href="#beside">beside(...is)</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Constructs an image by placing all of the argument images in a horizontal row, aligned along their centers.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#WorldState">WorldState</a> : <code>*</code></dt>
<dd><p>The representation of the current state in your world program.</p>
</dd>
<dt><a href="#Image">Image</a> : <code>*</code></dt>
<dd><p>An image able to be drawn to the canvas.</p>
</dd>
<dt><a href="#renderFunction">renderFunction</a> ⇒ <code><a href="#Image">Image</a></code></dt>
<dd><p>Returns an image based on a world state.</p>
</dd>
<dt><a href="#tickFunction">tickFunction</a> ⇒ <code><a href="#WorldState">WorldState</a></code></dt>
<dd><p>Is called on each tick by the onTick handler.</p>
</dd>
<dt><a href="#MouseEvent">MouseEvent</a> : <code>&#x27;button-down&#x27;</code> | <code>&#x27;button-up&#x27;</code> | <code>&#x27;drag&#x27;</code> | <code>&#x27;move&#x27;</code> | <code>&#x27;enter&#x27;</code> | <code>&#x27;leave&#x27;</code></dt>
<dd><p>Types of mouse events.</p>
<ul>
<li>&quot;button-down&quot;: signals that the computer user has pushed a mouse button down</li>
<li>&quot;button-up&quot; signals that the computer user has let go of a mouse button</li>
<li>&quot;drag&quot; signals that the computer user is dragging the mouse. A dragging event occurs when the mouse moves while a mouse button is pressed.</li>
<li>&quot;move&quot; signals that the computer user has moved the mouse</li>
<li>&quot;enter&quot; signals that the computer user has moved the mouse into the canvas area</li>
<li>&quot;leave&quot; signals that the computer user has moved the mouse out of the canvas area.</li>
</ul>
</dd>
<dt><a href="#mouseFunction">mouseFunction</a> ⇒ <code><a href="#WorldState">WorldState</a></code></dt>
<dd><p>Returns a new world state based on the current state and a mouse event.</p>
</dd>
<dt><a href="#KeyEvent">KeyEvent</a> : <code>string</code></dt>
<dd><p>For simplicity, we represent key events with strings, but 
not all strings are key events. The representation of key 
events comes in distinct classes. First, a single-character 
string is used to signal that the user has hit a &quot;regular&quot; 
key, such as</p>
<ul>
<li>&quot;q&quot; stands for the q key;</li>
<li>&quot;w&quot; stands for the w key;</li>
<li>&quot;e&quot; stands for the e key;</li>
<li>&quot;r&quot; stands for the r key; and so on.</li>
</ul>
<p>Some of these strings look somewhat unusual:</p>
<ul>
<li>&quot; &quot; stands for the space bar;</li>
<li>&quot;\r&quot; stands for the return and enter key;</li>
<li>&quot;\t&quot; stands for the tab key; and</li>
<li>&quot;\b&quot; stands for the backspace key.</li>
</ul>
<p>On rare occasions your programs may also encounter &quot;\u007F&quot;,
which is the string representing the delete key (aka rubout).</p>
<p>Second, some keys have multiple-character string representations. 
Strings with more than one character denote arrow keys or other
special events, starting with the four most important ones:</p>
<ul>
<li>&quot;left&quot; is the left arrow;</li>
<li>&quot;right&quot; is the right arrow;</li>
<li>&quot;up&quot; is the up arrow;</li>
<li>&quot;down&quot; is the down arrow;</li>
</ul>
<p>Here are some others that you may encounter:</p>
<ul>
<li>&quot;start&quot;</li>
<li>&quot;cancel&quot;</li>
<li>&quot;clear&quot;</li>
<li>&quot;shift&quot;</li>
<li>&quot;rshift&quot;</li>
<li>&quot;control&quot;</li>
<li>&quot;rcontrol&quot;</li>
<li>&quot;menu&quot;</li>
<li>&quot;pause&quot;</li>
<li>&quot;capital&quot;</li>
<li>&quot;prior&quot;</li>
<li>&quot;next&quot;</li>
<li>&quot;end&quot;</li>
<li>&quot;home&quot;</li>
<li>&quot;escape&quot;</li>
<li>&quot;select&quot;</li>
<li>&quot;print&quot;</li>
<li>&quot;execute&quot;</li>
<li>&quot;snapshot&quot;</li>
<li>&quot;insert&quot;</li>
<li>&quot;help&quot;</li>
</ul>
<p> Function keys: &quot;f1&quot;, &quot;f2&quot;, &quot;f3&quot;, &quot;f4&quot;, &quot;f5&quot;, &quot;f6&quot;, &quot;f7&quot;, &quot;f8&quot;, &quot;f9&quot;, &quot;f10&quot;, &quot;f11&quot;, &quot;f12&quot;, &quot;f13&quot;, &quot;f14&quot;, &quot;f15&quot;, &quot;f16&quot;, &quot;f17&quot;, &quot;f18&quot;, &quot;f19&quot;, &quot;f20&quot;, &quot;f21&quot;, &quot;f22&quot;, &quot;f23&quot;, &quot;f24&quot;</p>
<ul>
<li>&quot;numlock&quot;</li>
<li>&quot;scroll&quot;</li>
</ul>
</dd>
<dt><a href="#keyFunction">keyFunction</a> ⇒ <code><a href="#WorldState">WorldState</a></code></dt>
<dd><p>Returns a new world state based on the current state and a key event.</p>
</dd>
<dt><a href="#lastWorld">lastWorld</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether world program should be terminated based on a world state.</p>
</dd>
</dl>

<a name="bigBang"></a>

## bigBang(initWorld, ...handlers)
Starts a world program in the initial state defined by initWorld.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| initWorld | [<code>WorldState</code>](#WorldState) | The initial state for the world program to be run. |
| ...handlers | <code>\*</code> | The event handlers for the given world |

<a name="toDraw"></a>

## toDraw(renderFunction)
Tells bigBang to call "renderFunction" whenever an image must
be drawn to the canvas.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| renderFunction | [<code>renderFunction</code>](#renderFunction) | Function that draws an image. |

<a name="onTick"></a>

## onTick(tickFunction)
Handler to update the world state on each tick.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| tickFunction | [<code>tickFunction</code>](#tickFunction) | Returns a new world state based on the previous state. |

<a name="onMouse"></a>

## onMouse(mouseFunction)
Handles mouse events.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| mouseFunction | [<code>mouseFunction</code>](#mouseFunction) | Returns a new world state based on the current state and a mouse event. |

<a name="onKey"></a>

## onKey(keyFunction)
Handles key events.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| keyFunction | [<code>keyFunction</code>](#keyFunction) | Called every time a key is pressed. |

<a name="stopWhen"></a>

## stopWhen(lastWorld)
Tells big bang to call the lastWorld callback on the start of any
world-producing callback. Returns `true` if the program should end, 
and `false` otherwise.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| lastWorld | [<code>lastWorld</code>](#lastWorld) | Determines whether program should end. |

<a name="emptyScene"></a>

## emptyScene(width, height, [color]) ⇒ [<code>Image</code>](#Image)
Returns an empty scene based on a given width, height, and color.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The empty scene.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| width | <code>number</code> |  | The width. |
| height | <code>number</code> |  | The height. |
| [color] | <code>string</code> | <code>&quot;\&quot;white\&quot;&quot;</code> | The color. |

<a name="line"></a>

## line(width, height, color) ⇒ [<code>Image</code>](#Image)
Returns and image of a line.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The line drawn.  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | The width. |
| height | <code>number</code> | The height. |
| color | <code>string</code> | The color. |

<a name="rectangle"></a>

## rectangle(width, height, mode, color) ⇒ [<code>Image</code>](#Image)
Returns and image of a rectangle.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The rectangle image.  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | The width. |
| height | <code>number</code> | The height. |
| mode | <code>&quot;outline&quot;</code> \| <code>&quot;solid&quot;</code> | The outline mode. |
| color | <code>string</code> | The color. |

<a name="square"></a>

## square(side, mode, color) ⇒ [<code>Image</code>](#Image)
Returns and image of a square.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The square image.  

| Param | Type | Description |
| --- | --- | --- |
| side | <code>number</code> | The side length. |
| mode | <code>&quot;outline&quot;</code> \| <code>&quot;solid&quot;</code> | The outline mode. |
| color | <code>string</code> | The color. |

<a name="circle"></a>

## circle(radius, mode, color) ⇒ [<code>Image</code>](#Image)
Returns and image of a circle.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The circle image.  

| Param | Type | Description |
| --- | --- | --- |
| radius | <code>number</code> | The radius. |
| mode | <code>&quot;outline&quot;</code> \| <code>&quot;solid&quot;</code> | The outline mode. |
| color | <code>string</code> | The color. |

<a name="text"></a>

## text(txt, size, color) ⇒ [<code>Image</code>](#Image)
Returns and image of text.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The text image.  

| Param | Type | Description |
| --- | --- | --- |
| txt | <code>string</code> | The text to be drawn. |
| size | <code>number</code> | The font size of the text to be drawn. |
| color | <code>string</code> | The color. |

<a name="triangle"></a>

## triangle(side, mode, color) ⇒ [<code>Image</code>](#Image)
Returns and image of an equilateral triangle.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The triangle's image.  

| Param | Type | Description |
| --- | --- | --- |
| side | <code>number</code> | The side length. |
| mode | <code>&quot;outline&quot;</code> \| <code>&quot;solid&quot;</code> | The outline mode. |
| color | <code>string</code> | The color. |

<a name="frame"></a>

## frame(image) ⇒ [<code>Image</code>](#Image)
Returns an image just like image, except with a black, single pixel frame drawn around the bounding box of the image.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The new image with the frame around it.  

| Param | Type | Description |
| --- | --- | --- |
| image | [<code>Image</code>](#Image) | The image to put the frame around. |

<a name="colorFrame"></a>

## colorFrame(color, image) ⇒ [<code>Image</code>](#Image)
Returns an image just like image, except with single pixel frame drawn around the bounding box of the image in a given color.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The new image with the frame around it.  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | The color of the frame to be drawn. |
| image | [<code>Image</code>](#Image) | The image to put the frame around. |

<a name="placeImage"></a>

## placeImage(image, x, y, scene) ⇒ [<code>Image</code>](#Image)
Places image onto scene with its center at the coordinates (x,y) and crops the resulting image so that it has the same size as scene. The coordinates are relative to the top-left of scene.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The image inside of the scene.  

| Param | Type | Description |
| --- | --- | --- |
| image | [<code>Image</code>](#Image) | The image to place into the scene. |
| x | <code>number</code> | The x position to place the image. |
| y | <code>number</code> | The y position to place the image. |
| scene | [<code>Image</code>](#Image) | The scene to place the image into. |

<a name="placeImages"></a>

## placeImages(images, posns, scene) ⇒ [<code>Image</code>](#Image)
Places each image in `images` into scene like `placeImage` would, using the coordinates in `posns` as the `x` and `y` arguments to `placeImage`.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| images | [<code>Array.&lt;Image&gt;</code>](#Image) | The images to place into the scene. |
| posns | <code>Array.&lt;Posn&gt;</code> | The positions of each image. |
| scene | [<code>Image</code>](#Image) | The scene to place the images into. |

<a name="placeImageAlign"></a>

## placeImageAlign(image, x, y, xPlace, yPlace, scene) ⇒ [<code>Image</code>](#Image)
Like `placeImage`, but uses image’s `xPlace` and `yPlace` to anchor the image. Also, like `placeImage`, `placeImageAlign` crops the resulting image so that it has the same size as `scene`.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| image | [<code>Image</code>](#Image) | The image to place into the scene. |
| x | <code>number</code> | The x position to place the image. |
| y | <code>number</code> | The y position to place the image. |
| xPlace | <code>string</code> | The x alignment of the image placement. |
| yPlace | <code>string</code> | The y alignment of the image placement. |
| scene | [<code>Image</code>](#Image) | The scene to place the image into. |

<a name="placeImagesAlign"></a>

## placeImagesAlign(images, posns, xPlace, yPlace, scene) ⇒ [<code>Image</code>](#Image)
Like `placeImages` except that it places the images with respect to `xPlace` and `yPlace`.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| images | [<code>Array.&lt;Image&gt;</code>](#Image) | The images to place into the scene. |
| posns | <code>Array.&lt;Posn&gt;</code> | The positions of each image. |
| xPlace | <code>string</code> | The x alignment of the image placement. |
| yPlace | <code>string</code> | The y alignment of the image placement. |
| scene | [<code>Image</code>](#Image) | The scene to place the images into. |

<a name="overlayAlign"></a>

## overlayAlign(xPlace, yPlace, ...images) ⇒ [<code>Image</code>](#Image)
Overlays all of its image arguments, much like the `overlay` function, but using `xPlace` and `yPlace` to determine where the images are lined up. For example, if `xPlace` and `yPlace` are both "middle", then the images are lined up on their centers.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| xPlace | <code>string</code> | The x alignment of the image placement. |
| yPlace | <code>string</code> | The y alignment of the image placement. |
| ...images | [<code>Image</code>](#Image) | The images to place into the scene. |

<a name="overlayXY"></a>

## overlayXY(i1, x, y, i2) ⇒ [<code>Image</code>](#Image)
Constructs an image by overlaying i1 on top of i2. The images are initially lined up on their upper-left corners and then i2 is shifted to the right by x pixels and down by y pixels.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| i1 | [<code>Image</code>](#Image) | The image to place into i2. |
| x | <code>number</code> | The x position to place i1. |
| y | <code>number</code> | The y position to place i1. |
| i2 | [<code>Image</code>](#Image) | The image to go under i1. |

<a name="overlay"></a>

## overlay(i1, i2, ...is) ⇒ [<code>Image</code>](#Image)
Overlays all of its arguments building a single image. The first argument goes on top of the second argument, which goes on top of the third argument, etc. The images are all lined up on their centers.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| i1 | [<code>Image</code>](#Image) | The image to place on top. |
| i2 | [<code>Image</code>](#Image) | The image to go under i1. |
| ...is | [<code>Image</code>](#Image) | The following sequence of images to place under i2. |

<a name="underlay"></a>

## underlay(i1, i2, ...is) ⇒ [<code>Image</code>](#Image)
Underlays all of its arguments building a single image.
It behaves like overlay, but with the arguments in the reverse order. That is, the first argument goes underneath of the second argument, which goes underneath the third argument, etc. The images are all lined up on their centers.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| i1 | [<code>Image</code>](#Image) | The image to place on the bottom. |
| i2 | [<code>Image</code>](#Image) | The image to go directly above i1. |
| ...is | [<code>Image</code>](#Image) | The following sequence of images to place above i2. |

<a name="underlayXY"></a>

## underlayXY(i1, x, y, i2) ⇒ [<code>Image</code>](#Image)
Constructs an image by underlaying i1 underneath i2. The images are initially lined up on their upper-left corners and then i2 is shifted to the right by x pixels to and down by y pixels.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| i1 | [<code>Image</code>](#Image) | The image to place below i2. |
| x | <code>number</code> | The x position to place i1. |
| y | <code>number</code> | The y position to place i1. |
| i2 | [<code>Image</code>](#Image) | The image to go above i1. |

<a name="aboveAlign"></a>

## aboveAlign(xPlace, ...imgs) ⇒ [<code>Image</code>](#Image)
Constructs an image by placing all of the argument images in a vertical row, lined up as indicated by the `xPlace` argument. For example, if `xPlace` is "middle", then the images are placed above each other with their centers lined up.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| xPlace | <code>string</code> | The alignment of the images on the x axis. |
| ...imgs | [<code>Image</code>](#Image) | The images to align. |

<a name="above"></a>

## above(...is) ⇒ [<code>Image</code>](#Image)
Constructs an image by placing all of the argument images in a vertical row, aligned along their centers.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| ...is | [<code>Image</code>](#Image) | The sequence of images to place on top of one another, with the lowest first and the highest last in the array. |

<a name="besideAlign"></a>

## besideAlign(yPlace, ...imgs) ⇒ [<code>Image</code>](#Image)
Constructs an image by placing all of the argument images in a horizontal row, lined up as indicated by the `yPlace` argument. For example, if `yPlace` is "middle", then the images are placed side by side with their centers lined up with each other.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| yPlace | <code>string</code> | The alignment of the images on the y axis. |
| ...imgs | [<code>Image</code>](#Image) | The images to align. |

<a name="beside"></a>

## beside(...is) ⇒ [<code>Image</code>](#Image)
Constructs an image by placing all of the argument images in a horizontal row, aligned along their centers.

**Kind**: global function  
**Returns**: [<code>Image</code>](#Image) - - The resulting image.  

| Param | Type | Description |
| --- | --- | --- |
| ...is | [<code>Image</code>](#Image) | The sequence of images to place on top of one another, with the leftmost first and the rightmost last in the array. |

<a name="WorldState"></a>

## WorldState : <code>\*</code>
The representation of the current state in your world program.

**Kind**: global typedef  
<a name="Image"></a>

## Image : <code>\*</code>
An image able to be drawn to the canvas.

**Kind**: global typedef  
<a name="renderFunction"></a>

## renderFunction ⇒ [<code>Image</code>](#Image)
Returns an image based on a world state.

**Kind**: global typedef  
**Returns**: [<code>Image</code>](#Image) - - Image to be drawn.  

| Param | Type | Description |
| --- | --- | --- |
| worldState | [<code>WorldState</code>](#WorldState) | The world state to base the image on. |

<a name="tickFunction"></a>

## tickFunction ⇒ [<code>WorldState</code>](#WorldState)
Is called on each tick by the onTick handler.

**Kind**: global typedef  
**Returns**: [<code>WorldState</code>](#WorldState) - - The next world state.  

| Param | Type | Description |
| --- | --- | --- |
| ws | [<code>WorldState</code>](#WorldState) | The current world state. |

<a name="MouseEvent"></a>

## MouseEvent : <code>&#x27;button-down&#x27;</code> \| <code>&#x27;button-up&#x27;</code> \| <code>&#x27;drag&#x27;</code> \| <code>&#x27;move&#x27;</code> \| <code>&#x27;enter&#x27;</code> \| <code>&#x27;leave&#x27;</code>
Types of mouse events.

- "button-down": signals that the computer user has pushed a mouse button down
- "button-up" signals that the computer user has let go of a mouse button
- "drag" signals that the computer user is dragging the mouse. A dragging event occurs when the mouse moves while a mouse button is pressed.
- "move" signals that the computer user has moved the mouse
- "enter" signals that the computer user has moved the mouse into the canvas area
- "leave" signals that the computer user has moved the mouse out of the canvas area.

**Kind**: global typedef  
<a name="mouseFunction"></a>

## mouseFunction ⇒ [<code>WorldState</code>](#WorldState)
Returns a new world state based on the current state and a mouse event.

**Kind**: global typedef  
**Returns**: [<code>WorldState</code>](#WorldState) - - The next world state.  

| Param | Type | Description |
| --- | --- | --- |
| ws | [<code>WorldState</code>](#WorldState) | The current world state. |
| xPos | <code>number</code> | The x position of the mouse event on the canvas. |
| yPos | <code>number</code> | The y position of the mouse event on the canvas. |
| mouseEvent | [<code>MouseEvent</code>](#MouseEvent) | The type of mouse event. |

<a name="KeyEvent"></a>

## KeyEvent : <code>string</code>
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

**Kind**: global typedef  
<a name="keyFunction"></a>

## keyFunction ⇒ [<code>WorldState</code>](#WorldState)
Returns a new world state based on the current state and a key event.

**Kind**: global typedef  
**Returns**: [<code>WorldState</code>](#WorldState) - - The next world state.  

| Param | Type | Description |
| --- | --- | --- |
| ws | [<code>WorldState</code>](#WorldState) | The current world state. |
| keyEvent | [<code>KeyEvent</code>](#KeyEvent) | The KeyEvent (string representing the key pressed). |

<a name="lastWorld"></a>

## lastWorld ⇒ <code>boolean</code>
Determines whether world program should be terminated based on a world state.

**Kind**: global typedef  
**Returns**: <code>boolean</code> - - `true` if world should be ended and `false` otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| ws | [<code>WorldState</code>](#WorldState) | The current world state. |
