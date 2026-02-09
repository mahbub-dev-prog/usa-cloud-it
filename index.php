<?php include 'header.php'; ?>
<?php include 'config.php'; ?>

<section class="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-40">
    <div class="max-w-7xl mx-auto px-4 text-center lg:text-left grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 text-sm font-bold border border-blue-100 dark:border-blue-800">
                Premium Global Hosting Infrastructure
            </div>
            <h1 class="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                Secure • Scalable <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Smart Cloud Solutions</span>
            </h1>
            <p class="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
                USA Cloud IT provides high-performance servers built to scale your business globally with zero compromise on security.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="services.php" class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl">Get Started Now</a>
                <a href="pricing.php" class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-10 py-5 rounded-2xl font-bold">View Plans</a>
            </div>
        </div>
        <div class="hidden lg:block relative">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=1200" alt="Data Center" class="rounded-[3rem] shadow-2xl">
        </div>
    </div>
</section>

<section class="py-20 bg-slate-100 dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">Find Your Perfect Domain</h2>
        <div class="max-w-3xl mx-auto relative">
            <input type="text" placeholder="Search for your business name..." class="w-full px-6 py-6 rounded-2xl border-2 dark:bg-slate-800 dark:border-slate-700">
            <button class="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-8 rounded-xl font-bold">Search</button>
        </div>
    </div>
</section>

<section class="py-32">
    <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <?php foreach($services as $s): ?>
        <div class="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all">
            <div class="mb-6 text-blue-600"><i data-lucide="<?php echo $s['icon']; ?>" size="48"></i></div>
            <h4 class="text-2xl font-bold mb-4"><?php echo $s['title']; ?></h4>
            <p class="text-slate-600 dark:text-slate-400 mb-6"><?php echo $s['description']; ?></p>
            <ul class="space-y-2">
                <?php foreach($s['features'] as $f): ?>
                <li class="flex items-center gap-2 text-sm opacity-80"><i data-lucide="check-circle" size="16"></i> <?php echo $f; ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
        <?php endforeach; ?>
    </div>
</section>

<?php include 'footer.php'; ?>