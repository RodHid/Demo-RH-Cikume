import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: HomeComponent },
            {
                path: 'staff',
                loadChildren: () =>
                import('./staff/staff.module').then(m => m.StaffModule)
            },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }