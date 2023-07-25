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

// navigation click event
const nav = document.querySelector('nav');
let selectedHead = null;
function navHandler(event)
{
    if(event.target == nav)
        return;
    if(selectedHead != null)
    {
        selectedHead.style.backgroundColor = 'transparent';
        selectedHead.style.color = 'black';
        selectedHead = null;
    }

    if(event.target !== event.currTarget)
    {
        console.log(event.target);
        event.target.style.backgroundColor = 'black';
        event.target.style.color = 'white';
        selectedHead = event.target;
    }
 
}

nav.addEventListener('click', navHandler);

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

let currentSection = section1;

window.addEventListener('wheel', function(event){
    if(event.deltaY > 0)        // 휠 아래
    {
        if(currentSection == section1)
        {
            window.scrollTo({top: section2.offsetTop, behavior:'smooth'});
            currentSection = section2;
            console.log(section2.offsetTop);
        }
        else if(currentSection === section2)
        {
            window.scrollTo({top: section3.offsetTop, behavior:'smooth'});
            currentSection = section3;
        }
    }
    else        // 휠 위로
    {
        if(currentSection === section3)
        {
            window.scrollTo({top: section2.offsetTop, behavior:'smooth'});
            currentSection = section3;
        }
        else if( currentSection == section2)
        {
            window.scrollTo({top: section1.offsetTop, behavior:'smooth'});
            currentSection = section3;
        }
    }

});

// scroll - animation
// window.addEventListener('scroll'
// {
//     if(section2.getBoundingClientRect().top == 0)
//     {
//         section2.children[0].classList.add('text-animation');
//     }
//     else
//     {

//         section2.children[0]/class
//     }
// };
