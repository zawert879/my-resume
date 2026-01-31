<script lang="ts">
  import { resumeData } from '../data/resume';
  const { about } = resumeData;
</script>

<section class="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-purple-500/10">
  <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
    <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
    Обо мне
  </h2>

  <div class="space-y-6">
    <p class="text-slate-300 text-lg leading-relaxed">
      {about.summary}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each about.highlights as highlight}
        <div class="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-purple-500/20 backdrop-blur-sm">
          <svg class="w-6 h-6 text-purple-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-slate-300">{highlight}</span>
        </div>
      {/each}
    </div>
  </div>

  <!-- ATS блок (скрытый визуально, но доступный для парсеров) -->
  <div class="sr-only" aria-hidden="true">
    <h3>Ключевые навыки для ATS</h3>
    <p>Python, FastAPI, Django, PostgreSQL, Redis, Docker, Kubernetes, REST API, Microservices, Backend Development, CI/CD, Git, RabbitMQ, Kafka, AWS, Test-Driven Development, Agile, Scrum</p>
  </div>
</section>
