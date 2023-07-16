import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Books } from '../../types/login.interface';

export const BooksAPIActions = createActionGroup({
  source: '[Books API]',
  events: {
    'Invoke Books Fetch API': emptyProps(),
    'Fetch API Success': props<{ allBooks: Books[] }>(),
    'Inovke save new book api': props<{ newBook: Books }>(),
    'Save new book api success': props<{ newBook: Books }>(),
    'Inovke update book api': props<{ updateBook: Books }>(),
    'Update  book api success': props<{ updateBook: Books }>(),
    'Inovke delete book api': props<{ id: number }>(),
    'Deleted book api success': props<{ id: number }>(),
  },
});
