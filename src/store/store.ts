import { configureStore } from '@reduxjs/toolkit';
import { commentSlice } from './reducer/comment';

const store = configureStore({
  reducer: {
    commentReducer: commentSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
