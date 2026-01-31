<script lang="ts">
  import { resumeData } from '../data/resume';
  const { education } = resumeData;
</script>

<section class="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-purple-500/10">
  <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
    <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
    Образование
  </h2>

  <div class="space-y-4">
    {#each education as edu}
      <div class="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/20 transition-all">
        <div class="flex items-start gap-4">
          <div class="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 flex items-center justify-center">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>

          <div class="flex-1">
            <h3 class="text-xl font-bold text-white mb-1">{edu.institution}</h3>
            <p class="text-purple-400 font-semibold mb-2">{edu.degree}</p>
            <p class="text-slate-300 mb-2">{edu.specialty}</p>
            <p class="text-slate-400 text-sm flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {edu.period}
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
