import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { NgxStringToCssColorModule} from "ngx-string-to-css-color";
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LiveDemoComponent } from './live-demo/live-demo.component';



@NgModule({
  declarations: [
    AppComponent,
    LiveDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
