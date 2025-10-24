import styled from 'styled-components';
import PersonIcon from '../assets/img/Person.svg';

const InputDiv = styled.div`
  width: 336px;
  padding: 12px 16px;
  display: flex;
  gap: 4px;
  border-radius: 8px;
  border: 1px solid var(--Grayscale-40);
  background: var(--Grayscale-10);
  & input {
    border: none;
    outline: none;
    color: var(--Grayscale-60);
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
  & input::placeholder {
    color: var(--Grayscale-40);
  }
  &:focus-within {
    border: 1px solid var(--Brown-40);
  }
`;

export default function InputFiled() {
  return (
    <>
      <InputDiv>
        <img src={PersonIcon} alt="사람 아이콘" />
        <input placeholder="이름을 입력하세요" />
      </InputDiv>
    </>
  );
}
