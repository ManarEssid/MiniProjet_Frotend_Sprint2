import { Injectable } from '@angular/core';
import { Projet } from '../model/projet.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Developeur } from '../model/developeur.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  apiURL: string = 'http://localhost:8090/projets/api';

  projets: Projet[];

 

  constructor(private http : HttpClient, private authService : AuthService) {
  
   }

  
   listeProjet(): Observable<Projet[]>{
     let jwt = this.authService.getToken();
     jwt = "Bearer "+jwt;
     let httpHeaders = new HttpHeaders({"Authorization":jwt});
     return this.http.get<Projet[]>(this.apiURL, {headers:httpHeaders});
  }

  listeDeveloppeur(): Observable<Developeur[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt});
    return this.http.get<Developeur[]>(this.apiURL+"/devs", {headers:httpHeaders});
 }

 rechercheParDev(idDev : number):Observable<Projet[]>{
  const url = `${this.apiURL}/projdev/${idDev}`;
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt});
  return this.http.get<Projet[]>(url, {headers:httpHeaders});
 }
   
   ajouterProjet( proj: Projet):Observable<Projet>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt});
    return this.http.post<Projet>(this.apiURL, proj, {headers:httpHeaders});
    }

   
  supprimerProjet(id : number) {
    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt});
    return this.http.delete(url, {headers:httpHeaders});
    }

    
  consulterProjet(id: number): Observable<Projet> {
    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt});
    return this.http.get<Projet>(url, {headers:httpHeaders});
  }


  updateProjet(proj :Projet) : Observable<Projet>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt});
      return this.http.put<Projet>(this.apiURL, proj, {headers:httpHeaders});
  }



  
}