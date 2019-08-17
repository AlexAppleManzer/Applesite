import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  endpoint = environment.settings.BACKEND_ENDPOINT;
  constructor(private httpClient: HttpClient) { }

  public querySummoners(params: any) : Observable<any>{
    return this.httpClient.get<any>(this.endpoint + "/summoners", {params}).pipe();
  }
  
  public updateSummoner(id: string, summoner: any) {
    return this.httpClient.put(this.endpoint + `/summoners/${id}`, summoner);
  }

  public deleteSummoner(id: string) {
    return this.httpClient.delete(this.endpoint + `/summoners/${id}`);
  }

  public createSummoner(summoner: any) {
    return this.httpClient.post(this.endpoint + '/summoners', summoner);
  }
}
