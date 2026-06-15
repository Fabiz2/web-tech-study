//alert("Pop-up")
const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");

button.addEventListener("click", function(event){
    popup.classList.add("d-block")
});

popup.addEventListener("click", function(event){
    const classOfClickElement = event.target.classList[0];
    const classNameListArray = ["popup-close", "popup-link"]
    console.log(classNameListArray.includes(classOfClickElement))

    if(classNameListArray.includes(classOfClickElement)){
        popup.classList.remove("d-block")
    }
})