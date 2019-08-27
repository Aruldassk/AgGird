import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GpSearchService } from '../gp-search/gp-search.service';

@Component({
  selector: 'app-gp-search',
  templateUrl: './gp-search.component.html',
  styleUrls: ['./gp-search.component.scss']
})
export class GpSearchComponent implements OnInit {


  public ticket: any = {
    name: '',
    description: '',
    type: '',
    ticketStatus: '',
  };

  columnDefs = [
    { headerName: 'name', field: 'name', with: 200, sortable: true, filter: true },
    { headerName: 'description', field: 'description', with: 200, sortable: true, filter: true },
    { headerName: 'type', field: 'type', with: 200 },
    { headerName: 'ticketstatus', field: 'ticketstatus', with: 200 },
    {
      headerName: 'Actions', field: 'delete', cellRenderer: function (params) {
        return '<button style="color:red">remove<i class="fa fa-trash-o"></i></button>';
      }
    }

  ];
  public rowData: any;


  constructor(
    private searchService: GpSearchService,
    private route: Router
  ) { }



  ngOnInit() {
    console.log('i am onIint');
    this.getAll();
  }



  onCellClicked(event) {
    if (event.colDef.field === 'delete') {
      this.searchService.deleteTicket(event.data._id).subscribe(response => {
        if (response) {
          this.getAll();
        }
      });
    }
    if (event.colDef.field !== 'delete') {
      this.route.navigate(['aggird'], { queryParams: { id: event.data._id } });
    }

  }
  public getAll() {
    this.searchService.getAllfeilds().subscribe(data => {
      console.log('i am data ----->>>', data);
      this.rowData = data;
    });
  }

  onRowClicked(event) {
    this.route.navigate(['aggird'], { queryParams: { id: event.data._id } });

  }
  deleteRow() {
    console.log('i am delete --->>>')
  }


  searchMultipleFileds() {
    const tempObj: any = {};
    if (this.ticket.name) {
      tempObj.name = this.ticket.name;
    }
    if (this.ticket.description) {
      tempObj.description = this.ticket.description;
    }
    if (this.ticket.type) {
      tempObj.type = this.ticket.type;
    }
    if (this.ticket.ticketStatus) {
      tempObj.ticketstatus = this.ticket.ticketStatus;

    }

    if (Object.keys(tempObj).length !== 0) {
      const tempArray = [];
      Object.keys(tempObj).forEach(key => {
        const test = `${key}=${tempObj[key]}`;
        tempArray.push(test);
      });
      const result = tempArray.join('&');
      this.searchService.searchMultiple(result).subscribe(response => {
        this.rowData = response;
      });
    }

  }
}




  // search(ticket) {
  //   const tempObj: any = {};
  //   if (this.ticket.name) {
  //     tempObj.name = this.ticket.name;
  //   }
  //   if (this.ticket.description) {
  //     tempObj.description = this.ticket.description;
  //   }
  //   if (this.ticket.type) {
  //     tempObj.type = this.ticket.type;
  //   }
  //   if (this.ticket.ticketStatus) {
  //     tempObj.ticketstatus = this.ticket.ticketStatus;

  //   }
  //   Object.keys(tempObj).forEach(key => {
  //     const singleSearch = `${key}=${tempObj[key]}`;
  //     console.log('i am data ====>>', singleSearch);
  //     this.searchService.singleSearchField(singleSearch).subscribe(response => {
  //       this.ticket = '';
  //       this.rowData = response;
  //     });

  //   });
  // }

//   searchMultipleFileds(ticket) {
//     console.log('i am calling');
//     console.log('ticket--->>', ticket);
//     if (ticket.name) {
//       this.multipleTicket.name = ticket.name;
//     }
//     if (ticket.description) {
//       this.multipleTicket.description = ticket.description;
//     }
//     if (ticket.type) {
//       this.multipleTicket.type = ticket.type;
//     }
//     if (ticket.ticketStatus) {
//       this.multipleTicket.ticketstatus = ticket.ticketStatus;
//     }
//     if (Object.keys(this.multipleTicket).length !== 0) {
//       const tempArray = [];
//       Object.keys(this.multipleTicket).forEach(key => {
//         const test = `${key}=${this.multipleTicket[key]}`;
//         tempArray.push(test);
//       });
//       const result = tempArray.join('&');
//       this.searchService.searchMultiple(result).subscribe(response => {
//         console.log('response -->>', response);
//         this.ticket = '',
//         this.rowData = response;
//       });
//     }

//   }
// }





// search() {
//   if (this.name ==) {
//     console.log('condtion--called--name')
//     const tempObj = {
//       name: this.name,
//     };
//     this.serviceCall(tempObj);
//   }
//   if (this.description !== this.description) {
//     console.log('condtion--called--description')

//     const tempObj = {
//       description: this.description,
//     };
//     this.serviceCall(tempObj);
//   }
//   if (this.type !== this.type) {
//     console.log('condtion--called--type')

//     const tempObj = {
//       type: this.type,
//     };
//     this.serviceCall(tempObj);
//   }
//   if (this.ticketStatus !== this.ticketStatus) {
//     console.log('condtion--called--ticketStatus')

//     const tempObj = {
//       ticketStatus: this.ticketStatus,
//     };
//     this.serviceCall(tempObj);
//   }

// }

// public serviceCall(data) {
  // console.log('i am entraies -->>', data)
  // this.searchService.singleSearchField(data).subscribe(response => {
  //   this.name = '',
  //     this.rowData = response;
  //   console.log('i am response --->>', response);
  // });

// }



// for(const [key, value] of Object.entries(data)) {
//   console.log("data --->>>>",key, value);
// }
// console.log('i am dataa ---serice -->>', data);
// console.log('object--->>', Object.keys([data]));
// JsonObj[key] === "Keyvalue"
// console.log('object--->>', Object.keys(data));

// console.log('i ma data -keyy-->>', tempObj[key] === "value")

//   console.log('respones -->>', response);
// });


 // for(const [key, value] of Object.entries(data)) {
  //   console.log("data --->>>>",key, value);
  // }
  // console.log('i am dataa ---serice -->>', data);
  // console.log('object--->>', Object.keys([data]));
  // JsonObj[key] === "Keyvalue"
  // console.log('object--->>', Object.keys(data));

  // console.log('i ma data -keyy-->>', tempObj[key] === "value")

  //   console.log('respones -->>', response);
  // });
  // }

//second try====

      // const arrayData =[];
    //   arrayData.push(this.multipleTicket);
    //   console.log('data---array--->>>', arrayData);


      // arrayData.forEach(data => {
      //   Object.keys(data).forEach(key => {
      //     console.log('key -######-->>', key);
      //     console.log('value--****-->>', data[key]);
      //     console.log('& symbole --->>',  arrayData.join('&') );
      //   })
      // })

  //   Object.keys(this.multipleTicket).forEach(key => {

  //     let ticketLength = Object.keys(this.multipleTicket).length;

  //     console.log('key--length--->>', ticketLength);
  //     console.log('key', key);
  //     console.log('value',this.multipleTicket[key]);


  // });

    // for (const [key, value] of Object.entries(this.multipleTicket)) {
    //   console.log('keyy--->>', key);
    //   console.log('value --->>', value);
    // }
    // console.log('ticket---name --->>', this.multipleTicket);
