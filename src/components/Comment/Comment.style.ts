import styled from 'styled-components';

export const CommentCard = styled.article`
  display: flex;
  padding: 1rem;
  background-color: var(--card-background-color);
  border-radius: 1px;
  overflow: hidden;
`;

export const CommentWraper = styled.div`
  width: 100%;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.625rem;
  color: var(--text-caption-color);
`;

export const CommentContent = styled.div`
  position: relative;
  flex: 1 1 auto;
  min-width: 1px;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  word-wrap: break-word;
`;
export const ButtonGroupe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
`;

export const CommnetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  font-size: 1.2rem;
  border: none;
  background: transparent;
  color: var(--text-caption-color);
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: inherit;
  }
`;

export const CommentAttachment = styled.div`
  & img,
  & video {
    height: 9rem;
    width: auto;
    object-fit: cover;
    background-color: var(--text-caption-color);
  }
`;
