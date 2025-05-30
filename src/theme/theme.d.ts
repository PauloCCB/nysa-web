import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      accent: string;
    };
    fonts: {
      main: string;
      heading: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
} 