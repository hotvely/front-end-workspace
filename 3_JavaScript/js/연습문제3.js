const btn_click = document.querySelector('.btn.click');
const btn_reStart = document.querySelector('.btn.restart');

const imglist = document.querySelectorAll('.main-image img');

let main_result = document.querySelector('.main-result');

const span = document.querySelector('.click span');

let isEnd = false;
let count = 0;

function clickHandler()
{   
    let rand;   
   
    // if(isEnd == true)
    // {
    //     return;
    // }
    
    count++;
    span.innerHTML = count;

    for(let i = 0; i<imglist.length; i++)
    {
        //console.log("포문 들어옴");
        rand = Math.floor(Math.random()*3);
        src = `../resources/spy${rand+1}.jpg`;
        // if(rand == 0)
        // {
        //     src = `../resources/spy${rand+1}.jpg`;
        // }
        // else if(rand == 1)
        // {
        //     src = "../resources/spy${rand}.jpg";
        // }
        // else
        // {
        //     src = "../resources/spy3.jpg";
        // }
        imglist[i].src = src;        
    }

    if(resultHandler() == true)
    {        
        main_result.innerHTML = count + "번 만에 게임을 통과했습니다. 재시작 하려면 restart 버튼을 누르세요.";
        // boolean 값으로 제어 해도 되고 setAttribute 속성으로 disabled 설정해서 클릭 제어 해도 됨!
        btn_click.setAttribute('disabled', 'disabled');
        count = 0;
    }
}

function resultHandler()
{
 
    for(let i = 0; i<imglist.length -1; i++)
    {
        if(imglist[i].src != imglist[i+1].src)
        {
            return false;
        }
    }
    isEnd = true;
    return isEnd;
}

function restartHandler()
{
    isEnd = false;

    main_result.innerHTML = " ";
    span.innerHTML = " ";

    // 아래 두개 방법이 클릭 제어 하는 방법으로.
    // 1. bool변수를 이용해서 제어 하거나,
    // 2. setAttribute로 disabled 속성을 줬던 부분을 제거해서 클릭 제어해도 됨.
    // btn_click.innerHTML = "Click";
    btn_click.removeAttribute('disabled');
}

btn_click.addEventListener('click', clickHandler);
btn_reStart.addEventListener('click', restartHandler);