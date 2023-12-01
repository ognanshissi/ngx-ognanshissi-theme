import { Component, Input, booleanAttribute } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

@Component({
    template: '',
})
export abstract class  AbstractControlValueAccessor<T = any> implements ControlValueAccessor {

    @Input({transform: booleanAttribute}) disabled!: boolean;
    private _value!: T;

    get value() {
        return this._value;
    }

    set value(t: T) {
        this._value = t;
        this.onTouched();
        this.onChange(t);
    }

    private onTouched: () => void;


    private onChange: (value: T) => void;

    writeValue(obj: any): void {
        throw new Error("Method not implemented.");
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}