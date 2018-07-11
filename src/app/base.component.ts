import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  protected httpRequestProcessing = false;
  protected httpRequestMessage = '';
  protected errorMsg = '';

  constructor() { }

  ngOnInit() {
  }

  beginHttpRequest(msg: string) {
    this.httpRequestMessage = msg;
    this.httpRequestProcessing = true;
  }

  endHttpRequest() {
    this.httpRequestMessage = '';
    this.httpRequestProcessing = false;
  }
}
