function toggleLamp(containerId, lampId, toggleId) {
    const lamp = document.getElementById(lampId);
    const toggle = document.getElementById(toggleId);
    if (toggle.checked) {
      lamp.src = 'assets/images/on.gif'; // Ganti dengan path gambar lampu menyala
      lamp.classList.add('on');
      lamp.classList.remove('off');
    } else {
      lamp.src = 'assets/images/off.gif'; // Ganti dengan path gambar lampu mati
      lamp.classList.add('off');
      lamp.classList.remove('on');
    }
  }
  
  function toggleGroup(groupId, checked) {
    const lamps = document.querySelectorAll(`#${groupId} .lamp-item input`);
    lamps.forEach((lampToggle) => {
      lampToggle.checked = checked;
      const lampId = lampToggle.id.replace('toggle', 'lampu');
      toggleLamp(groupId + '-' + lampId + '-container', lampId, lampToggle.id);
    });
  }
  
  function toggleAllLamps(checked) {
    const groups = ['keluarga', 'makan', 'tidur', 'kerja', 'tamu'];
    groups.forEach((groupId) => {
      const groupToggle = document.getElementById(`master-toggle-${groupId}`);
      groupToggle.checked = checked;
      toggleGroup(groupId, checked);
    });
  }
  