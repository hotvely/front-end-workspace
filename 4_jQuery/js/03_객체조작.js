// 1. Content 설정
// --- 1) html()
console.log($('#content1').html());

// #content2에 #content1의 내용을 대입?
$('#content2').html($('#content1').html());
// #content1의 a태그 속성 href에 https://naver.com 대입
$('#content1 a').attr('href', 'https://naver.com');
// #content2의 a태그 속성에도 href에 https://naver.com 대입
$('#content2 a').attr('href', 'https://naver.com');
$('#content2').find('a').text('검은사막 인벤').prop('href','https://black.inven.co.kr');

console.log($('.content').html());
// $('.content').html('zzzzzzzzzzzzzz');       //수정하면 전부다... 수정됨;;
$('.content').html(function(index, content){
    console.log(index, content);
    return `<h4>인덱스 : ${index}, 내용 : ${content}</h4>`
});


// --- 2) text()
console.log($('#content3').text());
$('#content4').text($('#content3').text());
$('#content4').text('<strong>Hello~~</strong>');
console.log($('.content2').text());
$('.content2').text(function(index, content){
    return `<h4>index : ${index}, content : ${content}</h4>`
});

//-----------------------------------------------
// 2. 요소 추가
// --- 1) 자바 스크립트와 제이쿼리
const p = document.createElement('p');
p.innerHTML ='자바 스크립트 추가';

// document.querySelector('#area1').appendChild(p);
// const p2 = $('<p>').text('제이쿼리 추가');
// $('#area1').append(p2);


// --- 2) 요소 추가 1
$('#add1').append('<span>B</span>');
$('#add2').prepend('<span>B</span>');
$('#add3').after('<span>B</span>');
$('#add4').before('<span>B</span>');

// --- 3) 요소 추가 2
$('<span>B</span>').appendTo('#add5');
$('<span>B</span>').prependTo('#add6');
$('<span>B</span>').insertAfter('#add7');
$('<span>B</span>').insertBefore('#add8');

//-----------------------------------------------
// 3. 요소 복제
$('#item1').hover(
    // (event) => {//mouseenter
    //     console.log(event.type);
    //     $(event.target).addClass('bg-hotpink');
    // },
    // (event) => {//mouseleave
    //     console.log(event.type);
    //     // bg-hotpink 제거
    //     $(event.target).removeClass('bg-hotpink');
    // }

    (event) => {
        //toggle 사용
        $(event.target).toggleClass('bg-hotpink');
    }
);

// 버튼 클릭 시 요소 복제
$('#btn1').click(function(){
    const item = $('#item1').clone(true);
    $('#clone-result').append(item);
});




$('#item2').hover(
    (event)=>{
        $(event.target).toggleClass('bg-hotpink');
    }
);
// 1) remove
// remove 클릭시 #item2를 제거한 후 #remove-result에 리턴받은 값 출력
$('#remove').click(function(){
    const result = $('#item2').remove();
    $('#remove-result').append(result);
});


// 2) detach
// detach 클릭시 #item2를 detach로 제거 후 #remove-result에 리턴받은 값 출력
$('#detach').click(function()
{
    const reuslt = $('#item2').detach();
    $('#remove-result').append(reuslt);
});

// 3) empty
// empty 클릭시 #remove-test를 비워버림
$('#empty').click(function(){
    $('#remove-test').empty();
});



//-------------------------------------------------
// 5. 배열
const array = [
    {name : '구글', link: 'https://google.com'},
    {name : '네이버', link: 'https://naver.com'},
    {name : '다음', link: 'https://daum.net'}
]

// 자바 스크립트
array.forEach(function(element, index, origin){
    console.log(element, index, origin);
});
$.each(array,function(index,element){console.log(index, element);});
$(array).each(function(index, element){console.log(index, element);});

// #each-test에 배열의 값들을 a링크로 href(link), content(name) 을 출력
let result = '';
$.each(array, function(index, element)
{
    // result += `<a href='${element.link}'>${element.name}</a><br>`
    // console.log(result);   
       
    $('#each-test').append(`<a href="${element.link}">${element.name}</a><br>`);
});
// $('#each-test').html(result);