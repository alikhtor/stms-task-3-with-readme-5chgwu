import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { apiUrlV2 } from "../../../../../environments/environment";
import { PatientsResponseModel } from "../models/patients-response.model";

@Injectable()
export class PatientsService {

  constructor(private http: HttpClient) {}

  fetchPatients(): Observable<PatientsResponseModel> {
    return this.http.get<PatientsResponseModel>(`${apiUrlV2}/51597ef3`);
  }

}
