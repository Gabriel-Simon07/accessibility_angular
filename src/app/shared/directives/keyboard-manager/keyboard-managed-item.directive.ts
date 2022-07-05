import { Directive, ElementRef, Output } from "@angular/core";
import { EventEmitter } from "protractor";

@Directive({
  selector: '[appKmItem]'
})
export class KeyboarManagedItemDirective {

  @Output() public focused = new EventEmitter();

  constructor(private elementeRef: ElementRef<HTMLElement>) {}

  public focus(): void {
    this.elementeRef.nativeElement.focus();
    this.focused.emit('');
  }

  public isFocused(): boolean {
    return this.elementeRef.nativeElement === document.activeElement;
  }
}
