import { Component, Input, OnInit } from '@angular/core';
import { modelsFile } from 'src/app/models/modelsFile';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.css']
})
export class ModelCardComponent implements OnInit {

  @Input()
  modelsFiles!: modelsFile

  @Input()
  Id: string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
