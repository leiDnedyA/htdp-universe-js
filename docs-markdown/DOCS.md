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
| keyFunction | [<code>keyFunction</code>](#keyFunction) | Returns a new world state based on the current state and a mouse event. |

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

