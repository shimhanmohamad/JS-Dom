var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addbutton = document.getElementById("plus")


function adding(){
    popupbox.style.display = "block"
    popupoverlay.style.display = "block"
}

var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
})


//select contentdetail,add-book,book-title,book-author,book-description

var contentdetail = document.querySelector(".contentdetail")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var bookdescription = document.getElementById("book-description")

addbook.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${booktitle.value}</h2>
        <h4>${bookauthor.value}</h4>
        <p>${bookdescription.value}</p>
        <button class="one" onclick="deletebook(event)">Delete</button>`;  
    contentdetail.append(div);
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
});

var one = document.getElementById("one")

function deletebook(event){
    event.target.parentElement.remove()
}

