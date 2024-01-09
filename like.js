var post = document.querySelector("#post");
var like = document.querySelector("i");

post.addEventListener("dblclick", function(){
    like.style.transform = "translate(-50%,-50%) scale(0.8)"
    like.style.opacity = "1"

    setTimeout(() => {
        like.style.transform = "translate(-50%,-50%) scale(0)"
        like.style.opacity = "0"
    }, 800);

})