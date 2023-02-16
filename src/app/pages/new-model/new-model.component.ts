import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModelServiceService } from '../../services/model-service.service';
import { modelsFile } from '../../models/modelsFile';
import { empty, observable, Observable } from 'rxjs';
import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { modelFoto } from 'src/app/models/modelFoto';

@Component({
  selector: 'app-new-model',
  templateUrl: './new-model.component.html',
  styleUrls: ['./new-model.component.css']
})
export class NewModelComponent implements OnInit {

  //variaveis formulário
  formulario: any;
  tituloFormulario!: string;
  selectedFile!: File;

  //variaveis foto maquete
  public pageTitle = 'Welcome to fileupload component';
  photoToUpload: any;

  constructor(private ModelService: ModelServiceService, private http:  HttpClient) { }

  ngOnInit(): void {
    this.tituloFormulario = "Nova maquete";
    this.formulario = new FormGroup({
      nomeMaquete: new FormControl(null),
      descricaoMaquete: new FormControl(null),
      maqueteAtiva: new FormControl(null)
    });
  }


  modelPhoto = new FormData();

  inputPhoto(event: any) {
    console.log(event)
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];

      //const modelPhoto = new FormData();
      this.modelPhoto.append('modelPhoto', foto);

      /*this.http.post('https://localhost:7041/Maquete/UploadPhotoMaquete', modelPhoto)
        .subscribe(res => console.log(res))*/
    }
  }
  

  

  EnviarMaquete(): void {

  }

  EnviarArquivo(): void {

  }

  
  fotoMaquete: any

   EnviarFormulario(): void {

    //var fotoResponse

    this.http.post('https://localhost:7041/Maquete/UploadPhotoMaquete', this.modelPhoto, {observe: 'response'})
      .subscribe(fotoFile => {
        this.fotoMaquete = fotoFile
        console.log(fotoFile)
      })
    /*.subscribe((response) => { console.log(response) }
      )*/
    
    //var nomeFotoMaquete = this.http.get(fototoMaquete.toString())
    console.log("Chegou aqui!")
     console.log(this.fotoMaquete)
     console.log("Aqui também!")

    const dataAtual = new Date
    const modelFile: modelsFile = this.formulario.value;
    modelFile.id = 0;
    modelFile.dataPublicacao = dataAtual
    modelFile.imgMaquete = "1234asdf"
    modelFile.arquivoMaquete = "e862fec0-8bd8-4496-8b49-59c92f2154fc"
    modelFile.idUsuario = 1
    this.ModelService.addModel(modelFile).subscribe(result => {
      alert('Maquete inserida com sucesso')
      
    });
    
  }

  

}
