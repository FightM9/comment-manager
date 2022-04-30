import { PageContainer } from './Container.style';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className = '' }: ContainerProps) {
  return <PageContainer>{children}</PageContainer>;
}

export default Container;
