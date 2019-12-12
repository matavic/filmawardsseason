import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-trailer-modal',
  templateUrl: './trailer-modal.component.html',
  styleUrls: ['./trailer-modal.component.css']
})
export class TrailerModalComponent implements OnInit {

  @Input() videoId;

  constructor(public activeModal: NgbActiveModal,
    private sanitizer: DomSanitizer){}

  ngOnInit() {
  }

  public sanitizeUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoId);
  }

}
