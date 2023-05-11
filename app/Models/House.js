import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class House {
    constructor(data) {
        this.id = data.id || generateId()
        this.creatorName = data.creatorName || 'Quentin'
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.seller = data.seller || "Test Seller"
    }

    static HouseForm() {
        return /*html*/ `<div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">List House</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <form onsubmit="app.housesController.createCar()">
          <div class="modal-body container-fluid">
            <section class="row">
              <div class="mb-3 col-6">
                <label for="make" class="form-label">Year</label>
                <input required minlength="3" maxlength="20" type="text" class="form-control" id="year" name="year"
                  placeholder="Year">
              </div>
              <div class="mb-3 col-6">
                <label for="name" class="form-label">Name</label>
                <input required minlength="3" maxlength="20" type="text" class="form-control" id="name" name="name"
                  placeholder="Name">
              </div>
              <div class="mb-3 col-6">
                <label for="bedrooms" class="form-label">Bedrooms</label>
                <input required min="1920" type="number" class="form-control" id="bedrooms" name="bedrooms"  placeholder="bedrooms">
              </div>
              <div class="mb-3 col-6">
                <label for="bathrooms" class="form-label">bathrooms</label>
                <input required min="2000" max="1000000" type="number" class="form-control" id="bathrooms" name="bathrooms"
                  placeholder="bathrooms">
              </div>
              <div class="mb-3 col-12">
                <label for="description" class="form-label">Description</label>
                <input required minlength="3" maxlength="50" type="text" class="form-control" id="description" name="description"
                  placeholder="House Description">
              </div>
              <div class="mb-3 col-12">
                <label for="sqfooot" class="form-label">sq foot</label>
                <input required type="number" class="form-control" id="sqft" name="sqft" placeholder="square feet">
              </div>
              <div class="mb-3 col-12">
                <label for="img" class="form-label">Image</label>
                <input required type="text" class="form-control" id="img" name="img" placeholder="Image">
              </div>
            </section>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Create Listing</button>
          </div>
        </form>`
    }

    get CardTemplate() {
        return `
      <div class="col-md-4 col-12">
        <div onclick="alert("its working')" class="rounded elevation-5 selectable" data-bs-toggle="modal" data-bs-target="#modal">
          <img class="rounded-top"
            src="${this.imgUrl}"
            alt="${this.year, this.name}">
          <div class="d-flex justify-content-between px-2">
            <p>${this.bedrooms, this.sqft}</p>
            <p>$${this.price}</p>
          </div>
        <p>Seller: ${this.creatorName}</p>
        </div>
      </div>`
    }

    static CreateHouseButton() {
        return `<div class="col-2 pt-3">
        <button ${appState.userName != '' ? '' : 'disabled'}  onclick="app.carsController.getHouseForm()" data-bs-toggle="modal" data-bs-target="#modal"
          class="btn btn-info p-2"><i class="mdi mdi-home pe-3"></i>List
          Car</button>
      </div>`
    }
}

