# React full header
[![Build Status](https://travis-ci.com/danilosales/react-full-header.svg?branch=master)](https://travis-ci.com/danilosales/react-full-header)

![A gif with header containing video](https://media.giphy.com/media/KxtwWZuIeraPGrz1xi/giphy.gif)

## Demo

[Live examples](https://danilosales.github.io/react-full-header/)

## Basic Usage

```jsx
import FullHeader from 'react-full-header';

...
render() {
    return (
        <FullHeader
            title="Hello World"
            subtitle="Welcome to full header component"
            bgColor="#EBE9EB"
            textColor="#3299BB"
            font="Lobster"
            video="videos/my_video.mp4"
        />
    );
}
...
```

## Props

- `title` (string) - main title
- `subtitle` (string) - subtitle
- `bgColor` (string) - background color
- `bgImg` (string) - image to background
- `video` (string) - video to background
- `textColor` (string) - texts color
- `font` (string) - font-family to texts

## Architecture

We've developed this component using the following boilerplate:
[lyef-react-component](https://github.com/lyef/lyef-react-component).

## License

[MIT License](https://github.com/danilosales/react-full-header/blob/master/LICENSE.md)
