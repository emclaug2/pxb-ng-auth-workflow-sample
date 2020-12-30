import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PxbAuthGuard,
  AUTH_ROUTES,
  PxbLoginComponent,
  PxbResetPasswordComponent,
  PxbForgotPasswordComponent,
  PxbCreateAccountComponent,
  PxbContactSupportComponent,
  PxbCreateAccountInviteComponent, getAuthSubRoutes
} from '@pxblue/angular-auth-workflow';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';

// The default workflow routes can be overwritten if needed.
AUTH_ROUTES.AUTH_WORKFLOW = 'auth';
AUTH_ROUTES.CONTACT_SUPPORT = 'assistance';

const authWorkflowRoutes = getAuthSubRoutes();
/*
Non-ivy projects who desire route-name customization will have to declare their own routes.
const authWorkflowRoutes = [
  { path: '', redirectTo: AUTH_ROUTES.LOGIN, pathMatch: 'full' },
  { path: AUTH_ROUTES.LOGIN, component: PxbLoginComponent },
  { path: AUTH_ROUTES.RESET_PASSWORD, component: PxbResetPasswordComponent },
  { path: AUTH_ROUTES.FORGOT_PASSWORD, component: PxbForgotPasswordComponent },
  { path: AUTH_ROUTES.CREATE_ACCOUNT, component: PxbCreateAccountComponent },
  { path: 'assistance', component: PxbContactSupportComponent },
  { path: AUTH_ROUTES.CREATE_ACCOUNT_INVITE, component: PxbCreateAccountInviteComponent },
];
 */
const routes: Routes = [
    { path: '', redirectTo: AUTH_ROUTES.AUTH_WORKFLOW, pathMatch: 'full' },
    { path: AUTH_ROUTES.AUTH_WORKFLOW, component: AuthComponent, children: authWorkflowRoutes },
    {
        path: '',
        canActivate: [PxbAuthGuard],
        children: [{ path: 'home', component: HomeComponent }],
    },
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
