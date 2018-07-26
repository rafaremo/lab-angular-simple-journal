import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [EntriesService]
})
export class SingleEntryComponent implements OnInit {

  constructor(
    private entriesService: EntriesService,
    private activatedRoute: ActivatedRoute
  ) { }

  id: any;
  entrie: any;

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params=>{
        this.id = params.id;
        this.entriesService.getSingleEntry(this.id)
          .subscribe(entry=>{
            this.entrie = entry;
          });
      });
  }

}