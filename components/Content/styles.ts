import styled from '@emotion/styled';

export const StyledDrawerBody = styled.div`
.item {
  padding: 10px 0;
}

.email {
  text-decoration: underline;
  color: blue;
}

.subtitle {
  font-weight: bold;
}

.stars svg {
  cursor: pointer;
  margin-right: 5px;
}
`;

export const StyledContent = styled.div`
width: 80%;
margin: 2em auto;

& table tbody tr {
  cursor: pointer;
  &:hover {
    background-color: #e7ded9;
  }
}
`;