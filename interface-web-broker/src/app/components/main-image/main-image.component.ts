/**
 * It generates the landing page image with its own custom css styling.
 * We did this to keep the landing page's image in a different component but also to fill the entire page.
 */

import { Component, OnInit } from '@angular/core';

/**
 * Main image component
 * generates image for landing page
 */

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.css']
})
export class MainImageComponent implements OnInit {

   /**
   * @ignore
   */
  constructor() { }

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * https://angular.io/api/core/OnInit
   */
  ngOnInit() {
  }

}
