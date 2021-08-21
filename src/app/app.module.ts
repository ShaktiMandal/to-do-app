import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './main/edit/edit.component';
import { AddComponent } from './main/add/add.component';
import { TaskitemsComponent } from './main/taskitems/taskitems.component';
import { TaskitemComponent } from './main/taskitems/taskitem/taskitem.component';
import { AppService } from './app.Service';
import { Routes, RouterModule} from '@angular/router'

const routePath: Routes = [
  {path: '', component : AppComponent},
  {path:'Add', component: AddComponent},
  {path:'Edit', component: EditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    EditComponent,
    AddComponent,
    TaskitemsComponent,
    TaskitemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routePath)
  ],
  providers:[AppService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
