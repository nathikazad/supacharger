(function () {
  const modalsHTML = `
    <!-- Manifesto Modal -->
    <div id="manifesto-modal" class="fixed inset-0 z-[100] hidden items-center justify-center bg-black/50 backdrop-blur-sm p-4 md:p-6">
      <div class="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-12 max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative">
        <button class="modal-close absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
          <iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
        </button>

        <div class="text-center space-y-10 py-4">

          <p class="text-sm font-medium uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">Manifesto</p>

          <div class="space-y-3">
            <p class="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">The most valuable thing you own is not your money, your house, or your career.</p>
            <p class="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white tracking-tight">It's your <span class="font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-300">Attention</span>.</p>
          </div>

          <div class="space-y-2 max-w-md mx-auto">
            <p class="text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">Where you point it determines who you become.</p>
            <p class="text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">What you give it to determines what you give up.</p>
          </div>

          <hr class="border-slate-200 dark:border-slate-800 max-w-xs mx-auto">

          <div class="space-y-2">
            <p class="text-xl md:text-2xl font-medium text-slate-900 dark:text-white tracking-tight">Your <span class="font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-300">Attention</span> is all you got.</p>
            <p class="text-xl md:text-2xl font-medium text-slate-900 dark:text-white tracking-tight">So don't give it away for free.</p>
          </div>

          <hr class="border-slate-200 dark:border-slate-800 max-w-xs mx-auto">

          <div class="space-y-2 text-lg text-slate-600 dark:text-slate-300 font-light">
            <p>See reality clearly.</p>
            <p>Choose consciously.</p>
          </div>

          <div class="space-y-2 text-lg text-slate-600 dark:text-slate-300 font-light">
            <p>Do not let your attention scatter.</p>
            <p>Do not outsource your mind.</p>
          </div>

          <hr class="border-slate-200 dark:border-slate-800 max-w-xs mx-auto">

          <div class="space-y-2 text-xl md:text-2xl font-medium text-slate-900 dark:text-white tracking-tight">
            <p>Become hard to manipulate.</p>
            <p>Become fully present.</p>
          </div>

          <hr class="border-slate-200 dark:border-slate-800 max-w-xs mx-auto">

          <div class="space-y-2 text-lg text-slate-600 dark:text-slate-300 font-light">
            <p>Own your data.</p>
            <p>Own your time.</p>
            <p>Own your future.</p>
          </div>

          <p class="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight pt-4">Take your <span class="font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-300">Attention</span> back.</p>

        </div>
      </div>
    </div>

    <!-- For Parents Modal -->
    <div id="parents-modal" class="fixed inset-0 z-[100] hidden items-center justify-center bg-black/50 backdrop-blur-sm p-4 md:p-6">
      <div class="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-12 max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative">
        <button class="modal-close absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
          <iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
        </button>

        <div class="space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed">
          <h2 class="text-3xl md:text-4xl font-medium text-slate-900 dark:text-white tracking-tight">For Parents</h2>

          <h3 class="text-2xl font-medium text-slate-900 dark:text-white tracking-tight">The Moment We're In</h3>
          <div class="space-y-4">
            <p>For the first time in history, our kids are growing up with intelligence that talks back. Systems that answer their questions, shape their opinions, respond to their emotions, and influence how they see the world.</p>
            <p>Our kids will spend <strong class="text-slate-900 dark:text-white">more time interacting with AI than with any single human being</strong> — including, you, their parents. That means AI will help shape how they think, what they believe, and who they become.</p>
            <p>For many kids, AI is quietly becoming a teacher, advisor, and confidant. But most of these systems are designed by companies whose goals are engagement, data, and profit — not your family's values.</p>
            <p>If you don't actively shape how your child interacts with AI, someone else will.</p>
          </div>

          <hr class="border-slate-200 dark:border-slate-800">

          <h3 class="text-2xl font-medium text-slate-900 dark:text-white tracking-tight">The Risk</h3>
          <div class="space-y-4">
            <p>AI will be asked the biggest questions in your child's life: Who am I? What matters? What is right? What should I want?</p>
            <p>Today, parents have almost no visibility into those conversations — and almost no control over the values embedded inside them.</p>
            <p>Meanwhile, kids are already spending hours each day inside systems designed to capture attention, not build judgment, discipline, or character.</p>
          </div>

          <hr class="border-slate-200 dark:border-slate-800">

          <h3 class="text-2xl font-medium text-slate-900 dark:text-white tracking-tight">The Choice</h3>
          <div class="space-y-4">
            <p>The future is not "AI or no AI." The future is <strong class="text-slate-900 dark:text-white">who controls the AI shaping your child.</strong></p>
            <p>Corporate AI that optimizes for engagement and consumption. Or family-aligned AI that reinforces your family's identity, values, discipline, and purpose.</p>
            <p>Tools that quietly replace parental influence. Or tools that extend and strengthen it.</p>
          </div>

          <hr class="border-slate-200 dark:border-slate-800">

          <h3 class="text-2xl font-medium text-slate-900 dark:text-white tracking-tight">Our Solution</h3>
          <div class="space-y-4">
            <p>We believe that while your child is in your home, growing under your guidance, you have every right to see and direct what influences them. <strong class="text-slate-900 dark:text-white">Including AI.</strong></p>
            <p>That means: </p>
            <ul class="list-disc list-outside space-y-2 pl-6">
              <li>Help you seamlessly monitor the development of your child.</li>
              <li>Granular control over the values, boundaries, and guidance the AI provides.</li>
              <li> Data-driven guidance to help you parent better — to help you communicate better, identify conflict resolution strategies that work and more.</li>
              <li>Every topic handled on your terms — no corporate or government can override your judgment</li>
            </ul>
            <p>This is AI that answers to you, the Parent, not some corporation or government. Your child's mind is not up for sale and we're building the technology to help you protect it. So your child can grow into a strong and prosperous individual, who will contribute to a strong and prosperous society.</p>
            <p class="text-center pt-4 text-lg leading-loose">We believe the only way to 
              <span class="font-medium text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-300 dark:from-rose-300 dark:to-red-200">Make America Great Again</span>
              is to 
              <span class="font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-400 dark:from-sky-300 dark:to-blue-200">Make Americans Great Again.</span> And that starts with our children.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  const container = document.createElement('div');
  container.innerHTML = modalsHTML;
  while (container.firstElementChild) {
    document.body.appendChild(container.firstElementChild);
  }

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(btn.closest('[id$="-modal"]'));
    });
  });

  document.querySelectorAll('[id$="-modal"]').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('[id$="-modal"]:not(.hidden)').forEach(closeModal);
    }
  });

  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(trigger.dataset.modal);
    });
  });
})();
