## Simple Calculator 🧮

A fun and playful calculator built with HTML, CSS, and JavaScript featuring a vibrant cartoon aesthetic with bouncy animations, colorful gradients, and fully customizable CSS variables.

### ✨ Features

- **Cartoon Aesthetic Design** - Vibrant, playful, and fun visual style
- **Vibrant Gradient Background** - Pink, orange, and yellow sunset gradient
- **3D Beveled Effects** - Inset shadows creating depth and dimension
- **Bouncy Animations** - Interactive button press effects with bounce animations
- **Warm Color Palette** - Peach calculator body with friendly colors
- **Cyan & Lime Accents** - Bold operator and equals buttons with gradients
- **Full Arithmetic Operations** - Addition, subtraction, multiplication, and division
- **Decimal Support** - Handle floating-point numbers
- **Keyboard Support** - Use your keyboard for faster calculations
  - `0-9`: Number input
  - `+`, `-`, `*`, `/`: Operators
  - `Enter`: Calculate
  - `Backspace`: Delete last digit
  - `Escape`: Clear display
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **CSS Variables** - Easily customizable theme with reusable variables
- **Error Handling** - Graceful handling of invalid operations
- **Comic Sans Font** - Authentic cartoon typography

### 🎨 Design Highlights

- **Playful Color Scheme**: Warm peach, vibrant pink, lime green, and orange
- **3D Button Effects**: Beveled buttons with inset shadows for tactile feel
- **Smooth Animations**: Buttons bounce and lift on hover/click with cubic-bezier easing
- **Decorative Elements**: Soft background circles with radial gradients
- **Interactive Feedback**: Visual response to all user interactions
- **Fun Typography**: Comic Sans font family for playful character
- **Gradient Buttons**: Colorful gradients on operator and equals buttons
- **Mobile Optimized**: Touch-friendly button sizes and responsive layout

### 🚀 Live Demo

**[View Live Calculator](https://andx6.github.io/calculator/)** 👈 Click here to use the calculator!

---

### 📸 Preview

#### Desktop View
![Calculator Desktop Preview](https://via.placeholder.com/400x500/FF6B9D/2C1507?text=Cartoon+Calculator+Desktop)

#### Mobile View
![Calculator Mobile Preview](https://via.placeholder.com/300x600/FF6B9D/2C1507?text=Cartoon+Mobile)

---

### 🛠️ Installation & Usage

#### Option 1: Use Online
Simply visit the [live demo link](https://andx6.github.io/calculator/) above.

#### Option 2: Clone and Run Locally

```bash
# Clone the repository
git clone https://github.com/andx6/calculator.git

# Navigate to the directory
cd calculator

# Open in your browser
open index.html
# or on Windows
start index.html
# or on Linux
xdg-open index.html
```

### 📁 Project Structure

```
calculator/
├── index.html      # Main HTML structure
├── styles.css      # Styling with CSS variables (cartoon theme)
├── script.js       # Calculator logic and functionality
└── README.md       # This file
```

### 🎯 CSS Variables & Customization

All colors, spacing, and effects are defined as CSS variables for easy customization:

```css
:root {
    /* Cartoon Color Palette */
    --color-background: linear-gradient(135deg, #FF6B9D 0%, #FFA502 50%, #FFD93D 100%);
    --color-calculator-bg: rgba(255, 240, 220, 0.95);
    --color-display-bg: rgba(255, 255, 240, 0.9);
    
    /* Cartoon Accent Colors */
    --color-operator: #FF1493;
    --color-operator-bg: rgba(255, 20, 147, 0.15);
    
    /* Text Colors */
    --color-text: #5C3317;
    --color-text-display: #2C1507;
    
    /* Effects */
    --radius-large: 40px;
    --radius-medium: 30px;
    
    /* Transitions */
    --transition-default: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

#### Create Your Own Theme

Edit the CSS variables in `styles.css` to match your desired color scheme:

```css
:root {
    /* Create a cool/blue theme */
    --color-background: linear-gradient(135deg, #4A90E2 0%, #357ABD 50%, #1E5AA8 100%);
    --color-calculator-bg: rgba(230, 240, 255, 0.95);
    --color-operator: #1E90FF;
    --color-text: #1a3a5c;
}
```

#### Cartoon Theme Elements

```css
/* Change button border radius for less/more rounded */
--radius-large: 40px;      /* More = rounder */
--radius-medium: 30px;

/* Adjust animation speed */
--transition-default: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

/* Modify button gradient colors */
--color-operator: #FF1493;  /* Deep pink */
--color-button-bg: rgba(255, 200, 100, 0.7);  /* Warm orange */
```

### 🔧 How to Use

1. **Enter Numbers**: Click number buttons or use keyboard (0-9)
2. **Select Operation**: Click an operator button (+, -, ×, ÷) or use keyboard
3. **Calculate**: Click `=` or press `Enter` to see the result
4. **Clear**: Press `C` button or `Escape` key to reset
5. **Delete**: Press `DEL` or `Backspace` to remove the last digit

### ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Input numbers |
| `.` | Add decimal point |
| `+` `-` `*` `/` | Select operation |
| `Enter` | Calculate result |
| `Backspace` | Delete last digit |
| `Escape` | Clear all |

### 🎨 Color Palette

| Element | Color | RGB |
|---------|-------|-----|
| Background | Gradient Pink-Orange-Yellow | #FF6B9D → #FFA502 → #FFD93D |
| Calculator Body | Warm Peach | rgba(255, 240, 220, 0.95) |
| Operator Buttons | Deep Pink | #FF1493 |
| Equals Button | Lime Green | #32CD32 → #00FF00 |
| Clear Button | Orange | #FFB347 → #FFA500 |
| Display | Light Cream | rgba(255, 255, 240, 0.9) |
| Text | Brown | #5C3317 |

### 💻 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### 🎨 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Cartoon design, gradients, 3D effects, animations, CSS variables
- **JavaScript (ES6)** - Modern calculator logic with event handling
- **CSS Grid** - Responsive button layout
- **CSS Animations** - Bounce and wiggle effects

### 📝 License

This project is open source and available under the MIT License.

### 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements! Some ideas:
- Additional themes (dark mode, neon, retro)
- Scientific calculator features
- History of calculations
- Sound effects and haptic feedback
- Themes switcher UI

### 👨‍💻 Author

Created by [@andx6](https://github.com/andx6)

---

### 🎮 Fun Features to Try

- Click rapidly on the buttons to see the bounce animations
- Hover over buttons to see them lift and scale
- Press keys on your keyboard to calculate faster
- Try different color combinations by modifying CSS variables

### 📞 Support

If you encounter any issues or have suggestions, please open an issue on [GitHub Issues](https://github.com/andx6/calculator/issues).

### 🌟 Version History

- **v2.0** - Cartoon aesthetic redesign with vibrant colors and bouncy animations
- **v1.1** - Added CSS variables and frosted glass effect
- **v1.0** - Initial calculator release

**Have fun calculating with cartoon style!** 🎪✨🧮
