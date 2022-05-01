import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setSort } from '../store/reducer/comment';
import { Form } from '../style/Form';
import { Select } from '../style/Select';

const CommentSort = () => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state) => state.commentReducer);

  const onSortSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(e.target.value));
  };

  return (
    <Form>
      <legend>Sort order</legend>
      <p>The feed will be sorted on the first update</p>
      <Select onChange={onSortSelected} value={sort}>
        <option value='ASC'>Ascending</option>
        <option value='DESC'>Descending</option>
      </Select>
    </Form>
  );
};

export default CommentSort;
