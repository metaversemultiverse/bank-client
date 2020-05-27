import styled from 'styled-components';
import { typography } from 'utils';

export const StyledWidget = styled.section`
  height: 95px;
  background-color: rgb(243, 243, 243);
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 16px 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledWidgetContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ noCenter }) => (noCenter ? 'baseline' : 'center')};
  height: 61px;
  width: 100%;
`;

export const StyledWidgetContentTypography = styled.div`
  width: 65%;
  height: 61px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.4;
`;

export const StyledWidgetContentTypographyHeader = styled.div`
  font-size: 18px;
`;

export const StyledWidgetContentTypographyMain = styled.div`
  font-size: 25px;
  font-weight: ${typography.fontWeightMedium};
`;

export const StyledWidgetContentTypographyMainUnit = styled.span`
  font-size: 16px;
  margin-left: 5px;
  font-weight: ${typography.fontWeightLight};
`;

export const StyledWidgetContentDescription = styled.div`
  font-size: 14px;
`;

export const StyledWidgetContentWidget = styled.div`
  width: 35%;
  display: flex;

  .recharts-wrapper {
    width: 100% !important;
    position: relative;
  }

  svg {
    width: 100%;
    height: 100%;

    &.recharts-surface {
      max-width: 74px;
      position: absolute;
      right: -6px;
    }
    max-width: ${({ svgFormat }) => svgFormat && '74px'};
  }
`;
