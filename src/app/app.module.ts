import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { GridComponent } from './marketplace/grid/grid.component';
import { FilterComponent } from './marketplace/filter/filter.component';
import { TypePipe } from './type.pipe';
import { SizePipe } from './size.pipe';
import { ColorPipe } from './color.pipe';
import { CutPipe } from './cut.pipe';
import { ConditionPipe } from './condition.pipe';



export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MarketplaceComponent,
    WelcomeComponent,
    UserDashboardComponent,
    GridComponent,
    FilterComponent,
    TypePipe,
    SizePipe,
    ColorPipe,
    CutPipe,
    ConditionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
