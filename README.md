What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById()
What it does:
Selects one single element by its id.
Key points:
IDs must be unique
Always returns one element (or null if not found)
Fastest and most direct option

getElementsByClassName()
What it does:
Selects all elements with a given class name.
Key points:
Returns a live HTMLCollection
Updates automatically if the DOM changes
Cannot use full CSS selectors (only class names)

querySelector()
What it does:
Selects the first element that matches a CSS selector.
Key points:
Uses CSS selector syntax
Very flexible
Returns only the first match

querySelectorAll()
What it does:
Selects all elements matching a CSS selector.
Key points:
Uses CSS selectors
Returns a static NodeList
Does NOT auto-update when the DOM changes


How do you create and insert a new element into the DOM?
Use document.createElement();


What is Event Bubbling and how does it work?
Event bubbling means that when an event happens on an element, it:
Fires on the target element first
Then bubbles up through its parent elements
Continues up to document, and finally window

The event starts at the top of the DOM tree and travels down toward the target.
The event reaches the element that was actually clicked.
After the target finishes, the event bubbles upward, triggering listeners on ancestors.


What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a pattern where you:
Attach one event listener to a parent element
instead of attaching listeners to each child element

1. Fewer Event Listeners = Better Performance
2. It Works for Dynamic Content (Huge Win)
3. Cleaner, More Maintainable Code
4. Perfect for Lists, Menus, Tables, Forms
5. Plays Nicely with Event Bubbling
6. Less Bug-Prone Over Time


What is the difference between preventDefault() and stopPropagation() methods?
What it does
Stops the browser’s default behavior for an event.
It does NOT stop the event from bubbling.

Common examples of default behavior
Clicking a link → navigates to another page
Submitting a form → reloads the page
Right-click → opens context menu
Checkbox → toggles checked state

event.stopPropagation()
What it does
Stops the event from bubbling up to parent elements.
It does NOT prevent default browser behavior.
