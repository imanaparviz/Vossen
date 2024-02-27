function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


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
        y:150,
        stagger:0.1,
        duration:1,
        scrollTrigger:{
            trigger: "#page2",
            scroller:"#main",
            start:"top 90%",
            end:"top 50%",
/*             markers: true,
 */            scrub:2,
    }
    })
}
page2Animation()


function page3Animation(){
    gsap.from(".box",{
        y:220,
        stagger:0.1,
        duration:1,
        scrollTrigger:{
            trigger: "#page3",
            scroller:"#main",
            start:"top 90%",
            end:"top 80%",
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
          start:"top 90%",
          end:"top 80%",
/*             markers: true,
*/            scrub:2,
  }
  })
}
page6Animation()


function page7Animation(){
  gsap.from("#page7-h1",{
      y:120,
      stagger:0.1,
      duration:15,
      scrollTrigger:{
          trigger: "#page7-h1",
          scroller:"#main",
          start:"top 90%",
          end:"top 80%",
/*             markers: true,
*/            scrub:2,
  }
  })
}
page7Animation()


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
