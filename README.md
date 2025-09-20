function replaceAllImages() {
    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVCNV6puPJFaNwWdE_ad1-TsQOu8uwmTPaw&s';
    const textReplacement = 'alfredo pidor';
    
    // 1. Замена всех img src
    document.querySelectorAll('img[src]').forEach(img => {
        img.src = imageUrl;
    });
    
    // 2. Замена srcset атрибутов
    document.querySelectorAll('[srcset]').forEach(el => {
        el.srcset = imageUrl;
    });
    
    // 3. Замена source elements
    document.querySelectorAll('source[src], source[srcset]').forEach(source => {
        if (source.src) source.src = imageUrl;
        if (source.srcset) source.srcset = imageUrl;
    });
    
    // 4. Замена background images в стилях
    document.querySelectorAll('*').forEach(el => {
        const style = window.getComputedStyle(el);
        if (style.backgroundImage && style.backgroundImage !== 'none') {
            el.style.backgroundImage = `url("${imageUrl}")`;
        }
    });
    
    // 5. Замена poster у видео
    document.querySelectorAll('[poster]').forEach(el => {
        el.poster = imageUrl;
    });
    
    // 6. Замена favicon
    const favicon = document.querySelector('link[rel*="icon"]');
    if (favicon) {
        favicon.href = imageUrl;
    }
    
    // 7. Замена meta изображений (OpenGraph, Twitter)
    document.querySelectorAll('meta[property="og:image"], meta[name="twitter:image"], meta[property="og:image:url"]').forEach(meta => {
        meta.content = imageUrl;
    });
    
    // 8. Замена текста в заголовках
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, strong, b, title, p, span, a').forEach(el => {
        el.textContent = textReplacement;
    });
    
    console.log('Все изображения и заголовки заменены!');
}

// Запускаем функцию
replaceAllImages();
