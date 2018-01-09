import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-img-card',
    template : `
        <mat-card>
            <img src="https://cataas.com/cat/says/Progressive%20Web%20Cat"
                 alt="Cute cat"
                 mat-card-image>
        </mat-card>  `,
    styles : []
})
export class ImgCardComponent implements OnInit {

    constructor () {
    }

    ngOnInit () {
    }

}
