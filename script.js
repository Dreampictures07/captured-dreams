document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Gallery filtering
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Set active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Load gallery items (manually added - you can replace this with Instagram API)
    loadGalleryItems();
    
    // Load Instagram feed
    loadInstagramFeed();
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});

// Function to load gallery items (manual approach)
function loadGalleryItems() {
    const galleryContainer = document.querySelector('.gallery-container');
    
    // Replace with your actual photos and categories
    const photos = [
        { src: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', category: 'nature' },
        { src: 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', category: 'candid' },
        { src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80', category: 'animals' },
        { src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80', category: 'nature' },
        { src: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80', category: 'animals' },
        { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80', category: 'candid' },
        { src: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', category: 'animals' },
        { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', category: 'nature' },
        { src: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80', category: 'candid' }
    ];
    
    // Clear loader
    galleryContainer.innerHTML = '';
    
    // Add photos to gallery
    photos.forEach(photo => {
        const item = document.createElement('div');
        item.className = `gallery-item ${photo.category}`;
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.category} photography">
            <span class="category">${photo.category}</span>
        `;
        galleryContainer.appendChild(item);
    });
}

// Function to load Instagram feed (using a free approach)
function loadInstagramFeed() {
    const instaContainer = document.getElementById('instafeed');
    
    // This is a placeholder - in a real implementation, you would:
    // 1. Use Instagram Basic Display API (requires authentication)
    // 2. Or use a service like https://www.instagramfeed.com/ to generate a free feed
    
    // For now, we'll simulate with placeholder images
    const placeholderImages = [
        'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80',
        'https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80',
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1575&q=80'
    ];
    
    placeholderImages.forEach(img => {
        const item = document.createElement('div');
        item.className = 'instagram-item';
        item.innerHTML = `<img src="${img}" alt="Instagram photo">`;
        instaContainer.appendChild(item);
    });
    
    // For a real implementation, you would fetch from Instagram's API here
    // fetchInstagramFeed();
}

// Example function for real Instagram API implementation
async function fetchInstagramFeed() {
    /* 
    This would be the actual implementation using Instagram API
    Note: Instagram's API requires authentication and has usage limits
    
    try {
        const response = await fetch('YOUR_INSTAGRAM_API_ENDPOINT');
        const data = await response.json();
        
        const instaContainer = document.getElementById('instafeed');
        instaContainer.innerHTML = '';
        
        data.forEach(post => {
            const item = document.createElement('div');
            item.className = 'instagram-item';
            item.innerHTML = `
                <img src="${post.media_url}" alt="Instagram post">
            `;
            instaContainer.appendChild(item);
        });
    } catch (error) {
        console.error('Error fetching Instagram feed:', error);
    }
    */
}