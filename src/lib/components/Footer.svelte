<script lang="ts">
  import { resumeData } from '../data/resume';
  const currentYear: number = new Date().getFullYear();
  const lastUpdate: string = new Date().toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
</script>

<footer class="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl shadow-pink-500/10 text-center">
  <div class="flex flex-col md:flex-row items-center justify-between gap-4">
    <div class="text-slate-400">
      <p class="flex items-center gap-2 justify-center md:justify-start">
        <svg class="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Последнее обновление: {lastUpdate}
      </p>
    </div>

    <div class="text-slate-400">
      <p>&copy; {currentYear} Рожков Игорь. Все права защищены.</p>
    </div>
  </div>

  <div class="mt-4 pt-4 border-t border-white/10">
    <p class="text-slate-500 text-sm flex items-center gap-2 justify-center">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
      Создано с использованием Svelte + Tailwind CSS
    </p>
  </div>

  <!-- Скрытый блок для ATS и поисковых систем -->
  <div class="sr-only" aria-hidden="true">
    <pre>{resumeData.atsKeywords}</pre>
  </div>
</footer>
