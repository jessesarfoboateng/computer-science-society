const searchInputs = document.querySelectorAll('.search-input input');
        searchInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.closest('.search-input').style.backgroundColor = '#dee2e6';
            });
            input.addEventListener('blur', () => {
                input.closest('.search-input').style.backgroundColor = '#e9ecef';
            });
        });