let btns =document.querySelectorAll(".btn")
btns.forEach(function(btn){
btn.addEventListener("click",function(event){
    var themeColor=event.target.dataset.color
    document.documentElement.style.setProperty("--theme-color",themeColor)

})
})