import { Details } from '../../style/Details';
import Avatar from '../Avatar/Avatar';
import { Favorite, HideMessage, SendMessage, Setting } from '../Icons/Icons';

import {
  ButtonGroupe,
  CommentAttachment,
  CommentCard,
  CommentContent,
  CommentHeader,
  CommentWraper,
  CommnetButton,
} from './Comment.style';

interface CommentProps {
  id: string;
  author?: string;
  content?: string;
  favorite?: boolean;
  date: Date;
  attachments: [{ type: 'image' | 'video'; url: string }];
  toggle: (id: string) => void;
}

const Comment = ({
  id,
  author,
  date,
  content,
  attachments,
  favorite = false,
  toggle,
}: CommentProps) => {
  const onClickFavorite = () => {
    toggle(id);
  };

  return (
    <CommentCard>
      <Avatar
        label={`${date.getHours()}:${String(date.getMinutes()).padStart(2,'0')}`}
      />
      <CommentWraper>
        <CommentHeader>
          <div>
            {author} - {id}
          </div>
          <ButtonGroupe>
            <CommnetButton disabled>
              <SendMessage />
            </CommnetButton>
            <CommnetButton disabled>
              <HideMessage />
            </CommnetButton>
            <CommnetButton disabled>
              <Setting />
            </CommnetButton>
            <CommnetButton onClick={onClickFavorite}>
              <Favorite fill={favorite} />
            </CommnetButton>
          </ButtonGroupe>
        </CommentHeader>
        <CommentContent>{content}</CommentContent>
        <CommentAttachment>
          {attachments.length ? (
            <Details>
              <summary>{attachments.map((a) => a.type).join(', ')}</summary>
              {attachments?.map((attachment) => (
                <a
                  key={Date.now()}
                  href={attachment.url}
                  target='_blank'
                  rel='noreferrer'
                >
                  {attachment.type === 'image' ? (
                    <img src={attachment.url} alt={`Attachment ${author} `} />
                  ) : null}
                  {attachment.type === 'video' ? (
                    <video src={attachment.url} />
                  ) : null}
                </a>
              ))}
            </Details>
          ) : null}
        </CommentAttachment>
      </CommentWraper>
    </CommentCard>
  );
};

export default Comment;
