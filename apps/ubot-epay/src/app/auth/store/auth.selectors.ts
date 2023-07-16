import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Books } from '../types/login.interface';

export const selectBooks = createFeatureSelector<Books[]>('mybooks');

export const isAnonymousSelector = createSelector(
  selectBooks,
  (authState: Books[]) => authState[0]?.isLoggedIn === false || false
);
