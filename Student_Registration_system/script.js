let parent=document.querySelector("#cartItems")
// document.querySelector("#studentForm").addEventListener('submit',addStudents);
document.getElementById("studentForm").addEventListener('submit',addStudents); 
function studentObj(name,course,year){
    this.name=name;
    this.course=course;
    this.year=year;
}
let arr=[];
function removeObject(data){
    for(let i=0;i<arr.length;i++){
        if(arr[i].name==data){
             arr.splice(i,1)
        }
    }
}
function addStudents(e){
    e.preventDefault();
    if(parent.children[0].className=="empty"){
        parent.children[0].remove();
    }
    let name=document.querySelector("#studentName")
    let course=document.querySelector("#courseName")
    let eyear=document.querySelector("#year")
    let sname=name.value
    let cname=course.value;
    let year=eyear.value;
    let student=new studentObj(sname,cname,year)
    arr.push(student)
    console.log(localStorage.setItem('array', JSON.stringify(arr)));
    console.log(arr)
    let firstDiv=document.createElement("div");
    firstDiv.className="cart-item"
    firstDiv.innerHTML=`<div class="cart-item-content">
                        <h5>${sname}</h5>
                        <p>Course: ${cname} </p>
                        <p>Year: ${year}</p>
                    </div>
                    <div class="cart-item-buttons">
                        <button class="btn btn-secondary btn-sm" onclick="updateItem(this)">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteItem(this)">Delete</button>
                    </div>`
    
    parent.appendChild(firstDiv)
    
    name.value=""
    course.value=""
    eyear.value=""
}
function deleteItem(e){
    let first=e.parentElement;
    let parents=first.parentElement;
    let parentNode=parents.parentElement;
    parents.remove();
    let data=parents.children[0];
    let datas=data.children[0].textContent;
    console.log(datas);
    removeObject(datas);
    if(parentNode.children.length<=0){
        let h3=document.createElement("h3")
        h3.classList.add("empty");
        h3.textContent="no any student registered in these year"
        parentNode.appendChild(h3);
    }
}
function updateItem(e){
    let first=e.parentElement;
    let second=first.parentElement;

    if(e.textContent=="Edit"){
        e.textContent="Done"
        let third=second.children[0];
    let stu_name=third.children[0].textContent;
    let stu_course=third.children[1].textContent;
    let stu_year=third.children[2].textContent;
    let first_in=document.createElement("input")
    first_in.type="text"
    first_in.className="form-control border border-secondary"
    first_in.value=stu_name;
    let second_in=document.createElement("input")
    second_in.type="text"
    second_in.className="form-control border border-secondary"
    second_in.value=stu_course;
    let third_in=document.createElement("input")
    third_in.type="text"
    third_in.className="form-control border border-secondary"
    third_in.value=stu_year
    third.replaceChild(first_in,third.children[0])
    third.replaceChild(second_in,third.children[1])
    third.replaceChild(third_in,third.children[2])
    }else{
        e.textContent="Edit"
        let ch=second.children[0];
        let stu_name=ch.children[0].value;
        let stu_course=ch.children[1].value;
        let stu_year=ch.children[2].value;

        let h5=document.createElement("h5")
        let p1=document.createElement("p")
        let p2=document.createElement("p")
        h5.textContent=stu_name;
        p1.textContent=stu_course;
        p2.textContent=stu_year;
        ch.replaceChild(h5,ch.children[0])
        ch.replaceChild(p1,ch.children[1])
        ch.replaceChild(p2,ch.children[2])
    }
    
}
function updateObject(name,course,year){
}

// localStorage.getItem('array')