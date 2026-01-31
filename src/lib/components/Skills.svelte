<script lang="ts">
  import { resumeData } from '../data/resume';
  const { skills, languages } = resumeData;

  const levelColors: Record<string, string> = {
    expert: 'from-green-500/20 to-emerald-500/20 border-green-400/40 text-green-300',
    advanced: 'from-blue-500/20 to-cyan-500/20 border-blue-400/40 text-blue-300',
    intermediate: 'from-purple-500/20 to-pink-500/20 border-purple-400/40 text-purple-300',
  };
</script>

<section class="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-blue-500/10">
  <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
    <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
    Навыки
  </h2>

  <div class="space-y-8">
    <!-- Языки программирования -->
    <div>
      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        Языки программирования
      </h3>
      <div class="flex flex-wrap gap-3">
        {#each skills.languages as lang}
          <span class="px-4 py-2 bg-gradient-to-r {levelColors[lang.level]} border rounded-xl backdrop-blur-sm font-medium">
            {lang.name}
          </span>
        {/each}
      </div>
    </div>

    <!-- Фреймворки -->
    <div>
      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        Фреймворки и библиотеки
      </h3>
      <div class="flex flex-wrap gap-2">
        {#each skills.frameworks as framework}
          <span class="px-3 py-1.5 bg-white/5 border border-cyan-400/30 rounded-lg text-cyan-300 text-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
            {framework}
          </span>
        {/each}
      </div>
    </div>

    <!-- Базы данных -->
    <div>
      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
        Базы данных
      </h3>
      <div class="flex flex-wrap gap-2">
        {#each skills.databases as db}
          <span class="px-3 py-1.5 bg-white/5 border border-pink-400/30 rounded-lg text-pink-300 text-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
            {db}
          </span>
        {/each}
      </div>
    </div>

    <!-- Инструменты -->
    <div>
      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Инструменты и технологии
      </h3>
      <div class="flex flex-wrap gap-2">
        {#each skills.tools as tool}
          <span class="px-3 py-1.5 bg-white/5 border border-blue-400/30 rounded-lg text-blue-300 text-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
            {tool}
          </span>
        {/each}
      </div>
    </div>

    <!-- Протоколы -->
    <div>
      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Протоколы и API
      </h3>
      <div class="flex flex-wrap gap-2">
        {#each skills.protocols as protocol}
          <span class="px-3 py-1.5 bg-white/5 border border-purple-400/30 rounded-lg text-purple-300 text-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
            {protocol}
          </span>
        {/each}
      </div>
    </div>

    <!-- Очереди сообщений -->
    <div>
      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
        Очереди сообщений
      </h3>
      <div class="flex flex-wrap gap-2">
        {#each skills.messageQueues as queue}
          <span class="px-3 py-1.5 bg-white/5 border border-orange-400/30 rounded-lg text-orange-300 text-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
            {queue}
          </span>
        {/each}
      </div>
    </div>

    <!-- AI и ML -->
    <div>
      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        AI и Machine Learning
      </h3>
      <div class="flex flex-wrap gap-2">
        {#each skills.ai as aiTech}
          <span class="px-3 py-1.5 bg-white/5 border border-yellow-400/30 rounded-lg text-yellow-300 text-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
            {aiTech}
          </span>
        {/each}
      </div>
    </div>

    <!-- Практики и методологии -->
    <div>
      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Практики и методологии
      </h3>
      <div class="flex flex-wrap gap-2">
        {#each skills.practices as practice}
          <span class="px-3 py-1.5 bg-white/5 border border-green-400/30 rounded-lg text-green-300 text-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
            {practice}
          </span>
        {/each}
      </div>
    </div>

    <!-- Языки -->
    <div>
      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        Иностранные языки
      </h3>
      <div class="flex flex-wrap gap-3">
        {#each languages as lang}
          <div class="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl backdrop-blur-sm">
            <span class="text-white font-medium">{lang.name}</span>
            <span class="text-cyan-300 text-sm ml-2">— {lang.level}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
