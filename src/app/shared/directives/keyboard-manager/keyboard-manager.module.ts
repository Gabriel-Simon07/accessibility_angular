import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { KeyboarManagedItemDirective } from "./keyboard- managed-item.directive";

import { KeyboardManagerDirective } from "./keyboard-manager.directive";

@NgModule({
    declarations: [KeyboardManagerDirective, KeyboarManagedItemDirective],
    imports: [CommonModule],
    exports: [KeyboardManagerDirective, KeyboarManagedItemDirective]
})
export class KeyboardManagerModule {

}
