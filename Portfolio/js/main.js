(function () {
    let create__links = document.querySelectorAll('.nav__link:not(.nav__link--btn)');

    create__links.forEach(el => {
        el.addEventListener('click', () => {
            document.querySelectorAll('.nav__link').forEach(el => el.classList.remove('active'));
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

    let btns = document.querySelectorAll('[data-modal]');

    btns.forEach(el => {
        el.addEventListener('click', function (event) {
            event.preventDefault();

            let modalId = this.dataset.modal;
            document.querySelector(modalId).classList.add('show');
            document.querySelector('body').classList.add('no-scroll');
        })
    })

    let modalCloseBtns = document.querySelectorAll('.modal__close');
    modalCloseBtns.forEach(el => {
        el.addEventListener('click', function(event) {
            event.preventDefault();
            
            let modalParent = this.closest('.modal');
            modalParent.classList.remove('show');
            document.querySelector('body').classList.remove('no-scroll');
        });
    });

    let modals = document.querySelectorAll('.modal');
    modals.forEach(el => {
        el.addEventListener('click', function (e) {
            this.classList.remove('show');
            document.querySelector('body').classList.remove('no-scroll');
        });
    });

    let modalDialogs = document.querySelectorAll('.modal__dialog');
    modalDialogs.forEach(el => {
        el.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });

})();

document.addEventListener('DOMContentLoaded', function () {

});