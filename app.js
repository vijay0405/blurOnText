const text = document.getElementById('text');
const background = document.getElementById('background');

text.addEventListener('input', (e) => {
	const input = e.target.value;
	const length = input.length;
	const blurValue = 20 - length * 2;
	background.style.filter = `blur(${blurValue}px)`;
});