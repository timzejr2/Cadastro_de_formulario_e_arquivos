import { Component, OnInit, Injectable } from '@angular/core';
import { modelsFile } from '../../models/modelsFile';
import { ModelServiceService } from 'src/app/services/model-service.service';

@Component({
  selector: 'app-user-models',
  templateUrl: './user-models.component.html',
  styleUrls: ['./user-models.component.css']
})
export class UserModelsComponent implements OnInit {

  modelsFile: any;
  modelService: ModelServiceService;

  constructor(modelService: ModelServiceService) {
    this.modelService = modelService
  }

  ngOnInit(): void {
    this.modelsFile = this.modelService.getModels().subscribe(((data) => {
      this.modelsFile = data
    }))
  }

}
