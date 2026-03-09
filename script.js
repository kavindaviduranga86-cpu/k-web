// Script to handle modal and interactions

function openMediaModal(src, type) {
    const modal = document.getElementById('media-modal');
    const container = document.getElementById('media-container');
    
    // Clear previous media
    container.innerHTML = '';
    
    modal.classList.remove('hidden');
    // slight delay for transition
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
    }, 10);

    // Create appropriate element
    if (type === 'image') {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl';
        img.id = 'current-media';
        container.appendChild(img);
    } else if (type === 'video') {
        const video = document.createElement('video');
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        video.className = 'max-w-full max-h-[80vh] rounded-md shadow-2xl';
        video.id = 'current-media';
        container.appendChild(video);
    }

    // Prevent body bounce
    document.body.style.overflow = 'hidden';
}

function closeMediaModal() {
    const modal = document.getElementById('media-modal');
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.getElementById('media-container').innerHTML = ''; // Stop video playback
        document.body.style.overflow = 'hidden'; // restore default
    }, 300);
}

// Close on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('media-modal');
        if (!modal.classList.contains('hidden')) {
            closeMediaModal();
        }
    }
});

function downloadMedia() {
    const media = document.getElementById('current-media');
    if(media) {
        const a = document.createElement('a');
        a.href = media.src;
        a.download = 'whatsapp-web-clone-media';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

// Basic Chat Switching Simulation
function openChat(user) {
    // In a real app this would load different chat histories.
    // Here we just trigger an animation on the chat area on mobile, 
    // or just console log it.
    console.log("Opening chat for:", user);
    
    // For mobile perspective, if screen is small, we should show the right area and hide the left.
    // Adding some simple responsive logic
    if(window.innerWidth < 768) {
        // Toggle mobile view
        alert("On mobile this would slide to the chat window.");
    }
}
