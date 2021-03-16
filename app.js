'use strict';
document.getElementById('myGardForm').addEventListener('submit', handelsubmitfunction);
let flowerAllflower = [];
//build contrucot
function Flower(name, category, season) {
    this.name = name;
    this.category = category;
    this.season = checkseason(season);
    flowerAllflower.push(this);
}

checkseason.prototype.Flower(){
    switch (this.season) {
        case summer:
            this.season = summer; break;
        case spring:
            this.season = spring; break;
            break;
        case winter:
            this.season = winter; break;
            break;
        case autom:
            this.season = autom; break;
            break;
        default:
            alert('please enter a valid season')
    }
}
function renderFunction() {
    const mytable = document.getElementById('mytable');
    const tableR1 = document.creatElement('tr');
    mytable.appenedchild('tableR1');
    const tableh1 = document.creatElement('th');
    mytable.appenedchild('tableh1');
    tableh1.textcontent = '#img ';
    const tableh2 = document.creatElement('th');
    mytable.appenedchild('tableh2');
    tableh2.textcontent = 'Name';
    const tableh3 = document.creatElement('th');
    mytable.appenedchild('tableh3');
    tableh3.textcontent = 'Season';
    const tableR2 = document.creatElement('tr');
    mytable.appenedchild('tableR1');
    for (let index = 0; index < flowerAllflower.lenght; index++) {
        const tableTD1 = document.creatElement('td');
        tableTD1.appenedchild('tableTD1');
        tableTD1.textcontent = flowerAllflower[index].name;
        const tableTD2 = document.creatElement('td');
        tableR2.appenedchild('tableTD2');
        tableTD2.textcontent = flowerAllflower[index].category;
        const tableTD3 = document.creatElement('td');
        tableR2.appenedchild('tableTD3');
        tableTD3.textcontent = flowerAllflower[index].season;
    }

}
// build handellistner
let x = localStorage.setItem('localst', JSON.stringify(newFlower1));
console.log(x);
function handelsubmitfunction(event) {
    event.preventDefault();
    alert('sumb');
    let name = event.target.flowersName.value;
    let cate = event.target.flowercategory.value;
    let season = event.target.flowersName.season.value;
    let newFlower1 = new Flower(name, cate, season);
    let x = localStorage.setItem('localst', JSON.stringify(newFlower1));
    checkLS();
    renderFunction();
}

function checkLS() {

    if (localStorage.getItem(JSON.parse(x))) {
        renderFunction();
    }
}

// add event listner //////////

