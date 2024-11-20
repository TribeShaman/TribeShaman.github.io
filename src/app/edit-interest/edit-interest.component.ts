import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InterestService } from '../interest.service';

@Component({
  selector: 'app-edit-interest',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-interest.component.html',
  styleUrl: './edit-interest.component.css'
})
export class EditInterestComponent {
  @Input() set editValue(newValue:string){
    this.oldValue=newValue;
    this.currentValue=newValue;

  }
  get editValue():string{
    return this.oldValue;
  }
  @Output() doEditInParent: EventEmitter<string>=new EventEmitter();

  @Input() position:number | undefined;
  currentValue!:string;
  oldValue!:string;

  
 constructor(private interestService:InterestService){

 }

 

  changeEditValue(){
    //this.doEditInParent.emit(this.currentValue);
    if(this.position!==undefined)
      this.interestService.editInterest(this.position,this.currentValue);
    this.doEditInParent.emit();
  }

  cancel(){
    this.doEditInParent.emit(this.editValue);
  }
}
