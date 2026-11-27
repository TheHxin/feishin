import type { CapacitorConfig } from '@capacitor/cli';

// Wraps Feishin's web build (`pnpm build:web` -> out/web) in an Android WebView.
const config: CapacitorConfig = {
    appId: 'org.jeffvli.feishin', // change this if you plan to publish your own build
    appName: 'Feishin',
    webDir: 'out/web',
    server: {
        // Serve the app from http://localhost instead of https://localhost.
        // The https scheme can boot to a black screen with Vite's `crossorigin`
        // module scripts, and http lets the app talk to plain-http LAN servers.
        androidScheme: 'http',
        // Allow cleartext traffic to http:// Navidrome / Jellyfin / Subsonic servers.
        cleartext: true,
    },
    android: {
        // Let the <audio> element stream from http:// servers.
        allowMixedContent: true,
        backgroundColor: '#000000',
        // Lets you debug the WebView from chrome://inspect on your PC.
        webContentsDebuggingEnabled: true,
    },
};

export default config;
