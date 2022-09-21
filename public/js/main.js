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
