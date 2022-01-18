<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
posicionarMenu();
 
$(window).scroll(function() {    
    posicionarMenu();
});
 
function posicionarMenu() {
    var altura_del_header = $('.header').outerHeight(true);
    var altura_del_menu = $('.menu').outerHeight(true);
 
    if ($(window).scrollTop() >= altura_del_header){
        $('.menu').addClass('fixed');
        $('.wrapper').css('margin-top', (altura_del_menu) + 'px');
    } else {
        $('.menu').removeClass('fixed');
        $('.wrapper').css('margin-top', '0');
    }
}
 
</script>