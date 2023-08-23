import { StoryFn } from '@storybook/react';

import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';


export const StyleDecorator = (StoryComponent: StoryFn) => <StoryComponent />;
