</main>
    <footer class="bg-slate-900 text-slate-400 py-16 mt-20">
        <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
            <div class="space-y-6">
                <div class="flex items-center gap-2">
                    <i data-lucide="cloud" class="text-blue-500"></i>
                    <span class="text-xl font-bold text-white uppercase">USA CLOUD IT</span>
                </div>
                <p class="text-sm">Empowering businesses worldwide with premium cloud infrastructure and IT solutions.</p>
                <div class="flex gap-4">
                    <a href="#"><i data-lucide="twitter"></i></a>
                    <a href="#"><i data-lucide="linkedin"></i></a>
                    <a href="#"><i data-lucide="facebook"></i></a>
                </div>
            </div>
            <div>
                <h4 class="text-white font-bold mb-6">Quick Links</h4>
                <ul class="space-y-4 text-sm">
                    <li><a href="about.php">About Us</a></li>
                    <li><a href="pricing.php">Pricing</a></li>
                    <li><a href="contact.php">Contact Us</a></li>
                    <li><a href="faq.php">Knowledge Base</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-bold mb-6">Support</h4>
                <ul class="space-y-4 text-sm">
                    <li><a href="mailto:usacloudit@gmail.com">usacloudit@gmail.com</a></li>
                    <li><a href="tel:+8801711427975">+880 1711-427975</a></li>
                    <li><a href="https://wa.me/8801711427975" target="_blank">WhatsApp Support</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-bold mb-6">Legal</h4>
                <ul class="space-y-4 text-sm">
                    <li><a href="terms.php">Terms & Conditions</a></li>
                    <li><a href="privacy.php">Privacy Policy</a></li>
                    <li><a href="refund.php">Refund Policy</a></li>
                </ul>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-xs text-center">
            &copy; <?php echo date("Y"); ?> USA Cloud IT. All Rights Reserved.
        </div>
    </footer>

    <script>
        // Initialize Lucide Icons
        lucide.createIcons();

        // Theme Toggle Logic
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        });

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Load saved theme
        if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }
    </script>
</body>
</html>