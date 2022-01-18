import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { StaffModule } from './staff/staff.module';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: HomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            {
                path: 'staff',
                loadChildren: () =>
                import('./staff/staff.module').then(m => m.StaffModule)
            },
        ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }