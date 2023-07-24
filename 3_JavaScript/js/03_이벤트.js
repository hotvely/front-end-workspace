
// window.addEventListener('DOMContentLoaded', function()
// {
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// });


    const h1 = document.querySelector('h1');
    // console.log(h1);

    // h1.addEventListener('mouseenter', function(){h1.style.backgroundColor = 'skyblue';});


    // 모든 div태그를 배열 형식으로 가져 오고 싶다면..
    const div = document.querySelectorAll('div');
    for(let i = 0; i<div.length; i++)
    {
        console.log(div[i]);
    }
    // 특정 클래스의 div를 변수로 가져오고 싶으면..
    const div_container = document.querySelector('div.container');
    const div_testa = document.querySelector('div.testa');
    

    let currImg;
    function removeHandler(e)
    {   
        // console.log(e.target.alt);
        currImg = e.target;
       
        console.log(currImg);

        
        // currImg.remove(); <- 얘는 아이 메모리 상에서 지워버림 태그, 공간 모두 삭제됨
        // style.visibility = "hidden" <- 얘는 그냥 실제 이미지의 공간과 태그 둘 다 살아 남아있어서 메모리상에 존재하는(투명인상태..와 같은? 느낌?) 상황이 되고
        if(currImg != div_container)
            currImg.style.display = "none";
        //<- 얘는 태그만 남아 있는..?(메모리 공간상에만 남겨 놓은 상태로 디스플레이 상에서 이미지를 아예 지운 느낌?) 상황이 됨
        
    }
    div_container.addEventListener('click', removeHandler);

    // div_testa.addEventListener('click', removeHandler);
