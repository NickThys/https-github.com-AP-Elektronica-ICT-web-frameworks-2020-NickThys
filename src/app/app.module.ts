import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { PortalComponent } from './portal/portal.component';
import { MenuComponent } from './menu/menu.component';
import { SubTitelComponent } from './sub-titel/sub-titel.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    PortalComponent,
    MenuComponent,
    SubTitelComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
