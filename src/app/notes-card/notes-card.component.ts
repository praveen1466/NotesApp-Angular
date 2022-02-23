import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrls: ['./notes-card.component.scss']
})
export class NotesCardComponent implements OnInit {

  @Input() title: any;
  @Input() body: any;

  constructor() { }

  ngOnInit(): void {
  }

}
