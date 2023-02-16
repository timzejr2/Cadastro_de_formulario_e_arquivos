import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-description',
  templateUrl: './model-description.component.html',
  styleUrls: ['./model-description.component.css']
})
export class ModelDescriptionComponent implements OnInit {

  @Input()
  modelTitle: string = ""

  @Input()
  modelDescription: string = ""

  @Input()
  userPost: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
