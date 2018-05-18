/* eslint-disable */

import S from 'skylake'
import jQuery from "jquery"


class Transition {
    constructor() {

    // const body = S.Dom.body

    //this.arr = [].slice.call(document.querySelectorAll(".h-txt-title"))
    this.idx = idx; // idx is undefined, so getNextIdx will take 0 as default
    this.length = this.arr.length;
    this.menuVisible = !0;
 

      S.BindMaker(this, ['sectionInit', 'headerUp', 'headerDown', 'scrollCb', 'scrollInit', 'open', 'getNewIndexAndRender', 'getNextIdx', 'updateViewIn', 'updateViewOut', 'handleMouseWheelDirection'])
    }


init(t) {
    // console.log("init")
    this.first = !1
    this.listeners("add")
    }
    listeners(t) {
    // console.log(homesticky.listeners)
    S.Listen("#nav-link-submenu", t, "mouseenter", this.menuOpen)
    S.Listen("#nav-link-submenu", t, "mouseleave", this.menuClose)
    }

open(t) {

Transition.intro = new S.Timeline()
const isObj = S.Is.object(Transition.intro)
Transition.intro.from({el: '#sail', p: {y: [-100, 100]}, d: 5000, e: 'Power4InOut', delay: 7000})

Transition.outro = new S.Timeline()
const isObj2 = S.Is.object(Transition.outro)
Transition.outro.from({el: '#sail', p: {y: [100, -100]}, d: 5000, e: 'Power4InOut'})

this.scrollInit()

}

getNextIdx(idx = 0, length, direction) {
    switch (direction) {
        case 'init': this.updateViewIn(idx);
                     return idx 
        case 'next': this.updateViewIn(idx);
                     return (idx + 1) % length;
        case 'prev': this.updateViewOut(idx);
                     return (idx == 0) && length - 1 || idx - 1;


        // case 'next': return idx === 0 ? idx === 0 : (idx + 1) % length;
        // case 'prev': return (idx === 0) && length - 1 || idx - 1;
        default:     return idx;
        }
    }

updateViewIn(idx) {
    this.arr = [].slice.call(document.querySelectorAll(".h-txt-title"))
    Transition.textIn = new S.Timeline()
    const isObj5 = S.Is.object(Transition.textIn)
    Transition.textIn.from({el: this.arr[idx], p: {y: [100, 0]}, d: 1300, e: 'Power4InOut'})
    Transition.textIn.play({delay: 500})
    Transition.textIn.pause()
}

updateViewOut(idx) {
    Transition.textOut = new S.Timeline()
    const isObj6 = S.Is.object(Transition.textOut)
    Transition.textOut.from({el: this.arr[idx], p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})
    Transition.textOut.play({delay: 500})
}

getNewIndexAndRender(direction) {
    this.idx = this.getNextIdx(this.idx, length, direction);

}

sectionInit() {
    Transition.prototype.getNewIndexAndRender('init')
    console.log('hello from section init')
}

sectionChange() {
    Transition.prototype.getNewIndexAndRender('next')
    console.log('hello from section init')
}



headerScroll(currentScrollY, delta, event) {

    var delta = null,
    currentScrollY = false;

    if ( !event ) { // if the event is not provided, we get it from the window object
        event = window.event;
    }
    if ( event.wheelDelta ) { // will work in most cases
        delta = event.wheelDelta / 60;
    } else if ( event.detail ) { // fallback for Firefox
        delta = -event.detail / 2;
    }
    if ( delta !== null) {
        if (delta < 0) {

            Transition.headerUp = new S.Timeline()
            const isObj3 = S.Is.object(Transition.headerUp)
            Transition.headerUp.from({el: '.header', p: {y: [0, -100]}, d: 1300, e: 'Power4InOut', 
            cb: Transition.prototype.sectionInit})
            Transition.headerUp.play({delay: 500})
            this.menuVisible = !this.menuVisible

        } else if (delta > 0 && this.menuVisible === !1) {

            Transition.headerDown = new S.Timeline()
            const isObj4 = S.Is.object(Transition.headerDown)
            Transition.headerDown.from({el: '.header', p: {y: [-100, 0]}, d: 1300, e: 'Power4InOut'})
            Transition.headerDown.play({delay: 500})
            this.menuVisible = !this.menuVisible

        } else if (delta < 0 && this.menuVisible === !1) {

            Transition.prototype.sectionChange()
        }
    }
   
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
        };
    };


// scrollCb(currentScrollY, delta, event, direction) {
scrollCb(currentScrollY, delta, event) {

    var delta = null,
        currentScrollY = false
    ;
    if ( !event ) { // if the event is not provided, we get it from the window object
        event = window.event;
    }
    if ( event.wheelDelta ) { // will work in most cases
        delta = event.wheelDelta / 60;
    } else if ( event.detail ) { // fallback for Firefox
        delta = -event.detail / 2;
    }
    if ( delta !== null ) {
        delta > 0 ? this.headerDown : this.headerUp;
    }

    // if ( currentScrollY === 'down' && this.menuVisible) {
    //     // do something, like show the next page
    //     //S.Listen(body, 'add', 'mouseWheel', this.headerUp)
    //     this.scroll.on()
    // } else if ( currentScrollY === 'up' && this.menuVisible === !1) {
    //     // do something, like show the previous page
    //     //S.Listen(body, 'add', 'mouseWheel', this.headerDown)
    //     //this.scroll.off()
    // } else {
    //     // this means the direction of the mouse wheel could not be determined
    // }
    //return currentScrollY;
}

scrollInit() {
    const body = S.Dom.body
    // S.BindMaker(this, ['headerScroll'])
    // this.scroll = new S.Scroll(this.headerScroll)
    // this.scroll.on()
    S.Listen(body, 'add', 'mouseWheel', this.headerScroll)
    // this.scroll.on()
    // this.scroll.off()
    console.log('hello from scroll init')
    }


}

// key: "WTGestion",
// value: function(e) {
//  this.canChangePage && (this.getCanNotChangePage(), this.currentNo = this.getCurrentNo(), e.deltaY < 0 ? (this.direction = "next", this.no = this.currentNo === this.limit ? this.limit : this.currentNo + 1) : (this.direction = "prev", this.no = 0 === this.currentNo ? 0 : this.currentNo - 1), this.changePart())
// }

// {
//     key: "getFirstCase",
//     value: function() {
//      this.canChangePage && (this.getCanNotChangePage(), this.direction = "next", this.currentNo = 0, this.no = 1, this.changePart())
//     }
// }

// {
// key: "getCanChangePage",
// value: function() {
//     this.pagiOverTop.getCanChangePage(!0), this.pagiOverBottom.getCanChangePage(!0), this.canChangePage = !0
// }
// }, {
// key: "getCanNotChangePage",
// value: function() {
//     this.pagiOverTop.getCanChangePage(), this.pagiOverBottom.getCanChangePage(), this.canChangePage = !1
// }
// },

console.log('transition.js')

export default Transition
