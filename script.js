let currentLocation = 'firstPage';
let autoScrolling = false;

let [firstHeight,secondHeight,thirdHeight] = [$('#firstPage').offset().top,
 $('#secondPage').offset().top,
 $('#thirdPage').offset().top];

$(document).scroll(e => {
    let scrolled = $(window).scrollTop();
    // Если user поскроллил
    if (!autoScrolling) {
    	if (scrolled > 1 && currentLocation == 'firstPage') {
            scrollPage(secondHeight, 'secondPage');
        } else if (scrolled > secondHeight + 1 && currentLocation == 'secondPage') {
            scrollPage(thirdHeight, 'thirdPage');
        } else if (scrolled < thirdHeight - 1 && currentLocation == 'thirdPage') {
            scrollPage(secondHeight, 'secondPage');
        } else if (scrolled < secondHeight - 1 && currentLocation == 'secondPage') {
            scrollPage(firstHeight, 'firstPage');
        }
    }

    function scrollPage(nextHeight, page){
      currentLocation = page; autoScrolling = true;
      $('body,html').animate({scrollTop:nextHeight}, 500, () => {
          autoScrolling = false;
      });
    }
})

$(document).ready(function() {
	$('.nav__button').click(function(event){
		$('.nav__button, .nav_background, .svg1, .svg2, .nav__item_3, .nav__item_1, .rect2, body').toggleClass('active')
	});
    
});


