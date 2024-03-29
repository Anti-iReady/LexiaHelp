
const windows = [];

function openWindow() {
  const win = window.open("", "", "width=200,height=200");
  win.document.write(`<audio autoplay><source src="rickroll.mp3" type="audio/mpeg"></audio><img src="rickroll.gif" style="position: absolute; top: 0; left: 0;">`);
  windows.push(win);
  moveWindow(win);
}

function moveWindow(win) {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  win.moveTo(x, y);
  setTimeout(() => moveWindow(win), 100);
}

for (let i = 0; i < 14; i++) {
  openWindow();
}

window.onbeforeunload = () => {
  windows.forEach(win => win.close());
};

chrome.app.runtime.onLaunched.addListener(() => {
  for (let i = 0; i < 6; i++) {
    openWindow();
  }
});
