(function () {
    let create__links = document.querySelectorAll('.create__link');

    create__links.forEach(el => {
        el.addEventListener('click', () => {
            document.querySelectorAll('.create__link').forEach(el => el.classList.remove('active'));
            el.classList.add('active');
        })
    })

    let filers = document.querySelectorAll('[data-link]');
    
    filers.forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            
            let cat = this.dataset.link;
            let cols = document.querySelectorAll('.portfolio__col');
            
            if (cat == "all") {
                cols.forEach(col => col.classList.remove('hide__category'));                
            } else {
                cols.forEach(col => {
                    if (col.dataset.cat !== cat) {
                        col.classList.add('hide__category')
                    } else {
                        col.classList.remove('hide__category')
                    }
                });
            }
        });        
    })

})();