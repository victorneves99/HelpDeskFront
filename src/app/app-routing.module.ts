import { LoginComponent } from "./component/login/login.component";
import { TecnicoListComponent } from "./component/tenico/tecnico-list/tecnico-list.component";
import { ContentComponent } from "./component/content/content.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
  },
  {
    path: "content",
    component: ContentComponent,
  },
  {
    path: "tecnicos",
    component: TecnicoListComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
