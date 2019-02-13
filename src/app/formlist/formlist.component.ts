import { Component, OnInit } from '@angular/core';
import {Form1} from '../form1';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formlist',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.css'],
  providers: [DataService]
})
export class FormlistComponent implements OnInit {
  documentList: Form1[]=[];

  constructor(private dataService: DataService, private router: Router) { }


  getDocumentList(){
    this.dataService.getForm1List()
    .subscribe(form => {
      this.documentList = form;
      console.log('data from dataService : '+this.documentList);
    })
  }

  

  ngOnInit() {
    this.getDocumentList();
  }

}
