window.onload=function(){

        $('#onload').fadeOut();
        $('body').removeClass('hidden');

}
$(function () {
    var selectedClass = "";
    $(".filter").click(function () {
      selectedClass = $(this).attr("data-rel");
      $("#gallery").fadeTo(100, 0.1);
      $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
      setTimeout(function () {
        $("." + selectedClass).fadeIn().addClass('animation');
        $("#gallery").fadeTo(300, 1);
      }, 300);
    });
  });

var conocenos = new SmoothScroll('a[href="#conocenos"]', {

        speed: 200,
        speedAsDuration: true,
        offset:100       
});

var proyecto = new SmoothScroll('a[href="#proyecto"]', {

        speed: 200,
        speedAsDuration: true,
        offset:70        
});
var ubicacion = new SmoothScroll('a[href="#ubicacion"]', {

        speed: 200,
        speedAsDuration: true,
        offset:60       
});

        
var desarrollo = new SmoothScroll('a[href="#desarrollo"]', {

speed: 200,
speedAsDuration: true,
offset:75

});
var sales = new SmoothScroll('a[href="#sales"]', {

        speed: 200,
        speedAsDuration: true,
        offset:30      
});
var contactenos1 = new SmoothScroll('a[href="#contactenos1"]', {

        speed: 200,
        speedAsDuration: true,
        offset:80    
});
var contactenos = new SmoothScroll('a[href="#contactenos"]', {

        speed: 200,
        speedAsDuration: true,
        offset:80    
});
var faqs = new SmoothScroll('a[href="#faqs"]', {

        speed: 200,
        speedAsDuration: true,
        offset:70    
});

$('.navbar-nav>li>a').on('click', function(){
$('.navbar-collapse').collapse('hide');
});
$('#play').on('click', function (e) {
        e.preventDefault();
        $("#player")[0].src += "?autoplay=1";
        $('#player').show();
        $('#video-cover').hide();
      })
      $('#modal1').on('hidden.bs.modal', function (e) {
        $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
      });


