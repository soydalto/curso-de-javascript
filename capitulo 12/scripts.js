subjectsHTML = document.querySelector(".subjects");
const subjects =[
    {
        name: "Math",
        score: 10
    },
    {
        name: "Coding",
        score: 7
    },
    {
        name: "Javascript",
        score: 8
    },
    {
        name: "Go",
        score: 9
    },
    {
        name: "HTML",
        score: 10
    }
]

const getSubject = (id)=>{
    return new Promise((res,rej)=>{
        let subject = subjects[id];
        if (subject == undefined) {
            rej("The subject don't exist.");
        } else {
            setTimeout(() => {
                res(subject);
            }, Math.random()*800);
        }
    })
}

const showSubjects = async ()=>{
    let subject = [];
    for (let i = 0; i < subjects.length; i++) {
        subject[i] = await getSubject(i);
        let newHTML = `
        <div class="subject">
            ${subject[i].name}
        </div>
        <div class="score">
            ${subject[i].score}
        </div>`;
        subjectsHTML.innerHTML += newHTML;
    }
}

showSubjects();