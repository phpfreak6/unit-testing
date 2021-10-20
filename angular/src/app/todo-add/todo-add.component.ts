import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormControl,
	Validators,
	FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  userForm!: FormGroup;
	submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.userForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      completed: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

    
  }

}
