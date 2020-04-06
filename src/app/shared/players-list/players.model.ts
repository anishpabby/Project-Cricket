import { ɵNgClassImplProvider__POST_R3__ } from '@angular/common';

export class Players{
    public country : string;
    public name : string ;
    public pic : string ;
    public records : string;

    constructor(country : string, name:string, pic:string, records:string){
        this.country = country;
        this.name = name;
        this.pic = pic;
        this.records = records;
    }

}