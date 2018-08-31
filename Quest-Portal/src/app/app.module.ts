import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

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
import { SkillsComponent } from './skills/skills.component';
import { TraitsComponent } from './traits/traits.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AllLinksComponent } from './all-links/all-links.component';
import { AddPostService } from './services/add-post.service';
import { AddQuestService } from './services/add-quest.service';
import { AddUserService } from './services/add-user.service';
import { LoginService } from './services/login.service';
import { ShowPostService } from './services/show-post.service';
import { ShowQuestService } from './services/show-quest.service';


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
    BuilderDashboardComponent,
    SkillsComponent,
    TraitsComponent,
    AddUserComponent,
    AllLinksComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [CommonService,
              AddPostService,
              AddQuestService,
              AddUserService,
              LoginService,
              ShowPostService,
              ShowQuestService],
  bootstrap: [RootComponent]
})
export class AppModule { }
