import styled from "styled-components";

const Root = styled.div``;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  padding: 10px;
`;

const EditDel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Styled = { Root, Item, EditDel };
