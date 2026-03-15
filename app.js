cat > app.js << 'EOF'

function toggleDark() {
  document.body.classList.toggle('dark');
}
EOF
// Dev Notes - app.js
// version: 1.5 - stable release// version: 2.0 - dark mode added|' app.js

function addNote() {
  const input = document.getElementById('noteInput');
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.innerHTML = `<span>${text}</span>
    <button class="delete" onclick="this.parentElement.remove()">x</button>`;

  document.getElementById('noteList').appendChild(li);
  input.value = '';
  input.focus();
}

document.getElementById('noteInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addNote();
});
EOF