const inputs = document.querySelectorAll('.controls input');

function hangleUpdate() {
    const suffix = this.dataset.sizing || ''; // or '' becaouse input with color has not attribute sizing
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', hangleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', hangleUpdate));
