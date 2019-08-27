import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GpSearchService {

  public baseUrl: String = 'http://localhost:8000';

  constructor(
    private http: HttpClient,

  ) { }

  createTicket(ticket): Observable<any> {
    return this.http.post(`${this.baseUrl}/college/save`, ticket);
  }

  searchMultiple(ticket: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/college/search?${ticket}`);
  }

  getAllfeilds(): Observable<any> {
    return this.http.get(`${this.baseUrl}/college/get`);

  }

  getTicketById(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/college/getById/${id}`);
  }

  updateTicket(data): Observable<any> {
    return this.http.put(`${this.baseUrl}/college/update`, data);
  }

  deleteTicket(id) {
    return this.http.delete(`${this.baseUrl}/college/delete/${id}`);

  }


}



//sample code--->>


//   singleSearchField(ticket: any): Observable<any> {
//     return this.http.get(`${this.baseUrl}/ticket/getSingleFeild?${ticket}`);

//   }


//   searchMultiple(ticket: any): Observable<any> {
//     console.log('i am ticker --->>', ticket);
//     return this.http.get(`${this.baseUrl}/gpsearch/search?${ticket}`);

//     // return this.http.get(`${this.baseUrl}/ticket/getManyFeilds?${ticket}`);
//   }

//   getAllfeilds(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/ticket/gelAll`);
//     return this.http.get(`${this.baseUrl}/gpsearch/get`);



//   }

// }

// searchMultiple(ticket:any): Observable<any> {
//   return this.http.get(
// }

// for (const [key, value] of Object.entries(ticket)) {
//   console.log('keyy--->>', key);
//   console.log('value --->>', value);
//   return this.http.get(`${this.baseUrl}/ticket/getSingleFeild?${key}=${value}`);

// }

// searchMultiple(ticket: any): Observable<any> {
//   for (const [key, value] of Object.entries(ticket)) {
//     console.log('keyy--->>', key);
//     console.log('value --->>', value);
//     return this.http.get(
//       `${this.baseUrl}/ticket/getManyFeilds?${key}=${value}`);
//   }
// }


//   searchMultiple(ticket:any): Observable<any> {
//     return this.http.get(
//       `${this.baseUrl}/ticket/getManyFeilds?${ticket.key}=${ticket.value}${tick}`);
//   }
