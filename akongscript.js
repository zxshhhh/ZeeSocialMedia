document.addEventListener('DOMContentLoaded', function() {
    const postButton = document.getElementById('post-button');
    const notification = document.getElementById('notification');
    
    postButton.addEventListener('click', function() {
        notification.classList.remove('hidden');
        notification.classList.add('show');
        
        setTimeout(function() {
            notification.classList.remove('show');
            notification.classList.add('hidden');
        }, 3000); // Hide notification after 3 seconds
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const postButton = document.getElementById('post-button');
    const notification = document.getElementById('notification');
    
    postButton.addEventListener('click', function() {
        notification.classList.remove('hidden');
        notification.classList.add('show');
        
        setTimeout(function() {
            notification.classList.remove('show');
            notification.classList.add('hidden');
        }, 3000); // Hide notification after 3 seconds
    });

    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });
});