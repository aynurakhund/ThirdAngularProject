import { FormArray } from "@angular/forms";

export interface authorModel{
    firstName:string;
    lastName:string;
    books:Array<any>;
    birthDate:string;
    birthPlace:string;
    description:string;
}
