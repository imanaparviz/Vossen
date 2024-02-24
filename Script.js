function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
locoScroll()

function cursorEffect(){
    var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x:dets.x,
    y:dets.y
  });
});
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0,
    })
})
page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1,

    })
})
}
cursorEffect()

function page2Animation(){
    gsap.from(".elem",{
        y:120,
        stagger:0.1,
        duration:1,
        scrollTrigger:{
            trigger: "#page2",
            scroller:"#main",
            start:"top 40%",
            end:"top 37%",
/*             markers: true,
 */            scrub:2,
    }
    })
}
page2Animation()


function page3Animation(){
    gsap.from(".box",{
        y:120,
        stagger:0.1,
        duration:1,
        scrollTrigger:{
            trigger: "#page3",
            scroller:"#main",
            start:"top 40%",
            end:"top 37%",
/*             markers: true,
 */            scrub:2,
    }
    })
}
page3Animation()


function sliderAnimation(){
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay:{
  delay:2500,
  duration:2500,
  disableOnInteraction: true,
 },
});
}
sliderAnimation()

var tl = gsap.timeline()
tl.from('#loader h3', {
  x:40,
  opacity:0,
  duration:1,
  stagger:0.1,
})
tl.to("#loader h3",{
  opacity:0,
  x:-40,
  duration:1,
  stagger:0.1,
})
tl.to("#loader",{
  opacity:0
})
tl.to("#loader",{
  display:"none"
})
tl.from("#page1-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.2,  
  duration:0.5,
  delay:-0.5

})

document.addEventListener('DOMContentLoaded', (event) => {
// Funktion, die die Zählanimation ausführt
function animateNumber(element, start, end, duration) {
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const nextNumber = Math.round(easeInOutQuad(timeElapsed, start, end - start, duration));

    element.textContent = nextNumber;
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      element.textContent = end; // Stellt sicher, dass die Animation beim Endwert anhält.
    }
  }
  
  function easeInOutQuad(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Intersection Observer, um zu erkennen, wann das SVG sichtbar wird
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Startet die Zählanimation
      animateNumber(entry.target, 0, 28, 1000);
      // Stoppt die Beobachtung nach dem Start der Animation
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Startet die Beobachtung des Textelements
observer.observe(document.getElementById('animatedNumber'));
});

function page6Animation(){
  gsap.from(".elem6",{
      y:120,
      stagger:0.1,
      duration:1,
      scrollTrigger:{
          trigger: "#page6",
          scroller:"#main",
          start:"top 40%",
          end:"top 37%",
/*             markers: true,
*/            scrub:2,
  }
  })
}
page6Animation()


function cursor4Effect(){
  var page4 = document.querySelector("#page4-content");
var cursor4 = document.querySelector("#cursor4");

page4.addEventListener("mousemove", function (dets) {
gsap.to(cursor4, {
  x:dets.x,
  y:dets.y,
});
});
page4.addEventListener("mouseleave",function(){
  gsap.to(cursor4,{
      scale:0,
      opacity:0,
  })
})
page4.addEventListener("mouseenter",function(){
  gsap.to(cursor4,{
      scale:1,
      opacity:1,

  })
})
}
cursor4Effect()
