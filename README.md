## Simple Calculator 🧮

A modern, elegant calculator built with HTML, CSS, and JavaScript featuring a frosted glass effect design with cyan accent colors and fully customizable CSS variables.

### ✨ Features

- **Modern Glassmorphism Design** - Frosted glass effect with backdrop blur
- **Dark Theme with Transparency** - Sophisticated black color scheme with varying opacity levels
- **Cyan Accent Operators** - Vibrant cyan operator buttons for visual distinction
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

### 🎨 Design Highlights

- **Frosted Glass Effect**: Semi-transparent elements with blur for a premium look
- **Smooth Animations**: Hover and active states with elegant transitions
- **Accessibility**: High contrast text for readability
- **Mobile Optimized**: Touch-friendly button sizes and responsive layout

### 🚀 Live Demo

**[View Live Calculator](https://andx6.github.io/calculator/)** 👈 Click here to use the calculator!

---

### 📸 Preview

#### Desktop View
![Calculator Desktop Preview](https://via.placeholder.com/400x500/0d0d0d/64c8ff?text=Calculator+Desktop)

#### Mobile View
![Calculator Mobile Preview](https://via.placeholder.com/300x600/0d0d0d/64c8ff?text=Calculator+Mobile)

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
├── styles.css      # Styling with CSS variables
├── script.js       # Calculator logic and functionality
└── README.md       # This file
```

### 🎯 CSS Variables & Customization

All colors, spacing, and effects are defined as CSS variables for easy customization:

```css
:root {
    /* Color Palette */
    --color-background: rgba(0, 0, 0, 0.95);
    --color-calculator-bg: rgba(255, 255, 255, 0.1);
    
    /* Accent Colors */
    --color-operator: rgba(100, 200, 255, 1);
    
    /* Text Colors */
    --color-text: rgba(255, 255, 255, 0.8);
    
    /* Effects */
    --blur-calculator: 10px;
    --blur-button: 8px;
    
    /* Spacing */
    --spacing-base: 20px;
    
    /* Transitions */
    --transition-default: all 0.2s ease;
}
```

#### Create Your Own Theme

Edit the CSS variables in `styles.css` to match your desired color scheme:

```css
:root {
    --color-operator: rgba(255, 100, 150, 1);  /* Change to pink */
    --color-background: rgba(20, 20, 40, 0.95);  /* Change background */
}
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

### 💻 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### 🎨 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Glassmorphism, backdrop-filter, CSS variables
- **JavaScript (ES6)** - Modern calculator logic with event handling
- **CSS Grid** - Responsive button layout

### 📝 License

This project is open source and available under the MIT License.

### 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

### 👨‍💻 Author

Created by [@andx6](https://github.com/andx6)

---

### 📞 Support

If you encounter any issues or have suggestions, please open an issue on [GitHub Issues](https://github.com/andx6/calculator/issues).

**Enjoy calculating!** ✨
