$('#show').click(function(){
    $('#img').show(3000);
});
$('#hide').click(function(){
    $('#img').hide(3000, 'swing');
});
$('#toggle').click(function(){
    $('#img').toggle(10000, function(){console.log('그림토글~')});
});

$('#fadeIn').click(function(){
    $('#img').fadeIn(1000);
});
$('#fadeOut').click(function(){
    $('#img').fadeOut(2000);
});
$('#fadeToggle').click(function(){
    $('#img').fadeToggle(1500);
});
$('#fadeTo').click(function(){
    $('#img').fadeTo( 0.5);
});

$('#img').hover(
    function(e){
        $(this).fadeTo(1000, 0.5);
    },
    function(e){
        $(this).fadeTo(1000, 1);
    }
);

// $('.menu').hover(
//     function(e){
//         const content = $(e.target).next();
//         if(content.css('display') === 'none')
//         {
//             content.slideDown();
//         }
//     },
//     function(e){
//         const content = $(e.target).next();
//         if(content.css('display') !== 'none')
//         { 
//             content.slideUp();
//         }
        
//     }
// );
let target;
$('.menu').click(function(e){
    const content = $(e.target).next(); 
    
    if(target != null)
    {
        $(target).next().slideUp();
        target = null;
    }
    // if(content.css('display') === 'none')
    // {
    //     content.slideDown();
    // }
    // else
    // {
    //     content.slideUp();
    // }
    else
    {
        content.slideToggle();
        target = e.target;
    }

});