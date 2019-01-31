import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-tagging',
  templateUrl: './tagging.component.html',
  styleUrls: ['./tagging.component.css']
})
export class TaggingComponent implements OnInit {


  constructor() {
    this.filteredThemes = this.themeCtrl.valueChanges.pipe(
      startWith(null),
      map((theme: string | null) => theme ? this._filter(theme) : this.allThemes.slice()));
  }

  ngOnInit() {
 
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  themeCtrl = new FormControl();
  filteredThemes: Observable<string[]>;
  themes: string[] = [];
  allThemes: string[] = ['Animal Abuse', 'Horror', 'Child Labour'];

  @ViewChild('themeInput') themeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.themes.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.themeCtrl.setValue(null);
    }
  }

  remove(theme: string): void {
    const index = this.themes.indexOf(theme);

    if (index >= 0) {
      this.themes.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.themes.push(event.option.viewValue);
    this.themeInput.nativeElement.value = '';
    this.themeCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allThemes.filter(theme => theme.toLowerCase().indexOf(filterValue) === 0);
  }
}
