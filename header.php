<!DOCTYPE html>
<html lang="en" class="">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USA Cloud IT | Professional Hosting & IT Solutions</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
        .glass { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px); }
        .dark .glass { background: rgba(15, 23, 42, 0.8); }
    </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
    <nav class="fixed w-full z-50 glass border-b border-slate-200 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <a href="index.php" class="flex items-center gap-2 group">
                    <div class="bg-blue-600 p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
                        <i data-lucide="cloud"></i>
                    </div>
                    <span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                        USA CLOUD <span class="text-blue-600">IT</span>
                    </span>
                </a>

                <div class="hidden md:flex items-center space-x-8">
                    <a href="index.php" class="text-sm font-medium hover:text-blue-600">Home</a>
                    <a href="about.php" class="text-sm font-medium hover:text-blue-600">About</a>
                    <a href="services.php" class="text-sm font-medium hover:text-blue-600">Services</a>
                    <a href="pricing.php" class="text-sm font-medium hover:text-blue-600">Pricing</a>
                    <a href="contact.php" class="text-sm font-medium hover:text-blue-600">Contact</a>
                    <button id="themeToggle" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                        <i data-lucide="moon" class="dark:hidden"></i>
                        <i data-lucide="sun" class="hidden dark:block"></i>
                    </button>
                    <a href="client-area.php" class="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/25">Client Login</a>
                </div>

                <div class="md:hidden flex items-center">
                    <button id="mobileMenuBtn" class="p-2">
                        <i data-lucide="menu"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <div id="mobileMenu" class="hidden md:hidden bg-white dark:bg-slate-900 px-4 py-6 space-y-4 border-b border-slate-200 dark:border-slate-800">
            <a href="index.php" class="block text-lg font-medium">Home</a>
            <a href="about.php" class="block text-lg font-medium">About</a>
            <a href="services.php" class="block text-lg font-medium">Services</a>
            <a href="pricing.php" class="block text-lg font-medium">Pricing</a>
            <a href="contact.php" class="block text-lg font-medium">Contact</a>
            <a href="client-area.php" class="block bg-blue-600 text-white px-4 py-3 rounded-xl text-center font-bold">Client Area</a>
        </div>
    </nav>
    <main class="pt-20">