// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors

const buttonNoun1 = document.querySelector("#noun1");
const buttonVerb = document.querySelector("#verb");
const buttonAdjective = document.querySelector("#adjective");
const buttonNoun2 = document.querySelector("#noun2");
const buttonSetting = document.querySelector("#setting");

// Constants for p tag to display query selectors

const pNoun1 = document.querySelector("#choosenNoun1");
const pVerb = document.querySelector("#choosenVerb");
const pAdjective = document.querySelector("#choosenAdjective");
const pNoun2 = document.querySelector("#choosenNoun2");
const pSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags

const buttonPlayback = document.querySelector("#playback");
const buttonRandom = document.querySelector("#random");
const story = document.querySelector("#story");

// Variables for pre-defined arrays

let nouns1 = ["The turkey", "Mom", "Dad", "The dog", "The elephant", "The cat"];
let verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
let adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements

let nouns1Count = 0;
let nouns2Count = 0;
let adjectivesCount = 0;
let settingsCount = 0;
let verbsCount = 0;

/* Functions
-------------------------------------------------- */

// STUDENT NOTE: The skeleton for this assignment suggests to do the count
// incrementing AFTER displaying the array element, but I've chosen
// to do the incrementing first so the display lines up with the actual
// value. I consider the other way around to be bad form. Technically though,
// this would still work even if I had done it the way the assignment had
// intended.

function noun1_on_click() {
    // if-else to change count setting
    if (nouns1Count < nouns1.length - 1) {
        nouns1Count++;
    } else {
        nouns1Count = 0;
    }
    // variable to get array element and displaying it
    let myWord = nouns1[nouns1Count];
    pNoun1.textContent = myWord;
}

function verb_on_click() {
    if (verbsCount < verbs.length - 1) {
        verbsCount++;
    } else {
        verbsCount = 0;
    }
    let myWord = verbs[verbsCount];
    pVerb.textContent = myWord; 
}

function adjective_on_click() {
    if (adjectivesCount < adjectives.length - 1) {
        adjectivesCount++;
    } else {
        adjectivesCount = 0;
    }
    let myWord = adjectives[adjectivesCount];
    pAdjective.textContent = myWord;
}

function noun2_on_click() {
    if (nouns2Count < nouns2.length - 1) {
        nouns2Count++;
    } else {
        nouns2Count = 0;
    }
    let myWord = nouns2[nouns2Count];
    pNoun2.textContent = myWord;
}

function setting_on_click() {
    if (settingsCount < settings.length - 1) {
        settingsCount++;
    } else {
        settingsCount = 0;
    }
    let myWord = settings[settingsCount];
    pSetting.textContent = myWord;
}

// concatenate the user story and display
function playback_on_click() {
    let newStory = pNoun1.textContent + " " + pVerb.textContent + " " + pAdjective.textContent + " " + pNoun2.textContent + " " + pSetting.textContent;
    story.textContent = newStory;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    // Adding myself dynamically
    if (nouns1.length === 6) {
        nouns1.push("Jennifer Towns");
    }

    // Assigning random values to the counters
    nouns1Count = Math.floor(Math.random() * nouns1.length);
    verbsCount = Math.floor(Math.random() * verbs.length);
    adjectivesCount = Math.floor(Math.random() * adjectives.length);
    nouns2Count = Math.floor(Math.random() * nouns2.length);
    settingsCount = Math.floor(Math.random() * settings.length);

    // Displaying the new words
    // (they'll get shifted by 1 but that doesn't matter)
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();

    // Display the story
    playback_on_click();
}

/* Event Listeners
-------------------------------------------------- */
buttonNoun1.addEventListener("click", noun1_on_click);
buttonVerb.addEventListener("click", verb_on_click);
buttonAdjective.addEventListener("click", adjective_on_click);
buttonNoun2.addEventListener("click", noun2_on_click);
buttonSetting.addEventListener("click", setting_on_click);
buttonPlayback.addEventListener("click", playback_on_click);
buttonRandom.addEventListener("click", random_on_click);