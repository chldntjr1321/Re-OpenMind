import styled from 'styled-components';

const TextBox = styled.div`
  width: 336px;
  padding: 16px;
  background-color: var(--Grayscale-20);
  border-radius: 8px;

  & textarea {
    width: 336px;
    height: 140px;
    background-color: var(--Grayscale-20);
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    border: none;
    outline: none;
    resize: none;
  }
  & textarea::placeholder {
    color: var(--Grayscale-40);
  }
  &:focus-within {
    border: 1px solid var(--Brown-40);
  }
`;

export default function InputTextArea() {
  return (
    <>
      <TextBox>
        <textarea placeholder="이름을 입력하세요" />
      </TextBox>
    </>
  );
}
