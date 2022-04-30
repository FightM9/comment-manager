import { AiOutlineUser } from 'react-icons/ai';
import { AvatarContainer, AvatarImage, AvatarLabel } from './Avatar.style';

interface AvatarProps {
  label?: string;
}

const Avatar = ({ label }: AvatarProps) => {
  return (
    <AvatarContainer>
      <AvatarImage>
        <AiOutlineUser />
      </AvatarImage>
      <AvatarLabel>{label}</AvatarLabel>
    </AvatarContainer>
  );
};

export default Avatar;
