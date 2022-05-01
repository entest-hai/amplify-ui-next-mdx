import { defaultTheme, Theme } from "@aws-amplify/ui-react";

export const myTheme: Theme = {
  name: 'amplify-docs',
  overrides: [
    {
      selector: '[data-amplify-theme-override="classic"] [data-amplify-theme="amplify-docs"]',
      tokens: {
        
      }
    }
  ]
  };