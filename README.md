# DarkSwitch

![React](https://img.shields.io/badge/React-v18.2.0-61DAFB?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.7.3-blue?logo=typescript&logoColor=blue)
![Gzipped Size](https://img.shields.io/badge/Gzipped%20Size-4.69%20KB-red)

Current version: `1.0.5` 🚀

### The bring-me-the-designer switch for toggling the light and dark mode

### 🔗 [Live Demo](https://dark-switch-demo.vercel.app/demo)

### 📦 [Repository](https://github.com/jaydenhnguyen/dark-switch-react)

<br/>

## 🗝 Features

- Customizable size: `small`, `medium`, or `large`.
- Simple integration with minimal setup.
- **Lightweight and easy to use cuz it is purely CSS (no additional animation libraries needed)**

<br/>

## 🚀 Installation

Install the package via npm:

```bash
npm install dark-switch-react
```

Or, if you're using yarn:

```bash
yarn add dark-switch-react
```

<br/>

## 🪄 How to make the magic happen

```tsx
import React, { useState } from 'react';
import { DarkSwitch } from 'dark-switch';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <DarkSwitch
        size="large"
        isDark={isDarkMode}
        onClick={() => setIsDarkMode(!isDarkMode)}
      />
    </div>
  );
};

```

<br/>

## 📝 Props

| Name        | Type                             | Description                                             | Default    |
|-------------|----------------------------------|---------------------------------------------------------|------------|
| `size`      | `'small' \| 'medium' \| 'large'` | The size of the switch.                                 | `'medium'` |
| `isDark`    | `boolean`                        | Whether the switch is in dark mode or not.              | `false`    |
| `className` | `string`                         | Custom className                                        | -          |
| `onClick`   | `() => void`                     | Callback function triggered when the switch is toggled. | Required   |

<br/>

## 👁️ Styling

The component uses scss for styling. You can customize the styles in your project by overriding the following classes:

- `switch-small`
- `switch-medium`
- `switch-large`
- `slider`
- `left-cloud`
- `right-cloud`

You can also import your cloud images for the left and right sides of the toggle if desired.

<br/>

## Story behind

So, one day, my class got canceled (score!), and I was chilling in the school's cafeteria, scrolling through IG
then I
came across a meme about 🪖 **Designer vs Developer** 🪖. <br/>

The designer had created this ultra-slick, animated dark mode switch that seemed like wizards crafted it. Naturally, I
scrolled down through the comments (because, come on, who doesn't do that 👀), and **Some dude had actually made it
in [Figma!](https://tinyurl.com/mtsw6pb9)**

#### Designer: 1, Developer: 0.

I thought "Wait a minute, I can balance this match and bring glory to the developer team✌️" So, challenge accepted,
and **DarkSwitch** was born.

### 🤙 I'm always open to any valuable contributions! 🤙

**DarkSwitch** was just created in a single afternoon, so if you have ideas for improvements, bug fixes, or
new features, feel free to open an issue or submit a pull request. All contributions are welcome 🥂

## License

MIT License. See the [LICENSE](LICENSE) file for details.
