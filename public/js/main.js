const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})


const tiles = document.querySelectorAll(".fade");

tiles.forEach((e) => {
    observer.observe(e); 
})

const medias = ["github_icon","instagram_icon","mail_icon","stackoverflow_icon","facebook_icon"]
const mediasEnd = ["https://github.com/NikolajRask","https://www.instagram.com/nikolajrask_/","https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhpltMMrDPkwqKCdjWDVGQTDXzFBrkNWrMcTMvrKbWsRhjGWKjPGbQGhJdtBzVGhjdznfl","https://stackoverflow.com/users/17184029/nikolaj-rask","https://www.facebook.com/nikolaj.andersen.73932/"]

for (let i = 0; i < medias.length; i++) {
    document.getElementById(medias[i]).addEventListener('click', () => {window.open(mediasEnd[i])})
}