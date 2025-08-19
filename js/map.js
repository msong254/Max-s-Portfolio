function moveCharacterTo(zoneElement, event) {
    event.preventDefault();
  
    const character = document.getElementById('character');
    const topPercent = parseFloat(zoneElement.style.top);
    const leftPercent = parseFloat(zoneElement.style.left);
  
    // Adjust position: slightly lower + closer to left of icon
    character.style.top = `${topPercent + 2}%`;
    character.style.left = `${leftPercent - 4}%`; // was -8%, now tighter
  
    character.style.transition = 'top 0.6s ease, left 0.6s ease';
  
    setTimeout(() => {
      window.location.href = zoneElement.href;
    }, 600);
  }