import { useEffect } from 'react';
import { baseURL } from '../api/config';
import { Comment, Loader } from '../components';
import { fakeData } from '../fakeData';
import { useCommentFetch } from '../hooks/comment';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addComment, toggleFavorite } from '../store/reducer/comment';
import { List } from '../style/List';

const CommentList = () => {
  const dispath = useAppDispatch();
  const { comments, favorites, lastId } = useAppSelector((state) => state.commentReducer);
  const { status, comments: userComments } = useCommentFetch(baseURL,lastId,5000 );

  useEffect(() => {
    dispath(addComment(fakeData));
  }, [dispath]);

  useEffect(() => {
    dispath(addComment(userComments));
  }, [userComments, dispath]);

  const toggle = (id: string): void => {
    dispath(toggleFavorite(id));
  };

  const isFavorite = (id: string) => {
    return favorites.includes(id);
  };

  return (
    <>
      {status ? <Loader /> : null}
      <List>
        {comments?.map((comment) => (
          <li key={comment.id}>
            <Comment
              id={comment.id}
              date={new Date(comment.date)}
              author={comment.author}
              content={comment.content}
              attachments={comment.attachments}
              favorite={isFavorite(comment.id)}
              toggle={toggle}
            />
          </li>
        ))}
      </List>
    </>
  );
};

export default CommentList;
