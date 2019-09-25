import utilities from "../helpers/utilities.js";

const cheeses = [
    {id:"cheese1", name: "Swiss", price: 50},
    {id:"cheese2", name: "American", price: 40},
    {id:"cheese3", name: "Pepper Jack", price: 50},
    {id:"cheese4", name: "Gorgonzola", price: 60},
    {id:"cheese5", name: "Goat", price: 70},
    {id:"cheese6", name: "Smoked Gouda", price: 80},
    {id:"cheese7", name: "Bleu", price: 60},
    {id:"cheese8", name: "Mozzarella", price: 50},
    {id:"cheese9", name: "Colby Jack", price: 40},
    {id:"cheese10", name: "Ricotta", price: 70},
    {id:"cheese11", name: "Parmesan", price: 50}
];

const getSelectedCheeses = () => {
    let selectedCheeses = [];
    const cheeseCheckboxes = document.getElementsByClassName("cheese");
    for (let i = 0; i < cheeseCheckboxes.length; i++) {
        for (let j = 0; j < cheeses.length; j++) {
            if (cheeseCheckboxes[i].checked && cheeseCheckboxes[i].id === cheeses[j].id) {
                selectedCheeses.push(cheeses[j]);
            }
          }
        }
    return selectedCheeses;
};

const cheesePrinter = () => {
    let stringToPrint = '';
    for (let i = 0; i < cheeses.length; i++) {
        stringToPrint += `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input cheese" id="${cheeses[i].id}">
        <label class="form-check-label" for="exampleCheck1">${cheeses[i].name}</label>
      </div>`;
    }    
    utilities.printToDom(stringToPrint, "cheese-counter");
};


export default { cheesePrinter, getSelectedCheeses };