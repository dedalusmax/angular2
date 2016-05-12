import { Directive, ElementRef, Input, Output, EventEmitter } from 'angular2/core';
import { NgControl } from 'angular2/common';

@Directive({
    selector: "[rcDate]",
    host: {
        '(change)': 'onChange($event.target.value)'
    }
})
export class DateDirective {
      
    colors = {
        init: '#AABBFF',
        valid: '#CCFFBB',
        invalid: '#FFCCDD'   
    };
    
    private _date: string;
    
    @Input() set date(value: string) {
        console.log('@Input set to: ' + value);
        this._date = value; 
    }
   
    constructor(private element: ElementRef, private control: NgControl) {
        element.nativeElement.style.backgroundColor = this.colors.init;
    }
    
    private toDateString(date: Date): string {
        
        var day = date.getDate().toString(); 
        if (date.getDate() < 10) day = "0" + day;
        var month = (date.getMonth() + 1).toString();
        if (date.getMonth() < 9) month = "0" + month;
        var year = date.getFullYear().toString();
        
        return (day + "." + month + "." + year);
    }
 
    private parseDateString(date:string): Date {

        var parts = date.split('.');       
        return new Date(+parts[2], (+parts[1])-1, +parts[0]); 
    } 
    
    onChange(value: string): void {
        
        if (value != this._date) {
            var parsedDate = this.parseDateString(value);
            if (parsedDate.toString() === 'Invalid Date') {
                this.control.valueAccessor.writeValue('Pogrešan datum!'); 
                this.element.nativeElement.style.backgroundColor = this.colors.invalid;
            } else {
                var newValue = this.toDateString(parsedDate); 
                this.control.valueAccessor.writeValue(newValue);
                this.control.viewToModelUpdate(newValue);
                this.element.nativeElement.style.backgroundColor = this.colors.valid;
            }
        }
    }       
}