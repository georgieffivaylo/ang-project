import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    // @HostBinding('style.background') color: string;
    @HostListener('click') toggleOpend() {

        this.isOpen = !this.isOpen;
        // this.color = this.isOpen ? 'red' : 'green';
    }
}