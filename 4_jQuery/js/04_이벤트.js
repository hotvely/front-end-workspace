// 1. 이벤트 연결
// 1) on, off
// $('#area1').on('mouseenter', function(event){
//     // 마우스가 올라갔을 때
//     // 배경색상 : beige, 텍스트 : 마우스가 올라감
//     $(event.target).text('마우스가 올라감').css('background-color', 'beige');
// });

// mouseleave 함수
// 배경색상 : hotpink, 텍스트 : 마우스가 내려감
// $('#area1').on('mouseleave', function(event){
//     // 마우스가 올라갔을 때
//     // 배경색상 : beige, 텍스트 : 마우스가 올라감
//     $(event.target).text('마우스가 내려감').css('background-color','hotpink');
// });

// $('#area1').on('mouseenter mouseleave', function(event){
//     // console.log(event.type);
//     if(event.type === 'mouseenter'){
//         $(event.target).text('마우스 올라감').css('background-color', 'beige');
//     }
//     else if(event.type === 'mouseleave'){
//         $(event.target).text('마우스가 내려감').css('background-color','hotpink');
//     }
   
// });

// $('#area1').on('click', function(event){
//     // 배경색은 white, 텍스트 '';
//     $(event.target).text('').css('background-color','white').off('mouseenter mouseleave');
// });

$('#area1').on({
    mouseenter:function(event){$(event.target).text('마우스 올라감').css('background-color', 'beige');},
    mouseleave:function(event){$(event.target).text('마우스가 내려감').css('background-color','hotpink');},
    click:function(event){$(event.target).text('').css('background-color','white').off('mouseenter mouseleave');}
});

// 2) one
$('#area2').one('click', function(){
    alert('실행!');
}); //데이터 중복 전송같은거..? 막을 때 간혹 사용함

// 2. 키보드 이벤트
// 1) keydown, keypress, keyup
// keydown : 키보드가 눌려질 때
// $('#textarea1').keydown(function(e){
//     console.log(`keydown / e.key: ${e.key}, e.keyCode : ${e.keyCode}`);
// });
// // keypress : 글자가 입력될 때
// $('#textarea1').keypress(function(e){
//     console.log(`keypress / e.key: ${e.key}, e.keyCode : ${e.keyCode}`);
// });
// // keyup : 글자가 입력될 때
// $('#textarea1').keyup(function(e){
//     console.log(`keyup / e.key: ${e.key}, e.keyCode : ${e.keyCode}`);
// });

$('#textarea1').on({
    keydown:function(e){ console.log(`keydown / e.key: ${e.key}, e.keyCode : ${e.keyCode}`);},
    keypress:function(e){console.log(`keypress / e.key: ${e.key}, e.keyCode : ${e.keyCode}`);},
    keyup:function(e){console.log(`keyup / e.key: ${e.key}, e.keyCode : ${e.keyCode}`);}
});

// 2) 글자 수 세기
// substr


// console.log('hello~'.substring(0,50));

$('#textarea2').keyup(function(e){
    const currLength = $(e.target).val().length;
    const maxLength = parseInt($('#maxLength').text());

    // console.log(typeof parseInt(maxLength));

    if(currLength > maxLength)
    {
        // 글자수 제한 ! substring!
        $(e.target).val(($(e.target).val()).substring(0,50));
    }
    else
    { 
        //counter!!
        $('#counter').text(currLength);
    }
       
});
