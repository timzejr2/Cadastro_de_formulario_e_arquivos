import { HttpClient, HttpContext, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modelsFile } from '../models/modelsFile'
import { API_PATH } from 'src/environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn:'root'
})
  
export class ModelServiceService {
  
  private url = API_PATH;

  

  constructor(private http: HttpClient) { }

  getModels():Observable<modelsFile[]> {
    return this.http.get<modelsFile[]>(this.url + "Maquete/Listar")
  }

  getModelById(modelId: number): Observable<modelsFile>{
    return this.http.get<modelsFile>(`${this.url}Maquete/ObterPorId/${modelId}`)
  }

  getModelsByUser(userId: number): Observable<modelsFile[]>{
    return this.http.get<modelsFile[]>(`${this.url}Maquete/ListarPorUsuario/${userId}`)
  }

  /*addModelPhoto(): Observable<any> {
    return this.http.post<>
  }*/
  
  addModel(modelsFile: modelsFile) : Observable<any> {
    return this.http.post<modelsFile>(`${this.url}Maquete/NovaMaquete`, modelsFile, httpOptions);
  }

  

  changeModel(modelsFile: modelsFile) : Observable<any> {
    return this.http.put<modelsFile>(`${this.url}Maquete/Alterar`, modelsFile,httpOptions);
  }

  deleteModel(modelId: number) : Observable<any> {
    return this.http.put<modelsFile>(`${this.url}Maquete/Alterar`, modelId,httpOptions);
  }

}
