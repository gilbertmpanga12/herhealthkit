import { Component, OnInit } from '@angular/core';
import { Metrics } from 'src/app/data';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { Screening } from '../../data';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/main.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  tables = Metrics;
  screenings: AngularFirestoreCollection;
  screening$: Observable<any>;

  constructor(private firestore: AngularFirestore, private service: MainService){
    this.screenings = this.firestore.collection('screenings', ref => ref.where('uid', '==', this.service.user.uid).limit(20));
    this.screening$ = this.screenings.valueChanges();
  }

  ngOnInit(): void {

  }

  printDocument(): void{
    window.print();
  }
}
