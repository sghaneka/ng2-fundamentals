import { Component } from '@angular/core'
import { EventService } from './shared/event.service'
import { OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event">
                </event-thumbnail>
            </div>
        </div>        
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me</button>
    </div>    
    `
})

export class  EventsListComponent implements OnInit {

    events:any

    constructor(private eventService: EventService, 
    private toastr: ToastrService,
    private route:ActivatedRoute
    ){
      
    }

    ngOnInit(){
    //   this.eventService.getEvents().subscribe(events => {
    //       this.events = events
    //   })
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName){
      this.toastr.success(eventName)
    }
}
