import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  @Input() contact;
  @Input() httpRequestMessage;

  constructor() { }

  ngOnInit() {
  }


  }
