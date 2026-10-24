# Student Tasks: Flexbox Practice
Write all the code from scratch. Create a new .html file for each task.

---

## Task 1: Flexbox (Perfect Centering)
**Goal:** Put one box exactly in the middle of the page, both horizontally and vertically.

**Requirements:**
- Create a div with the class `wrapper` and give it `height: 100vh` and a light background.
- Inside it, add a div with the class `box` that is 200px by 200px, with a bright color and the text "I'm centered!".
- Use `display: flex` on the wrapper.
- Use `justify-content` to center the box horizontally.
- Use `align-items` to center the box vertically.

**Bonus:** Center the text inside the box with flexbox too, so the box itself also uses `display: flex`.

---

## Task 2: Flexbox (Wrapping Gallery)
**Goal:** Build a gallery of 8 boxes that moves onto new lines when the screen gets smaller.

**Requirements:**
- Create a div with the class `gallery`.
- Inside it, add 8 divs with the class `item`, each 120px by 120px and numbered 1 to 8.
- Use `display: flex` on the gallery.
- Use `flex-wrap: wrap` so the items move to the next line when there isn't enough room.
- Add `gap: 10px` between the items.
- Resize the browser window and watch the items wrap.

**Bonus:** Remove `flex-wrap: wrap` and describe what happens to the items.

---

## Task 3: Flexbox (Page Layout with flex-grow)
**Goal:** Make a layout with a fixed-width sidebar and a main area that fills the rest of the space.

**Requirements:**
- Create a div with the class `layout` and give it `height: 300px`.
- Inside it, add a div `sidebar` (200px wide, dark background) and a div `main` (light background).
- Use `display: flex` on the layout.
- Give `main` the property `flex-grow: 1` so it takes up all the remaining space.
- Put some text in each section ("Sidebar" and "Main Content").

**Bonus:** Add a third div called `ads` on the right, 150px wide. Check that `main` still fills the space in the middle.

---

## Hints

| Question | Hint |
|---|---|
| Items not lining up in a row? | `display: flex` goes on the **parent**, not the children |
| Vertical centering not working? | The parent needs a height (e.g. `height: 100vh`) |
| `justify-content` vs `align-items`? | `justify-content` works along the main axis (horizontal by default). `align-items` works on the cross axis (vertical by default) |
| Items squishing instead of wrapping? | Add `flex-wrap: wrap` to the parent |
| Main area not filling the space? | Use `flex-grow: 1` on the item that should grow |
| Did `flex-direction: column` swap things around? | Yes. In a column, `justify-content` controls vertical position and `align-items` controls horizontal position |
