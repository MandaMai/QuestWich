import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ROUTING } from './app.routing';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { CommonService } from './services/common.service';
import { TestingComponent } from './testing/testing.component';
import { QuestDashboardComponent } from './quest-dashboard/quest-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ShowQuestComponent } from './show-quest/show-quest.component';
import { AddQuestComponent } from './add-quest/add-quest.component';
import { HeroBuilderComponent } from './hero-builder/hero-builder.component';
import { BuilderDashboardComponent } from './builder-dashboard/builder-dashboard.component';


@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent,
    ShowPostComponent,
    AddPostComponent,
    TestingComponent,
    QuestDashboardComponent,
    ProfileComponent,
    ShowQuestComponent,
    AddQuestComponent,
    HeroBuilderComponent,
    BuilderDashboardComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [RootComponent]
})
export class AppModule { }
