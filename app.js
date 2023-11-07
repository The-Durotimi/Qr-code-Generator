const convertbtn = document.querySelector(".convert")


convertbtn.addEventListener("click", function(){
    let userInput = document.querySelector(".user-input")

    if(!userInput.value){
        userInput.classList.add('error')
        userInput.style.border ="2px solid red"
        setTimeout(()=>{
            userInput.classList.remove("error")
            userInput.style.border = "1px solid rgb(118, 71, 124)"
        }, 1000)
    }else{
        let finalInput = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput}`
        document.querySelector(".qr-img").src = finalInput
        document.querySelector(".output").classList.add('display')
        document.querySelector(".download-btn").style.display = "flex"
    }
})