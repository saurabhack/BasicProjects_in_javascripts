let arr=JSON.parse(localStorage.array)
let details=document.getElementById("studentDetails")
console.log(arr);
document.getElementById("search").addEventListener("submit",function(e){
e.preventDefault();
  let val=document.getElementById("searchInput");
  let data=val.value;
  for(let i=0;i<arr.length;i++){
    if(arr[i].name==data){
        let d=document.createElement("div")
        d.className="card";
        d.innerHTML=`<div class="card-body">
              <h5 class="card-title">${arr[i].name}</h5>
              <p class="card-text"><strong>Age:</strong> ${arr[i].year}</p>
              <p class="card-text"><strong>Major:</strong> ${arr[i].course}</p>
            </div>`
        details.appendChild(d);
    }
  }
  val.value=""
})