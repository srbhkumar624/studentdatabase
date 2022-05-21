let arr=JSON.parse(localStorage.getItem("student_data")) || [];
console.log(arr);
function student(n,c,b,u,i){
    this.Name=n
    this.Course=c
    this.Batch=b
    this.Unit=u
    this.Image=i
}
function studentDetails(){
  event.preventDefault();
    let form=document.getElementById("student");
    let name=form.Name.value;
    let course=form.Course.value;
    let batch=form.Batch.value;
    let unit=form.Unit.value;
    let image=form.Image.value;
    let da=new student(name,course,batch,unit,image);
    console.log(da);
    arr.push(da);
    localStorage.setItem("student_data",JSON.stringify(arr));
}

let x=arr.length;
document.getElementById("show_number").innerText=x;
document.getElementById("submit").addEventListener("click",function(){
  showItem();
})
function showItem(){
  window.location.href="details.html"
}