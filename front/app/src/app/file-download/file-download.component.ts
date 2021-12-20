import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../classes/documents';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css']
})
export class FileDownloadComponent implements OnInit {
  @Input() document !: Document;

  ngOnInit(): void {
  }

}
