◈ Campus Trace — Lost & Found Matcher

📌 Project Overview

Campus Trace is a web-based Text Analysis application that helps students find possible matches for lost items by comparing their item description with a collection of reported found items.

The application uses a JavaScript-based text matching engine to extract important words, compare descriptions, calculate similarity scores, and rank possible matches.

---

🎯 Objective

The main objective of this project is to demonstrate how Text Analysis and Natural Language Processing techniques can be used to match similar descriptions and identify the most relevant result.

---

✨ Features

- 🔎 Lost-item description search
- 🧠 Text preprocessing
- 🔤 Keyword extraction
- 🚫 Stop-word removal
- 📊 Similarity score calculation
- 🏆 Best-match identification
- 📈 Match percentage visualization
- 🏷️ Matched-feature detection
- 📍 Location matching
- 📋 Ranked alternative matches
- ⚡ Animated scanning interface
- 📱 Responsive mobile interface
- 🌐 GitHub Pages deployment

---

🧠 How It Works

The application follows a text-matching pipeline:

Lost Item Description
          ↓
      Text Cleaning
          ↓
   Word Extraction
          ↓
   Stop-word Removal
          ↓
 Important Keyword Detection
          ↓
 Compare With Found Items
          ↓
 Similarity Score Calculation
          ↓
    Match Ranking
          ↓
      Best Match

The system compares the user's description with the descriptions stored in the found-item dataset.

---

🔍 Example

Lost Item

«Black Samsung water bottle with silver cap lost near the library.»

The application analyzes the description and compares it with the available found items.

Possible Result

BEST MATCH

Black Samsung Water Bottle

Match: 91%

Location:
Library

Matched Features:
✓ black
✓ samsung
✓ bottle
✓ silver

Other possible matches are also displayed with their individual similarity scores.

---

⚙️ Text Matching Algorithm

The JavaScript engine performs several operations.

1. Text Cleaning

The input is converted to lowercase and unnecessary symbols are removed.

2. Word Extraction

The text is divided into individual words.

3. Stop-word Removal

Common words such as:

the
a
is
and
with
near

are removed so that important words receive more significance.

4. Keyword Matching

Important words from the lost-item description are compared with the words in each found-item description.

5. Similarity Calculation

The system calculates a match score based on the number of matching words.

6. Attribute Matching

Additional points can be given when important attributes such as:

black
white
silver
bottle
backpack
calculator

appear in both descriptions.

7. Ranking

All found items are sorted from the highest match score to the lowest.

---

🎨 User Interface

Campus Trace uses a completely different interface style from a conventional chatbot or dashboard.

The design is inspired by a digital investigation and search console, featuring:

- Dark interface
- Neon-style accent elements
- Scanning animation
- Match meters
- Evidence-style result sections
- Match percentage display
- Extracted keyword tags
- Ranked search results

---

🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Rule-based Text Analysis
- GitHub Pages

No external API or database is required.

---

📂 Project Structure

Campus-Trace-Lost-Found-Matcher/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

▶️ How to Run Locally

1. Download or clone the repository.
2. Open the project folder.
3. Open "index.html" in a web browser.
4. Enter a description of the lost item.
5. Click SCAN FOR MATCHES.
6. View the best match and other possible matches.

No installation or server setup is required.

---

🌐 Live Demo

The application is deployed using GitHub Pages.

Live Application:

https://maheshbommini-stack.github.io/Campus-trace/

---

🧪 Sample Test Cases

Lost Item Description| Expected Match
Black Samsung bottle with silver cap near library| Black Samsung Water Bottle
Blue water bottle lost near canteen| Blue Steel Water Bottle
Black backpack with laptop books| Black Backpack
White wireless earbuds near seminar hall| Wireless Earbuds
Casio scientific calculator| Scientific Calculator
College ID card lost near entrance| Black College ID Card

---

🎓 Academic Relevance

This project demonstrates concepts related to Text and Speech Analysis, including:

- Text preprocessing
- Tokenization
- Stop-word removal
- Keyword extraction
- Text similarity
- Keyword matching
- Rule-based Natural Language Processing
- Information retrieval
- Ranking and matching

---

🚀 Future Improvements

The application can be improved by:

- Adding a real database of lost and found items
- Allowing students to submit found items
- Adding image-based item matching
- Supporting multiple languages
- Using semantic similarity models
- Adding machine-learning-based matching
- Adding user accounts
- Adding notifications when a strong match is found
- Connecting the application to a college lost-and-found system

---

📌 Conclusion

Campus Trace — Lost & Found Matcher demonstrates how text analysis can be applied to a practical campus problem.

Instead of simply searching for an exact phrase, the application analyzes descriptions, identifies important words, calculates similarity, and ranks possible matches.

This makes the project a practical example of applying Natural Language Processing and text matching techniques to a real-world student-support scenario.

---

👨‍💻 Project Information

Project: Campus Trace — Lost & Found Matcher
Application: Text and Speech Analysis — Application 4
Domain: Natural Language Processing / Text Analysis
Implementation: Frontend Web Application
Technology: HTML, CSS, JavaScript
Deployment: GitHub Pages
