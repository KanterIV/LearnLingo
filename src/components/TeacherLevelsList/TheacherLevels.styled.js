import styled from "styled-components";

export const StyledTeacherLevels = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;

  .level-list-item {
    padding: 8px 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;

    border: 1px solid var(--secondary-gray);
    border-radius: 35px;
  }
`;
