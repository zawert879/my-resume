<script lang="ts">
  import { resumeData } from '../data/resume';
  const { experience } = resumeData;

  let expandedIndex: number = 0;

  function toggleExpand(index: number): void {
    expandedIndex = expandedIndex === index ? -1 : index;
  }
</script>

<section class="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-cyan-500/10">
  <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
    <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
    Опыт работы
  </h2>

  <div class="space-y-4">
    {#each experience as job, index}
      <div class="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:shadow-cyan-500/20">
        <button
          on:click={() => toggleExpand(index)}
          class="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-2xl"
        >
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-white mb-1">{job.position}</h3>
              <p class="text-cyan-400 font-semibold mb-2">{job.company}</p>
              <p class="text-slate-400 text-sm flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {job.period} ({job.duration})
              </p>
            </div>
            <div class="flex items-center gap-2">
              <svg
                class="w-6 h-6 text-cyan-400 transition-transform {expandedIndex === index ? 'rotate-180' : ''}"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </button>

        {#if expandedIndex === index}
          <div class="px-6 pb-6 space-y-4 animate-fade-in">
            <p class="text-slate-300 leading-relaxed">{job.description}</p>

            <div>
              <h4 class="text-white font-semibold mb-3 flex items-center gap-2">
                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Основные достижения
              </h4>
              <ul class="space-y-2">
                {#each job.achievements as achievement}
                  <li class="flex items-start gap-3 text-slate-300">
                    <svg class="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{achievement}</span>
                  </li>
                {/each}
              </ul>
            </div>

            <div>
              <h4 class="text-white font-semibold mb-3 flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Технологии
              </h4>
              <div class="flex flex-wrap gap-2">
                {#each job.technologies as tech}
                  <span class="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-lg text-blue-300 text-sm backdrop-blur-sm">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }
</style>
