import { Component, OnInit } from '@angular/core';
import { GpSearchService } from '../gp-search/gp-search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ag-gird',
  templateUrl: './ag-gird.component.html',
  styleUrls: ['./ag-gird.component.scss']
})
export class AgGirdComponent implements OnInit {

  public ticket: any = {
    name: '',
    description: '',
    type: '',
    ticketstatus: ''
  };


  public ticketId: any;
  public edit: boolean;

  public isChecked: boolean;

  constructor(
    private searchService: GpSearchService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.id !== undefined) {
        this.ticketId = params.id;
        this.edit = true;
        this.tikectById();
      }
    });
  }

  public tikectById() {
    console.log('i ma id -==>>', this.ticketId);
    this.searchService.getTicketById(this.ticketId).subscribe(response => {
      console.log('response -->>>', response[0]);
      this.ticket = response[0];
    });

  }


  onBlur() {
    console.log('blur');
  }

  onFocus() {
    console.log('on focues--->>>>>');
  }

  keyUpFunction(event){
    console.log('event--ddasdada->>', );
    console.log('event--->>', event);
    console.log('event--->>', event);
  }



  genderMale(event) {
    this.ticket.type = event;
   }

  genderFemale(event) {
    this.ticket.type = event;

  }

  submit() {
    console.log('this.tciket===>>>', this.ticket);
    this.searchService.createTicket(this.ticket).subscribe(response => {
      this.router.navigate(['search']);
      console.log('i am response --->>', response);
    });
  }

  update() {
    this.searchService.updateTicket(this.ticket).subscribe(response => {
      if (response) {
        this.router.navigate(['search']);
      }
    });
  }

}
