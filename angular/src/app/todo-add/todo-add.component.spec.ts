import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddComponent } from './todo-add.component';
import {
	FormBuilder,
} from '@angular/forms';

describe('TodoAddComponent', () => {

  let component : TodoAddComponent;

  beforeEach( () => {
    component = new TodoAddComponent( new FormBuilder() );
  } );

  it('form should have 4 controls', () => {

    // note this test is without arrange and act part

    // assert part
    expect(component.userForm.contains('title')).toBeTruthy();
    expect(component.userForm.contains('userId')).toBeTruthy();
    expect(component.userForm.contains('id')).toBeTruthy();
    expect(component.userForm.contains('completed')).toBeTruthy();

  });

  it('should make form title controls required', () => {

    // arrange part
    let control = component.userForm.get('title');

    // act part
    control?.setValue(''); // passing value to empty

    // assert part
    expect(control?.valid).toBeFalsy();
  } );

  it('should make form userId controls required', () => {

    // arrange part
    let control = component.userForm.get('userId');

    // act part
    control?.setValue(''); // passing value to empty

    // assert part
    expect(control?.valid).toBeFalsy();
  } );

  it('should make form id controls required', () => {

    // arrange part
    let control = component.userForm.get('id');

    // act part
    control?.setValue(''); // passing value to empty

    // assert part
    expect(control?.valid).toBeFalsy();
  } );

  it('should make form completed controls required', () => {

    // arrange part
    let control = component.userForm.get('completed');

    // act part
    control?.setValue(''); // passing value to empty

    // assert part
    expect(control?.valid).toBeFalsy();
  } );
});
