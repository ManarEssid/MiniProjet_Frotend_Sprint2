import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { AuthService } from '../service/auth.service';
import { ProjetService } from '../service/projet.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  constructor(private projetService : ProjetService,private authService : AuthService) { }

  nomProjet : String;
  projets : Projet[];

  ngOnInit(): void {
    this.projetService.listeProjet().subscribe(data => {
      this.projets = data;
    });
  }

}
