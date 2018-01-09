import { Component, OnInit } from '@angular/core';
import { CatImage } from "../cat-image";

@Component({
    selector : 'app-img-card',
    template : `
        <mat-card>
            <img src="{{src}}"
                 alt="Cute cat"
                 mat-card-image>
        </mat-card>  `,
    styles : []
})
export class ImgCardComponent implements OnInit {
    public src : string;

    private image : CatImage = {
        message : 'Progressive Web Cat',
        api : 'https://cataas.com/cat/says/',
        fontsize : 40
    };

    constructor () {
    }

    ngOnInit () {
        this.generateSrc();
    }

    generateSrc () : void {
        this.src = this.image.api + this.image.message +
                   '?size=' + this.image.fontsize;
    }


}
