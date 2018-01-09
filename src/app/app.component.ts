import { Component } from '@angular/core';

@Component({
    selector : 'app-root',
    template : `
        <!--The content below is only a placeholder and can be replaced.-->
        <div style="text-align:center">
            <mat-toolbar color="primary">
                {{ title }}
            </mat-toolbar>
        </div>
    `,
    styles : []
})
export class AppComponent {
    title = 'Progressive Web Cat';
}
