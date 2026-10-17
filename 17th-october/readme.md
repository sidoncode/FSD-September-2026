# Student Task: Sunrise College Home Page

**Topics:** margin, padding, and the CSS `display` property

Use the starter `index.html` with a `navbar`, `hero` section, `courses` cards and a `footer`. Students write only the CSS.

## Task 1: Navbar

Make the college name appear on the left and the menu links (Home, Courses, Admissions, Contact) in a row on the right. Remove the bullet points. Add space inside the navbar and around each link so it doesn't look crowded.

## Task 2: Hero Section

Make the welcome section look spacious with large space inside it and the text centered. Turn the "Apply Now" link into a proper button with its own width, space inside, and a gap above it.

## Task 3: Course Cards and Footer (optional)

Show the four course cards side by side instead of one below the other. Give each card space inside, space between cards, and a border. Add a dark footer with white centered text and a gap above it.

## Marks

10 per task, plus 5 for clean code (35 total)

## Starter Code

</br>

```

<!DOCTYPE html>
<html>
<head>
  <title>Sunrise College</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="navbar">
    <h2 class="logo">Sunrise College</h2>
    <ul class="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">Courses</a></li>
      <li><a href="#">Admissions</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </header>

  <section class="hero">
    <h1>Welcome to Sunrise College</h1>
    <p>Learn. Grow. Succeed.</p>
    <a href="#" class="btn">Apply Now</a>
  </section>

  <section class="courses">
    <h2>Our Courses</h2>
    <div class="card">B.Sc Computer Science</div>
    <div class="card">B.Com</div>
    <div class="card">BBA</div>
    <div class="card">B.A English</div>
  </section>

  <section class="stats">
    <div class="stat-box"><h3>2000+</h3><p>Students</p></div>
    <div class="stat-box"><h3>100+</h3><p>Teachers</p></div>
    <div class="stat-box"><h3>25</h3><p>Years</p></div>
  </section>

  <p class="old-notice">Admissions closed for 2024.</p>

  <footer class="footer">
    <p>© 2026 Sunrise College | Contact: info@sunrise.edu</p>
  </footer>

</body>
</html>

```

# Solution code

```
/* ---------- Basic reset ---------- */
* {
  box-sizing: border-box;   /* width includes padding + border */
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
}

/* ---------- Task 1: Navbar ---------- */
.navbar {
  display: flex;                    /* logo and menu side by side */
  justify-content: space-between;   /* logo left, menu right */
  align-items: center;              /* vertically centered */
  padding: 15px 30px;               /* space inside the navbar */
  background: navy;
  color: white;
}

.menu {
  display: flex;                    /* links in a row */
  list-style: none;                 /* remove bullet points */
}

.menu a {
  display: block;                   /* so padding works fully */
  padding: 8px 15px;                /* space around each link */
  color: white;
  text-decoration: none;
}

/* ---------- Task 2: Hero Section ---------- */
.hero {
  padding: 80px 20px;               /* large space inside */
  text-align: center;               /* center the text */
  background: lightblue;
}

.hero p {
  margin: 10px 0;
}

.btn {
  display: inline-block;            /* lets width/padding/margin work */
  width: 160px;                     /* its own width */
  padding: 12px 0;                  /* space inside the button */
  margin-top: 20px;                 /* gap above the button */
  background: navy;
  color: white;
  text-decoration: none;
}

/* ---------- Task 3: Course Cards ---------- */
.courses {
  display: flex;                    /* cards side by side */
  padding: 30px;
}

.card {
  flex: 1;                          /* equal width cards */
  padding: 20px;                    /* space inside each card */
  margin: 10px;                     /* space between cards */
  border: 2px solid navy;           /* border */
  text-align: center;
}

/* ---------- Task 3: Footer ---------- */
.footer {
  margin-top: 40px;                 /* gap above the footer */
  padding: 20px;
  background: #222;                 /* dark background */
  color: white;
  text-align: center;
}
```

