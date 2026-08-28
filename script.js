const cycles = {
  name: ['Paul, sometimes Pasha', 'Pasha, sometimes Paul'],
  location: [
    'Japan',
    'Tokyo, Japan',
    'Suginami-ku, Tokyo, Japan',
    'Ogikubo, Suginami-ku, Tokyo, Japan',
  ],
  reason: [
    'because I want more of a voice online',
    'to have a place to make things',
    'to express myself',
    'for fun',
    'as an alternative to posting',
    'to have a space that is my own',
    'for you, and only you',
  ],
};

document.querySelectorAll('[data-cycle]').forEach((button) => {
  const values = cycles[button.dataset.cycle];
  let index = 0;

  button.addEventListener('click', () => {
    index = (index + 1) % values.length;
    button.textContent = values[index];
    button.setAttribute('aria-label', `Next: ${values[(index + 1) % values.length]}`);
  });
});
