const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt');
    window.deferredPrompt = event;
    butInstall.removeAttribute('hidden', 'false');
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    butInstall.setAttribute('hidden', 'true');
    
    console.log("Installing the App")
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    console.log('App successfully installed!')
});
