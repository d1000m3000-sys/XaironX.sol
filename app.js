let streak = parseInt(localStorage.getItem("streak")) || 0;
let coins = parseInt(localStorage.getItem("coins")) || 0;
let progress = parseInt(localStorage.getItem("progress")) || 0;

updateUI();

function completeDay() {

  streak++;
  progress++;

  // مكافآت ذكية
  let reward = 10;

  if (streak % 7 === 0) reward = 50;
  if (streak % 30 === 0) reward = 200;

  coins += reward;

  // إذا خلص التحدي
  if (progress >= 7) {
    alert("🔥 أنجزت التحدي! +100 XRX");
    coins += 100;
    progress = 0;
  }

  save();
  updateUI();
}

function updateUI() {
  document.getElementById("streak").innerText = streak;
  document.getElementById("coins").innerText = coins;
  document.getElementById("progress").innerText = progress + " / 7";
}

function save() {
  localStorage.setItem("streak", streak);
  localStorage.setItem("coins", coins);
  localStorage.setItem("progress", progress);
}
