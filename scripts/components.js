;(function(){
  $(document).ready(function(){
    $('.parallax').parallax()
  })


  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : true
    })
  })

  $('.parallax img').load(function(){
    $('.spinner').removeClass('on').addClass('off')
  })

})()
