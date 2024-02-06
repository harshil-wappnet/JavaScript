// An event is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).
/* Here’s a list of the most useful DOM events, just to take a look at:

Mouse events:

click – when the mouse clicks on an element (touchscreen devices generate it on a tap).
contextmenu – when the mouse right-clicks on an element.
mouseover / mouseout – when the mouse cursor comes over / leaves an element.
mousedown / mouseup – when the mouse button is pressed / released over an element.
mousemove – when the mouse is moved.
Keyboard events:

keydown and keyup – when a keyboard key is pressed and released.
Form element events:

submit – when the visitor submits a <form>.
focus – when the visitor focuses on an element, e.g. on an <input>.
Document events:

DOMContentLoaded – when the HTML is loaded and processed, DOM is fully built.
CSS events:

transitionend – when a CSS-animation finishes. */

// onclick Event:
{/* <script>
    let btn01 = document.querySelector("#Btn-01");
    btn01.onclick = () => alert("After");
</script> */}

// Bubbling: When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
// Capturing: the event goes down to the element.
{/* <style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>

<script>
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
  }
</script> */}