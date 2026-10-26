export const Colors = {
  light: {
    text: '#11181C',
    textSecondary: '#687076',
    background: '#FFFFFF',
    backgroundElement: '#F2F2F7',
    backgroundSelected: '#E5E5EA',
  },
  dark: {
    text: '#ECEDEE',
    textSecondary: '#9BA1A6',
    background: '#151718',
    backgroundElement: '#222426',
    backgroundSelected: '#303336',
  },
} as const;

export type ThemeColor = keyof (typeof Colors)['light'];

export const Fonts = {
  mono: 'SpaceMono',
};

export const Spacing = {
  half: 4,
  one: 8,
  two: 12,
  three: 16,
  four: 20,
  five: 24,
};

export const MaxContentWidth = 560;
