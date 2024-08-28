import {Component} from '@angular/core';
import {CommunityEvent} from "../../models/community-event.model";
import {ActivatedRoute} from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
})
export class EventItemComponent {
  event: CommunityEvent;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.event = this.route.snapshot.data['event'];
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
