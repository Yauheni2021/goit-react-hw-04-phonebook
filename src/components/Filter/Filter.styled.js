import styled from "styled-components";

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${p => `${p.theme.space[3]}px`};
`;
export const FilterInput = styled.input`
  width: 50%;
  margin-top: ${p => `${p.theme.space[3]}px`};
  padding: ${p => `${p.theme.space[3]}px`};
  font-weight: ${p => p.theme.fontWeights.medium};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.large};
  line-height: ${p => p.theme.lineHeights.body};
`;
export const FilterForm = styled.form`
  width: 100%;
`;