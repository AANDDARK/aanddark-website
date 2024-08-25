
document.addEventListener('alpine:init', () => {
    Alpine.store('globalState', {
        open: false,
        toggleIsSee() {
            this.open === !this.open;
        },
    });
});
