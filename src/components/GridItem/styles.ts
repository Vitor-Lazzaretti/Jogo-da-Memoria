import styled from "styled-components";

type ContainerProps = {
  showBackground: boolean;
}
export const Container = styled.div<ContainerProps>`
  background-color: ${props => props.showBackground ? '#1550ff' : '#e3e3e3'};
  height: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
`;

type IconProps = {
  opacity: string;
}
export const Icon = styled.img<IconProps>`
  width: 40px;
  height: 40px;
  opacity: ${props => props.opacity ?? '1'};
`;

