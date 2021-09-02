import { Component, OnInit } from '@angular/core';
import { account } from '../models/account';
import { AccountserviceService } from '../services/accountservice.service';

@Component({
  selector: 'app-accountsdisplay',
  templateUrl: './accountsdisplay.component.html',
  styleUrls: ['./accountsdisplay.component.css']
})
export class AccountsdisplayComponent implements OnInit {

  totalBalance: number = 0;
  pagetitle = 'Accounts Display';
  listOfAccounts: account[] = []
  errorMessage: string = '';
  constructor(private accountserviceService: AccountserviceService) { }

  ngOnInit(): void {
    this.accountserviceService.getAccountList()
      .subscribe({
        next: (accounts) => {
          this.listOfAccounts = accounts;
          this.getBalance();
        },
        error: err => this.errorMessage = err
      })
  }

  withdraw(account: account): void {   
    alert('Success');
    //Code similar to the below would be implemented to interact with the backend for Withdraw
    /*this.accountserviceService.putWithdrawal(account).subscribe({
      next: data => console.log(data),
      error: err => this.errorMessage = err
    });*/
  }

  getBalance() {
    this.totalBalance = this.accountserviceService.getAccountsBalance(this.listOfAccounts);
  }

  isWithDrawable(account: account): boolean {
    if ((account.account_type == 'savings' && parseFloat(account.balance) <= -20)
      || (account.account_type == 'cheque' && parseFloat(account.balance) <= -500)) {
      return true;
    }
    return false;
  }
}