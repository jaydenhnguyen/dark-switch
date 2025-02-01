# DarkSwitch

![React](https://img.shields.io/badge/React-v18.2.0-61DAFB?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.7.3-blue?logo=typescript&logoColor=blue)
![Gzipped Size](https://img.shields.io/badge/Gzipped%20Size-4.6%20KB-red)
Current version: `1.0.2-rc.1` 🚀

### The bring-me-the-designer switch that for toggling the light and dark mode.

So, one day, my class got canceled (score!), and I was just chilling in the school's cafeteria, scrolling through IG
then I
came across a meme about 🪖 **Designer vs Developer** 🪖. <br/>

The designer had created this ultra-slick, animated dark mode
switch that seemed like it was crafted by wizards . Naturally, I scrolled down through the comments (because, come on,
who doesn't do that 👀), and
**some dude had actually made it in [Figma](https://tinyurl.com/mtsw6pb9)!**

#### Designer: 1, Developer: 0.

I thought "Wait a minute, I can balance this match and bring glory to the developer team✌️" So, challenge accepted,
and **DarkSwitch** was born.

---

### 🤙 I'm always open to any valuable contributions! 🤙

**DarkSwitch** was just created in a single afternoon, so if you have ideas for improvements, bug fixes, or
new features, feel free to open an issue or submit a pull request. All contributions are welcome 🥂

---

## 🗝 Features

- Customizable size: `small`, `medium`, or `large`.
- Simple integration with minimal setup.
- **Lightweight and easy to use cuz it purely CSS (no additional animation libraries needed)**

## 🚀 Installation

Install the package via npm:

```bash
npm install dark-switch-react
```

Or, if you're using yarn:

```bash
yarn add dark-switch-react
```

## 🪄 How to make the magic happens

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

## 📝 Props

| Name        | Type                             | Description                                             | Default    |
|-------------|----------------------------------|---------------------------------------------------------|------------|
| `size`      | `'small' \| 'medium' \| 'large'` | The size of the switch.                                 | `'medium'` |
| `isDark`    | `boolean`                        | Whether the switch is in dark mode or not.              | `false`    |
| `className` | `string`                         | Custom className                                        | -          |
| `onClick`   | `() => void`                     | Callback function triggered when the switch is toggled. | Required   |

## 👁️ Styling

The component uses scss for styling. You can customize the styles in your project by overriding the following classes:

- `switch-small`
- `switch-medium`
- `switch-large`
- `slider`
- `left-cloud`
- `right-cloud`

You can also import your own cloud images for the left and right sides of the toggle if desired.

---

## License

MIT License. See the [LICENSE](LICENSE) file for details.
