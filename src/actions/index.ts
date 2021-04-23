import { article } from '../reducer';
export const ADD_ARTICLE:string = 'ADD_ARTICLE';

export const addArticle = (payload: article) => {
  return { type: ADD_ARTICLE, payload }
}