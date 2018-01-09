import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
         {{title}} 
      </h1>
 </div>    
  `,
  styles: []
})
export class AppComponent {
    title = 'Progressive Web Cat';
}
