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