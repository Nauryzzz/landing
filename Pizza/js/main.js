(function () {
    let create__links = document.querySelectorAll('.create__link');

    create__links.forEach(el => {
        el.addEventListener('click', () => {
            document.querySelectorAll('.create__link').forEach(el => el.classList.remove('active'));
            el.classList.add('active');
        })
    })
})();