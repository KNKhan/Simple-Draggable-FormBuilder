import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})

export class FormBuilderComponent implements OnInit {

  modalShow: boolean;
  btnText = 'Submit'; //Submit Button Value
  inputObject = [];

  constructor() {  
  }

  ngOnInit() {
  }
  

  //Open modal on Preview click
  getModal(modalState) {
    this.modalShow = modalState;   
    let getElements = document.getElementById('usedcomponents').innerHTML;
    document.getElementById('formset').innerHTML = getElements;
  }

  //Function to set showModal close to close modal Popup
  closeModal() {
    this.modalShow = !this.modalShow;
  }

  onFormSubmit() {

    //get all inputs inside form
    let formSet = document.getElementById('modalForm');    
    let input = formSet.getElementsByTagName('input');

    let inputs = Array.from(input); //set html nodes in array for iteration
    let textInputs = []; //empty array to push only text input type

    for (let input of inputs) {
      {input.type == 'text' ? textInputs.push(input.value): ''}
    }

    //variables to store array values to be binded in view
    let firstValue = textInputs[0];
    let secondValue = textInputs[1];

    //array bound on view is assigned with the updated value
    this.inputObject = (
      [{
        firstValue,
        secondValue
      }]
    )

    console.log(this.inputObject);
    
  }

}
