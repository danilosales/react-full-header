import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('React Full Header', module)
    .add('with title', () => (
        <FullHeader title="TDD"/>
    ))
    .add('with title and subtitle', () => (
        <FullHeader title="TDD" subtitle="Hello World"/>
    ))
    .add('with title, subtitle, bgColor', () => (
        <FullHeader
            title="Hello World"
            subtitle="Welcome to full header component"
            bgColor="#EBE9EB"
        />
    ))
    .add('with title, subtitle, bgColor, textColor', () => (
        <FullHeader
            title="Hello World"
            subtitle="Welcome to full header component"
            bgColor="#EBE9EB"
            textColor="#3299BB"
        />
    ))
    .add('with title, subtitle, bgColor, textColor, font', () => (
        <FullHeader
            title="Hello World"
            subtitle="Welcome to full header component"
            bgColor="#EBE9EB"
            textColor="#3299BB"
            font="cursive"
        />
    ))
    .add('with title, subtitle, bgImg', () => (
        <FullHeader
            title="Hello World"
            subtitle="Welcome to full header component"
            textColor="#3299BB"
            bgImg="https://www.glacierguides.is/media/1830/glacier-3.jpg"
        />
    ))
    .add('with title, subtitle, video', () => (
        <FullHeader
            title="Hello World"
            subtitle="Welcome to full header component"
            textColor="#3299BB"
            video="https://github.com/danilosales/react-full-header/blob/master/video/video.mp4?raw=true"
        />
    ));
