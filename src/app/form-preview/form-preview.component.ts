import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})

export class FormPreviewComponent implements OnInit {

  //set boolean value to be passed to parent
  modalShow: boolean = true;

  
  
  //Event Emitter for boolean value set to show modal
  @Output() setModal:EventEmitter<any> = new EventEmitter; 

  constructor() {    
  }

  ngOnInit() {    
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


  /*-- function to append form elements inside form and open modal Popup  --*/
  formSet() {
    this.setModal.emit(this.modalShow.valueOf);
  }

}