<?php include 'header.php'; ?>
<?php include 'config.php'; ?>

<section class="py-24">
    <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-12">Transparent Pricing</h1>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <?php foreach($pricing['shared'] as $plan): ?>
            <div class="p-8 rounded-3xl border-2 <?php echo isset($plan['popular']) ? 'border-blue-500 shadow-2xl scale-105 z-10' : 'border-slate-100 dark:border-slate-800'; ?> bg-white dark:bg-slate-900">
                <h3 class="text-xl font-bold mb-4"><?php echo $plan['name']; ?></h3>
                <div class="text-4xl font-extrabold mb-8"><?php echo $plan['price']; ?><span class="text-sm font-normal text-slate-500">/<?php echo $plan['period']; ?></span></div>
                <ul class="space-y-4 mb-10 text-left">
                    <?php foreach($plan['features'] as $feat): ?>
                    <li class="flex items-center gap-2 text-sm"><i data-lucide="check" class="text-blue-500"></i> <?php echo $feat; ?></li>
                    <?php endforeach; ?>
                </ul>
                <a href="client-area.php" class="block w-full py-4 rounded-xl font-bold <?php echo isset($plan['popular']) ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800'; ?>">Select Plan</a>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php include 'footer.php'; ?>