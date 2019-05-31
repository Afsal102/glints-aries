import * as React from 'react';

import { OmniSearchContainer, OmniSearchBar, OmniSearchBodyWrapper } from '../../Style/Input/OmniSearchStyle';
import OmniSearchBody from './OmniSearchBody';
import OmniSearchList from './OmniSearchList';
import OmniSearchItem from './OmniSearchItem';

class OmniSearch extends React.Component<Props, State> {
  static Body = OmniSearchBody;
  static List = OmniSearchList;
  static Item = OmniSearchItem;

  state = {
    isOpen: false,
  };

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const {
      label,
      children,
      className,
      content,
      value,
      ...defaultProps
    } = this.props;
    const { isOpen } = this.state;

    return (
      <OmniSearchContainer
        id="aries-omnisearch"
        className={className}
        role="search"
        aria-expanded={isOpen}
        aria-label={label}
      >
        <OmniSearchBar id="omnisearch-inputwrapper">
          <input
            type="text"
            placeholder={label}
            onFocus={this.handleOpen}
            onBlur={this.handleOpen}
            value={value}
            {...defaultProps}
          />
          { content }
        </OmniSearchBar>
        <OmniSearchBodyWrapper
          id="omnisearch-content"
          role="menuitem"
          aria-hidden={!isOpen && true}
          open={isOpen}
        >
          { children }
        </OmniSearchBodyWrapper>
      </OmniSearchContainer>
    );
  }
}

interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'content'> {
  label: string;
  children: React.ReactNode;
  content: React.ReactNode;
}

interface State {
  isOpen: boolean;
}

export default OmniSearch;