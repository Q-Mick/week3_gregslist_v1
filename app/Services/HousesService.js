import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { saveState } from "../Utils/Store.js";


class CarsService{

  createCar(formData) {
    debugger
    // NOTE instantiate my House class, and make a new 'House' out of my formData object
    let newHouse = new House(formData)
    console.log('newHouse', newHouse);
    appState.houses.push(newHouse)
 
    console.log(appState.cars);
    appState.emit('house')
}
}