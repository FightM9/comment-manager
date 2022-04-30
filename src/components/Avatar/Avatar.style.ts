import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 2.25rem;
  margin-right: 0.75rem;
  text-align: center;
`;

export const AvatarImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  color: white;
  border-radius: 50%;
  background-color: #0098a6;
`;

export const AvatarLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text-caption-color);
  overflow: hidden;
`;
