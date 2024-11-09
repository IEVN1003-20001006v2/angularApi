import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';
import { Form, FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [],
  templateUrl: './add-message.component.html',
  styles: ``
})
export class AddMessageComponent implements OnInit {
registrarEmpleado() {
throw new Error('Method not implemented.');
}
  formGroup!:FormGroup;
  constructor(public messageService: MessageserviceService, private fb: FormBuilder){}

ngOnInit():void{
  this.formGroup=this.initForm();
}
initForm():FormGroup{
  return this.fb.group({nombre:['']})
}
addAlumnos(){
let {nombre}=this.formGroup.value;
this.messageService.add(nombre)
this.formGroup.get('nombre')?.setValue('')
}
}
