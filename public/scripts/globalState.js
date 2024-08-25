// globalState.js
document.addEventListener('alpine:init', () => {
    Alpine.store('globalState', {
        open: false,
        toggleIsSee() {
            this.isSee = !this.isSee;
        },
    });
});
