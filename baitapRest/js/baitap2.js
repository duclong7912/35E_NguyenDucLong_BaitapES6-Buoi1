let getEle = (id) => {
    return document.getElementById(id)
};


let mediumScore = (...scores) => {
    let result = 0;
    for(let i = 0; i < scores.length; i++) {
        result += scores[i] / scores.length;
    }

    return result.toFixed(2);
}

getEle("btnKhoi1").addEventListener("click", () => {
    let toan = getEle("inpToan").value * 1;
    let ly = getEle("inpLy").value * 1;
    let hoa = getEle("inpHoa").value * 1;

    let result = mediumScore(toan, ly, hoa);

    getEle("tbKhoi1").innerHTML = result;

});

getEle("btnKhoi2").addEventListener("click", () => {
    let van = getEle("inpVan").value * 1;
    let su = getEle("inpSu").value * 1;
    let dia = getEle("inpDia").value * 1;
    let eng = getEle("inpEnglish").value * 1;

    let result = mediumScore(van, su, dia, eng);

    getEle("tbKhoi2").innerHTML = result;

})