import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {AppRoutingModule} from './app.routing';
import {PxbAuthModule, PxbAuthUIService, PxbRegisterUIService,} from '@daileytj/angular-auth-workflow';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from './pages/auth/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthUIService} from './services/auth-ui.service';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {RegisterUIService} from './services/register-ui.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, AuthComponent],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    PxbAuthModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: 'APP_NAME',
      useValue: 'PXB_AUTH_DEMO_APP',
    },
    {
      provide: PxbAuthUIService,
      useClass: AuthUIService,
    },
    {
      provide: PxbRegisterUIService,
      useClass: RegisterUIService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
