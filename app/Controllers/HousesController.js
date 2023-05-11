import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
// import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses(){
  console.log('drawing houses');
  let houses = appState.houses
  console.log(houses);
let template = ''
// NOTE for each house in the houses draw a template
houses.forEach(house => template += house.CardTemplate)
console.log(template);
setHTML('houses', template)
}
function _drawCreateHouseButton() {
  console.log(House.CreateHouseButton);
  setHTML('createHouseButton', House.CreateHouseButton())
}

export class HousesController {
  constructor() {
    
      console.log('hello from the House Controller');
      _drawHouses()
      _drawCreateHouseButton()
  
  }

    getHouses(){
      _drawHouses()
    }

    getHouseForm() {
      console.log('get the House form');
      setHTML('modal-guts', House.HouseForm())
  }
    createHouse() {
      console.log('creating the House');
      // NOTE prevent the page from refreshing
      window.event.preventDefault()
      const formHTML = event.target
      console.log('this is the onsubmit event', formHTML);
      // NOTE getFormData grabs the inputs and the values and create a key:value pair
      // NOTE the inputs MUST have a 'name' attribute that matches whatever property you are trying to assign
      const formData = getFormData(formHTML)
      console.log('this is my formatted object from the form', formData);
      formData.creatorName = appState.userName
      housesService.createHouse(formData)
      // @ts-ignore
      // NOTE this line clears the form
      formHTML.reset()
      // NOTE this closes the modal
      // NOTE DO NOT IMPORT BOOTSTRAP OR THIS WILL NOT WORK
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance('#modal').hide()
  }
}