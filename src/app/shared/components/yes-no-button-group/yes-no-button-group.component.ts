import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(()  => YesNoButtonGroupComponent)
  }]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  @Input() public value: string = null;
  @Output() public valueChange = new EventEmitter<string>();
  @Input() public label: string = '';
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string) => {};
  public onTouched = () => {};


  constructor() { }

  ngOnInit(): void {
  }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(this.value);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  public activate (value: string):void {
     this.onChange(value);
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
