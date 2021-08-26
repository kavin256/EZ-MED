import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {MedicalRecord} from '../../models/medical-record';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalType;
  @Input() dataA: MedicalRecord [];
  // @Input() errorMessage?: string;
  @Output() clickEmitter = new EventEmitter<string>();
  P_AGREEMENT: string [];
  D_AGREEMENT: string [];

  constructor(
      public router: Router,
      public dialogRef: MatDialogRef<ModalComponent>,
      @Inject(MAT_DIALOG_DATA) data) {
    this.modalType = data.modalType;
    this.dataA = data.dataA;
  }

  ngOnInit() {
    this.P_AGREEMENT = ['I understand that I may require medications, examinations, diagnostic procedures or other treatments in connection with my condition. I further understand that EZ Med is an intermediate platform which connects me with the relevant Medical Practitioners. I hereby consent to connect with the Medical Professional and proceed with the treatments, tests and procedures, as appropriate personnel deem necessary or advisable.',
      'I understand that the practice of medicine and surgery is not an exact science, and I acknowledge that no guarantees have been made to me as to the results of treatments or examinations via EZ Med Platform.',
      'I understand that I have the right to withhold consent to any medical or treatment procedure. I understand that the Medical Practitioner has the right to decline to permit the performance of any procedure if there is not satisfactory assurance that informed consent was given.',
      'I understand that during my discussion via EZ Med Platform, I may be advised and treated by Doctors and other personnel in related to my physiological and psychological conditions.',
      'I certify that I have read the above and it has been explained to me so that I understand. I certify that I am the patient and I review the above terms and conditions to receive the services through EZ Med Platform. I discharge the responsibility and liability of EZ Med and I understand EZ Med is merely an online platform which facilitate my medical requirements.'
    ];

    this.D_AGREEMENT = [
        'I understand EZ Med (PVT) LTD is an intermediate service provider. EZ Med declares and undertakes all the registrations of both patients and Doctors /licenses/approvals/authorizations required by law in order to provide the services pursuant to this agreement and EZ Med has the skills, knowledge and experience required in order to provide the service as required in this agreement.',
      'EZ Med undertakes to uphold all of the requirements of the law in so far as these apply to EZ Med and in accordance with the provisions of the law and the regulations related to the services.', 'I declare that EZ Med has no responsibility regarding the Consultation and Medical Treatment process and I discharge EZ Med from such liabilities in the process.',
      'EZ Med defined and explained the entire process and I understood the role of each party. I take the responsibility of my activities and the information I share with the patients and the other external parties. I discharge EZ Med from any types of complaint of medical malpractice which I involved and I understand the intermediate role of EZ Med.',
      'I, undertakes the responsibility to provide the service in a meticulous, precise, reliable, professional manner and at the highest level of service, to the complete satisfaction of the patients and in accordance with additional instructions to be issued from time to time via EZ Med platform and brought to the attention of the provider/ EZ Med any critical / significant issues rises.',
      'I shall take the responsibility to provide consultations and treat the patients/ clients in a courteous manner and according to good medical practices.',
      'EZ Med will extend priority register facilities to the beneficiaries, whenever possible. However the right of admission will always be the prerogative of EZ Med. I shall ensure that medical treatment/facility with all due care and accepted standards is extended to the beneficiary/ patient / Client.',
      'EZ Med will convey to all the relevant parties on the critical changes or changes of the agreement clause immediately. If any unforeseen complications occur same will be included, and permitted as necessary treatment. The treating and taking the actions purely by the Medical Practitioner and I understand my responsibility in such situations. I agreed that no employee-employer relationship shall exist between the parties and that the provider services as an independent contractor for all intents and purposes.',
      'EZ Med will not interfere in the treatment and medical care provided to its beneficiaries.  EZ Med will not be in any way held responsible for the outcome of treatment or quality of care provided by the Medical Practitioner.',
      'EZ Med shall not be liable or responsible for any acts, Omission or commission of the Doctors and other medical staff of the EZ Med.',
      'I shall alone be liable to pay any costs, damages and /or compensation demanded by the beneficiary/patient for poor, wrong or bad quality of the treatment given to the patient.'
    ];
  }

  startVacationMode() {
    this.dialogRef.close('start_vacation');
  }

  stopVacationMode() {
    this.dialogRef.close('stop_vacation');
  }

  dismiss() {
    this.dialogRef.close('dismiss');
  }

  agree() {
    this.dialogRef.close('agree');
  }
}
