const page_1 =document.querySelector('#page-1')
const page_2 =document.querySelector('#page-2')
const page_3 =document.querySelector('#page-3')




const title =document.querySelector('h3')

const next=document.querySelector('.next')

next.addEventListener('click', gotoSEcond)

function gotoSEcond(e){
    e.preventDefault();
    

    page_1.style.display='none';
    page_2.style.display='contents'
}


const submit=document.querySelector('.submit')

submit.addEventListener('click', gotoThird)

function gotoThird(e){
    e.preventDefault();
    page_2.style.display='none';
    page_3.style.display='contents'
}

//answer section
const qno_1 =document.querySelector('#qno-1')
const qno_2 =document.querySelector('#qno-2')
const qno_3 =document.querySelector('#qno-3')

const paste_1=document.querySelector('#paste-1')
const paste_2=document.querySelector('#paste-2')
const paste_3=document.querySelector('#paste-3')

qno_1.addEventListener('paste', pasteitem1)


function pasteitem1(e){
    paste_1.innerText ='You pasted text!'
    paste_1.style.color='red';

}
qno_2.addEventListener('paste', pasteitem2)


function pasteitem2(e){
    paste_2.innerText ='You pasted text!'
    paste_2.style.color='red';

}
qno_3.addEventListener('paste', pasteitem3)


function pasteitem3(e){
    paste_3.innerText ='You pasted text!'
    paste_3.style.color='red';

}
 

