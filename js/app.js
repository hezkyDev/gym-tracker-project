/* =========================================================
       1. Plan Data
    ========================================================= */
    const PLAN = [
      {
        name: 'Day 1',
        title: 'Upper Strength',
        focus: 'Chest, back, shoulders, arms',
        exercises: [
          ['Bench Press', 4, 6, 8, 55, 2.5, 'barbell'],
          ['Pull-ups / Lat Pulldown', 4, 6, 8, 45, 2.5, 'machine'],
          ['Overhead Press', 3, 6, 8, 30, 2.5, 'barbell'],
          ['Barbell Row', 3, 6, 8, 55, 2.5, 'barbell'],
          ['Tricep Pushdown', 3, 10, 12, 25, 2.5, 'machine'],
          ['Barbell Curl', 3, 10, 12, 20, 2.5, 'barbell']
        ]
      },
      {
        name: 'Day 2',
        title: 'Lower Strength',
        focus: 'Legs, hamstrings, calves',
        exercises: [
          ['Squat', 4, 6, 8, 75, 2.5, 'barbell'],
          ['Romanian Deadlift', 3, 8, 10, 60, 2.5, 'barbell'],
          ['Leg Press', 3, 10, 12, 120, 5, 'machine'],
          ['Hamstring Curl', 3, 10, 12, 35, 2.5, 'machine'],
          ['Calf Raises', 4, 12, 15, 50, 2.5, 'machine']
        ]
      },
      {
        name: 'Day 3',
        title: 'Upper Aesthetic',
        focus: 'Upper chest, V-taper, shoulders',
        exercises: [
          ['Incline DB Press', 4, 8, 10, 20, 1, 'db'],
          ['Wide Lat Pulldown', 3, 10, 12, 45, 2.5, 'machine'],
          ['Seated Cable Row', 3, 10, 12, 45, 2.5, 'machine'],
          ['Lateral Raises', 4, 12, 15, 8, 1, 'db'],
          ['Rear Delt Fly', 3, 12, 15, 8, 1, 'db'],
          ['Hammer Curl', 3, 10, 12, 12, 1, 'db'],
          ['Rope Pushdown', 3, 10, 12, 25, 2.5, 'machine']
        ]
      },
      {
        name: 'Day 4',
        title: 'Lower + Abs',
        focus: 'Legs, waist, abs',
        exercises: [
          ['Leg Press / Squat', 3, 8, 10, 100, 2.5, 'machine'],
          ['Walking Lunges', 3, 10, 12, 12, 1, 'db'],
          ['Hamstring Curl', 3, 10, 12, 35, 2.5, 'machine'],
          ['Calf Raises', 4, 12, 15, 50, 2.5, 'machine'],
          ['Hanging Leg Raises', 3, 10, 15, 0, 0, 'bodyweight'],
          ['Cable Crunch', 3, 12, 15, 25, 2.5, 'machine'],
          ['Plank (seconds)', 3, 45, 60, 0, 0, 'time']
        ]
      }
    ];

    const TARGET_WEIGHTS = [65.8, 65.2, 64.6, 64.0, 64.3, 65.0, 65.5, 66.0, 66.5, 67.0, 67.5, 68.0, 68.5, 69.0, 69.5, 70.0];

    const MEAL_PLAN = [
      {
        day: 'Day 1',
        title: 'Balanced Training Day',
        meals: [
          { name: 'Meal 1', items: ['3 eggs + 2 egg whites', 'Wholemeal bread (2)', 'Banana'] },
          { name: 'Meal 2', items: ['Nasi putih (1 cup)', 'Ayam grilled', 'Sayur'] },
          { name: 'Post-workout', items: ['Whey protein'] },
          { name: 'Meal 3', items: ['Tomyam ayam (clear)', 'Small rice'] },
          { name: 'Meal 4', items: ['Greek yogurt + almonds'] }
        ]
      },
      {
        day: 'Day 2',
        title: 'High Protein Local Meals',
        meals: [
          { name: 'Meal 1', items: ['Oats + milk', 'Peanut butter', 'Banana'] },
          { name: 'Meal 2', items: ['Nasi + ikan bakar', 'Sayur'] },
          { name: 'Post-workout', items: ['Greek yogurt'] },
          { name: 'Meal 3', items: ['Daging stir fry (low oil)', 'Small rice'] },
          { name: 'Meal 4', items: ['Tuna + wholemeal bread'] }
        ]
      },
      {
        day: 'Day 3',
        title: 'Lean Protein Focus',
        meals: [
          { name: 'Meal 1', items: ['2 eggs + 2 egg whites', 'Wholemeal bread', 'Apple'] },
          { name: 'Meal 2', items: ['Nasi ayam — no skin, less rice'] },
          { name: 'Post-workout', items: ['Whey protein'] },
          { name: 'Meal 3', items: ['Ayam masak kunyit (less oil)', 'Sayur', 'Small rice'] },
          { name: 'Meal 4', items: ['Milk + nuts'] }
        ]
      },
      {
        day: 'Day 4',
        title: 'Simple Clean Meals',
        meals: [
          { name: 'Meal 1', items: ['Oats + whey protein', 'Banana'] },
          { name: 'Meal 2', items: ['Nasi + ayam bakar', 'Sayur'] },
          { name: 'Post-workout', items: ['Greek yogurt'] },
          { name: 'Meal 3', items: ['Sup ayam', 'Rice (small)'] },
          { name: 'Meal 4', items: ['Tuna salad'] }
        ]
      },
      {
        day: 'Day 5',
        title: 'Controlled Nasi Campur Day',
        meals: [
          { name: 'Meal 1', items: ['3 eggs', 'Wholemeal bread', 'Peanut butter'] },
          { name: 'Meal 2', items: ['Nasi campur', 'Ayam', 'Sayur', 'Small rice'] },
          { name: 'Post-workout', items: ['Whey protein'] },
          { name: 'Meal 3', items: ['Ikan stim', 'Vegetables', 'Rice'] },
          { name: 'Meal 4', items: ['Yogurt + fruit'] }
        ]
      },
      {
        day: 'Day 6',
        title: 'Higher Satiety Day',
        meals: [
          { name: 'Meal 1', items: ['Oats + milk', 'Almonds'] },
          { name: 'Meal 2', items: ['Nasi + daging grill', 'Sayur'] },
          { name: 'Post-workout', items: ['Whey protein'] },
          { name: 'Meal 3', items: ['Tomyam seafood', 'Small rice'] },
          { name: 'Meal 4', items: ['Tuna + bread'] }
        ]
      },
      {
        day: 'Day 7',
        title: 'Flexible / Slight Treat',
        meals: [
          { name: 'Meal 1', items: ['Roti canai (1)', '2 boiled eggs'] },
          { name: 'Meal 2', items: ['Nasi ayam — controlled portion'] },
          { name: 'Post-workout', items: ['Whey protein'] },
          { name: 'Meal 3', items: ['Ayam grill / steak', 'Potatoes'] },
          { name: 'Meal 4', items: ['Milk + nuts'] }
        ],
        note: 'Flexible day. Keep portion controlled and avoid turning this into a cheat day.'
      }
    ];


    const STORAGE_KEYS = {
      sessions: 'weeklySessionsV2',
      weights: 'bodyWeightsV2',
      legacyWeights: 'bodyWeights',
      currentWeek: 'currentWeek',
      currentMealDay: 'currentMealDay'
    };

    const state = {
      currentDay: 0,
      currentWeek: Number(localStorage.getItem(STORAGE_KEYS.currentWeek) || 1),
      currentMealDay: Number(localStorage.getItem(STORAGE_KEYS.currentMealDay) || 0),
      chart: null
    };

    /* =========================================================
       2. DOM Helpers
    ========================================================= */
    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

    function exerciseKey(name) {
      return name.replace(/[^a-z0-9]/gi, '_');
    }

    function readJSON(key, fallback = {}) {
      try {
        return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
      } catch {
        return fallback;
      }
    }

    function writeJSON(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }

    function getSessions() {
      return readJSON(STORAGE_KEYS.sessions, {});
    }

    function setSessions(value) {
      writeJSON(STORAGE_KEYS.sessions, value);
    }

    function getWeights() {
      return readJSON(STORAGE_KEYS.weights, readJSON(STORAGE_KEYS.legacyWeights, {}));
    }

    function setWeights(value) {
      writeJSON(STORAGE_KEYS.weights, value);
    }

    function roundToHalf(value) {
      return Math.round(value * 2) / 2;
    }

    /* =========================================================
       3. Week and Phase
    ========================================================= */
    function phaseLabel(week) {
      if (week <= 4) return 'Cut phase — maintain strength, 8–10k steps';
      if (week === 5) return 'Transition/deload — reduce volume around 20%';
      return 'Lean bulk — progressive overload focus';
    }

    function saveCurrentWeek() {
      localStorage.setItem(STORAGE_KEYS.currentWeek, String(state.currentWeek));
    }

    function initWeekSelector() {
      $('#weekSelect').innerHTML = Array.from({ length: 16 }, (_, index) => {
        const week = index + 1;
        const selected = week === state.currentWeek ? 'selected' : '';
        return `<option value="${week}" ${selected}>Week ${week}</option>`;
      }).join('');

      updateWeekUI();
    }

    function updateWeekUI() {
      $('#weekTitle').textContent = `Week ${state.currentWeek}`;
      $('#weekPhase').textContent = phaseLabel(state.currentWeek);
      $('#weightWeekInput').value = state.currentWeek;
    }

    function setWeek(week) {
      state.currentWeek = Number(week);
      saveCurrentWeek();
      updateWeekUI();
      renderTrainingDay();
    }

    function startNextWeek() {
      if (state.currentWeek >= 16) return;
      state.currentWeek += 1;
      saveCurrentWeek();
      initWeekSelector();
      renderTrainingDay();
    }

    /* =========================================================
       4. Auto Suggestions
    ========================================================= */
    function latestForExercise(exerciseName) {
      const sessions = getSessions();
      const key = exerciseKey(exerciseName);
      let latest = null;

      Object.keys(sessions).forEach((week) => {
        Object.keys(sessions[week]).forEach((dayIndex) => {
          const entry = sessions[week][dayIndex][key];
          if (!entry) return;
          if (!latest || new Date(entry.date) > new Date(latest.date)) latest = entry;
        });
      });

      return latest;
    }

    function calculateSuggestion(exercise) {
      const [name, , repMin, repMax, startWeight, increment] = exercise;
      const latest = latestForExercise(name);

      if (!latest) {
        return {
          text: startWeight ? `${startWeight} kg start` : 'Bodyweight / time',
          detail: 'No previous saved session'
        };
      }

      const reps = latest.reps.map(Number).filter((value) => !Number.isNaN(value));
      const weights = latest.weights.map(Number).filter((value) => !Number.isNaN(value) && value > 0);
      const workingWeight = weights.length ? weights[weights.length - 1] : startWeight;

      if (increment === 0) {
        return { text: 'Progress reps/time', detail: `Last: ${latest.summary}` };
      }

      if (reps.length && reps.every((rep) => rep >= repMax)) {
        return { text: `${roundToHalf(workingWeight + increment)} kg next`, detail: `Last: ${latest.summary}` };
      }

      if (reps.some((rep) => rep < repMin)) {
        return { text: `${roundToHalf(Math.max(0, workingWeight - increment))} kg or retry`, detail: `Last: ${latest.summary}` };
      }

      return { text: `${workingWeight} kg repeat`, detail: `Last: ${latest.summary}` };
    }

    /* =========================================================
       5. Training Rendering
    ========================================================= */
    function renderTabs() {
      $('#tabs').innerHTML = PLAN.map((day, index) => `
        <button class="tab ${index === state.currentDay ? 'active' : ''}" type="button" data-day="${index}">
          ${day.name}
        </button>
      `).join('');
    }

    function renderTrainingDay() {
      renderTabs();

      const day = PLAN[state.currentDay];
      const isDeload = state.currentWeek === 5;

      $('#dayCard').innerHTML = `
        <div class="section-header">
          <div>
            <h2>${day.name} – ${day.title}</h2>
            <div class="small">${day.focus}</div>
          </div>
        </div>

        <span class="badge">${phaseLabel(state.currentWeek)}</span>
        ${isDeload ? '<span class="badge">Use ~80% usual sets/effort</span>' : ''}

        ${day.exercises.map(renderExercise).join('')}

        <div class="actions">
          <button class="btn" type="button" data-action="save-workout">💾 Save Week ${state.currentWeek}</button>
          <button class="btn secondary" type="button" data-action="clear-day">Clear Inputs</button>
        </div>

        <button class="btn danger full" style="margin-top:10px" type="button" data-action="delete-session">
          Delete saved session for this day
        </button>
      `;

      loadInputs();
    }

    function renderExercise(exercise, index) {
      const [name, plannedSets, repMin, repMax, , , type] = exercise;
      const sets = state.currentWeek === 5 ? Math.max(2, Math.ceil(plannedSets * 0.8)) : plannedSets;
      const suggestion = calculateSuggestion(exercise);
      const unitLabel = type === 'time' ? 'sec' : 'reps';

      const setRows = Array.from({ length: sets }, (_, setIndex) => {
        const setNumber = setIndex + 1;
        return `
          <div class="set-row">
            <div class="set-no">S${setNumber}</div>
            <input data-exercise="${index}" data-type="kg" data-set="${setNumber}" inputmode="decimal" placeholder="kg" />
            <input data-exercise="${index}" data-type="reps" data-set="${setNumber}" inputmode="decimal" placeholder="reps" />
            <button class="done-btn" type="button" data-action="toggle-done">✓</button>
          </div>
        `;
      }).join('');

      return `
        <article class="exercise">
          <div class="exercise-header">
            <div>
              <div class="exercise-title">${name}</div>
              <div class="exercise-hint">${sets} sets × ${repMin}–${repMax} ${unitLabel}</div>
            </div>
            <div>
              <div class="suggestion">🎯 ${suggestion.text}</div>
              <div class="suggestion-detail">${suggestion.detail}</div>
            </div>
          </div>
          ${setRows}
        </article>
      `;
    }

    function collectExerciseInputs(index) {
      const weights = $$(`input[data-exercise="${index}"][data-type="kg"]`)
        .map((input) => input.value.trim())
        .filter(Boolean);

      const reps = $$(`input[data-exercise="${index}"][data-type="reps"]`)
        .map((input) => input.value.trim())
        .filter(Boolean);

      return { weights, reps };
    }

    function makeSummary(weights, reps) {
      const length = Math.max(weights.length, reps.length);
      return Array.from({ length }, (_, index) => `${weights[index] || 'BW'}×${reps[index] || '-'}`).join(', ');
    }

    function loadInputs() {
      const day = PLAN[state.currentDay];
      const sessions = getSessions();
      const savedDay = sessions[state.currentWeek]?.[state.currentDay] || {};

      day.exercises.forEach((exercise, index) => {
        const saved = savedDay[exerciseKey(exercise[0])] || latestForExercise(exercise[0]);
        if (!saved) return;

        $$(`input[data-exercise="${index}"][data-type="kg"]`).forEach((input, setIndex) => {
          input.value = saved.weights?.[setIndex] || '';
        });

        $$(`input[data-exercise="${index}"][data-type="reps"]`).forEach((input, setIndex) => {
          input.value = saved.reps?.[setIndex] || '';
        });
      });
    }

    function saveWorkout() {
      const day = PLAN[state.currentDay];
      const sessions = getSessions();
      let savedCount = 0;

      sessions[state.currentWeek] ||= {};
      sessions[state.currentWeek][state.currentDay] ||= {};

      day.exercises.forEach((exercise, index) => {
        const [name, , repMin, repMax, , increment] = exercise;
        const { weights, reps } = collectExerciseInputs(index);

        if (!weights.length && !reps.length) return;

        sessions[state.currentWeek][state.currentDay][exerciseKey(name)] = {
          name,
          weights,
          reps,
          summary: makeSummary(weights, reps),
          date: new Date().toISOString(),
          repMin,
          repMax,
          inc: increment
        };

        savedCount += 1;
      });

      setSessions(sessions);
      alert(`Saved Week ${state.currentWeek} • ${day.name}. ${savedCount} exercises logged.`);
      renderTrainingDay();
    }

    function clearDay() {
      $$('#dayCard input').forEach((input) => { input.value = ''; });
      $$('.done-btn').forEach((button) => button.classList.remove('on'));
    }

    function deleteCurrentSession() {
      const sessions = getSessions();
      if (!sessions[state.currentWeek]?.[state.currentDay]) return;

      delete sessions[state.currentWeek][state.currentDay];
      setSessions(sessions);
      alert('Saved session deleted for this week/day.');
      renderTrainingDay();
      renderHistory();
    }

    /* =========================================================
       6. Progress and History
    ========================================================= */
    function saveWeight() {
      const week = Number($('#weightWeekInput').value);
      const kg = Number($('#weightInput').value);

      if (!week || !kg) {
        alert('Enter week and weight.');
        return;
      }

      const data = getWeights();
      data[week] = kg;
      setWeights(data);
      renderChart();
    }

    function renderChart() {
      const data = getWeights();
      const labels = TARGET_WEIGHTS.map((_, index) => `W${index + 1}`);
      const actual = TARGET_WEIGHTS.map((_, index) => data[index + 1] ?? null);

      $('#weightTable').innerHTML = `
        <h2>Weekly Targets</h2>
        ${TARGET_WEIGHTS.map((target, index) => {
          const week = index + 1;
          const actualText = data[week] ? `Actual ${data[week]} kg` : 'Not saved';
          return `
            <div class="target-row">
              <strong>Week ${week}</strong>
              <span>Target ${target.toFixed(1)} kg</span>
              <span>${actualText}</span>
            </div>
          `;
        }).join('')}
      `;

      const context = $('#weightChart');
      if (state.chart) state.chart.destroy();

      state.chart = new Chart(context, {
        type: 'line',
        data: {
          labels,
          datasets: [
            { label: 'Target kg', data: TARGET_WEIGHTS, borderWidth: 2, tension: 0.25 },
            { label: 'Actual kg', data: actual, borderWidth: 3, tension: 0.25 }
          ]
        },
        options: {
          responsive: true,
          plugins: { legend: { labels: { color: '#fff' } } },
          scales: {
            x: { ticks: { color: '#cbd5e1' }, grid: { color: '#334155' } },
            y: { ticks: { color: '#cbd5e1' }, grid: { color: '#334155' } }
          }
        }
      });
    }

    function renderHistory() {
      const sessions = getSessions();
      let html = '';

      for (let week = 1; week <= 16; week += 1) {
        if (!sessions[week]) continue;

        html += `
          <div class="log-item">
            <h3>Week ${week}</h3>
            <div class="small">${phaseLabel(week)}</div>
        `;

        Object.keys(sessions[week]).sort().forEach((dayIndex) => {
          const day = PLAN[Number(dayIndex)];
          html += `<div style="margin-top:10px"><strong>${day.name} – ${day.title}</strong><br>`;

          Object.values(sessions[week][dayIndex]).forEach((entry) => {
            html += `<span class="pill">${entry.name}: ${entry.summary}</span>`;
          });

          html += '</div>';
        });

        html += '</div>';
      }

      $('#historyList').innerHTML = html || '<div class="small">No saved workouts yet. Save a session from the Train tab.</div>';
    }

    /* =========================================================
       7. Backup / Restore
    ========================================================= */
    function exportData() {
      const data = {
        app: '4-Day Gym Tracker Pro',
        version: 'clean-structured-v2',
        exportedAt: new Date().toISOString(),
        sessions: localStorage.getItem(STORAGE_KEYS.sessions) || '{}',
        weights: localStorage.getItem(STORAGE_KEYS.weights) || '{}',
        currentWeek: localStorage.getItem(STORAGE_KEYS.currentWeek) || String(state.currentWeek)
      };

      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = url;
      link.download = `gym_tracker_backup_week${state.currentWeek}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      alert('Backup file created. Choose Save to Files, then save it in iCloud Drive.');
    }

    function importData() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/json';

      input.onchange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (readerEvent) => {
          try {
            const data = JSON.parse(readerEvent.target.result);
            if (data.sessions) localStorage.setItem(STORAGE_KEYS.sessions, data.sessions);
            if (data.weights) localStorage.setItem(STORAGE_KEYS.weights, data.weights);
            if (data.currentWeek) localStorage.setItem(STORAGE_KEYS.currentWeek, data.currentWeek);

            alert('Data imported successfully. The tracker will reload now.');
            location.reload();
          } catch {
            alert('Invalid backup file. Please select a valid gym tracker .json file.');
          }
        };

        reader.readAsText(file);
      };

      input.click();
    }


    /* =========================================================
       8. Meal Plan
    ========================================================= */
    function renderMealTabs() {
      const mealTabs = $('#mealTabs');
      if (!mealTabs) return;

      mealTabs.innerHTML = MEAL_PLAN.map((day, index) => `
        <button 
          class="meal-tab ${index === state.currentMealDay ? 'active' : ''}" 
          type="button" 
          data-meal-day="${index}">
          ${day.day.replace('Day ', 'D')}
        </button>
      `).join('');
    }

    function renderMealPlan() {
      const mealCard = $('#mealCard');
      if (!mealCard) return;

      const day = MEAL_PLAN[state.currentMealDay];

      mealCard.innerHTML = `
        <div class="meal-title">
          <div>
            <h2>🗓️ ${day.day}</h2>
            <div class="small">${day.title}</div>
          </div>
          <span class="badge">~1900 kcal goal</span>
        </div>

        <div class="meal-objective">
          <div class="small">
            <strong>Objective:</strong> Keep meals realistic, high-protein, controlled in rice/oil, and easy to follow with Malaysian food.
          </div>
        </div>

        ${day.meals.map((meal) => `
          <div class="meal-block">
            <h3>${meal.name}</h3>
            <ul>
              ${meal.items.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        `).join('')}

        ${day.note ? `<div class="meal-note">${day.note}</div>` : ''}
      `;

      renderMealTabs();
    }

    function setMealDay(index) {
      state.currentMealDay = Number(index);
      localStorage.setItem(STORAGE_KEYS.currentMealDay, String(state.currentMealDay));
      renderMealPlan();
    }

    /* =========================================================
       9. Navigation and Events
    ========================================================= */
    function showView(viewId) {
      $$('.view').forEach((view) => view.classList.remove('active'));
      $(`#${viewId}`).classList.add('active');

      $$('.nav-btn').forEach((button) => {
        button.classList.toggle('active', button.dataset.view === viewId);
      });

      if (viewId === 'progress') renderChart();
      if (viewId === 'meal') renderMealPlan();
      if (viewId === 'history') renderHistory();
    }

    document.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (!button) return;

      const { action, day, view, mealDay } = button.dataset;

      if (view) showView(view);
      if (day !== undefined) {
        state.currentDay = Number(day);
        renderTrainingDay();
      }

      if (mealDay !== undefined) setMealDay(mealDay);

      if (action === 'next-week') startNextWeek();
      if (action === 'save-workout') saveWorkout();
      if (action === 'clear-day') clearDay();
      if (action === 'delete-session') deleteCurrentSession();
      if (action === 'toggle-done') button.classList.toggle('on');
      if (action === 'save-weight') saveWeight();
      if (action === 'export-data') exportData();
      if (action === 'import-data') importData();
    });

    $('#weekSelect').addEventListener('change', (event) => setWeek(event.target.value));

    initWeekSelector();
    renderTrainingDay();
    renderMealPlan();
