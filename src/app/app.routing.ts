import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authSubRoutes, PxbAuthGuard, AUTH_ROUTE } from '@daileytj/angular-auth-workflow';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
    { path: '', redirectTo: AUTH_ROUTE, pathMatch: 'full' },
    { path: AUTH_ROUTE, component: AuthComponent, children: authSubRoutes },
    {
        path: '',
        canActivate: [PxbAuthGuard],
        children: [
            { path: 'home', component: HomeComponent },
        ],
    },
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
