let streak = parseInt(localStorage.getItem("streak")) || 0;
let coins = parseInt(localStorage.getItem("coins")) || 200;
let progress = parseInt(localStorage.getItem("progress")) || 0;
let username = localStorage.getItem("username") || "مستخدم";

updateUI();
generateLeaderboard();

function saveUser() {
  let name = document.getElementById("username").value;
  if (name) {
    username = name;
    localStorage.setItem("username", name);
    alert("تم الحفظ");
  }
}

function completeDay() {

  streak++;
  progress++;

  let reward = 10;

  if (streak % 7 === 0) reward = 50;
  if (streak % 30 === 0) reward = 200;

  coins += reward;

  if (progress >= 7) {
    alert("🔥 فزت بالتحدي +100 XRX");
    coins += 100;
    progress = 0;
  }

  save();
  updateUI();
}

function joinChallenge() {

  if (coins < 100) {
    alert("رصيدك لا يكفي");
    return;
  }

  coins -= 100;

  // توزيع:
  let burn = 10;
  let fee = 20;
  let pool = 70;

  // الحرق (يختفي)
  // العمولة (لك)
  // الجوائز (مستقبلاً)

  alert("تم دخول التحدي");

  save();
  updateUI();
}

function generateLeaderboard() {

  let players = [
    {name: username, score: streak},
    {name: "Ali", score: Math.floor(Math.random()*30)},
    {name: "Sara", score: Math.floor(Math.random()*30)},
    {name: "Omar", score: Math.floor(Math.random()*30)}
  ];

  players.sort((a,b)=>b.score-a.score);

  let list = document.getElementById("leaderboard");
  list.innerHTML = "";

  players.forEach(p=>{
    let li = document.createElement("li");
    li.innerText = p.name + " - " + p.score;
    list.appendChild(li);
  });
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
