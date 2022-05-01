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
  sort: string;
}

const initialState = {
  comments: [],
  lastId: '0',
  favorites: [],
  sort: 'ASC',
} as CommentState;

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComment: (state, action) => {
      state.comments = action.payload;
      state.lastId = getLastId(state.comments);
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    addComment: (state, action) => {
      state.comments = [...state.comments, ...action.payload];
      state.lastId = getLastId(state.comments);

      // Sort comment
      const sorted = state.comments.sort(
        (a, b) => parseInt(a.id) - parseInt(b.id)
      );
      state.comments = state.sort === 'DESC' ? sorted.reverse() : sorted;
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
