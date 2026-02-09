<?php
$services = [
    [
        'id' => 'shared-hosting',
        'title' => 'Shared Hosting',
        'description' => 'The most cost-effective solution to get your website online with high performance.',
        'icon' => 'zap',
        'features' => ['NVMe Storage', 'Free SSL', 'One-Click WP Install', '24/7 Support']
    ],
    [
        'id' => 'vps-hosting',
        'title' => 'VPS Hosting',
        'description' => 'Full root access and dedicated resources for high-traffic websites.',
        'icon' => 'server',
        'features' => ['Scalable Resources', 'DDoS Protection', 'Custom ISO', 'Tier 4 Datacenter']
    ],
    [
        'id' => 'dedicated-server',
        'title' => 'Dedicated Server',
        'description' => 'Premium hardware for enterprise workloads that require maximum performance.',
        'icon' => 'cpu',
        'features' => ['Latest Xeon CPUs', 'Unlimited Traffic', 'Multiple OS Options', '99.99% Uptime']
    ]
];

$pricing = [
    'shared' => [
        ['name' => 'Starter', 'price' => '$2.99', 'period' => 'mo', 'features' => ['1 Website', '10GB NVMe SSD', '100GB Bandwidth', 'Free SSL']],
        ['name' => 'Pro', 'price' => '$5.99', 'period' => 'mo', 'popular' => true, 'features' => ['Unlimited Websites', '50GB NVMe SSD', 'Unmetered Bandwidth', 'Free Domain']]
    ],
    'vps' => [
        ['name' => 'Cloud VPS 1', 'price' => '$12.00', 'period' => 'mo', 'features' => ['2 Core CPU', '4GB RAM', '80GB NVMe SSD', '2TB Traffic']]
    ]
];
?>