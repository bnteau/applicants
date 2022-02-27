import styled from '@emotion/styled';

const StyledHeader = styled.header`
  width: 80%;
  margin: auto;
  padding: 2em 0;
  border-bottom: 2px solid #13292a;

  .title {
    font-weight: bold;
    font-size: 2em;
    color: #13292a;
  }
`;

export default function Header(): JSX.Element {
  return (
    <StyledHeader>
      <h1 className="title">Applicants</h1>
    </StyledHeader>
  );
}
