import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import {map, switchMap} from "rxjs/operators";
import { Store } from "@ngrx/store";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { PatientsService } from "../shared/services/patients.service";
import { Patient } from "../../../shared/models";
import {setPatientToFollowList} from "../../../core/follow-list/follow-list.actions";
import {selectFollowListOfPatients} from "../../../core/follow-list/follow-list.selectors";

@Component({
  selector: "st-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss", "../../orders/orders/orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  patients$: Observable<Patient[]>;

  constructor(
    private patientsService: PatientsService,
    private store: Store<any>,
  ) {}

  onFetchPatients(): void {
    this.patients$ = this.store.select(selectFollowListOfPatients)
      .pipe(switchMap(followedPatients =>
        this.patientsService.fetchPatients().pipe(map(resp => {
          return resp.patient.map(patient => {
            const followedPatient =
              followedPatients.find(listPatient => listPatient?.code === patient?.code);
            if (followedPatient) {
              patient.isInFollowedList = true;
            }
            return patient;
          });
        }))));
  }

  onAddToFollowList(patient: Patient): void {
    patient.isInFollowedList = true;
    this.store.dispatch(setPatientToFollowList({ patient }));
  }
}
