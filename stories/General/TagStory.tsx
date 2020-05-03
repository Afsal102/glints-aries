import * as React from 'react';
import styled from 'styled-components';

import StorybookComponent from '../StorybookComponent';

import Divider from '../../src/General/Divider';
import Heading from '../../src/General/Heading';
import Tag from '../../src/General/Tag';
import { AddIcon, CloseIcon } from '../../src/General/Icon/components';

const TagContainer = styled.span`
  margin-right: 15px;
`;

const TagTypeStory = () => {
  const props = {
    Tag: [
      {
        name: 'block',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Sets Badge into block style.',
      },
      {
        name: 'outline',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Sets Badge into outline style.',
      },
      {
        name: 'borderStyle',
        type: 'string',
        defaultValue: <code>solid</code>,
        possibleValue: <code>solid | dashed | none</code>,
        require: 'no',
        description: "Sets Badge's border style.",
      },
    ],
  };
  return (
    <StorybookComponent
      title="Tag"
      code="import { Tag } from 'glints-aries'"
      propsObject={props}
      usage={`<Tag>Default</Tag>
<Tag block>Block</Tag>
<Tag outline>Outline</Tag>
<Tag block outline>Block and Outline</Tag>`}
    >
      <Heading>Types</Heading>
      <TagContainer>
        <Tag>Default</Tag>
      </TagContainer>
      <TagContainer>
        <Tag block>Block</Tag>
      </TagContainer>
      <TagContainer>
        <Tag outline>Outline</Tag>
      </TagContainer>
      <TagContainer>
        <Tag block outline>
          Block and Outline
        </Tag>
      </TagContainer>
      <TagContainer>
        <Tag borderStyle="dashed">Dashed border</Tag>
      </TagContainer>
      <TagContainer>
        <Tag borderStyle="none">None border</Tag>
      </TagContainer>
    </StorybookComponent>
  );
};

const TagThemeStory = () => {
  const props = {
    Tag: [
      {
        name: 'theme',
        type: 'string',
        defaultValue: <code>grey</code>,
        possibleValue: <code>red | black</code>,
        require: 'no',
        description: 'Sets theme of Badge.',
      },
    ],
  };
  return (
    <StorybookComponent
      propsObject={props}
      usage={`<Tag>Grey (Default)</Tag>
<Tag theme="red">Red</Tag>
<Tag theme="black">Black</Tag>
`}
    >
      <Heading>Themes</Heading>
      <div style={{ display: 'flex' }}>
        <div style={{ textAlign: 'center', marginRight: '2em' }}>
          <TagContainer>
            <Tag>Grey (Default)</Tag>
          </TagContainer>
          <TagContainer>
            <Tag theme="red">Red</Tag>
          </TagContainer>
          <TagContainer>
            <Tag theme="black">Black</Tag>
          </TagContainer>
        </div>
      </div>
    </StorybookComponent>
  );
};

const ClickableTagStory = () => {
  const usage = `<Tag>Non-clickable tag</Tag>
<Tag startIcon={<AddIcon onClick={() => alert('Clicked!')} />}>Clickable icon</Tag>
<Tag endIcon={<CloseIcon onClick={() => alert('Clicked!')} />}>Clickable icon</Tag>
<Tag onClick={() => alert('Clicked!')}>Clickable tag</Tag>`;
  const propsObject = {
    Tag: [
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
      {
        name: 'onClick',
        type: 'function',
        defaultValue: '-',
        possibleValue: 'function',
        require: 'no',
        description: 'Make the whole tag is clickable',
      },
    ],
  };

  return (
    <StorybookComponent usage={usage} propsObject={propsObject}>
      <Heading>Clickable Area</Heading>
      <TagContainer>
        <Tag>Non-clickable tag</Tag>
      </TagContainer>
      <TagContainer>
        <Tag startIcon={<AddIcon onClick={() => alert('Clicked!')} />}>
          Clickable icon
        </Tag>
      </TagContainer>
      <TagContainer>
        <Tag endIcon={<CloseIcon onClick={() => alert('Clicked!')} />}>
          Clickable icon
        </Tag>
      </TagContainer>
      <TagContainer>
        <Tag onClick={() => alert('Clicked!')}>Clickable tag</Tag>
      </TagContainer>
    </StorybookComponent>
  );
};

const TagStories = () => (
  <React.Fragment>
    <TagTypeStory />
    <Divider theme="grey" />
    <TagThemeStory />
    <Divider theme="grey" />
    <ClickableTagStory />
  </React.Fragment>
);

export default TagStories;
