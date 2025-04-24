import { KeyValuePipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Role, USERS } from '../../data/users';
import { UserService } from '../user.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ReactiveFormsModule,KeyValuePipe, NgIf],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {


  GetHtml(userItem: any) {
    return "<div>" + userItem + " " + (typeof userItem) + "</div>"
  }

  userKeys(): any[] {
    return this.itemType
  }

  @Input() itemType: any[] = [];
  @Input() show = false;

  onClose() {
    this.close.emit();
  }



  









  @Input() data!: any;
  @Input() schema!: any;
  @Output() close = new EventEmitter<void>();
  @Output() dataSubmitted = new EventEmitter<any>()

  form!: FormGroup;

  constructor(private fb: FormBuilder,
    private userService:UserService,
    private productService:ProductService)
     {}

  ngOnInit() {
    this.form = this.buildForm(this.schema, this.data);
    console.log(this.schema)
    console.log(Object.values(Role))
  }

  buildForm(schema: any, data: any): FormGroup {
    const group: any = {};
    for (const key in schema) {
      const field = schema[key];
      if (field.type === 'object') {
        group[key] = this.buildForm(field.fields, data[key]);
      } else {
        group[key] = this.fb.control(data[key]);
      }
    }
    return this.fb.group(group);
  }

  onSubmit() {
    console.log('Form value:', this.form.value);
    this.dataSubmitted.emit(this.form.value)
    this.close.emit();
  }













}
