// $(document).on('scroll', (event) => {
//   console.log('hi');
//   const pos = getVerticalScrollPercentage(document.body)
//   document.body.innerHTML = "<span>" + Math.round(pos) + "%<span>"
//   // const offset = this.offset;
//   // console.log((offset.top + $(this).outerHeight(true)))
// });

$(window).on('scroll', function(){
  const s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

  var scrollPercent = (s / (d - c)) * 100;
  
  console.clear();
  console.log(scrollPercent);
})