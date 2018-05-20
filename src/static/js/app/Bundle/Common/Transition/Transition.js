/* eslint-disable */

import S from 'skylake'
import jQuery from "jquery"


class Transition {
    constructor() {

    // const body = S.Dom.body

    //this.arr = [].slice.call(document.querySelectorAll(".h-txt-title"))
    this.idx = idx; // idx is undefined, so getNextIdx will take 0 as default
    this.length = this.arr.length;


      S.BindMaker(this, ['sectionInit', 'headerUp', 'headerDown', 'headerScroll','scrollCb', 'scrollInit', 'open', 'getNewIndexAndRender', 'getNextIdx', 'updateViewIn', 'updateViewOut', 'handleMouseWheelDirection'])
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

headerScroll(currentScrollY, delta, event) {

    // let debounce = function(func, wait, immediate) {
    //     var timeout;
    //     return function() {
    //         var context = this, args = arguments;
    //         var later = function() {
    //             timeout = null;
    //             if (!immediate) func.apply(context, args);
    //         };
    //         var callNow = immediate && !timeout;
    //         clearTimeout(timeout);
    //         timeout = setTimeout(later, wait);
    //         if (callNow) func.apply(context, args);
    //         };
    // };

    function throttled(delay, fn) {
        let lastCall = 0;
        return function (...args) {
          const now = (new Date).getTime();
          if (now - lastCall < delay) {
            return;
          }
          lastCall = now;
          return fn(...args);
        }
      }

    let headerUp = function() {
        // All the taxing stuff you do
        Transition.headerUp = new S.Timeline()
        const isObj3 = S.Is.object(Transition.headerUp)
        Transition.headerUp.from({el: '.header', p: {y: [0, -100]}, d: 1300, e: 'Power4InOut', 
        cb: sectionChangeNext})
        Transition.headerUp.play({delay: 500})

    };
    
    let headerDown = function() {
        Transition.headerDown = new S.Timeline()
        const isObj4 = S.Is.object(Transition.headerDown)
        Transition.headerDown.from({el: '.header', p: {y: [-100, 0]}, d: 1300, e: 'Power4InOut',
        cb: sectionChangePrev})
        Transition.headerDown.play({delay: 500})

    };

    const huHandler = throttled(2000, headerUp)
    const hdHandler = throttled(2000, headerDown)

    var delta = null,
    currentScrollY = false,
    event = window.event;
    let arr = [].slice.call(document.querySelectorAll(".h-txt-title"))
    let idx

    function getNextIdx(idx = 0, length, direction) {
        switch (direction) {
            case 'init': Transition.textInit = new S.Timeline()
                         const isObj5 = S.Is.object(Transition.textInit)
                         Transition.textInit.from({el: arr[idx], p: {y: [100, 0]}, d: 1300, e:  'Power4InOut'})
                         Transition.textInit.play({delay: 500})
                         return idx 
            case 'next': Transition.textIn = new S.Timeline()
                         const isObj6 = S.Is.object(Transition.textIn)
                         Transition.textIn.from({el: arr[idx], p: {y: [100, 0]}, d: 1300, e:  'Power4InOut'})
                         Transition.textIn.play({delay: 500})
                         return (idx + 1) % length;
            case 'prev': Transition.textOut = new S.Timeline()
                         const isObj7 = S.Is.object(Transition.textOut)
                         Transition.textOut.from({el: arr[idx], p: {y: [0, 100]}, d: 1300, e: 'Power4InOut'})
                         Transition.textOut.play({delay: 500})
                         return (idx == 0) && length - 1 || idx - 1;
    
    
            // case 'next': return idx === 0 ? idx === 0 : (idx + 1) % length;
            // case 'prev': return (idx === 0) && length - 1 || idx - 1;
            default:     return idx;
            }
        }
    
    // function updateViewIn(idx) {
        
    // }
    
    // function updateViewOut(idx) {
        
    // }
    
    function getNewIndexAndRender(direction) {
        idx = getNextIdx(idx, length, direction);
        
    }
    
    function sectionInit() {
        getNewIndexAndRender('init')
        console.log('hello from section init')
    }
    
    function sectionChangeNext() {
        getNewIndexAndRender('next')
        console.log('hello from section next')
    }
    
    function sectionChangePrev() {
        getNewIndexAndRender('prev')
        console.log('hello from section prev')
    }

    if ( !event ) { // if the event is not provided, we get it from the window object
        event = window.event;
    }
    if ( event.wheelDelta ) { // will work in most cases
        delta = event.wheelDelta / 60;
    } else if ( event.detail ) { // fallback for Firefox
        delta = -event.detail / 2;
    }
    if ( delta !== null) {
        if (delta < 0 && this.headerVisible) {
            
            huHandler()


        } else if (delta > 0 && !this.headerVisible) {

            hdHandler()

        } else if (delta > 0 && this.headerVisible) {

            return false;

        } else if (delta < 0 && !this.headerVisible) {

            //sectionChangeNext()
        }
    }
    this.headerVisible = !this.headerVisible
}




// scrollCb(currentScrollY, delta, event, direction) {
// scrollCb(currentScrollY, delta, event) {

//     var delta = null,
//         currentScrollY = false
//     ;
//     if ( !event ) { // if the event is not provided, we get it from the window object
//         event = window.event;
//     }
//     if ( event.wheelDelta ) { // will work in most cases
//         delta = event.wheelDelta / 60;
//     } else if ( event.detail ) { // fallback for Firefox
//         delta = -event.detail / 2;
//     }
//     if ( delta !== null ) {
//         delta > 0 ? this.headerDown : this.headerUp;
//     }

// }

scrollInit() {
    const body = S.Dom.body
    //S.BindMaker(this, ['headerScroll'])
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

// return createClass(e, [{
//     key: "showFirstTime",
//     value: function(e, t) {
//      var i = index.Geb.class("h-bottom-value-" + e),
//       n = "ExpoOut",
//       o = new index.Timeline;
//      o.from("#h-client-" + e, "3dy", 100, 0, 1200, n, {
//       delay: 1100
//      }), o.from(this.txtTitle[e], "3dy", 100, 0, 1200, n, {
//       delay: 300
//      }), o.from("#h-txt-desc-line", "3dx", -110, 0, 1200, n), o.from(this.txtDescTxt[e], "3dy", 100, 0, 1200, n), o.from(this.bottomTitle[0], "3dy", 100, 0, 1200, n, {
//       delay: 300
//      }), o.from(i[0], "3dy", 100, 0, 1200, n), o.from(this.bottomTitle[1], "3dy", 100, 0, 1200, n, {
//       delay: 100
//      }), o.from(i[1], "3dy", 100, 0, 1600, n), o.from(this.bottomTitle[2], "3dy", 100, 0, 1600, n, {
//       delay: 100
//      }), o.from(i[2], "3dy", 100, 0, 1600, n), o.from(this.img[e + 1], "3dx", 16, 0, 1200, n), 0 === e && (o.from(this.img[e], "3dx", 16, 0, 1200, n, {
//       delay: 40
//      }), o.from(this.img[e], "opacity", 0, 1, 600, "linear")), o.from(this.img[e + 1], "opacity", 0, 1, 600, "linear"), o.from("#h-btn-container", "3dy", 300, 0, {
//       delay: 160
//      }), o.from(this.btnCover[e], "3dy", 105, 0, 600, "Power3In"), o.from(this.btn[e], "3dy", 100, 0), o.from(this.btn[e], "opacity", 0, 1, {
//       delay: 600,
//       callbackDelay: 800,
//       callback: t
//      }), o.from(this.btnCover[e], "3dy", 0, -105, 1200, n), o.play()
//     }
//    },

// {
//     key: "hide",
//     value: function(e, t) {
//      var i = index.Geb.class("h-bottom-value-" + e),
//       n = "Power3In",
//       o = new index.Timeline;
//      o.from("#h-client-" + e, "3dy", 0, 100, 500, n), o.from(this.txtTitle[e], "3dy", 0, 100, 500, n), o.from("#h-txt-desc-line", "3dx", 0, -110 * t, 500, n), o.from(this.txtDescTxt[e], "3dy", 0, 100, 500, n), o.from(i[0], "3dy", 0, 100, 500, n), o.from(i[1], "3dy", 0, 100, 500, n), o.from(i[2], "3dy", 0, 100, 500, n), o.from(this.img[e + 1], "3dx", 0, 16, 500, n), 0 === e && (o.from(this.img[e], "3dx", 0, 16, 500, n, {
//       delay: 40
//      }), o.from(this.img[e], "opacity", 1, 0, 500, "linear")), o.from(this.img[e + 1], "opacity", 1, 0, 500, "linear"), o.from(this.btn[e], "3dy", 0, 100, 500, n), o.from(this.btn[e], "opacity", 1, 0, {
//       delay: 500
//      }), o.from(this.btnCover[e], "3dy", 0, 105), o.play()
//     }
//    }, {
//     key: "hideComplete",
//     value: function(e) {
//      var t = "Power3In";
//      this.hide(e, 1);
//      var i = new index.Timeline;
//      i.from(this.bottomTitle[0], "3dy", 0, 100, 500, t), i.from(this.bottomTitle[1], "3dy", 0, 100, 500, t), i.from(this.bottomTitle[2], "3dy", 0, 100, 500, t), i.from("#h-btn-container", "3dy", 0, 300, {
//       delay: 1e3
//      }), i.play()
//     }
//    }, {
//     key: "reset",
//     value: function(e) {
//      var t = new index.Timeline;
//      t.from("#h-txt-desc-line", "3dx", 0, -100, {
//       delay: 1300
//      }), t.from(".h-img", "3dx", 0, 16), t.from(".h-img", "opacity", 1, 0), t.from(".h-btn", "opacity", 1, 0), t.from(".h-btn", "3dy", 0, 100), t.from(".h-btn-cover", "3dy", 0, 105), t.from(".h-txt-title", "3dy", 0, 100), t.from(".h-txt-desc-txt", "3dy", 0, 100), t.from(".h-client", "3dy", 0, 100), t.from(".h-bottom-value", "3dy", 0, 100), t.from(".h-bottom-title", "3dy", 0, 100, {
//       callback: e
//      }), t.play()
//     }
//    }, {
//     key: "geSize",
//     value: function() {
//      for (var e = 0; e < this.txtDescTxtL; e++) this.txtDescTxtWrap[e].style.height = this.txtDescTxt[e].offsetHeight + "px";
//      this.btnContainer.style.left = Math.round(index.Win.w / 2 - this.btnContainer.offsetWidth / 2) + "px"
//     }
//    }, {
//     key: "destroy",
//     value: function() {
//      this.RO.off()
//     }
//    }]), e
//   }
console.log('transition.js')

export default Transition
