let arr=[{
    q:"what is html",
    a:"programming language",
    b:"database language",
    c:"no sql language",
    d:"markup language",
    corr:"markup language"
},
{
    q:"what is the full form of DBMS",
    a:"database object Model",
    b:"Database Management System",
    c:"Networking Language",
    d:"third class language",
    corr:"Database Management System"
},
{
    q:"what is javascript",
    a:"machine level language",
    b:"javascript",
    c:"client side language",
    d:"first language",
    corr:"client size language"
}]

let formula=document.querySelector("#formula")

function showQuestions(arr){
    formula.innerHTML=`<h3>Q1) ${arr.q} </h3>
            <br>
            <input type="radio" for="first" name="first" value="${arr.a}">
            <label for="first">${arr.a}</label><br>
            
            <input type="radio" for="second" name="first" value="${arr.b}">
            <label for="second">${arr.b}</label><br>
            <input type="radio" for="third" name="first" value="${arr.c}">
            <label for="third">${arr.c}</label><br>
            <input type="radio" for="third" name="first" value="${arr.d}">
            <label for="third">${arr.d}</label><br>
            <input id="sub" type="submit" value="submit">`;
}

document.querySelector("#fromula").addEventListener("submit",function(){

})