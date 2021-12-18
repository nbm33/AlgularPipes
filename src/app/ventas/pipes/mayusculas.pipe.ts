import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform {

    transform(value:string, OnOFF:boolean = true): string { 
        if(OnOFF){
            return value.toUpperCase();
        }else{
            return value.toLocaleLowerCase();
        }
        
    }

}