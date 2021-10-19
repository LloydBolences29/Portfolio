const button = document.querySelectorAll("button")
const wrapper = document.querySelector(".wrapper")
const body = document.querySelector("body")
const h1 = document.querySelectorAll("h1")
const profile = document.querySelector("#profile")
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
        profile.removeAttribute("id");
        profile.setAttribute("id", "profile");
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
        profile.removeAttribute("id")
        profile.setAttribute("id","nightprofile");
        glass.removeAttribute("id")
        glass.setAttribute("id","glassnight");
    
    
    }

})
