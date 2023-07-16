import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BooksAPIActions } from '../../store/actions/login.action';
import { selectBooks } from '../../store/auth.selectors';
import { Observable } from 'rxjs';
import { Books } from '../../types/login.interface';

@Component({
  selector: 'nx-portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSubmitting$!: Observable<Books[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log('aaa');
  }

  dispatch(): void {
    this.store.dispatch(BooksAPIActions.invokeBooksFetchAPI());
    this.isSubmitting$ = this.store.pipe(select(selectBooks));
    this.isSubmitting$.subscribe((data) => {
      console.log(data);
    });
  }
}
