module.exports = {
    apps: [
        {
            name: 'betacrm-web',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production',
                PORT: 3000
            }
        },
        {
            name: 'betacrm-worker',
            script: 'npx',
            args: 'tsx workers/email-worker.ts',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G'
        },
        {
            name: 'betacrm-imap',
            script: 'npx',
            args: 'tsx workers/imap-sync.ts',
            instances: 1,
            autorestart: true,
            watch: false,
            cron_restart: "*/5 * * * *", // Restart every 5 mins to sync (or loop internally)
            max_memory_restart: '1G'
        }
    ]
};
