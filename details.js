let details = JSON.parse(localStorage.getItem("student_data"));
    details.map(function(el,i){
        let button = document.createElement("button");
        button.setAttribute("id","button");
        button.innerText = "Remove Data";
        let box=document.createElement("div");
        let name = document.createElement("p");
        name.innerText = el.Name;
        let course = document.createElement("p");
        course.innerText = el.Course;
        let batch = document.createElement("p");
        batch.innerText = el.Batch;
        let unit=document.createElement("p")
        unit.innerText=el.Unit;
        let image = document.createElement("img");
        image.src = el.Image;
        box.append(image,name, course, batch,unit, button);
        document.getElementById("container").append(box);
        button.addEventListener("click",function() {
            removeData(el,i);
            location.reload();
        })
    })
    function removeData(el,i){
        details.splice(i, 1)
        localStorage.setItem("student_data", JSON.stringify(details));
    }
    
    