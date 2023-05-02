// $(document).on('scroll', (event) => {
//   console.log('hi');
//   const pos = getVerticalScrollPercentage(document.body)
//   document.body.innerHTML = "<span>" + Math.round(pos) + "%<span>"
//   // const offset = this.offset;
//   // console.log((offset.top + $(this).outerHeight(true)))
// });

const spaceTrail = document.querySelector('#path svg');
spaceTrail.setAttribute('viewBox', `0 0 ${innerWidth} ${innerHeight}`);
spaceTrail.setAttribute('width', `${innerWidth}`);
spaceTrail.setAttribute('height', `${innerHeight}`);

// $(window).on('scroll', function(){
//   const s = $(window).scrollTop(),
//         d = $(document).height(),
//         c = $(window).height();

//   var scrollPercent = (s / (d - c)) * 100;
  
//   console.clear();
//   console.log(scrollPercent);
// })

const spaceship = document.querySelector("#spaceship")
const path = document.querySelector("#path path")
const paragraphs = document.querySelectorAll('p')


const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
      entry.target.style.transform = "translateX(0)"
    }
  })
})

paragraphs.forEach(para => {
  observer.observe(para)
})

spaceship.style.offsetPath =  `path("${path.getAttribute("d")}")`; 

window.onscroll = () => {
  const body = document.body;
  const parent = document.body.parentNode;
  const scrollAmount =
    ((body.scrollTop || parent.scrollTop) /
      (parent.scrollHeight - parent.clientHeight)) *
    100;

  spaceship.style.setProperty("--offset-distance", scrollAmount + "%");
};