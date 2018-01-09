import { Component, OnInit } from '@angular/core';
import { CatImage } from "../cat-image";

@Component({
    selector : 'app-img-card',
    template : `
        <mat-card>
            <button
                    color="primary"
                    (click)="generateSrc()"
                    mat-button
                    mat-raised-button>
                Give me another cat
            </button>


            <img src="{{src}}"
                 alt="Cute cat"
                 mat-card-image>
        </mat-card>  `,
    styles : [`

        .mat-card {
            width: 400px;
            margin: 2rem auto;
        }
        .mat-card .mat-card-actions {
            padding-top: 0;
        }
        .mat-card .mat-button {
            margin: 0 auto;
            display: block;
        }
        
    `]
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
                   '?size=' + this.image.fontsize +
                   '&ts=' + Date.now();
    }


}
