import styled from 'styled-components';
import { ExecutableColor, LinkHoverColor } from '../../theme/home/Colors';

const Link = styled.a`
  color: ${ExecutableColor};
  text-decoration: none;
  &:hover {
    background-color: ${LinkHoverColor};
  }
`;

const Executable = ({ name, url, ...rest }) => {
  return (
    <span {...rest}>
      <Link href={url}>{name}</Link>*
    </span>
  );
};

export default Executable;
