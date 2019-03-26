!function styleSections() {
    // add gradient styling to all sections
    const gradients = [
        "gradient-1", "gradient-2", "gradient-3", "gradient-4", "gradient-5",
        "gradient-6", "gradient-7", "gradient-8", "gradient-9"]
    const sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        const section = sections[i]
        section.classList.add("section", gradients[i % sections.length])
    }
}()