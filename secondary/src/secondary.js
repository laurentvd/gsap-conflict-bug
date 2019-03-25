// Here we import from the Club Greensock source instead of npm
import TweenMax from './gsap/TweenMax';

const circle = document.querySelector('.circle');
TweenMax.to(circle, 1, {x: 400, yoyo: true, repeat: 100});
