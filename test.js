const allContainers = document.querySelectorAll('.d-flex .job-card');

const jobbody = document.querySelectorAll('div.job-body');

const titles = document.querySelectorAll('div.pe-4 > a.job-link');
const link = document.querySelectorAll('div.maxh-2-f');

for (const [index,job] of jobbody.entries()) {
    const buttonDiv = document.createElement('div');
    const createCompanyButton = document.createElement('button');

    const createRolesDrop = document.createElement('div');

    const company = job.children[1].children[0].children[0].children[0].children[1].children[0].children[0].textContent;

    buttonDiv.style.display = "flex";
    buttonDiv.style.flexDirection = "column";
    buttonDiv.style.padding = "10px"
    buttonDiv.style.position = "absolute";
    buttonDiv.style.alignItems = "center";
    buttonDiv.style.height = "100%";
    buttonDiv.style.left = "70%";


    createCompanyButton.textContent = company;
    createRolesDrop.style.display = "flex";
    createRolesDrop.style.flexDirection = "column";
    createRolesDrop.style.marginTop = "10px";
    createRolesDrop.style.gap = "5px"
    createRolesDrop.style.overflow = "scroll";
    createRolesDrop.style.borderRadius = "10px"
    createRolesDrop.style.backgroundColor = "rgba(0,0,0, 0.6)";
    createRolesDrop.style.padding = "20px";
    createRolesDrop.style.zIndex = 1000;


    createCompanyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(company).then((clipText) => console.log(clipText))
    })

    allContainers[index].appendChild(buttonDiv);
    buttonDiv.appendChild(createCompanyButton);
    buttonDiv.appendChild(createRolesDrop);

    const roleDiv = link[index];  
    console.log(roleDiv)  
    for (const role of roleDiv.children) {
        let roleTextValue = role.textContent
        const createroleButton = document.createElement('button');

            createroleButton.textContent = roleTextValue;

            createroleButton.addEventListener('click', () => {
                navigator.clipboard.writeText(roleTextValue);
            })
        
        createRolesDrop.appendChild(createroleButton);
        
    }
}





