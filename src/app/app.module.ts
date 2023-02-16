import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { LogoffMenuComponent } from './components/logoff-menu/logoff-menu.component';
import { LogonMenuComponent } from './components/logon-menu/logon-menu.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';


import { ModelCardComponent } from './components/model-card/model-card.component';
import { ModelShowComponent } from './pages/model-show/model-show.component';
import { NewModelComponent } from './pages/new-model/new-model.component';
import { EditModelComponent } from './pages/edit-model/edit-model.component';
import { ModelDescriptionComponent } from './components/model-description/model-description.component';
import { ModelServiceService } from './services/model-service.service';
import { UserModelsComponent } from './pages/user-models/user-models.component';
import { UserModelCardComponent } from './components/user-model-card/user-model-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    LogoffMenuComponent,
    LogonMenuComponent,
    ModelCardComponent,
    ModelShowComponent,
    NewModelComponent,
    EditModelComponent,
    ModelDescriptionComponent,
    UserModelsComponent,
    UserModelCardComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [HttpClientModule, ModelServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
