import {TweenMax} from 'gsap';

const rectangle = document.querySelector('.rectangle');
TweenMax.to(rectangle, 1, {x: 400, yoyo: true, repeat: 100});
