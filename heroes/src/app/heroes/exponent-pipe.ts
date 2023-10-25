import { Pipe, PipeTransform } from '@angular/core';

// Custom Pipe
/** Elève la valeur à la puissance donnée */
@Pipe({ name : 'displayZero'})
export class DisplayZeroPipe implements PipeTransform {
    transform(value : string | null): string {
        if (value == null) {
            return ""
        } else {
            if (value[value.length-1] == '0') {
                return value + '!'
            } else {
                return value
            }
        }
    }
}
