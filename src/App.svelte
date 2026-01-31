<script lang="ts">
  import Header from './lib/components/Header.svelte';
  import About from './lib/components/About.svelte';
  import Experience from './lib/components/Experience.svelte';
  import Skills from './lib/components/Skills.svelte';
  import Education from './lib/components/Education.svelte';
  import Footer from './lib/components/Footer.svelte';
</script>

<main class="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black">
  <!-- Размытые цветные пятна (blur blobs) -->
  <div class="fixed inset-0 pointer-events-none overflow-hidden">
    <!-- Синее пятно -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style="animation-duration: 4s;"></div>

    <!-- Фиолетовое пятно -->
    <div class="absolute top-1/2 right-1/4 w-[32rem] h-[32rem] bg-purple-500/30 rounded-full blur-3xl animate-pulse" style="animation-duration: 5s; animation-delay: 1s;"></div>

    <!-- Розовое пятно -->
    <div class="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style="animation-duration: 6s; animation-delay: 2s;"></div>

    <!-- Голубое пятно -->
    <div class="absolute top-1/3 right-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style="animation-duration: 7s; animation-delay: 0.5s;"></div>
  </div>

  <!-- Контент -->
  <div class="relative z-10 container mx-auto px-4 py-8 md:py-12 max-w-6xl">
    <div class="space-y-8">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </div>
  </div>

  <!-- Градиентный оверлей для лучшего контраста -->
  <div class="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50 pointer-events-none"></div>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :global(*) {
    box-sizing: border-box;
  }

  /* Smooth scroll */
  :global(html, body) {
    scroll-padding-top: 2rem;
  }

  /* Print styles */
  @media print {
    :global(body) {
      background: white !important;
      color: black !important;
    }

    main {
      background: white !important;
    }

    :global(.backdrop-blur-2xl),
    :global(.backdrop-blur-xl) {
      backdrop-filter: none !important;
      background: white !important;
      border: 1px solid #e5e7eb !important;
    }

    /* Скрыть фоновые пятна при печати */
    main > div:first-child {
      display: none !important;
    }
  }
</style>
