import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { DomSanitizer } from '../node_modules/@angular/platform-browser';

@NgModule({
    imports: [
      /* angular stuff */
      CommonModule,
      FormsModule,

    ],
    declarations: [
      // Custom Component would go here
    ],
    exports: [
      /* angular stuff */
      CommonModule,
      FormsModule,

    ]
  })
  export class SharedModule {
    constructor(private sanitizer: DomSanitizer) { }
    public dateOptions = {'year': 'numeric', month: 'long', day: 'numeric' };

    parseDate(dateString: string): Date {
        if (dateString) {
            return new Date(dateString);
        } else {
            return null;
        }
      }

      public getSanitizeUrl( url: string ) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
      }
  }
