# Billy Biscuit: Cookie Collector
#### Module 01, Week 03, Project 01
## Browser Game
<img width="90%" src="./images/readme-image01.png">

## Technologies Used
- HTML
- CSS (vanilla)
- JavaScript
    - objects
    - classes
    - collision detection

- Images and sprites made by me on Microsoft Paint and Paint 3D

## How to Play
<img width="90%" src="./images/readme-image02.png">

## Demo
[Play the game here](https://mqzmcs.github.io/project01game/)

## Work in Progress
## Code & Refactoring:
My understanding will improve with more experience, but I believe that:
- the current CSS can be consolidated further, using fewer selectors and shortening the overall code
- the JavaScript classes and class extensions can be consolidated further as there might be redundancies:
    - there are four non-player sprites extending the `Sprite` class
        - their fundamental code is essentially the same except for their size, movement speed and individual relationship to the points system
        - that variability should be able to be stored inside an object and called using conditionals
- the `setInterval` functions that control each sprites' movement speed (x4 functions) and spawn rate (x4 functions) are repetitive and/or redundant
    - these should be able to be consolidated into and conditionally called by:
        - x1 `setInterval` function for movement speed drawing variables from an object with four relevant key-value pairs
        - x1 `setInterval` function for spawn rate drawing variables from an object with four relevant key-value pairs

## Known Issues:
- player sprite traversal right-side boundary not properly restricted/limited:
    - likely problem: working with `vw`, `vh` and `percentage` values for better responsive design could mean that the math is off with regard to game area values
    - temporary hotfix: (CSS) `overflow: hidden` to eliminite potential infinite X-axis scrolling

- collision detection and point scoring:
    - PREVIOUS -- score counting registered massively because (I believe) of per-pixel contact between player sprite and other sprites
    - CURRENT -- correct score count and/or correct score count +/-1 registering per instance of collision

## UX:
- [X]   beautifying game menus, including proper positioning of static elements, etc.
- [ ]   background music and sound effects

## Fix:
- [X]   sprites properly disappearing from viewport and DOM when reaching the bottom Y-axis limit
- [X]   sprites properly disappearing from viewport and DOM when colliding with the player sprite