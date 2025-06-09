console.log("services.js loaded from github :)")


/*

<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/prism.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.0/mixitup.min.js"></script>
<script src="https://dl.dropboxusercontent.com/s/ykc6xhx53vrazy3/mixitup-multifilter.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdn.shopify.com/s/files/1/0771/2161/t/3/assets/jPages.min.js?10688064064350896456"></script>

<script>
// Filtering....
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
     perPage: 16,
     startPage: 1,
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
      //effects: 'fade translateZ(-100px)',
      enable: false
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