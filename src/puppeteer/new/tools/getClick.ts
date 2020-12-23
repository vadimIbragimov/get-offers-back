import { clickFunctionCheckbox } from "./getCheckbox";
import { clickFunction } from "./getKeywords";

(document.querySelector('.btn') as HTMLElement).onclick = getDataFromFront;
function getDataFromFront(){
    clickFunction();
    clickFunctionCheckbox();
}