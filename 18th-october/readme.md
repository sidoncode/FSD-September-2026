# Student Tasks: Flexbox and z-index

Write all the code from scratch. Create a new `.html` file for each task.

---

## Task 1: Flexbox (Simple Navbar)

**Goal:** Build a navbar with the logo on the left and 3 links on the right, all vertically centered.

**Requirements:**
1. Create a `div` with the class `navbar` and a dark background.
2. Inside it, add a `div` for the logo text ("MyLogo").
3. Add a second `div` with 3 links: Home, About, Contact.
4. Use `display: flex` on the navbar.
5. Use `justify-content` to push the logo to the left and the links to the right.
6. Use `align-items` to center everything vertically.

**Bonus:** Make the logo and links stack on top of each other using `flex-direction`.

---

## Task 2: z-index (Overlapping Boxes)

**Goal:** Create 3 overlapping boxes where the **green box is on top**, then blue, then red at the bottom.

**Requirements:**
1. Create 3 `div` boxes (red, green, blue), each 120px by 120px.
2. Give all of them `position: absolute`.
3. Place them so they overlap, with each box a little lower and to the right of the previous one (use `top` and `left`).
4. Use `z-index` so that green is highest, blue is in the middle, and red is lowest.

**Bonus:** Change the numbers so the red box is on top instead.

---

## Hints

| Question | Hint |
|---|---|
| Nothing happens with `z-index`? | The element needs a `position` (`relative`, `absolute`, `fixed`, or `sticky`) |
| Which `z-index` wins? | The higher number sits on top |
| Flexbox not working? | Check that `display: flex` is on the **parent**, not the children |

---
