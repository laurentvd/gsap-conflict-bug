# Instructions

- Place a copy of Club Greensock source (unminified) in `secondary/src/gsap` so that the `TweenMax.js` etc are available directly in this folder. I used `1.20.2`.
- Go into `primary` and run `npm install && npm run build`. 
- Do the same for the `secondary` folder.

# How to test
- Open `public/index.html` in the browser.
- See how the script crashes and doesn't crash when either the `primary.js` or `secondary.js` is disabled.

# Conclusion
There seems to be an issue when the npm version is used in conjunction with the Club Greensock version. At least for the versions I used. Or maybe something else is causing this?
