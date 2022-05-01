# Getting started with Amplify UI

**APR 26 2022**

### Theme

How styles work?

- scss files in styles
- import <em>path/index.scss</em> into <em>\_app.tsx</em>

Amplify default styles

- import <em>import '@aws-amplify/ui-react/styles.css';</em>

How to custom/override the default styles

- Via SCSS files
- Via the theme object

Custom theme/styles via SCSS file

- create <em>src/styles/base.scss</em>
- create <em>src/styles/index.scss</em>
- in base.scss do <em>@import './base.scss'</em>

```
[data-amplify-theme] {
  --amplify-colors-font-primary: teal;
  --amplify-colors-font-secondary: var(--amplify-colors-neutral-60);
}

.my-header {
  color: aqua
}
```

Custom theme via theme object

```
import { defaultTheme, Theme } from "@aws-amplify/ui-react";

export const myTheme: Theme = {
  name: 'my-theme',
  tokens: {
    colors: {
      font: {
        primary: { value: '#800080' },
      },
    },
  },
};
```
