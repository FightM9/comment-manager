import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentType } from '../../api/config';
import { removeDuplicatesById } from '../../helpers';

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
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    addComment: (state, action) => {
      let newComments = [...state.comments, ...action.payload];

      if (newComments.length) {  
 
        // Sort comment. Remove Duplicate.
        newComments = removeDuplicatesById(newComments.sort(
          (a, b) => parseInt(a.id) - parseInt(b.id)
        ));       

        state.lastId = newComments[newComments.length - 1].id;

        // Total comment limit. Remove old.
        if (newComments.length > 50) {
          newComments = newComments.slice(0, -50);
        }

        // Set sort order
        state.comments = state.sort === 'DESC' ? newComments.reverse() : newComments;
      }
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
