console.log("landing-page.js loaded from github :)")

/*


<script src="https://cdn.finsweet.com/files/cmslibrary-v1.7.js"></script>

(function() {
	// create a new Library instance and store it in a variable called "projectsGrid"
	var projectsGrid = new FsLibrary('.sas-list')
  
	// run loadmore on our instance
  projectsGrid.loadmore({
		button: ".load-more-button",
    loadAll: false,
    resetIx: true,
		animation: {
			enable: true,
			duration: 500,
			easing: 'ease-out',
			effects: 'fade translate(0px,20px)'
			}
	})
})();


<script src="https://newjersey.github.io/mixitup/dist/mixitup.min.js"></script>
<script src="https://newjersey.github.io/mixitup-multifilter/dist/mixitup-multifilter.min.js"></script>
<script src="https://cdn.shopify.com/s/files/1/0771/2161/t/3/assets/jPages.min.js?10688064064350896456"></script>


// Filtering.... https://www.bostoen.be/assets/bower_components/mixitup-multifilter/dist/mixitup-multifilter.js
//https://www.bostoen.be/assets/bower_components/mixitup-multifilter/demos/mixitup.min.js
var conv = function (str) {
  if (!str) {
    str = 'empty';
  }  return str.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '')
    .replace(/ /g, "-")
    .toLowerCase()
    .trim();
};

var catArray = document.querySelectorAll('.w-dyn-item .txtclass');
  catArray.forEach( function(elem) {
    var text = elem.innerText || elem.innerContent;
    var className = conv(text);
    elem.closest(".mix").classList.add(className);
  });
$(document).ready(function(){


var pagination = $('.pagination');

function setPagination(){
	 pagination.jPages({
     containerID: 'sas-list',
     perPage: 4,
     startPage: 1,
     itemsPerPage: 16,
     startRange: 1,
     midRange: 3,
     endRange: 1,
     first: false,
     last: false,
     previous: 'PREVIOUS',
     next: 'NEXT'
   });
}

function destroyPagination() {
  pagination.jPages('destroy');
};
  var containerEl = document.querySelector('.sas-list');
  //mixitup(containerEl);
  var mixer = mixitup(containerEl, {
    multifilter: {
      enable: true
    },
    animation: {
      effects: 'fade translateZ(-100px)'
    },
    callbacks: {
    onMixStart: function(state,futureState ){
      destroyPagination();
    },
		onMixEnd: function(state, futureState){
			//console.log('mix End');
      setPagination();
		}
	}
  });

  setTimeout(()=>{
    setPagination();
  });
})
  



$(".pricing-switch-tab .pricing-tab-link").click(function(){
	$(".pricing-switch-tab .pricing-tab-link").removeClass('active');
	$(this).toggleClass('active');
});

// Append type item in platform list
$('.sas-item').each(function(){
    var plarform = $(this).find( "#platform-list")
    var type = $(this).find("#type-item")
    $(plarform).append( $(type) );
})

*/