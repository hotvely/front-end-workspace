console.log("!!");

let pgbar = document.querySelector('div.progress-bar');

let maxScrollValue = document.body.offsetHeight - this.window.innerHeight;
console.log(maxScrollValue);

function resizeHandler()
{
    //전체 스크롤 할 수 있는 범위 = 바디 전체 높이 - 윈도우 현재 창 높이
    maxScrollValue = document.body.offsetHeight - this.window.innerHeight;
}

window.addEventListener('scroll', function(){
    // console.log(this.window.pageYOffset);//deprecated...
    // console.log(window.scrollY);

    //  console.log("window.innerheight = "+window.innerHeight)
    //  console.log("body.offseth = " + this.document.body.offsetHeight);

    // console.log(pgbar);
    // console.log(this.document.body.offsetHeight - this.window.innerHeight);


    pgbar.style.width = window.scrollY / maxScrollValue * 100 + "%";

});

window.addEventListener('resize', resizeHandler);
resizeHandler();