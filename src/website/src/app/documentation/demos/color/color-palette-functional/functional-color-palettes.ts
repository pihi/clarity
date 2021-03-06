/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export const LIGHT_THEME_COLOR_PALETTES = [
  {
    legend: 'Backgrounds and borders',
    colors: [
      { weight: '0', value: 'hsl(198, 0%, 100%)', text: 'dark' },
      { weight: '50', value: 'hsl(198, 0%, 98%)', text: 'dark' },
      { weight: '200', value: 'hsl(198, 0%, 93%)', text: 'dark' },
      { weight: '400', value: 'hsl(198, 0%, 80%)', text: 'dark' },
      { weight: '500', value: 'hsl(198, 0%, 60%)', text: 'dark' },
      { weight: '600', value: 'hsl(198, 0%, 45%)', text: 'light' },
      { weight: '700', value: 'hsl(198, 0%, 34%)', text: 'light' },
    ],
  },
  {
    legend: 'Row hover, selection',
    colors: [
      { weight: '200', value: 'hsl(198, 0%, 93%)', text: 'dark' },
      { weight: 'n/a', value: 'hsl(201, 29%, 88%) ', text: 'dark' },
    ],
  },
  {
    legend: 'Typography',
    colors: [
      { weight: '700', value: 'hsl(198, 0%, 34%)', text: 'light' },
      { weight: '900', value: 'hsl(198, 0%, 19%)', text: 'light' },
      { weight: '1000', value: 'hsl(198, 0%, 0%)', text: 'light' },
    ],
  },
  {
    legend: 'Buttons and app-level alerts',
    colors: [
      { weight: '600', value: 'hsl(198, 100%, 36%)', text: 'light' },
      { weight: '700', value: 'hsl(14, 100%, 39%)', text: 'light' },
      { weight: '500', value: 'hsl(93, 67%, 38%)', text: 'dark' },
      { weight: '700', value: 'hsl(93, 100%, 26%)', text: 'light' },
      { weight: '400', value: 'hsl(198, 0%, 80%)', text: 'dark' },
    ],
  },
  {
    legend: 'Standard alerts',
    colors: [
      { weight: '50', value: 'hsl(198, 54%, 92%)', text: 'dark' },
      { weight: '50', value: 'hsl(93, 52%, 88%)', text: 'dark' },
      { weight: '100', value: 'hsl(14, 83%, 84%)', text: 'dark' },
      { weight: '100', value: 'hsl(48, 97%, 85%)', text: 'dark' },
    ],
  },
  {
    legend: 'Headers',
    colors: [
      { weight: '900', value: 'hsl(198, 0%, 19%)', text: 'light' },
      { weight: '1000', value: 'hsl(282, 48%, 14%)', text: 'light' },
      { weight: '700', value: 'hsl(198, 100%, 34%)', text: 'light' },
      { weight: '800', value: 'hsl(198, 100%, 27%)', text: 'light' },
      { weight: '1000', value: 'hsl(198, 100%, 11%)', text: 'light' },
    ],
  },
  {
    legend: 'Labels & badges',
    colors: [
      { weight: '600', value: 'hsl(198, 0%, 45%)', text: 'light' },
      { weight: '50', value: 'hsl(198, 54%, 92%)', text: 'dark' },
      { weight: '300', value: 'hsl(198, 57%, 71%)', text: 'dark' },
      { weight: '600', value: 'hsl(198, 100%, 36%)', text: 'light' },
      { weight: '800', value: 'hsl(198, 100%, 27%)', text: 'light' },
      { weight: '500', value: 'hsl(282, 43%, 54%)', text: 'light' },
      { weight: '100', value: 'hsl(14, 83%, 84%)', text: 'dark' },
      { weight: '700', value: 'hsl(14, 100%, 39%)', text: 'light' },
      { weight: '100', value: 'hsl(48, 100%, 83%)', text: 'dark' },
      { weight: '300', value: 'hsl(48, 94%, 57%)', text: 'dark' },
      { weight: '500', value: 'hsl(46, 100%, 45%)', text: 'dark' },
      { weight: '50', value: 'hsl(93, 52%, 88%)', text: 'dark' },
      { weight: '700', value: 'hsl(93, 100%, 26%)', text: 'light' },
      { weight: '600', value: 'hsl(198, 0%, 45%)', text: 'light' },
    ],
  },
];

export const DARK_THEME_COLOR_PALETTES = [
  {
    legend: 'Backgrounds and borders',
    colors: [
      { value: '#0F171C', text: 'light' },
      { value: '#17242B', text: 'light' },
      { value: '#1B2A32', text: 'light' },
      { value: '#22343C', text: 'light' },
      { value: '#485764', text: 'light' },
      { value: '#566572', text: 'light' },
      { value: '#6D7884', text: 'mid' },
    ],
  },
  {
    legend: 'Row hover, selection',
    colors: [{ value: '#29414E', text: 'light' }, { value: '#324F61', text: 'light' }],
  },
  {
    legend: 'Typography',
    colors: [
      { value: '#8F9BA3', text: 'dark' },
      { value: '#ADBBC4', text: 'dark' },
      { value: '#E9ECEF', text: 'dark' },
      { value: '#FFFFFF', text: 'dark' },
      { value: '#000000', text: 'light' },
    ],
  },
  {
    legend: 'Buttons and app-level alerts',
    colors: [
      { value: '#49AFD9', text: 'dark' },
      { value: '#F54F47', text: 'dark' },
      { value: '#FDD006', text: 'dark' },
      { value: '#60B515', text: 'dark' },
      { value: '#6D7884', text: 'dark' },
    ],
  },
  {
    legend: 'Standard alerts',
    colors: [
      { value: '#0F6082', text: 'light' },
      { value: '#882D31', text: 'light' },
      { value: '#205522', text: 'light' },
      { value: '#7F6509', text: 'light' },
    ],
  },
  {
    legend: 'Labels & badges',
    colors: [
      { value: '#0F6082', text: 'light' },
      { value: '#882D31', text: 'light' },
      { value: '#205522', text: 'light' },
      { value: '#7F6509', text: 'light' },
      { value: '#737373', text: 'light' },
      { value: '#AD73C8', text: 'dark' },
      { value: '#0079B8', text: 'light' },
      { value: '#FF9C32', text: 'dark' },
      { value: '#89CBDF', text: 'dark' },
    ],
  },
  {
    legend: 'Headers',
    colors: [
      { value: '#404E60', text: 'light' },
      { value: '#165266', text: 'light' },
      { value: '#1A4C72', text: 'light' },
      { value: '#5C3552', text: 'light' },
      { value: '#3E436A', text: 'light' },
      { value: '#000000', text: 'light' },
    ],
  },
];
