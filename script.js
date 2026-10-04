/*
    CAMPUS TRACE
    Lost & Found Text Matching Engine
*/


/* SAMPLE FOUND-ITEM DATABASE */

const foundItems = [

    {
        name: "Black Samsung Water Bottle",
        description:
            "Black Samsung water bottle with silver cap found near the library",
        location: "Library",
        date: "02 Oct 2026"
    },

    {
        name: "Blue Steel Water Bottle",
        description:
            "Blue steel water bottle found near the college canteen",
        location: "Canteen",
        date: "01 Oct 2026"
    },

    {
        name: "Black Backpack",
        description:
            "Black laptop backpack with college books found in computer lab",
        location: "Computer Lab",
        date: "03 Oct 2026"
    },

    {
        name: "Wireless Earbuds",
        description:
            "White wireless earbuds found near the seminar hall",
        location: "Seminar Hall",
        date: "30 Sep 2026"
    },

    {
        name: "Scientific Calculator",
        description:
            "Casio scientific calculator found inside mathematics classroom",
        location: "Maths Classroom",
        date: "29 Sep 2026"
    },

    {
        name: "Black College ID Card",
        description:
            "Black college identification card found near the main entrance",
        location: "Main Entrance",
        date: "04 Oct 2026"
    }

];


/* STOP WORDS */

const stopWords = new Set([

    "the",
    "a",
    "an",
    "is",
    "was",
    "were",
    "and",
    "or",
    "with",
    "to",
    "of",
    "in",
    "on",
    "at",
    "near",
    "my",
    "i",
    "it",
    "this",
    "that",
    "for",
    "from",
    "has",
    "have",
    "had",
    "found",
    "lost",
    "item"

]);


/* CLEAN TEXT */

function cleanText(text) {

    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter(word =>
            word.length > 2 &&
            !stopWords.has(word)
        );

}


/* REMOVE DUPLICATES */

function uniqueWords(words) {

    return [...new Set(words)];

}


/* CALCULATE MATCH */

function calculateMatch(userWords, item) {

    const itemWords =
        uniqueWords(
            cleanText(item.description)
        );


    let matchedWords = [];

    userWords.forEach(word => {

        if (itemWords.includes(word)) {

            matchedWords.push(word);

        }

    });


    matchedWords =
        uniqueWords(matchedWords);


    /*
        BASIC WORD SIMILARITY
    */

    const totalUniqueWords =
        uniqueWords([
            ...userWords,
            ...itemWords
        ]).length;


    let score = 0;


    if (totalUniqueWords > 0) {

        score =
            (matchedWords.length /
            totalUniqueWords) * 100;

    }


    /*
        LOCATION BONUS

        If a location mentioned by the
        user appears in the found item,
        increase the score.
    */

    const locations = [

        "library",
        "canteen",
        "computer lab",
        "seminar hall",
        "maths classroom",
        "main entrance"

    ];


    locations.forEach(location => {

        if (
            userWords.includes(
                location.split(" ")[0]
            ) &&
            item.location
                .toLowerCase()
                .includes(location)
        ) {

            score += 12;

        }

    });


    /*
        IMPORTANT ATTRIBUTE BONUS
    */

    const importantWords = [

        "black",
        "blue",
        "white",
        "silver",
        "samsung",
        "calculator",
        "backpack",
        "bottle",
        "earbuds",
        "card"

    ];


    importantWords.forEach(word => {

        if (
            userWords.includes(word) &&
            itemWords.includes(word)
        ) {

            score += 5;

        }

    });


    score =
        Math.min(
            Math.round(score),
            99
        );


    return {

        item: item,

        score: score,

        matchedWords: matchedWords

    };

}


/* FIND MATCHES */

function findMatches() {

    const input =
        document.getElementById("lostItem");

    const text =
        input.value.trim();


    if (!text) {

        alert(
            "Please describe the lost item first."
        );

        return;

    }


    /*
        SHOW SCANNER
    */

    const scanner =
        document.getElementById("scanner");

    const results =
        document.getElementById("results");


    results.classList.add("hidden");

    scanner.classList.remove("hidden");


    /*
        ANALYZE AFTER SHORT DELAY
    */

    setTimeout(() => {

        const userWords =
            uniqueWords(
                cleanText(text)
            );


        let matches =
            foundItems.map(item => {

                return calculateMatch(
                    userWords,
                    item
                );

            });


        /*
            SORT FROM HIGHEST
            TO LOWEST
        */

        matches.sort(
            (a, b) =>
                b.score - a.score
        );


        scanner.classList.add("hidden");

        displayResults(matches);


    }, 900);

}


/* DISPLAY RESULTS */

function displayResults(matches) {

    const results =
        document.getElementById("results");


    results.classList.remove("hidden");


    /*
        BEST MATCH
    */

    const best =
        matches[0];


    document.getElementById("bestName")
        .textContent =
        best.item.name;


    document.getElementById("bestScore")
        .textContent =
        best.score + "%";


    document.getElementById("bestMeter")
        .style.width =
        best.score + "%";


    document.getElementById("bestLocation")
        .textContent =
        best.item.location;


    document.getElementById("bestDate")
        .textContent =
        best.item.date;


    /*
        MATCHED WORDS
    */

    const matchedContainer =
        document.getElementById("matchedWords");


    matchedContainer.innerHTML = "";


    if (best.matchedWords.length === 0) {

        matchedContainer.textContent =
            "No strong keyword matches";

    }
    else {

        best.matchedWords.forEach(word => {

            const tag =
                document.createElement("span");

            tag.className = "tag";

            tag.textContent =
                "✓ " + word;

            matchedContainer.appendChild(tag);

        });

    }


    /*
        MATCH COUNT
    */

    document.getElementById("matchCount")
        .textContent =
        matches.filter(
            match => match.score > 10
        ).length;


    /*
        OTHER MATCHES
    */

    const otherContainer =
        document.getElementById("otherMatches");


    otherContainer.innerHTML = "";


    matches.slice(1).forEach(match => {

        const element =
            document.createElement("div");

        element.className =
            "other-match";


        element.innerHTML = `

            <div>

                <h4>
                    ${match.item.name}
                </h4>

                <p>
                    ${match.item.location}
                    · ${match.item.date}
                </p>

            </div>

            <div class="other-score">
                ${match.score}%
            </div>

        `;


        otherContainer.appendChild(element);

    });


    /*
        SCROLL TO RESULTS
    */

    results.scrollIntoView({
        behavior: "smooth"
    });

}
