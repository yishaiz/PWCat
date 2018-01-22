import { Component, OnInit } from '@angular/core';
import { CatImage } from "../cat-image";
import { Button } from "../button";

@Component({
    selector : 'app-img-card',
    template : `
        <mat-card>

            <div *ngIf="button.disabled==false; then displayButtonBlock; else hideButtonBlock">
                nothing here..
            </div>

            <ng-template #displayButtonBlock>
                <button
                        color="primary"
                        (click)="generateSrc()"
                        class="cat-button"
                        mat-button
                        mat-raised-button>
                    {{ button.text }}
                </button>
            </ng-template>

            <ng-template #hideButtonBlock>
                <h3>Sorry, you're offline</h3>
            </ng-template>

            <!--disabled="{{ button.disabled }}"-->


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

        .cat-button{
            height: 40px;
            width: 190px;
            margin-bottom: 25px;
            font-size: medium;
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

    public button : Button = {
        text : 'Give me another cat',
        color : 'primary',
        disabled : false
    };

    constructor () {
    }

    ngOnInit () {
        this.generateSrc();

        if (!navigator.onLine) {
            this.button.text     = 'Sorry, you\'re offline';
            this.button.disabled = true;
        }

        console.log('button', this.button)
    }

    generateSrc () : void {
        this.src = this.image.api + this.image.message +
                   '?size=' + this.image.fontsize +
                   '&ts=' + Date.now();
    }


}
