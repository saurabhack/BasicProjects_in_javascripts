let arr=[]
function studentDetails(name,year,course){
    this.name=name;
    this.year=year;
    this.course=course;
}
let firstStudent= new studentDetails("saurabh vikas kamane",2023,"computer science")
arr.push(firstStudent)
let second=new studentDetails("ankita vikas kamane","data science",2021)
arr.push(second);
let third=new studentDetails("sameer kamane","management of information",2023)
arr.push(third);
console.log(arr);
for(let i=0;i<arr.length;i++){
    if(arr[i].name=="sameer kamane"){
        arr.splice(i,1)
    }
}

//logic for searching
for(let i=0;i<arr.length;i++){
    if(arr[i].name=="saurabh vikas kamane"){
        console.log("name:"+arr[i].name+"course"+arr[i].course+"year"+arr[i].year)
    }
}