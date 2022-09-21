class Project {
    name;
    priority;
    members = []
    mainLanguage;
    color;

    constructor(name, priority, members, mainLanguage,color, options={}) {
        this.name = name;
        this.priority = priority;
        this.members = members;
        this.mainLanguage = mainLanguage;
        this.color = color;
    }
}

const projects = [{
    name: "Power Web Browser",
    priority: 5,
    members: [],
    mainLanguage: "ElectronJS",
    color: "#2152c4"
},
{
    name: "Power Web Browser",
    priority: 5,
    members: [],
    mainLanguage: "ElectronJS",
    color: "#c22c21"
},
{
    name: "Power Web Browser",
    priority: 5,
    members: [],
    mainLanguage: "ElectronJS",
    color: "#03a135"
}]

const projects_folder = document.querySelector('.projects_folder');

projects.forEach((project) => {
    var x = new Project(project.name,project.priority,project.members,project.mainLanguage,project.color)
    projects_folder.innerHTML = projects_folder.innerHTML + `
    <div class="project fade" style="border-top: 10px solid ${project.color}"></div>
    `
})