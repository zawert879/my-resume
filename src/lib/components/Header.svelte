<script lang="ts">
  import { resumeData } from '../data/resume';
  const { personalInfo } = resumeData;

  function copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
  }
</script>

<header class="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-500/10">
  <div class="flex flex-col md:flex-row gap-8 items-start md:items-center">
    <!-- Фото -->
    <div class="shrink-0">
      <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl shadow-blue-500/20">
        <img src={personalInfo.photo} alt={personalInfo.name} class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Основная информация -->
    <div class="flex-1">
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">{personalInfo.name}</h1>
      <p class="text-xl md:text-2xl text-blue-400 font-semibold mb-4">{personalInfo.position}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <div class="flex items-center gap-2 text-slate-300">
          <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{personalInfo.age} лет, {personalInfo.birthDate}</span>
        </div>

        <div class="flex items-center gap-2 text-slate-300">
          <svg class="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{personalInfo.location}, {personalInfo.citizenship}</span>
        </div>

        <button
          on:click={() => copyToClipboard(personalInfo.phone)}
          class="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
        >
          <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>{personalInfo.phone}</span>
        </button>

        <button
          on:click={() => copyToClipboard(personalInfo.email)}
          class="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
        >
          <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>{personalInfo.email}</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <a
          href={personalInfo.telegram}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
        >
          <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.325.016.093.036.305.02.471z"/>
          </svg>
          <span>Telegram</span>
        </a>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
        >
          <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>LinkedIn</span>
        </a>

        <a
          href={personalInfo.hhUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
        >
          <svg class="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span>HH.ru</span>
        </a>
      </div>

      <div class="flex flex-wrap items-center gap-4 mt-6">
        <div class="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl backdrop-blur-sm">
          <span class="text-2xl font-bold text-white">{personalInfo.salary}</span>
        </div>
      </div>
    </div>
  </div>
</header>
