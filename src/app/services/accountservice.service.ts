import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { account } from '../models/account';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AccountserviceService {

    private accountsURL: string = 'http://localhost:8080/api/accounts';
    constructor(private http: HttpClient) { }

    getAccountList(): Observable<account[]> {
        return this.http.get<account[]>('http://localhost:8080/api/accounts')
            .pipe(tap(data => console.log(data),
                erro => this.handleError(erro)));
    }

    putWithdrawal(account: account): Observable<any> {
        return this.http.put<any>('http://localhost:8080/api/accounts/:' + account.account_number, account)
            .pipe(tap(data => console.log(data),
                erro => this.handleError(erro)));
    }

    getAccountsBalance(listOfAccounts: account[]): number{
        let balance: number =0;         
        listOfAccounts.forEach(item =>{
            balance+=parseFloat(item.balance);
        })
        return balance;
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';

        if (err.error instanceof ErrorEvent) {
            errorMessage = 'An Error occured: ' + err.error.message;
        } else {
            errorMessage = 'Server returned code :' + err.status, 'error message: ' + err.message;
        }
        console.log(errorMessage)
        return throwError(errorMessage);
    }
}