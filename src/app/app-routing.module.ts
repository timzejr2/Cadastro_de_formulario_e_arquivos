import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditModelComponent } from './pages/edit-model/edit-model.component';
import { HomeComponent } from './pages/home/home.component';
import { ModelShowComponent } from './pages/model-show/model-show.component';
import { NewModelComponent } from './pages/new-model/new-model.component';
import { UserModelsComponent } from './pages/user-models/user-models.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'model-show/:id', component: ModelShowComponent },
  { path: 'new-model', component: NewModelComponent },
  { path: 'user-models', component: UserModelsComponent},
  { path: 'edit-model', component: EditModelComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
