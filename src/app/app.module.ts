import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';
import { environment } from "../environments/environment";
import { ServiceWorkerModule } from "@angular/service-worker";


@NgModule({
    declarations : [
        AppComponent,
        ImgCardComponent
    ],
    imports : [
        BrowserModule,
        MatToolbarModule,
        MatCardModule,
        environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
    ],
    providers : [],
    bootstrap : [ AppComponent ]
})
export class AppModule {
}
