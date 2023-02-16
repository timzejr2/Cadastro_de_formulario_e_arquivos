import { Component, OnInit, Injectable } from '@angular/core';
import { modelsFile } from '../../models/modelsFile';
import { ModelServiceService } from 'src/app/services/model-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  modelsFile!: modelsFile[];
  modelService: ModelServiceService;

  constructor(modelService: ModelServiceService) {
    this.modelService = modelService
  }

  ngOnInit(): void {
    this.modelService.getModels().subscribe(((data) => {
      this.modelsFile = data
      console.log(this.modelsFile)
    }))
  }

}
