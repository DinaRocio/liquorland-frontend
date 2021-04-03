import styled from "@emotion/styled";
import { colors } from "../ui";

const SubTitleStyled = styled.h4`
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.dark0};
`;

const SubTitleGrayStyled = styled(SubTitleStyled)`
  color: ${colors.gray};
`;

const TitleL = styled.h2`
  font-style: italic;
  font-weight: normal;
  font-size: 24px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: ${colors.dark0};
`;

const TextM = styled.p`
  font-style: italic;
  font-weight: normal;
  font-size: 24px;
  line-height: 18px;

  letter-spacing: 0.1px;
  color: ${colors.dark0};
`;

const TextS = styled(TextM)`
  font-size: 13px;
  line-height: 21px;
  color: ${colors.gray};
`;

const TextXS = styled(TextM)`
  font-size: 11px;
  line-height: 18px;
  color: ${colors.gray};
`;

export { SubTitleStyled, SubTitleGrayStyled, TitleL, TextM, TextS, TextXS };
