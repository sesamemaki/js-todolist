
//newElement() ve addItem() ile listeye ekleme yapma:

function newElement() {
    let li = document.createElement("li");
    let taskValue = document.getElementById("task").value;
    let t = document.createTextNode(taskValue);
    li.appendChild(t);
    alert("Eklendi.");

    if (taskValue === "") {
        alert("Listeye Boş Ekleme Yapamazsınız");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("task").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "remove";
    span.appendChild(txt);
    li.appendChild(span);

}



//listeden görev silme ve silme işlemi için x butonu oluşturma

let liRemove = document.getElementsByTagName("li");
for (let i = 0; i < liRemove.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "remove";
    span.appendChild(txt);
    liRemove[i].appendChild(span)
}

let remove = document.getElementsByClassName("remove");
for (let i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}


//tamamlanan görevlere check işareti ekleme

let list = document.querySelector("ul");
list.addEventListener("click", function (event) {
    if (event.target.tagName === "li") {
        event.target.classList.toggle("checked");
    }
}, false);