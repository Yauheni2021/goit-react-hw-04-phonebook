import styled from "styled-components";

export const PhonebookForm = styled.form`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: ${p => `${p.theme.space[3]}px`};
`;

export const PhonebookLabel = styled.label`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: ${p => `${p.theme.space[3]}px`};
font-size: ${p => p.theme.fontSizes.l}
`;

export const PhonebookInput = styled.input`
  width: 100%;
  margin-top: ${p => `${p.theme.space[3]}px`};
  padding: ${p => `${p.theme.space[3]}px`};
  font-weight: ${p => p.theme.fontWeights.medium};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.large};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes.m};
`;
export const ErrorText = styled.p`
  margin-top: ${p => `${p.theme.space[3]}px`};
  text-align: center;
  color: ${p => p.theme.colors.error};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const PhonebookButton = styled.button`
  padding: ${p => `${p.theme.space[2]}px`};
  margin-top: ${p => `${p.theme.space[3]}px`};
  width: ${p => `${p.theme.sizes[1]}px`};
  height: 32px;
  background-color: ${p => p.theme.colors.primary};
  :hover {
    background-color: ${p => p.theme.colors.accent};
  }
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.large};
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
`;