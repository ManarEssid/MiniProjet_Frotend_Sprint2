import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { ProjetService } from '../service/projet.service';
import { Router } from '@angular/router';
import { Developeur } from '../model/developeur.model';
@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html'})
export class AddProjetComponent implements OnInit {

  newIdDev : number;
  newDev : Developeur;
  newProjet = new Projet();
  devs : Developeur[];

  constructor(private projetService: ProjetService,
    private router :Router) { 
      }

  ngOnInit(): void {
    this.projetService.listeDeveloppeur().subscribe( data => {
      this.devs = data;
      console.log(this.devs);
    });
  }
  addProjet(){
    console.log(this.newIdDev);
    this.newDev = this.devs.find(dev => dev.idDevelopeur == this.newIdDev);
    this.newProjet.developeur = this.newDev;
    console.log(this.newProjet.developeur.nomDevelopeur);
    if (this.newProjet.developeur != undefined){ 
      this.projetService.ajouterProjet(this.newProjet)
      .subscribe(proj => { console.log(proj);  });
        this.router.navigate(['projets']);
      }else {
        console.log('erreur');
      }
  }

}
