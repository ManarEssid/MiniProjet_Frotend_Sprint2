import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { ActivatedRoute,Router } from '@angular/router';
import { ProjetService } from '../service/projet.service';
import { Developeur } from '../model/developeur.model';


@Component({
  selector: 'app-update-produit',
  templateUrl: './update-projet.component.html',
  styles: [
  ]
})

export class UpdateProjetComponent implements OnInit {
  currentProjet = new Projet();
  currentDev = new Developeur();  
  devs : Developeur[];
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private projetService: ProjetService) { }


  ngOnInit(): void {
    this.projetService.listeDeveloppeur().subscribe(data => {
      this.devs = data;
    });
    this.projetService.consulterProjet(this.activatedRoute.snapshot.params.id).
    subscribe( proj =>{ 
      this.currentProjet = proj; 
      this.currentDev = this.currentProjet.developeur;
      console.log();
    });
  }

 
  updateProjet() {
    this.currentDev = this.devs.find(dev => dev.idDevelopeur == this.currentDev.idDevelopeur);
    this.currentProjet.developeur = this.currentDev;
    this.projetService.updateProjet(this.currentProjet).subscribe(() => {
    this.router.navigate(['projets']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}