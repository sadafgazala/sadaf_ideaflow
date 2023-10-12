const cursor = document.querySelector('.custom-cursor');
const hoverButton = document.querySelector('.first');
const hoverButton2 = document.querySelector('.second');
const hoverButton3 = document.querySelector('.third');
const hoverLink1 = document.querySelector('.one');
const hoverLink2 = document.querySelector('.two');
const hoverLink3 = document.querySelector('.three');
const hoverLink4 = document.querySelector('.four');
const hoverLink5 = document.querySelector('.five');

document.addEventListener('mousemove', (e) => {
cursor.style.left = e.pageX + 'px';
cursor.style.top = e.pageY + 'px';
});

hoverButton.addEventListener('mouseover', () => {
cursor.classList.add('glow'); // Add glow effect when hovering over the button
});

hoverButton.addEventListener('mouseout', () => {
cursor.classList.remove('glow'); // Remove glow effect when not hovering over the button
});

hoverButton2.addEventListener('mouseover', () => {
cursor.classList.add('glow'); 
});

hoverButton2.addEventListener('mouseout', () => {
cursor.classList.remove('glow'); 
});

hoverButton3.addEventListener('mouseover', () => {
cursor.classList.add('glow'); 
});

hoverButton3.addEventListener('mouseout', () => {
cursor.classList.remove('glow'); 
});

hoverLink1.addEventListener('mouseover', () => {
cursor.classList.add('glow'); 
});

hoverLink1.addEventListener('mouseout', () => {
cursor.classList.remove('glow'); 
});

hoverLink2.addEventListener('mouseover', () => {
cursor.classList.add('glow'); 
});

hoverLink2.addEventListener('mouseout', () => {
cursor.classList.remove('glow'); 
});
hoverLink3.addEventListener('mouseover', () => {
cursor.classList.add('glow'); 
});

hoverLink3.addEventListener('mouseout', () => {
cursor.classList.remove('glow'); 
});
hoverLink4.addEventListener('mouseover', () => {
cursor.classList.add('glow'); 
});

hoverLink4.addEventListener('mouseout', () => {
cursor.classList.remove('glow'); 
});
hoverLink5.addEventListener('mouseover', () => {
cursor.classList.add('glow'); 
});

hoverLink5.addEventListener('mouseout', () => {
cursor.classList.remove('glow'); 
});