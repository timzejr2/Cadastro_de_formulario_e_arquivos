import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ModelServiceService } from '../../services/model-service.service'

@Component({
  selector: 'app-model-show',
  templateUrl: './model-show.component.html',
  styleUrls: ['./model-show.component.css']
})
  
export class ModelShowComponent implements OnInit {
  dangerousUrl!: SafeUrl
  trustedUrl!: SafeResourceUrl
  modelsFile!: any;
  modelService: ModelServiceService;
  modelTitle: string = ""
  modelDescription: string = ""
  userPost: string = ""
  modelId: string = ""
  modelPath: string = ""
  private id: string | null = "0"

  constructor(modelService: ModelServiceService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.modelService = modelService

  }

  ngOnInit(): void {
    this.modelsFile = this.modelService.getModels().subscribe(((data) => {
      this.modelsFile = data
      this.route.paramMap.subscribe(value => 
        this.id = value.get("id")
      )
      this.setValuesToComponent(this.id)
    }))
    
    
  }

  setValuesToComponent(id: string | null) {
    const result = this.modelsFile.filter((article: { id: string | null; })  => article.id == id)[0]

    this.modelTitle = result.nomeMaquete
    this.modelDescription = result.descricaoMaquete
    this.userPost = result.idUsuario
    this.modelId = "https://proud-tree-0cf801e10.1.azurestaticapps.net?id=" + result.arquivoMaquete

    this.dangerousUrl = this.sanitizer.bypassSecurityTrustUrl(this.modelId)
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.modelId)

  }
  
}

