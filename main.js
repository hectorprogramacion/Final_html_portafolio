document.addEventListener('DOMContentLoaded', function () {
    // About button
    const aboutBtn = document.getElementById('about-btn');
    const aboutResult = document.getElementById('about-result');
    if (aboutBtn && aboutResult) {
        aboutBtn.addEventListener('click', function () {
            aboutResult.textContent = "You consulted the About section!";
        });
    }

    // Project buttons
    const projectBtns = document.querySelectorAll('.project-btn');
    projectBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const projectName = btn.getAttribute('data-project');
            const resultDiv = btn.nextElementSibling;
            if (resultDiv) {
                resultDiv.textContent = `You consulted ${projectName}!`;
            }
        });
    });

    // Contact button
    const contactBtn = document.getElementById('contact-btn');
    const contactResult = document.getElementById('contact-result');
    if (contactBtn && contactResult) {
        contactBtn.addEventListener('click', function () {
            contactResult.textContent = "You consulted the Contact section!";
        });
    }
});
