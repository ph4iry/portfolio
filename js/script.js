import * as svgpath from '../node_modules/svgpath';
import $ from './lib/jquery.slim.min.js';
// $(document).on('scroll', (event) => {
//   console.log('hi');
//   const pos = getVerticalScrollPercentage(document.body)
//   document.body.innerHTML = "<span>" + Math.round(pos) + "%<span>"
//   // const offset = this.offset;
//   // console.log((offset.top + $(this).outerHeight(true)))
// });

const spaceTrail = document.querySelector('#path svg');
// spaceTrail.setAttribute('viewBox', `0 0 ${innerWidth} ${document.body.scrollHeight}`);
// spaceTrail.setAttribute('width', `${innerWidth}`);
// spaceTrail.setAttribute('height', `${document.body.scrollHeight}`);

const spaceship = document.querySelector("#spaceship")
const path = document.querySelector("#path path")//
const resizedPath = svgpath(path.getAttribute("d")).scale(1) // , document.body.scrollHeight / spaceTrail.clientHeight).toString();
path.setAttribute('d', resizedPath);
const paragraphs = document.querySelectorAll('p')


// const observer = new IntersectionObserver(entries => {
//   entries.forEach((entry, index) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show')
//       entry.target.style.transform = "translateX(0)"
//     }
//   })
// })

// paragraphs.forEach(para => {
//   observer.observe(para)
// })

spaceship.style.offsetPath =  `path("${resizedPath}")`; 

$(window).on('scroll', function(){
  const s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

  // console.log(s);
  const scrollPercent = (s / (d - c)) * 100;
  
  console.clear();
  console.log(scrollPercent);

  if (scrollPercent >= 15) {
    spaceship.style.setProperty("--offset-distance", (scrollPercent - 15) + "%");
  }

  
});