import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Thing.stories';
const { Default } = composeStories(stories);

describe('Thing', () => {
  it('renders Thing with default args', () => {
    render(<Default />);
    const thingDefault = screen.getByText(/the snozzberries taste like snozzberries/i);

    expect(thingDefault).not.toBeNull();
  });
});
