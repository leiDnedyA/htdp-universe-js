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
<dd><p>Returns an image based on a world state.</p>
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
Returns an image based on a world state.

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

