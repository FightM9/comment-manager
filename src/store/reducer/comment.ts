import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentType } from '../../api/config';

const getLastId = (comment: CommentType[]) => {
  return comment?.reduce(
    (max, comment) =>
      Number(comment.id) > max ? (max = Number(comment.id)) : max,
    0
  );
};

interface CommentState {
  comments: CommentType[];
  lastId: string | number;
  favorites: string[];
  sort: 'DESC' | 'ASC';
}

const initialState = {
  comments: [],
  lastId: '0',
  favorites: [],
  sort: 'DESC',
} as CommentState;

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComment: (state, action) => {
      state.comments = action.payload;
      state.lastId = getLastId(state.comments);
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    addComment: (state, action) => {
      state.comments = [...state.comments, ...action.payload];
      state.lastId = getLastId(state.comments);
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.includes(action.payload)
        ? state.favorites.filter((id) => id !== action.payload)
        : [...state.favorites, action.payload];
    },
  },
});

export const { setComment, addComment, toggleFavorite, setSort } =
  commentSlice.actions;
export default commentSlice.reducer;
