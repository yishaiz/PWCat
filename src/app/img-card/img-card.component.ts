import { Component, OnInit } from '@angular/core';
import { CatImage } from "../cat-image";
import { Button } from "../button";

@Component({
    selector : 'app-img-card',
    template : `
        <mat-card>
            <button  
                    color="primary"
                    (click)="generateSrc()"
                    disabled="{{ button.disabled }}"
                    mat-button
                    mat-raised-button>
                {{ button.text }}
            </button>


            <img src="{{src}}"
                 alt="Cute cat"
                 mat-card-image>
        </mat-card>  `,
    styles : [ `

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

    ` ]
})
export class ImgCardComponent implements OnInit {
    public src : string;

    private image : CatImage = {
        message : 'Progressive Web Cat',
        api : 'https://cataas.com/cat/says/',
        fontsize : 40
    };

    public button: Button = {
        text: 'Give me another cat',
        color: 'primary',
        disabled: false
    };

    constructor () {
    }

    ngOnInit () {
        this.generateSrc();

        if (!navigator.onLine) {
            this.button.text = 'Sorry, you\'re offline';
            this.button.disabled = true;
        }
    }

    generateSrc () : void {
        this.src = this.image.api + this.image.message +
                   '?size=' + this.image.fontsize +
                   '&ts=' + Date.now();
    }


}
