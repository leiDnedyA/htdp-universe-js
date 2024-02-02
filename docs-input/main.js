
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
 * Returns an image based on a world state.
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
 * @callback mouseFunction - The function to be called on each render.
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
