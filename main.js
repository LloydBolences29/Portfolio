const button = document.querySelectorAll(".btn")
const wrapper = document.querySelector(".wrapper")
const body = document.querySelector("body")
const h1 = document.querySelectorAll("h1")
const home = document.querySelector("#home")
const glass = document.querySelector("#glass")



wrapper.addEventListener('change', e => {

    if (e.target.checked) {

        h1.forEach(h1 => {
            h1.classList.remove('night');
        h1.textContent = 'Hello';
        })
        body.classList.remove('nightmode')
        button.forEach(button => {
            button.classList.remove('btnnightmode');
            console.log('change');
        })
        home.removeAttribute("id");
        home.setAttribute("id", "home");
        glass.removeAttribute("id");
        glass.setAttribute("id", "glass")


    } else {
        h1.forEach(h =>{
            h.classList.add('night');
            h.textContent = 'NightMode on';
        })
        
        body.classList.add('nightmode');
        button.forEach(button => {
            button.classList.add('btnnightmode');
        })
        home.removeAttribute("id")
        home.setAttribute("id","nighthome");
        glass.removeAttribute("id")
        glass.setAttribute("id","glassnight");
    
    
    }

})
