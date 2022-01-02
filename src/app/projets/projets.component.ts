import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { ProjetService } from '../service/projet.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html'})

export class ProjetsComponent implements OnInit {

  projets : Projet[];

  constructor(private projetService: ProjetService,
    private router :Router, private authService : AuthService) { 
      }

      ngOnInit(): void {
        this.projetService.listeProjet().subscribe(proj => {
          console.log(proj);
          this.projets = proj;
          });
        }
        supprimerProjet(proj : Projet)
        {
          let conf = confirm("Etes-vous sûr ?");
          if (conf)
          this.projetService.supprimerProjet(proj.idProjet).subscribe(() => {
            console.log("Projet supprimé");
            this.SuprimerProjetDuTableau(proj);
      
        });
      }
        
        SuprimerProjetDuTableau(proj : Projet) {
          this.projets.forEach((cur, index) => {
          if(proj.idProjet=== cur.idProjet) {
          this.projets.splice(index, 1);
          }
          });

        }}
