
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

/**
 * Returns and image of a square.
 * @param {number} side - The side length.
 * @param {"outline" | "solid"} mode - The outline mode.
 * @param {string} color - The color.
 * @returns {Image} - The square image.
 */
function square(side, mode, color) {}

/**
 * Returns and image of a circle.
 * @param {number} radius - The radius.
 * @param {"outline" | "solid"} mode - The outline mode.
 * @param {string} color - The color.
 * @returns {Image} - The circle image.
 */
function circle(radius, mode, color) {}

/**
 * Returns and image of text.
 * @param {string} txt - The text to be drawn.
 * @param {number} size - The font size of the text to be drawn.
 * @param {string} color - The color.
 * @returns {Image} - The text image.
 */
function text(txt, size, color) {}

/**
 * Returns and image of an equilateral triangle.
 * @param {number} side - The side length.
 * @param {"outline" | "solid"} mode - The outline mode.
 * @param {string} color - The color.
 * @returns {Image} - The triangle's image.
 */
function triangle(triangle, mode, color) {}

/**
 * Returns an image just like image, except with a black, single pixel frame drawn around the bounding box of the image.
 * @param {Image} image - The image to put the frame around.
 * @returns {Image} - The new image with the frame around it.
 */
function frame(image) {}

/**
 * Returns an image just like image, except with single pixel frame drawn around the bounding box of the image in a given color.
 * @param {string} color - The color of the frame to be drawn.
 * @param {Image} image - The image to put the frame around.
 * @returns {Image} - The new image with the frame around it.
 */
function colorFrame(color, image) {}

/**
 * Places image onto scene with its center at the coordinates (x,y) and crops the resulting image so that it has the same size as scene. The coordinates are relative to the top-left of scene.
 * @param {Image} image - The image to place into the scene.
 * @param {number} x - The x position to place the image.
 * @param {number} y - The y position to place the image.
 * @param {Image} scene - The scene to place the image into.
 * @returns {Image} - The image inside of the scene.
 */
function placeImage(image, x, y, scene) {}

/**
 * Places each image in `images` into scene like `placeImage` would, using the coordinates in `posns` as the `x` and `y` arguments to `placeImage`.
 * @param {Image[]} images - The images to place into the scene.
 * @param {Posn[]} posns - The positions of each image.
 * @param {Image} scene - The scene to place the images into.
 * @returns {Image} - The resulting image.
 */
function placeImages(images, posns, scene) {}

/**
 * Like `placeImage`, but uses image’s `xPlace` and `yPlace` to anchor the image. Also, like `placeImage`, `placeImageAlign` crops the resulting image so that it has the same size as `scene`.
 * @param {Image} image - The image to place into the scene.
 * @param {number} x - The x position to place the image.
 * @param {number} y - The y position to place the image.
 * @param {string} xPlace - The x alignment of the image placement.
 * @param {string} yPlace - The y alignment of the image placement.
 * @param {Image} scene - The scene to place the image into.
 * @returns {Image} - The resulting image.
 */
function placeImageAlign(image, x, y, xPlace, yPlace, scene) {}

/**
 * Like `placeImages` except that it places the images with respect to `xPlace` and `yPlace`.
 * @param {Image[]} images - The images to place into the scene.
 * @param {Posn[]} posns - The positions of each image.
 * @param {string} xPlace - The x alignment of the image placement.
 * @param {string} yPlace - The y alignment of the image placement.
 * @param {Image} scene - The scene to place the images into.
 * @returns {Image} - The resulting image.
 */
function placeImagesAlign(images, posns, xPlace, yPlace, scene) {}

/**
 * Overlays all of its image arguments, much like the `overlay` function, but using `xPlace` and `yPlace` to determine where the images are lined up. For example, if `xPlace` and `yPlace` are both "middle", then the images are lined up on their centers.
 * @param {string} xPlace - The x alignment of the image placement.
 * @param {string} yPlace - The y alignment of the image placement.
 * @param {...Image} images - The images to place into the scene.
 * @returns {Image} - The resulting image.
 */
function overlayAlign(xPlace, yPlace, ...images) {}

/**
 * Constructs an image by overlaying i1 on top of i2. The images are initially lined up on their upper-left corners and then i2 is shifted to the right by x pixels and down by y pixels.
 * @param {Image} i1 - The image to place into i2.
 * @param {number} x - The x position to place i1.
 * @param {number} y - The y position to place i1.
 * @param {Image} i2 - The image to go under i1.
 * @returns {Image} - The resulting image.
 */
function overlayXY(i1, x, y, i2) {}

/**
 * Overlays all of its arguments building a single image. The first argument goes on top of the second argument, which goes on top of the third argument, etc. The images are all lined up on their centers.
 * @param {Image} i1 - The image to place on top.
 * @param {Image} i2 - The image to go under i1.
 * @param {...Image} is - The following sequence of images to place under i2.
 * @returns {Image} - The resulting image.
 */
function overlay(i1, i2, ...is) {}

/**
 * Underlays all of its arguments building a single image.
 * It behaves like overlay, but with the arguments in the reverse order. That is, the first argument goes underneath of the second argument, which goes underneath the third argument, etc. The images are all lined up on their centers.
 * @param {Image} i1 - The image to place on the bottom.
 * @param {Image} i2 - The image to go directly above i1.
 * @param {...Image} is - The following sequence of images to place above i2.
 * @returns {Image} - The resulting image.
 */
function underlay(i1, i2, ...is) {}

/**
 * Constructs an image by underlaying i1 underneath i2. The images are initially lined up on their upper-left corners and then i2 is shifted to the right by x pixels to and down by y pixels.
 * @param {Image} i1 - The image to place below i2.
 * @param {number} x - The x position to place i1.
 * @param {number} y - The y position to place i1.
 * @param {Image} i2 - The image to go above i1.
 * @returns {Image} - The resulting image.
 */
function underlayXY(i1, x, y, i2) {}

/**
 * Constructs an image by placing all of the argument images in a vertical row, lined up as indicated by the `xPlace` argument. For example, if `xPlace` is "middle", then the images are placed above each other with their centers lined up.
 * @param {string} xPlace - The alignment of the images on the x axis.
 * @param {...Image} imgs - The images to align.
 * @returns {Image} - The resulting image.
 */
function aboveAlign(xPlace, ...imgs) {}

/**
 * Constructs an image by placing all of the argument images in a vertical row, aligned along their centers.
 * @param {...Image} is - The sequence of images to place on top of one another, with the lowest first and the highest last in the array.
 * @returns {Image} - The resulting image.
 */
function above(...is) {}

/**
 * Constructs an image by placing all of the argument images in a horizontal row, lined up as indicated by the `yPlace` argument. For example, if `yPlace` is "middle", then the images are placed side by side with their centers lined up with each other.
 * @param {string} yPlace - The alignment of the images on the y axis.
 * @param {...Image} imgs - The images to align.
 * @returns {Image} - The resulting image.
 */
function besideAlign(xPlace, ...imgs) {}

/**
 * Constructs an image by placing all of the argument images in a horizontal row, aligned along their centers.
 * @param {...Image} is - The sequence of images to place on top of one another, with the leftmost first and the rightmost last in the array.
 * @returns {Image} - The resulting image.
 */
function beside(...is) {}
