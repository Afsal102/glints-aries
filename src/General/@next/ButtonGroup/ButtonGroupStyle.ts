import React from 'react';
import styled from 'styled-components';
import { borderRadius4 } from '../../../Utils/@next/borderRadius';
import { B68 } from '../../../Utils/@next/colors/neutral';
import { space8 } from '../../../Utils/@next/spacing';

export interface ButtonGroupProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  segmented?: boolean;
  fullWidth?: boolean;
}

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  > button {
    z-index: 1;
  }
  ${({ segmented }: ButtonGroupProps) =>
    segmented
      ? `> button {
            border-radius: 0;
            border-right: 0;
            
            :nth-child(1) {
             border-radius: ${borderRadius4} 0px 0px ${borderRadius4};  
            }

            :nth-last-child(1) {
             border-radius: 0px ${borderRadius4} ${borderRadius4} 0px;
             border-right: 1px solid ${B68}
            }
           }`
      : `gap: ${space8};`}
  ${({ fullWidth }: ButtonGroupProps) =>
    fullWidth
      ? `> button {
             flex: 1;
             }`
      : ``}
`;