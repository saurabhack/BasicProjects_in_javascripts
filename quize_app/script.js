let questionsSet = [
    {
        que: "which language is interpreted language",
        ans:[
            "java",
            "javascript",
            "go",
            "mongdb",
        ],
        currect:"javascript"            
    },
    {
        que: "which is client side language",
        ans:[
            "java",
        "javascript",
        "go",
        "mongdb"
        ],
        currect:"javascript"
    },
    {
        que: "which is the database framework",
        ans:[
            "java",
        "mysql",
        "mongoDb",
        "sql"
        ],
        currect:"mongoDb"
    }
]

let questions=document.querySelector("#question")
let answer=document.querySelector("#answer-buttons")
let buttonNext=document.querySelector("#next-btn")
let currentIndex=0
let score=0
console.log("hello world")
function start(){
    currentIndex=0
    score=0
    showQuestions()
}
var cans;
function showQuestions(){
    reset()
    let currentQuestion=currentIndex+1
    questions.innerHTML=currentQuestion+`,`+questionsSet[currentIndex].que
    let buttons=document.createElement('button')
    let arr=questionsSet[currentIndex].ans
    for(let i=0;i<arr.length;i++){
        let buttons=document.createElement('button')
        buttons.innerHTML=arr[i]
        buttons.classList="btn"
        answer.appendChild(buttons)
        buttons.setAttribute('onclick','evaluation(this)')
    }
    cans=currentIndex
    currentIndex=currentIndex+1
}

function evaluation(e){
    let btn=e
    btn.style.backgroundColor = 'green'
    btn.style.color='white'
    let res=btn.textContent
    console.log(e)
    if(res==questionsSet[cans].currect){
        score++;
    }
    buttonNext.style.display="block"
    buttonNext.addEventListener('click',nextPage)
}
function nextPage(e){
    if(currentIndex<questionsSet.length){
        reset()
        showQuestions()
    }else{
        result()
    }
}
function result(){
    reset()
    questions.innerHTML=`your score ${questionsSet.length} out of ${score}`
    buttonNext.style.display='none'

}

function reset(){
    while(answer.firstChild){
        answer.removeChild(answer.firstChild)
    }
}
start()
