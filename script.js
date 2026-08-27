// حالة العرض
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// عناصر الواجهة
const progressBar = document.getElementById('progress-bar');
const currentSlideNumEl = document.getElementById('current-slide-num');
const totalSlidesNumEl = document.getElementById('total-slides-num');
const notesPanel = document.getElementById('notes-panel');
const currentNotesEl = document.getElementById('current-notes');

// التهيئة الأولى
function init() {
    totalSlidesNumEl.innerText = totalSlides;
    updateSlide();
}

// تحديث الشريحة النشطة
function updateSlide() {
    // إخفاء جميع الشرائح
    slides.forEach(slide => slide.classList.remove('active'));
    
    // إظهار الشريحة الحالية
    slides[currentSlideIndex].classList.add('active');
    
    // تحديث العداد وشريط التقدم
    currentSlideNumEl.innerText = currentSlideIndex + 1;
    const progress = ((currentSlideIndex) / (totalSlides - 1)) * 100;
    progressBar.style.width = `${progress}%`;

    // تحديث ملاحظات المتحدث
    updateSpeakerNotes();
}

// الشريحة التالية
function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
        currentSlideIndex++;
        updateSlide();
    }
}

// الشريحة السابقة
function prevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateSlide();
    }
}

// ملاحظات المتحدث
function updateSpeakerNotes() {
    const activeSlide = slides[currentSlideIndex];
    const notesEl = activeSlide.querySelector('.speaker-notes');
    if (notesEl) {
        currentNotesEl.innerText = notesEl.innerText;
    } else {
        currentNotesEl.innerText = "لا توجد ملاحظات لهذه الشريحة.";
    }
}

function toggleNotes() {
    if (notesPanel.style.display === 'block') {
        notesPanel.style.display = 'none';
    } else {
        notesPanel.style.display = 'block';
    }
}

// ملء الشاشة
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// اختصارات لوحة المفاتيح (Keyboard Navigation)
window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft': 
        case 'ArrowUp':
        case 'PageUp':
            // بما أن العرض RTL، السهم الأيسر يعود للشريحة السابقة
            prevSlide();
            break;
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ': // Spacebar
            // السهم الأيمن ينتقل للشريحة التالية
            nextSlide();
            break;
        case 'Home':
            currentSlideIndex = 0;
            updateSlide();
            break;
        case 'End':
            currentSlideIndex = totalSlides - 1;
            updateSlide();
            break;
        case 'f':
        case 'F':
            toggleFullscreen();
            break;
        case 'n':
        case 'N':
            toggleNotes();
            break;
    }
});

// تشغيل التهيئة
init();
