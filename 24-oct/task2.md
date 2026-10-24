# CSS Grid Practice Tasks

## Task 1: Your first grid

Make a container with **6 boxes** arranged in **3 equal columns**.

- Use `display: grid` and `grid-template-columns`
- Add a `gap` of 10px
- **Expected result:** 2 rows of 3 equal boxes

## Task 2: Use `repeat()`

Rewrite Task 1 so it has **4 columns**, using `repeat()` instead of typing `1fr` four times.

- **Expected result:** 8 boxes in 2 rows of 4

## Task 3: Unequal columns

Make a grid with **2 columns** where the first column is **twice as wide** as the second.

- Hint: use `fr`
- **Bonus:** if the container is 600px wide, how wide is each column? (Answer: 400px and 200px)



</br>

## Solution

```
<!DOCTYPE html>
<html>
<head>
<title>CSS Grid Tasks - Solutions</title>
<style>
  body { font-family: sans-serif; padding: 20px; }

  .box {
    background: tomato;
    color: white;
    padding: 20px;
    text-align: center;
  }

  /* Task 1: 3 equal columns */
  .task1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }

  /* Task 2: 4 columns using repeat() */
  .task2 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  /* Task 3: first column twice as wide as the second */
  .task3 {
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 600px; /* no gap, so the columns are exactly 400px and 200px */
  }
  .task3 .box:nth-child(2) { background: steelblue; }
</style>
</head>
<body>

<h2>Task 1: Your first grid</h2>
<div class="task1">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
</div>

<h2>Task 2: Use repeat()</h2>
<div class="task2">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
  <div class="box">7</div>
  <div class="box">8</div>
</div>

<h2>Task 3: Unequal columns</h2>
<div class="task3">
  <div class="box">2fr (400px)</div>
  <div class="box">1fr (200px)</div>
</div>

</body>
</html>

```
</br>
