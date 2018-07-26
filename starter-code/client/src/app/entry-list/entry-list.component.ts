import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [EntriesService]
})
export class EntryListComponent implements OnInit {

  constructor(private entriesService: EntriesService) { }

  entries: any;

  ngOnInit() {
    this.entriesService.getEntries()
      .subscribe(entries=>{
        this.entries = entries;
      });
  }

}