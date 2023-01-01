import { NgModule, Injectable } from "@angular/core";
import { RouterModule, Routes, TitleStrategy, RouterStateSnapshot } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { AngularHelpComponent } from "../components/angular-help/angular-help.component";
import { HomeComponent } from "../components/home/home.component";

const routes: Routes = [
  { path: "", title: "Home", component: HomeComponent },
  { path: "help", title: "Help", component: AngularHelpComponent }
];

@Injectable({providedIn: "root"})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Opticourse | ${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})
export class AppRoutingModule { }
