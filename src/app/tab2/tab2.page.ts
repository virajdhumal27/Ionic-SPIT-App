import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  items = [
    {
      subject: "Mobile Programming",
      due: "21/05/2023",
      labTitle: "SPIT App",
      labNo: 5,
      statusOption: "Submitted",
      statusColor: "success",
      canAddSubmission: false,
      canEditSubmission: true
    },
    {
      subject: "Process Automation",
      due: "18/05/2023",
      labTitle: "JSON Extractor Bot",
      labNo: 6,
      statusOption: "Not Submitted",
      statusColor: "danger",
      canAddSubmission: true,
      canEditSubmission: false
    },
    {
      subject: "Java Programming",
      due: "20/05/2023",
      labTitle: "JPA Connectitvity",
      labNo: 15,
      statusOption: "Submitted",
      statusColor: "success",
      canAddSubmission: false,
      canEditSubmission: true
    },
  ]

}
