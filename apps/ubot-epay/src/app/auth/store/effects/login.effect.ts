import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { BooksAPIActions } from '../actions/login.action';
import { BooksService } from '../../services/auth.service';

@Injectable()
export class BooksEffect {
  constructor(private actions$: Actions, private booksService: BooksService) {}

  loadAllBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksAPIActions.invokeBooksFetchAPI),
      switchMap(() => {
        return this.booksService.get().pipe(
          map((data) => BooksAPIActions.fetchAPISuccess({ allBooks: data })),
          catchError((data) =>
            of(BooksAPIActions.fetchAPISuccess({ allBooks: data }))
          )
        );
      })
    )
  );
}
