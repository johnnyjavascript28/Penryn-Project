/* eslint-disable */

import S from 'skylake'
import jQuery from "jquery";


const Transition = {}

Transition.intro = new S.Timeline()
const isObj = S.Is.object(Transition.intro)
Transition.intro.from({el: '#sail', p: {y: [-100, 100]}, d: 5000, e: 'Power4InOut', delay: 7000})
// Transition.from({el: '#about', p: {x: [0, 600, 'px'], rotate: [0, 360]}, d: 5000, e: 'linear', delay: 300})

Transition.outro = new S.Timeline()
const isObj2 = S.Is.object(Transition.outro)
Transition.outro.from({el: '#sail', p: {y: [100, -100]}, d: 5000, e: 'Power4InOut'})

// window.onload = function() {

var ticking = false
var startScrollY = pageYOffset
var isMoving = false
var menuVisible = true
console.log(pageYOffset)
Transition.callback = function() {

window.addEventListener('wheel', function(e) {
    var lastKnownScrollY = 0;
    var currentScrollY = e.deltaY;
    var header = document.querySelector('.header')
    

    if (isMoving) return;
    // if (menuVisible) return;
    if (e.deltaY < 0 && !menuVisible) {
        console.log('scrolling up');
        Transition.headerDown = new S.Timeline()
        const isObj4 = S.Is.object(Transition.headerDown)
        Transition.headerDown.from({el: '.header', p: {y: [-100, 0]}, d: 1300, e: 'ExpoOut'})
        Transition.headerDown.play({delay: 500})
        menuVisible = true
    } 
    if (e.deltaY > 0 && menuVisible) {
        console.log('scrolling down');
        Transition.headerUp = new S.Timeline()
        const isObj3 = S.Is.object(Transition.headerUp)
        Transition.headerUp.from({el: '.header', p: {y: [0, -100]}, d: 1300, e: 'ExpoOut'})
        Transition.headerUp.play({delay: 500})
        console.log(currentScrollY)
        menuVisible = false
    }
    navigateTo()
    });
}
let st

function navigateTo(){
    isMoving = true;
    menuVisible ? false : true
    // currentScrollY = pageYOffset
    let st = setTimeout(function() {
    isMoving = false;
    }, 2000);
}

function myStopFunction() {
    clearTimeout(st);
}

myStopFunction()

// }

// Transition.intro.play()
console.log('transition.js')
// Transition.pause()
// Transition.play({reverse: true})

export default Transition
