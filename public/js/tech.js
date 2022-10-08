
const techs = [{
    title: "JQuery Clone",
    description: "JavaScript",
    background: "black"
},{
    title: "WebGL Renderer",
    description: "JavaScript",
    background: "black"
}]


document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < techs.length; i++) {
        document.getElementById("tech_folder").innerHTML = document.getElementById("tech_folder").innerHTML + `
        <div class="tech">
            <div>
                <h2>${techs[i].title}</h2>
                <p>${techs[i].description}</p>
            </div>
        </div>
        `
    }
})