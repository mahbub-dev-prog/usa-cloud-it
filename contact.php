<?php include 'header.php'; ?>

<section class="py-24">
    <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-20">
            <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Get In Touch</h1>
            <p class="text-slate-600 dark:text-slate-400 text-lg">Our specialists are ready to help you find the best cloud solutions.</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-12">
            <div class="space-y-8 bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl">
                <h3 class="text-xl font-bold">Direct Channels</h3>
                <div class="flex gap-4 items-center">
                    <div class="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl"><i data-lucide="mail"></i></div>
                    <div>
                        <p class="text-xs font-bold text-slate-500 uppercase">Email</p>
                        <a href="mailto:usacloudit@gmail.com" class="font-bold">usacloudit@gmail.com</a>
                    </div>
                </div>
                <div class="flex gap-4 items-center">
                    <div class="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl"><i data-lucide="message-circle"></i></div>
                    <div>
                        <p class="text-xs font-bold text-slate-500 uppercase">WhatsApp</p>
                        <a href="https://wa.me/8801711427975" class="font-bold">+880 1711-427975</a>
                    </div>
                </div>
                <div class="flex gap-4 items-center">
                    <div class="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-xl"><i data-lucide="send"></i></div>
                    <div>
                        <p class="text-xs font-bold text-slate-500 uppercase">Telegram</p>
                        <a href="https://t.me/usacloudit" class="font-bold">@usacloudit</a>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
                <form class="grid md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Your Name" class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 w-full">
                    <input type="email" placeholder="Email Address" class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 w-full">
                    <input type="text" placeholder="Subject" class="md:col-span-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 w-full">
                    <textarea rows="5" placeholder="Your Message" class="md:col-span-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 w-full"></textarea>
                    <button class="md:col-span-2 bg-blue-600 text-white font-bold py-5 rounded-xl shadow-lg">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</section>

<?php include 'footer.php'; ?>