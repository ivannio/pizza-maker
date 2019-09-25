import utilities from "../helpers/utilities.js";

const cheesePrinter = () => {
    let stringToPrint = '';
    stringToPrint += "cheese";
    utilities.printToDom(stringToPrint, "cheese-counter");
}

export default { cheesePrinter };