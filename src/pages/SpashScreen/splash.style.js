import styled from "styled-components/native";

export const PageContainer = styled.View`
  flex: 1px;
  justify-content: center;
  align-items: center;
`;

export const HomeBarContainer = styled.View`
  position: absolute;
  left: 32.27%;
  right: 32%;
  top: 95.81%;
  bottom: 0%;
`

export const TextContainer = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.fill.dark.quaternary};
  font-weight: bold;
  left: 35.56%;
  right: 0%;
  top: 0%;
`;

export const TouchableHighlightContainer = styled.TouchableHighlight`
  height: 56px;
  width: 311px;
  border-radius: 16px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.fill.quaternary};
`;

export const NextTextContainer = styled.Text`
  color: white;
  text-align: center;
  font-size: 16px;
  margin-top: 15px;
`;