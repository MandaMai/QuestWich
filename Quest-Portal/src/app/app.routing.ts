import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TestingComponent } from './testing/testing.component';
import { QuestDashboardComponent } from './quest-dashboard/quest-dashboard.component';
import { ProfileComponent } from './profile/profile.component';

export const AppRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent },
    { path: 'testing', component: TestingComponent },
    { path: 'quest-dashboard', component: QuestDashboardComponent},
    { path: 'profile', component: ProfileComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
