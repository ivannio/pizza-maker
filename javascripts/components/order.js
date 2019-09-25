import utilities from "../helpers/utilities.js";
import cheese from "../components/cheese.js";



const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses();
    console.log(selectedCheeses);
    let domString = '<h2>';
        for (let i = 0; i < selectedCheeses.length; i++) {
            domString += `${selectedCheeses[i].name}`;
        }
    domString += `</h2>`;
    utilities.printToDom(domString, "final-order");    
}

const printOrderButton = () => {
    let stringToPrint = '';
    stringToPrint = `<button id="order-button" class="btn btn-secondary">Make Pizza</button>`
    utilities.printToDom(stringToPrint, "final-order");
    document.getElementById("order-button").addEventListener('click', createOrderEvent);
};

export default { printOrderButton };