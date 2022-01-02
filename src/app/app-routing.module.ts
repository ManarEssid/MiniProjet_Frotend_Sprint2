import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetsComponent } from './projets/projets.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProjetGuard } from './projet.guard';
import { RechercheParDevComponent } from './recherche-par-dev/recherche-par-dev.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


const routes: Routes = [
  {path: "projets", component : ProjetsComponent},
  {path: "add-projet", component : AddProjetComponent, canActivate:[ProjetGuard]},
  {path: "", redirectTo: "projets", pathMatch: "full" },
  {path: "updateProjet/:id", component: UpdateProjetComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'rechercheParDev', component: RechercheParDevComponent},
  {path: 'rechercheParNom', component: RechercheParNomComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
