
/*
 * This file exists so that JSDoc can be used to generate
 * documentation. It should only contain function headers
 * and corresponding JSDoc comments.
 *
 * Original code written in RacketScript.
 *
 * */

/**
 * The representation of the current state in your world program.
 * @typedef {*} WorldState
*/

/**
 * An image able to be drawn to the canvas.
 * @typedef {*} Image
*/

/** 
  * Starts a world program in the initial state defined by initWorld.
  * @param {WorldState} initWorld - The initial state for the world program to be run.
  * @param {...*} handlers - The event handlers for the given world
  */
function bigBang(initWorld, ...handlers) {}

/**
 * Returns an image based on a world state.
 * @callback renderFunction - The function to be called on each render.
 * @param {WorldState} worldState - The world state to base the image on.
 * @returns {Image} - Image to be drawn.
 */

/**
 * Tells bigBang to call "renderFunction" whenever an image must
 * be drawn to the canvas.
 * @param {renderFunction} renderFunction - Function that draws an image.
 */ 
function toDraw(renderFunction) {}

/**
 * Is called on each tick by the onTick handler.
 * @callback tickFunction - The function to be called on each render.
 * @param {WorldState} ws - The current world state.
 * @returns {WorldState} - The next world state.
 */

/**
 * Handler to update the world state on each tick.
 * @param {tickFunction} tickFunction - Returns a new world state based on the previous state.
 */ 
function onTick(tickFunction) {}


/**
 * @typedef {'button-down' | 'button-up' | 'drag' | 'move' | 'enter' | 'leave'} MouseEvent - The name of the event.
 * @description
 * Types of mouse events.
 *
 * - "button-down": signals that the computer user has pushed a mouse button down
 * - "button-up" signals that the computer user has let go of a mouse button
 * - "drag" signals that the computer user is dragging the mouse. A dragging event occurs when the mouse moves while a mouse button is pressed.
 * - "move" signals that the computer user has moved the mouse
 * - "enter" signals that the computer user has moved the mouse into the canvas area
 * - "leave" signals that the computer user has moved the mouse out of the canvas area.
*/

/**
 * Returns a new world state based on the current state and a mouse event.
 * @callback mouseFunction - The function to be called on each mouse event.
 * @param {WorldState} ws - The current world state.
 * @param {number} xPos - The x position of the mouse event on the canvas.
 * @param {number} yPos - The y position of the mouse event on the canvas.
 * @param {MouseEvent} mouseEvent - The type of mouse event.
 * @returns {WorldState} - The next world state.
 */

/**
 * Handles mouse events.
 * @param {mouseFunction} mouseFunction - Returns a new world state based on the current state and a mouse event.
 */
function onMouse(mouseFunction) {}

/**
 * @typedef {string} KeyEvent - String representing the key pressed.
 * @description
 * For simplicity, we represent key events with strings, but 
 * not all strings are key events. The representation of key 
 * events comes in distinct classes. First, a single-character 
 * string is used to signal that the user has hit a "regular" 
 * key, such as
 *
 * - "q" stands for the q key;
 * - "w" stands for the w key;
 * - "e" stands for the e key;
 * - "r" stands for the r key; and so on.
 *
 * Some of these strings look somewhat unusual:
 *
 * - " " stands for the space bar;
 * - "\r" stands for the return and enter key;
 * - "\t" stands for the tab key; and
 * - "\b" stands for the backspace key.
 *
 * On rare occasions your programs may also encounter "\u007F",
 * which is the string representing the delete key (aka rubout).
 *
 * Second, some keys have multiple-character string representations. 
 * Strings with more than one character denote arrow keys or other
 * special events, starting with the four most important ones:
 *
 * - "left" is the left arrow;
 * - "right" is the right arrow;
 * - "up" is the up arrow;
 * - "down" is the down arrow;
 *
 * Here are some others that you may encounter:
 * - "start"
 * - "cancel"
 * - "clear"
 * - "shift"
 * - "rshift"
 * - "control"
 * - "rcontrol"
 * - "menu"
 * - "pause"
 * - "capital"
 * - "prior"
 * - "next"
 * - "end"
 * - "home"
 * - "escape"
 * - "select"
 * - "print"
 * - "execute"
 * - "snapshot"
 * - "insert"
 * - "help"

 Function keys: "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "f13", "f14", "f15", "f16", "f17", "f18", "f19", "f20", "f21", "f22", "f23", "f24"

 * - "numlock"
 * - "scroll"

 *
*/

/**
 * Returns a new world state based on the current state and a key event.
 * @callback keyFunction - The function to be called on each key event.
 * @param {WorldState} ws - The current world state.
 * @param {KeyEvent} keyEvent - The KeyEvent (string representing the key pressed).
 * @returns {WorldState} - The next world state.
 */

/**
 * Handles key events.
 * @param {keyFunction} keyFunction - Called every time a key is pressed.
 */
function onKey(keyFunction) {}

/**
 * Determines whether world program should be terminated based on a world state.
 * @callback lastWorld - The function to be called on each key event.
 * @param {WorldState} ws - The current world state.
 * @returns {boolean} - `true` if world should be ended and `false` otherwise.
 */

/**
 * Tells big bang to call the lastWorld callback on the start of any
 * world-producing callback. Returns `true` if the program should end, 
 * and `false` otherwise.
 * @param {lastWorld} lastWorld - Determines whether program should end.
 */
function stopWhen(lastWorld) {}

/**
 * Returns an empty scene based on a given width, height, and color.
 * @param {number} width - The width.
 * @param {number} height - The height.
 * @param {string} [color="white"] - The color.
 * @returns {Image} - The empty scene.
 */
function emptyScene(width, height, color="white") {}

/**
 * Returns and image of a line.
 * @param {number} width - The width.
 * @param {number} height - The height.
 * @param {string} color - The color.
 * @returns {Image} - The line drawn.
 */
function line(width, height, color) {}

/**
 * Returns and image of a rectangle.
 * @param {number} width - The width.
 * @param {number} height - The height.
 * @param {"outline" | "solid"} mode - The outline mode.
 * @param {string} color - The color.
 * @returns {Image} - The rectangle image.
 */
function rectangle(width, height, mode, color) {}
