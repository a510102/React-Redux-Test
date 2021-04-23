import { ADD_ARTICLE } from '../actions';

export type article = {
  id: number;
  title: string;
};

interface ArticlesState {
  articles: article[]; 
};

type actionType = {
  type: string;
  payload: any;
}

const initialState = {
  articles: [],
} as ArticlesState;

export const rootReducer = (state = initialState, action: actionType) => {
  switch(action.type) {
    case ADD_ARTICLE:
      return {...state, article: [...state.articles, action.payload]}
  }
  return state;
};
