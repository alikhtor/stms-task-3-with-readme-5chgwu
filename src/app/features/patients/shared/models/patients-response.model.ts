import { ResponseModel, Patient } from "../../../../shared/models";

export interface PatientsResponseModel extends ResponseModel {
  patient: Patient[];
}
