import { Component, OnInit } from '@angular/core';

/**
 * Footer component
 */

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  /**
   * Current year displayed in footer
   */
today: number = Date.now();

  /**
   * Constructor for component
   */
  constructor() { }

  /**
   * Component lifecycle hook
   */
  ngOnInit() {
  }

}
