!function styleSections() {
    // add gradient styling to all sections
    const gradients = [
        "gradient-1", "gradient-2", "gradient-3", "gradient-4", "gradient-5",
        "gradient-6", "gradient-7", "gradient-8", "gradient-9"]
    const sections = document.getElementsByTagName("section");
    if (sections.length == 0) { return }
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add("section", gradients[i % gradients.length])
    }
}()