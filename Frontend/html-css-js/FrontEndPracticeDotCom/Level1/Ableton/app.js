

const player = new Plyr('#player', {
    controls: [
      'play-large',
      'play',
      'progress',
      'current-time',
      'mute',
      'volume',
      'fullscreen'
    ],
    hideControls: true, // lets Plyr auto-hide them later
    clickToPlay: true,
  });

  // hide controls initially until video starts
  const controls = document.querySelector('.plyr__controls');
  if (controls) controls.style.opacity = '0';

  player.on('play', () => {
    if (controls) controls.style.opacity = '1';
  });