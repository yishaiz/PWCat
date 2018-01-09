import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';


@NgModule({
    declarations : [
        AppComponent,
        ImgCardComponent
    ],
    imports : [
        BrowserModule,
        MatToolbarModule,
        MatCardModule
    ],
    providers : [],
    bootstrap : [ AppComponent ]
})
export class AppModule {
}
