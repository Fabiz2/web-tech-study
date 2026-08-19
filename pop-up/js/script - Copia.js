const button = document.querySelector("button")
const popup = document.querySelector(".popup-wrapper")
const popupLink = document.querySelector(".popup-link")
const CorFundo = document.querySelector("body")
 
button.addEventListener("click", function(event) {
    popup.classList.add("d-block")
});
 
popup.addEventListener("click", function(event){
    const classOfClickElement = event.target.classList[0]
    const classNameListArray = ["popup-close", "popup-wrapper"]
 
    const isClassList = classOfClickElement === "popup-close" || classOfClickElement === "popup-wrapper"
 
    if(isClassList){
        popup.classList.remove("d-block")
    }
})
 
popupLink.addEventListener("click", function(event){
    CorFundo.classList.add("dark")
})