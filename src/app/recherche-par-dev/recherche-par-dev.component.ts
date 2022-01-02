import { Component, OnInit } from '@angular/core';
import { Developeur } from '../model/developeur.model';
import { Projet } from '../model/projet.model';
import { AuthService } from '../service/auth.service';
import { ProjetService } from '../service/projet.service';

@Component({
  selector: 'app-recherche-par-dev',
  templateUrl: './recherche-par-dev.component.html',
  styles: [
  ]
})
export class RechercheParDevComponent implements OnInit {

  constructor(private projetService : ProjetService, private authService : AuthService) { }
  
  devs : Developeur[];
  projets : Projet [];
  projetsRecherche : Projet[];
  idDev : number;

  ngOnInit(): void {
    this.projetService.listeDeveloppeur().subscribe(data => {
      this.devs = data;
    });
    this.projetService.listeProjet().subscribe(data => {
      this.projets = data;
    });
  }
  
  onChange(){
    console.log(this.idDev);
    this.projetService.rechercheParDev(this.idDev).subscribe(data => {
      this.projets = data;
      console.log(data);
    });
  }
}
