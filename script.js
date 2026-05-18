let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';
let soundEnabled = true;

// Create audio context for sound effects
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Sound effect functions
function playButtonClickSound() {
    if (!soundEnabled) return;
    
    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(audioContext.destination);
    
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.1);
    
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    
    osc.start(now);
    osc.stop(now + 0.1);
}

function playOperatorSound() {
    if (!soundEnabled) return;
    
    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(audioContext.destination);
    
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
    
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    
    osc.start(now);
    osc.stop(now + 0.15);
}

function playEqualsSound() {
    if (!soundEnabled) return;
    
    const now = audioContext.currentTime;
    
    // First beep
    const osc1 = audioContext.createOscillator();
    const gain1 = audioContext.createGain();
    osc1.connect(gain1);
    gain1.connect(audioContext.destination);
    
    osc1.frequency.setValueAtTime(1000, now);
    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc1.start(now);
    osc1.stop(now + 0.1);
    
    // Second beep
    const osc2 = audioContext.createOscillator();
    const gain2 = audioContext.createGain();
    osc2.connect(gain2);
    gain2.connect(audioContext.destination);
    
    osc2.frequency.setValueAtTime(1400, now + 0.15);
    gain2.gain.setValueAtTime(0.3, now + 0.15);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc2.start(now + 0.15);
    osc2.stop(now + 0.25);
}

function playClearSound() {
    if (!soundEnabled) return;
    
    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(audioContext.destination);
    
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.2);
    
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    
    osc.start(now);
    osc.stop(now + 0.2);
}

function playErrorSound() {
    if (!soundEnabled) return;
    
    const now = audioContext.currentTime;
    
    // Low beep
    const osc1 = audioContext.createOscillator();
    const gain1 = audioContext.createGain();
    osc1.connect(gain1);
    gain1.connect(audioContext.destination);
    
    osc1.frequency.setValueAtTime(300, now);
    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc1.start(now);
    osc1.stop(now + 0.1);
    
    // Second low beep
    const osc2 = audioContext.createOscillator();
    const gain2 = audioContext.createGain();
    osc2.connect(gain2);
    gain2.connect(audioContext.destination);
    
    osc2.frequency.setValueAtTime(300, now + 0.15);
    gain2.gain.setValueAtTime(0.3, now + 0.15);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc2.start(now + 0.15);
    osc2.stop(now + 0.25);
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    const button = document.getElementById('sound-toggle');
    button.textContent = soundEnabled ? '🔊 Sound ON' : '🔇 Sound OFF';
    button.classList.toggle('sound-off');
}

function appendNumber(num) {
    if (num === '.' && currentInput.includes('.')) return;
    currentInput += num;
    updateDisplay();
    playButtonClickSound();
}

function appendOperator(op) {
    if (currentInput === '' && op !== '-') return;
    
    if (op === '-' && currentInput === '' && previousInput === '') {
        currentInput = '-';
        updateDisplay();
        playOperatorSound();
        return;
    }
    
    if (operator && currentInput !== '') {
        calculate();
    }
    
    previousInput = currentInput;
    operator = op === '.' ? '.' : op;
    currentInput = '';
    playOperatorSound();
}

function deleteLast() {
    currentInput = currentInput.toString().slice(0, -1);
    updateDisplay();
    playButtonClickSound();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
    playClearSound();
}

function calculate() {
    if (operator === '' || previousInput === '' || currentInput === '') return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch(operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error';
                playErrorSound();
            } else {
                result = prev / current;
                playEqualsSound();
            }
            break;
        default:
            return;
    }
    
    if (result !== 'Error') {
        playEqualsSound();
    }
    
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput || '0';
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') appendNumber(e.key);
    if (e.key === '.') appendNumber('.');
    if (e.key === '+' || e.key === '-') appendOperator(e.key);
    if (e.key === '*') appendOperator('*');
    if (e.key === '/') {
        e.preventDefault();
        appendOperator('/');
    }
    if (e.key === 'Enter') calculate();
    if (e.key === 'Backspace') deleteLast();
    if (e.key === 'Escape') clearDisplay();
});
