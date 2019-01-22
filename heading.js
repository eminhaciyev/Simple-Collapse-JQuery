$(function(){
    $('.heading').click(function(){
        $('.underContent').slideUp();
        $(this).next().slideToggle();
    })
})