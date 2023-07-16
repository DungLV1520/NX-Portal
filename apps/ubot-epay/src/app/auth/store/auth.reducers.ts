import { createFeature, createReducer, on } from '@ngrx/store';

import { Books } from '../types/login.interface';
import { BooksAPIActions } from './actions/login.action';

export const initialState: ReadonlyArray<Books> = [
  {
    id: 1,
    name: 'LD',
    author: 'LD',
    cost: 1,
    isLoggedIn: true,
  },
];

export const Feature = createFeature({
  name: 'mybooks',
  reducer: createReducer(
    initialState,
    on(BooksAPIActions.fetchAPISuccess, (state, { allBooks }) => {
      return allBooks;
    }),
    on(BooksAPIActions.saveNewBookApiSuccess, (state, { newBook }) => {
      const newState = [...state];
      newState.unshift(newBook);
      return newState;
    }),
    on(BooksAPIActions.updateBookApiSuccess, (state, { updateBook }) => {
      const newState = state.filter((_) => _.id != updateBook.id);
      newState.unshift(updateBook);
      return newState;
    }),
    on(BooksAPIActions.deletedBookApiSuccess, (state, { id }) => {
      const newState = state.filter((_) => _.id != id);
      return newState;
    })
  ),
});
