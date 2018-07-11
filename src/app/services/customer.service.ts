import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersUrl = 'api/customers';
  private contactsUrl = 'api/contacts';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getCustomers(): Observable<Object[]> {
    return this.httpClient.get<Object[]>(this.customersUrl, this.httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `error : ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      `Backend returned code ${error.status}, ` +
      `error : ${error.error}`);
  }
  /*
    handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        // TODO: better job of transforming error for user consumption
            // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  */

  getCustomer(_customerNo): Observable<any> {
    const reqUrl = `${this.customersUrl}/?customerNo=${_customerNo}`;
    return this.httpClient.get<any>(reqUrl, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateCustomer(customer): Observable<any> {
    const reqUrl = `${this.customersUrl}/?customerNo=${customer.customerNo}`;
    return this.httpClient.put(reqUrl, customer, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  addCustomer(customer): Observable<any> {
    const reqUrl = `${this.customersUrl}`;
    return this.httpClient.post(reqUrl, customer, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getContacts(customerNo): Observable<any> {
    const reqUrl = `api/contacts/?customerNo=${customerNo}`;
    return this.httpClient.get(reqUrl, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateContact(contact): Observable<any> {
    const reqUrl = `${this.contactsUrl}/?id=${contact.id}`;
    return this.httpClient.put(reqUrl, contact, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
