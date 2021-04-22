// import original module declaration
import 'styled-components/native';

// and extend it
declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      fill: {
        primary: string;
        secondary: string;
        terciary: string;
        quaternary: string;
        quinary: string;
        dark: {
          primary: string;
          secondary: string;
          terciary: string;
          quaternary: string;
          quinary: string;
        };
      };
    };
  }
}