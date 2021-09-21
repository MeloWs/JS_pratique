/*const root = document.querySelector('#root');
const menu = document.createElement('ul');
root.appendChild(menu);
const menuLink = ['Home', 'articles', 'contact']
menuLink.forEach((menuLink, index) => {
    const list = document.createElement('li');
    const element = document.createElement('a');
    element.href = "#";
    element.textContent = typeof menuLink === 'string' ? menuLink : index;
    menu.appendChild(list).appendChild(element);
})
const listStyle = document.getElementsByTagName("a");
listStyle[0].style.backgroundColor = "green";
listStyle[1].style.backgroundColor = "red";
listStyle[2].style.backgroundColor = "yellow";*/

const root =  document.querySelector('#root')
const title = document.createElement('h1') // create H1
title.textContent = 'List 1'; 
root.appendChild(title)

const newLi = (ulObject, ...liOptions) => {
    const docLi = document.createElement("li")    
    liOptions.forEach(elem => {
        docLi.setAttribute(elem[0], elem[1])
    })

    ulObject.appendChild(docLi)
}

const newLiA = (liId, text, ...aOptions) => {
    const liObject = document.querySelector("#"+liId)
    const docA = document.createElement("a")
    aOptions.forEach(elem => {
        docA.setAttribute(elem[0], elem[1])
    })
    docA.textContent = text
    liObject.appendChild(docA)
}

const docUl = document.createElement("ul")
docUl.id = "menuv1"
docUl.style.width = '200px'

root.appendChild(docUl)

for (let i = 0 ; i < 5 ; i++) {
    const liId = docUl.id + "_li_" + i
    newLi(docUl, ["id", liId], ["style", "display:flex; margin:0.25rem 0;"])
    
    if(i % 2 != 0) {
        newLiA(liId, "link "+i, ["style", "color: #000000"], ['href', "#"])
    } else {
        newLiA(liId, "link "+i,["style", "background-color: #000000; color: #FFFFFF"], ['href', "#"])
    }
}

for (let i = 5 ; i < 10 ; i++) {
    const liId = docUl.id + "_li_" + i
    newLi(docUl, ["id", liId], ["style", "display:flex; margin:0.25rem 0;"])
    newLiA(
        liId, 
        "link "+i,
        ["style", `${i % 2 ? "background-color: #000000; color: #FFFFFF" : "color: black"}`], 
        ['href', "#"]
    ) 
}