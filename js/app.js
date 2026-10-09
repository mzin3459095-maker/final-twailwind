// Select filter buttons
const all_btn = document.getElementById('all_btn');
const scifi_btn = document.getElementById('sci-fi_btn');
const action_btn = document.getElementById('action_btn');
const thriller_btn = document.getElementById('thriller_btn');

// Select card elements
const scifi_cards = document.getElementsByClassName('scifi');
const action_cards = document.getElementsByClassName('action');
const thriller_cards = document.getElementsByClassName('thriller');

const all_buttons = [all_btn, scifi_btn, action_btn, thriller_btn];

// Helper function to handle button styling state
function setActiveButton(activeBtn) {
    all_buttons.forEach(btn => {
        if (btn === activeBtn) {
            btn.className = "filter-btn bg-[#8b5cff] border border-[#8b5cff] text-white px-4 py-1.5 rounded-lg text-sm font-medium transition cursor-pointer";
        } else {
            btn.className = "filter-btn bg-slate-900 border border-slate-700 text-slate-300 hover:border-[#8b5cff] px-4 py-1.5 rounded-lg text-sm font-medium transition cursor-pointer";
        }
    });
}

// All Button Click Handler
all_btn.onclick = function() {
  console.log('gjhgjjhg')
    for (let item of scifi_cards) item.style.display = 'block';
    for (let item of action_cards) item.style.display = 'block';
    for (let item of thriller_cards) item.style.display = 'block';
    setActiveButton(this);
};

// Sci-Fi Button Click Handler
scifi_btn.onclick = function() {
    for (let item of scifi_cards) item.style.display = 'block';
    for (let item of action_cards) item.style.display = 'none';
    for (let item of thriller_cards) item.style.display = 'none';
    setActiveButton(this);
};

// Action Button Click Handler
action_btn.onclick = function() {
    for (let item of scifi_cards) item.style.display = 'none';
    for (let item of action_cards) item.style.display = 'block';
    for (let item of thriller_cards) item.style.display = 'none';
    setActiveButton(this);
};

// Thriller Button Click Handler
thriller_btn.onclick = function() {
    for (let item of scifi_cards) item.style.display = 'none';
    for (let item of action_cards) item.style.display = 'none';
    for (let item of thriller_cards) item.style.display = 'block';
    setActiveButton(this);
};