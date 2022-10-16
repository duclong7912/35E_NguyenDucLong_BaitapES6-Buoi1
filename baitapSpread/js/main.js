
let string = document.querySelector(".heading").innerHTML;
let arrString = [...string];
let content = ``;
for (let i = 0; i < arrString.length; i++){
    content += `
        <span>${arrString[i]}</span>
    `

};
document.querySelector(".heading").innerHTML = content;