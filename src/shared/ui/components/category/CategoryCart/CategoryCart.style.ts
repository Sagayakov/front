import styled from 'styled-components';

export const CategoryCartStyle = styled.div<{ gridName: string; width: string }>`
  width: ${(prpos) => prpos.width};
  height: 145px;
  padding: 24px 13px 20.5px 24px;
  border: 1px solid var(--main-blue);
  border-radius: 8px;
  grid-area: ${(props) => props.gridName};
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
