# JavaScript DOM & Events Notes

---

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **`getElementById`** → It gets a single element by it's id.

- **`getElementsByClassName`** → It can get multiple elements by the class name. It return a HTML collection.

- **`querySelector`** → It gets the first element that matches a CSS selector.

- **`querySelectorAll`** → It can gets all the element that match a CSS selector. It's returns a NodeList.

---

### 2\. How do you create and insert a new element into the DOM?

1. **Create the element**

```javascript
const el = document.createElement("div");
```

2. **Add content (optional)**

```javascript
el.textContent = "Hello!";
```

3. **Insert it into the DOM**

```javascript
document.body.appendChild(el);
```

---

### 3. What is Event Bubbling?

Event bubbling is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements.

So when we click a button inside a div:

- The button’s event runs first

- Then the div’s

- Then the body’s, and so on

We can stop it with:

```javascript
event.stopPropagation();
```

---

### 4\. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation in JavaScript

Event delegation is a technique in JavaScript where a parent element handles events for its **child elements**, even if the children are added dynamically after the page loads. This works because events in JavaScript bubble up from the target element to its ancestors.

## Benefits of Event Delegation

**Improves Performance**

**Handles Dynamically Added Elements**

**Reduces Redundant Code**

**Simplifies Code Maintenance**


---

### 5\. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() is used to prevent the default action that belongs to the event, such as preventing a form from submitting.  
event. stopPropagation() is used to stop the event from bubbling up to parent elements, preventing any parent event handlers from being executed.
