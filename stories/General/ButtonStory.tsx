import * as React from 'react';
import styled from 'styled-components';

import StorybookComponent from '../StorybookComponent';
import Button, {
  DeprecatedThemeMap,
  DeprecatedSecondayVariant,
} from '../../src/General/Button';
import Heading from '../../src/General/Heading';
import Divider from '../../src/General/Divider';
import {
  ViewIcon,
  ArrowRoundForwardIcon,
} from '../../src/General/Icon/components';

import { Variant, Theme } from '../../src/Utils/StyleConfig';

const ButtonStories = () => (
  <React.Fragment>
    <ButtonVariantStory />
    <Divider theme="grey" />
    <ButtonDisableStory />
    <Divider theme="grey" />
    <ButtonSizeStory />
    <Divider theme="grey" />
    <ButtonThemeStory />
    <Divider theme="grey" />
    <ButtonWithIconStory />
    <Divider theme="grey" />
    <ButtonWithTagStory />
    <Divider theme="grey" />
    <ButtonRemoveHoverEffectStory />
    <Divider theme="grey" />
    <SecondaryButtonStory />
  </React.Fragment>
);

const ButtonVariantStory = () => {
  const usage = `/* Default Button */
<Button>${Variant.DEFAULT}</Button>

/* Primary Button */
<Button variant="${Variant.PRIMARY}">${Variant.PRIMARY}</Button>

/* Ghost Button */
<Button variant="${Variant.GHOST}">${Variant.GHOST}</Button>

/* Link Button */
<Button variant="${Variant.LINK}">${Variant.LINK}</Button>
`;
  const propsObject = {
    All: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: `"${Variant.DEFAULT}"`,
        possibleValue: `${Object.values(Variant)
          .map(value => `"${value}"`)
          .join(' | ')}`,
        require: 'no',
        description: "Sets the Button's type.",
      },
    ],
  };
  return (
    <StorybookComponent
      title="Button"
      code="import { Button } from 'glints-aries'"
      usage={usage}
      propsObject={propsObject}
    >
      <Heading>Variants</Heading>
      <h3></h3>
      <ButtonRow>
        <Button>{Variant.DEFAULT}</Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={Variant.PRIMARY}>{Variant.PRIMARY}</Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={Variant.GHOST}>{Variant.GHOST}</Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={Variant.LINK}>{Variant.LINK}</Button>
      </ButtonRow>
    </StorybookComponent>
  );
};

const ButtonDisableStory = () => {
  const usage = `/* Default Button */
<Button disabled>${Variant.DEFAULT}</Button>

/* Primary Button */
<Button variant="${Variant.PRIMARY}" disabled>${Variant.PRIMARY}</Button>

/* Ghost Button */
<Button variant="${Variant.GHOST} disabled">${Variant.GHOST}</Button>
`;
  const propsObject = {
    'Default Button, Primary Button, Ghost Button': [
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Sets Button to disable state.',
      },
    ],
  };
  return (
    <StorybookComponent usage={usage} propsObject={propsObject}>
      <Heading>Disabled</Heading>
      <h3></h3>
      <ButtonRow>
        <Button disabled>{Variant.DEFAULT}</Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={Variant.PRIMARY} disabled>
          {Variant.PRIMARY}
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={Variant.GHOST} disabled>
          {Variant.GHOST}
        </Button>
      </ButtonRow>
    </StorybookComponent>
  );
};

const ButtonSizeStory = () => {
  const usage = `/* Default Button */
<Button theme="${Theme.BLUE}" small>Small</Button>
<Button theme="${Theme.BLUE}">Normal</Button>
<Button theme="${Theme.BLUE}" block>Block</Button>

/* Primary Button */
<Button variant="${Variant.PRIMARY}" small>Small</Button>
<Button variant="${Variant.PRIMARY}">Normal</Button>
<Button variant="${Variant.PRIMARY}" block>Block</Button>

/* Ghost Button */
<Button variant="${Variant.GHOST}" small>Small</Button>
<Button variant="${Variant.GHOST}">Normal</Button>
<Button variant="${Variant.GHOST}" block>Block</Button>
`;
  const propsObject = {
    'Default Button, Primary Button, Ghost Button': [
      {
        name: 'small',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Sets Button to small version.',
      },
      {
        name: 'block',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Make the button fit to its parent width.',
      },
    ],
  };

  return (
    <StorybookComponent usage={usage} propsObject={propsObject}>
      <Heading>Sizes</Heading>
      <ButtonRow>
        <Button theme={Theme.BLUE} small>
          Small
        </Button>
        <Button theme={Theme.BLUE}>Normal</Button>
        <BlockButtonContainer>
          <Button theme={Theme.BLUE} block>
            Block
          </Button>
        </BlockButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <Button variant={Variant.PRIMARY} small>
          Small
        </Button>
        <Button variant={Variant.PRIMARY}>Normal</Button>
        <BlockButtonContainer>
          <Button variant={Variant.PRIMARY} block>
            Block
          </Button>
        </BlockButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <Button variant={Variant.GHOST} small>
          Small
        </Button>
        <Button variant={Variant.GHOST}>Normal</Button>
        <BlockButtonContainer>
          <Button variant={Variant.GHOST} block>
            Block
          </Button>
        </BlockButtonContainer>
      </ButtonRow>
    </StorybookComponent>
  );
};

const ButtonThemeStory = () => {
  const usage = `<Button theme="${Theme.BLUE}">Blue</Button>
<Button theme="${Theme.WHITE}">White</Button>
`;

  const propsObject = {
    'Default Button': [
      {
        name: 'theme',
        type: 'string',
        defaultValue: '"white"',
        possibleValue: '"white" | "blue"',
        require: 'no',
        description: "Sets the Button's theme",
      },
    ],
  };

  return (
    <StorybookComponent usage={usage} propsObject={propsObject}>
      <Heading>Themes</Heading>
      <ButtonRow>
        <Button theme={Theme.BLUE}>{Theme.BLUE}</Button>
        <Button theme={Theme.WHITE}>{Theme.WHITE}</Button>
      </ButtonRow>
      <Heading style={{ fontSize: '20px' }}>Deprecated themes</Heading>
      The following themes will be deprecated in v5 after we refactor out all
      uses of them in our codebases, so please avoid using them altogether.
      {Object.keys(DeprecatedThemeMap).map(variant => (
        <ButtonRow key={variant}>
          {DeprecatedThemeMap[variant].map(theme => (
            <Button key={theme} variant={variant} theme={theme}>
              {theme}
            </Button>
          ))}
        </ButtonRow>
      ))}
    </StorybookComponent>
  );
};

const ButtonWithIconStory = () => {
  const usage = `/* Default Button */
<Button startIcon={<ViewIcon />}>Button</Button>
<Button endIcon={<ArrowRoundForwardIcon />}>Button</Button>

/* Primary Button */
<Button variant="${Variant.PRIMARY}" startIcon={<ViewIcon />}>Button</Button>
<Button variant="${Variant.PRIMARY}" endIcon={<ArrowRoundForwardIcon />}>Button</Button>

/* Ghost Button */
<Button variant="${Variant.GHOST}" startIcon={<ViewIcon />}>Button</Button>
<Button variant="${Variant.GHOST}" endIcon={<ArrowRoundForwardIcon />}>Button</Button>`;
  const propsObject = {
    All: [
      {
        name: 'startIcon',
        type: 'node',
        defaultValue: '-',
        possibleValue: 'any',
        require: 'no',
        description: 'Element placed before the children.',
      },
      {
        name: 'endIcon',
        type: 'node',
        defaultValue: '-',
        possibleValue: 'any',
        require: 'no',
        description: 'Element placed after the children.',
      },
    ],
  };

  return (
    <StorybookComponent usage={usage} propsObject={propsObject}>
      <Heading>Button with Icon</Heading>
      <ButtonRow>
        <Button theme={Theme.BLUE} startIcon={<ViewIcon />}>
          Button Icon Left
        </Button>
        <Button theme={Theme.BLUE} endIcon={<ArrowRoundForwardIcon />}>
          Button Icon Right
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={Variant.PRIMARY} startIcon={<ViewIcon />}>
          Button Icon Left
        </Button>
        <Button variant={Variant.PRIMARY} endIcon={<ArrowRoundForwardIcon />}>
          Button Icon Right
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={Variant.GHOST} startIcon={<ViewIcon />}>
          Button Icon Left
        </Button>
        <Button variant={Variant.GHOST} endIcon={<ArrowRoundForwardIcon />}>
          Button Icon Right
        </Button>
      </ButtonRow>
    </StorybookComponent>
  );
};

const ButtonWithTagStory = () => {
  const usage = `<Button tag="a">Button as Anchor</Button>`;
  const propsObject = {
    All: [
      {
        name: 'tag',
        type: 'string',
        defaultValue: '"button"',
        possibleValue: 'any valid html tag e.g. "a"',
        require: 'no',
        description: 'Changes the tag with which the button will render.',
      },
    ],
  };

  return (
    <StorybookComponent usage={usage} propsObject={propsObject}>
      <Heading>Button with Different Tag</Heading>
      <ButtonRow>
        <Button theme={Theme.BLUE} tag="a">
          Button as Anchor
        </Button>
      </ButtonRow>
      {Object.values(Variant).map(type => (
        <ButtonRow key={type}>
          <Button variant={type} tag="a">
            Button as Anchor
          </Button>
        </ButtonRow>
      ))}
    </StorybookComponent>
  );
};

const ButtonRemoveHoverEffectStory = () => {
  const usage = `/* Default Button */
<Button removeHoverEffect>${Variant.DEFAULT}</Button>

/* Ghost Button */
<Button variant="${Variant.GHOST} removeHoverEffect">${Variant.GHOST}</Button>
`;
  const propsObject = {
    'Default Button, Ghost Button': [
      {
        name: 'removeHoverEffect',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: "Removes Button's effect when hovered",
      },
    ],
  };
  return (
    <StorybookComponent usage={usage} propsObject={propsObject}>
      <Heading>Button without hovered background</Heading>
      <h3></h3>
      <ButtonRow>
        <Button removeHoverEffect>{Variant.DEFAULT}</Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={Variant.GHOST} removeHoverEffect>
          {Variant.GHOST}
        </Button>
      </ButtonRow>
    </StorybookComponent>
  );
};

const SecondaryButtonStory = () => (
  <StorybookComponent
    usage={`<Button
  variant="secondary"
>
  Secondary
</Button>`}
  >
    <div style={{ marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        [DEPRECATED] Secondary Button
      </Heading>
      <Button variant={DeprecatedSecondayVariant} onClick={() => null}>
        Secondary
      </Button>
    </div>
  </StorybookComponent>
);

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;

  > div {
    margin-right: 20px;
  }
`;

const BlockButtonContainer: React.FunctionComponent = ({ children }) => (
  <div style={{ flex: '0 0 40%' }}>{children}</div>
);

export default ButtonStories;
