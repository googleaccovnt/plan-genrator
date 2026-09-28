const skills = {

  handstand: {
    name:"Handstand",
    icon:"🤸",
    description:"Balance, shoulder control and body-line practice.",
    stages:[
      "Wrist & shoulder preparation",
      "Pike / elevated handstand",
      "Wall handstand",
      "Chest-to-wall line",
      "Heel pulls / balance drills",
      "Freestanding practice"
    ],
    exercises:[
      "Wrist circles",
      "Pike hold",
      "Wall handstand",
      "Chest-to-wall handstand",
      "Wall shoulder taps",
      "Handstand balance drills"
    ],
    drills:[
      "Wall line drill",
      "Toe pull-away drill",
      "Heel pull drill",
      "Controlled kick-up practice"
    ],
    tutorial:
      "https://www.youtube.com/results?search_query=handstand+progression+tutorial+calisthenics"
  },

  planche: {
    name:"Planche",
    icon:"🔥",
    description:"Straight-arm pushing skill requiring progressive strength and control.",
    stages:[
      "Wrist preparation",
      "Planche lean",
      "Tuck planche",
      "Advanced tuck",
      "Straddle planche",
      "Full planche"
    ],
    exercises:[
      "Wrist preparation",
      "Planche lean",
      "Scapular protraction drill",
      "Tuck planche practice",
      "Pseudo planche push-up",
      "Hollow-body hold"
    ],
    drills:[
      "Lean measurement drill",
      "Protraction hold",
      "Tuck entry drill",
      "Body-line drill"
    ],
    tutorial:
      "https://www.youtube.com/@SOLO_DISSOLVER"
  },

  bentArmPlanche: {
    name:"Bent Arm Planche",
    icon:"💪",
    description:"Bent-arm pressing strength and planche-specific control.",
    stages:[
      "Push-up foundation",
      "Pseudo planche push-up",
      "Deep lean push-up",
      "Tuck bent-arm planche",
      "Advanced tuck",
      "Straddle progression"
    ],
    exercises:[
      "Push-ups",
      "Pseudo planche push-ups",
      "Planche lean",
      "Tuck support",
      "Slow eccentric push-up",
      "Core compression"
    ],
    drills:[
      "Lean angle drill",
      "Slow eccentric drill",
      "Tuck position drill",
      "Scapular control drill"
    ],
    tutorial:
      "https://www.youtube.com/@SOLO_DISSOLVER"
  },

  humanflag: {
    name:"Human Flag",
    icon:"🚩",
    description:"Lateral pulling/pushing control with progressive flag variations.",
    stages:[
      "Side plank & core",
      "Vertical flag setup",
      "Tuck flag",
      "One-leg flag",
      "Straddle flag",
      "Full flag"
    ],
    exercises:[
      "Side plank",
      "Hanging knee raise",
      "Scapular pull",
      "Vertical flag practice",
      "Tuck flag",
      "Grip practice"
    ],
    drills:[
      "Pole grip drill",
      "Tuck entry drill",
      "Hip alignment drill",
      "Short hold practice"
    ],
    tutorial:
      "https://www.youtube.com/@SOLO_DISSOLVER"
  },

  frontlever: {
    name:"Front Lever",
    icon:"🪽",
    description:"Straight-arm pulling skill built through body-line and scapular control.",
    stages:[
      "Active hang",
      "Tuck front lever",
      "Advanced tuck",
      "One-leg front lever",
      "Straddle front lever",
      "Full front lever"
    ],
    exercises:[
      "Active hang",
      "Scapular pull-ups",
      "Tuck front lever",
      "Front lever raises",
      "Hollow hold",
      "Rows"
    ],
    drills:[
      "Tuck hold drill",
      "Scapular depression drill",
      "Body-line drill",
      "Controlled raise drill"
    ],
    tutorial:
      "https://www.youtube.com/@SOLO_DISSOLVER"
  },

  backlever: {
    name:"Back Lever",
    icon:"🔄",
    description:"Progressive straight-arm shoulder extension and body-line control.",
    stages:[
      "German hang mobility",
      "Tuck back lever",
      "Advanced tuck",
      "One-leg variation",
      "Straddle",
      "Full back lever"
    ],
    exercises:[
      "Gentle shoulder mobility",
      "German hang preparation",
      "Tuck back lever",
      "Skin-the-cat preparation",
      "Hollow hold",
      "Scapular control"
    ],
    drills:[
      "Tuck entry drill",
      "Body-line drill",
      "Controlled extension drill",
      "Shoulder mobility drill"
    ],
    tutorial:
      "https://www.youtube.com/@SOLO_DISSOLVER"
  },

  isit: {
    name:"I-Sit",
    icon:"🧘",
    description:"Compression, hip-flexor and straight-leg support control.",
    stages:[
      "L-sit foundation",
      "Tuck support",
      "One-leg extension",
      "V-sit compression",
      "I-sit progression",
      "Advanced compression"
    ],
    exercises:[
      "Seated compression",
      "L-sit tuck",
      "L-sit",
      "Pike compression",
      "Leg lifts",
      "Support hold"
    ],
    drills:[
      "Toe lift drill",
      "Compression pulses",
      "Straight-leg extension",
      "Support transition drill"
    ],
    tutorial:
      "https://www.youtube.com/@SOLO_DISSOLVER"
  },

  hspu: {
    name:"Handstand Push-ups",
    icon:"⬆️",
    description:"Vertical pressing built from stable handstand and controlled range of motion.",
    stages:[
      "Pike push-up",
      "Elevated pike push-up",
      "Wall handstand hold",
      "Partial ROM HSPU",
      "Full wall HSPU",
      "Freestanding progression"
    ],
    exercises:[
      "Pike push-up",
      "Elevated pike push-up",
      "Wall handstand",
      "Negative HSPU",
      "Wall HSPU",
      "Shoulder taps"
    ],
    drills:[
      "Head-position drill",
      "Controlled negative",
      "Wall line drill",
      "Pressing range drill"
    ],
    tutorial:
      "https://www.youtube.com/@SOLO_DISSOLVER"
  },

  oneArmHandstand: {
    name:"One-Arm Handstand",
    icon:"☝️",
    description:"An advanced balance skill requiring a strong handstand base and progressive weight shifting.",
    stages:[
      "Freestanding handstand",
      "Weight shifts",
      "Side-to-side balance",
      "Finger-assisted one-arm drills",
      "Partial assistance",
      "One-arm progression"
    ],
    exercises:[
      "Wall handstand",
      "Freestanding balance",
      "Shoulder shifts",
      "Finger-assisted shifts",
      "Wrist preparation",
      "Core line drills"
    ],
    drills:[
      "Weight-shift drill",
      "Shoulder-stack drill",
      "Finger assistance drill",
      "Short balance attempts"
    ],
    tutorial:
      "https://www.youtube.com/@SOLO_DISSOLVER"
  }

};


const phaseNames = [
  "Foundation",
  "Technique",
  "Strength",
  "Progression",
  "Integration",
  "Recovery/Test"
];

const restEvery = [7,14,21,28,30];


function showPage(id) {

  document
    .querySelectorAll(".page")
    .forEach(p => p.classList.remove("active"));

  document
    .getElementById(id)
    .classList.add("active");

  window.scrollTo(0,0);
}


function signup(e) {

  e.preventDefault();

  const u =
    document.getElementById("signupUsername")
    .value
    .trim();

  const p =
    document.getElementById("signupPassword")
    .value;

  const c =
    document.getElementById("confirmPassword")
    .value;

  if (p !== c) {
    alert("Passwords do not match.");
    return;
  }

  const email =
    document.getElementById("signupEmail")
    .value
    .trim();

  localStorage.setItem(
    "vishalthenics_user",
    JSON.stringify({
      username:u,
      email:email,
      password:p,
      level:"Beginner",
      goal:"Strength",
      training_days:3
    })
  );

  alert(
    "Account created successfully on this browser. Now log in."
  );

  showPage("loginPage");
}


function login(e) {

  e.preventDefault();

  const u =
    document.getElementById("loginUsername")
    .value
    .trim();

  const p =
    document.getElementById("loginPassword")
    .value;

  const raw =
    localStorage.getItem("vishalthenics_user");

  const user =
    raw ? JSON.parse(raw) : null;

  if (
    user &&
    u === user.username &&
    p === user.password
  ) {

    document.getElementById("userDisplay")
      .textContent = u.toUpperCase();

    localStorage.setItem(
      "vishalthenics_session",
      "true"
    );

    showPage("dashboardPage");

  } else {

    alert(
      "Invalid username or password. Please check your account."
    );

  }
}


function logout() {

  localStorage.removeItem(
    "vishalthenics_session"
  );

  showPage("homePage");
}


function populateSkills() {

  const select =
    document.getElementById("skillSelect");

  select.innerHTML =
    Object.entries(skills)
      .map(
        ([id,s]) =>
          `<option value="${id}">${s.name}</option>`
      )
      .join("");

  document.getElementById("skillCards")
    .innerHTML =
      Object.entries(skills)
        .map(
          ([id,s]) => `
            <div class="card">

              <div class="skill-icon">
                ${s.icon}
              </div>

              <h3>${s.name}</h3>

              <p>${s.description}</p>

              <button onclick="openSkill('${id}')">
                VIEW 30-DAY TRAINING
              </button>

            </div>
          `
        )
        .join("");
}


function openSkill(id) {

  const s = skills[id];

  document.getElementById("skillContent")
    .innerHTML = `

      <div class="dashboard-title">

        <div class="skill-icon">
          ${s.icon}
        </div>

        <h1>${s.name.toUpperCase()}</h1>

        <p>${s.description}</p>

      </div>

      <div class="generator">

        <h2>PROGRESSION ROADMAP</h2>

        <div>
          ${s.stages
            .map(
              (x,i) =>
                `<span class="badge">
                  ${i+1}. ${x}
                </span>`
            )
            .join("")}
        </div>

        <div class="notice">
          <strong>Technique first:</strong>
          use a progression you can control.
          Do not force advanced holds or train through pain.
        </div>

        <h2>EXERCISES & DRILLS</h2>

        <div class="cards">

          <div class="card">
            <h3>Exercises</h3>
            <p>
              ${s.exercises
                .map(x => "• " + x)
                .join("<br>")}
            </p>
          </div>

          <div class="card">
            <h3>Skill Drills</h3>
            <p>
              ${s.drills
                .map(x => "• " + x)
                .join("<br>")}
            </p>
          </div>

        </div>

        <a
          class="tutorial-link"
          href="${s.tutorial}"
          target="_blank"
          rel="noopener"
        >
          WATCH TUTORIAL SEARCH →
        </a>

        <div class="plan-toolbar">

          <button onclick="quickGenerate('${id}')">
            GENERATE 30-DAY PLAN
          </button>

          <button
            class="secondary"
            onclick="showPage('dashboardPage')"
          >
            CHOOSE ANOTHER SKILL
          </button>

        </div>

        <div id="skillPlan"></div>

      </div>
    `;

  showPage("skillPage");
}


function quickGenerate(id) {

  document.getElementById("skillSelect")
    .value = id;

  const plan =
    buildPlan(id,"intermediate",4,30);

  renderPlan(plan,"skillPlan");
}


function phaseFor(day) {

  if(day <= 5) return 0;
  if(day <= 10) return 1;
  if(day <= 15) return 2;
  if(day <= 21) return 3;
  if(day <= 27) return 4;

  return 5;
}


function intensity(level,phase) {

  const base = {
    beginner:1,
    intermediate:2,
    advanced:3
  }[level] || 2;

  return Math.min(
    3,
    Math.max(
      1,
      base + (phase >= 2 ? 0 : 0)
    )
  );
}


function buildPlan(id,level,freq,duration) {

  const s = skills[id];

  const plan = [];

  for(let day=1; day<=30; day++) {

    const phase = phaseFor(day);

    const recovery =
      restEvery.includes(day);

    const train =
      ((day-1) % 7) < Number(freq);

    if(recovery || !train) {

      plan.push({
        day,
        phase:phaseNames[phase],
        rest:true,
        focus:
          recovery
            ? "Recovery / technique review"
            : "Recovery / mobility"
      });

      continue;
    }

    const intensityLevel =
      intensity(level,phase);

    const e1 =
      s.exercises[
        (day-1) % s.exercises.length
      ];

    const e2 =
      s.exercises[
        day % s.exercises.length
      ];

    const drill =
      s.drills[
        (day-1) % s.drills.length
      ];

    const stage =
      s.stages[
        Math.min(
          s.stages.length - 1,
          Math.floor((day-1)/6)
        )
      ];

    const sets =
      2 + intensityLevel;

    const hold =
      level === "beginner"
        ? "10–20 sec"
        : level === "intermediate"
          ? "15–30 sec"
          : "20–40 sec";

    plan.push({

      day,

      phase:
        phaseNames[phase],

      rest:false,

      focus:stage,

      exercises:[

        {
          name:e1,
          detail:
            `${sets} sets • controlled quality • ${hold} where applicable`
        },

        {
          name:e2,
          detail:
            `${sets} sets • leave comfortable reps in reserve`
        },

        {
          name:drill,
          detail:
            `3–5 short practice rounds • reset between attempts`
        }

      ],

      warmup:
        "5–8 min: wrists/shoulders/hips + easy movement",

      cooldown:
        "3–5 min: gentle mobility and breathing",

      duration

    });

  }

  return {
    skill:s,
    level,
    freq,
    duration,
    days:plan
  };
}


function renderPlan(plan,targetId) {

  const target =
    document.getElementById(targetId);

  target.innerHTML = `

    <div class="notice">

      <strong>
        ${plan.skill.name} — 30-Day Plan
      </strong>

      <br>

      Level: ${plan.level}
      • ${plan.freq} training days/week
      • ${plan.duration} min/session

      <div class="progress-wrap">
        <div
          class="progress-bar"
          style="width:100%"
        ></div>
      </div>

      The plan cycles foundation →
      technique → strength →
      progression → integration →
      recovery/test.

    </div>

    ${plan.days.map(d => `

      <details
        class="plan-day"
        ${d.day <= 3 ? "open" : ""}
      >

        <summary>
          DAY ${d.day} —
          ${d.phase}
          ${d.rest ? "• RECOVERY" : ""}
        </summary>

        <div class="day-body">

          <p>

            <span class="badge">
              ${d.rest
                ? "Recovery / Mobility"
                : "Training"}
            </span>

            <span class="badge">
              ${d.focus}
            </span>

          </p>

          ${
            d.rest

            ? `
              <p style="margin-top:12px;color:#ccc">
                Easy mobility, normal daily movement,
                technique notes and recovery.
                No need to force extra work.
              </p>
            `

            :

            `
              <div class="exercise">
                <strong>Warm-up</strong>
                <small>${d.warmup}</small>
              </div>

              ${d.exercises
                .map(
                  x => `
                    <div class="exercise">
                      <strong>${x.name}</strong>
                      <small>${x.detail}</small>
                    </div>
                  `
                )
                .join("")}

              <div class="exercise">
                <strong>Cool-down</strong>
                <small>${d.cooldown}</small>
              </div>
            `
          }

        </div>

      </details>

    `).join("")}

    <div class="notice">

      <strong>Progression rule:</strong>
      move to the next variation only when your
      current variation is controlled and repeatable.
      A 30-day plan is a framework, not a requirement
      to master the skill in 30 days.

    </div>

  `;
}


function generatePlan() {

  const id =
    document.getElementById("skillSelect")
      .value;

  const level =
    document.getElementById("level")
      .value;

  const freq =
    Number(
      document.getElementById("frequency")
        .value
    );

  const duration =
    Number(
      document.getElementById("duration")
        .value
    );

  renderPlan(
    buildPlan(
      id,
      level,
      freq,
      duration
    ),
    "planResult"
  );
}


populateSkills();
