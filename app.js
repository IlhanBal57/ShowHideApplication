const button = document.getElementById('btn')
const content = document.getElementById('content')

// At first we assign "Hide" value to button.
button.innerText = "Hide"

button.addEventListener('click' , function() {

    if(content.style.display ===""){
        content.style.display = "none"
     
// Button innerText should be "Show" because when the if block runs , our image will be hidden
        button.innerText = button.dataset.show
    }
    else{
        content.style.display = ""

        button.innerText = button.dataset.hide
    }
})