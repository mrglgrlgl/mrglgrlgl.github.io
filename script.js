$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });
  function changeStyle(){
    var element = document.getElementById("extend");
    element.style.padding = "90vh";
}
function toggler(exId) {
  $("#" + exId).toggle();
}

function GFG_Fun() {
  toggler('extend');
}

            //FADE IN
            $(function(){  // $(document).ready shorthand
                $('.monster').fadeIn('slow');
              });
              
              $(document).ready(function() {
                  
                  /* Every time the window is scrolled ... */
                  $(window).scroll( function(){
                  
                      /* Check the location of each desired element */
                      $('.hideme').each( function(i){
                          
                          var bottom_of_object = $(this).position().top + $(this).outerHeight();
                          var bottom_of_window = $(window).scrollTop() + $(window).height();
                          
                          /* If the object is completely visible in the window, fade it it */
                          if( bottom_of_window > bottom_of_object ){
                              
                              $(this).animate({'opacity':'1'},1500);
                                  
                          }
                          
                      }); 
                  
                  });
                  
              });
              //FADE OUT
              React.useEffect(() => {
                const observer = new IntersectionObserver(entries => {
                  entries.forEach(entry => {
                    console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
                    setVisible(entry.isIntersecting);
                  });
                });
            
                const { current } = domRef;
                observer.observe(current);
            
                //                      👇 
                return () => observer.unobserve(current);
              }, []);
              
//
         