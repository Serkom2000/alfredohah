function replaceAllImages() {
    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVCNV6puPJFaNwWdE_ad1-TsQOu8uwmTPaw&s';
    const textReplacement = 'gagagaga';
    

    document.querySelectorAll('img[src]').forEach(img => {
        img.src = imageUrl;
    });
    

    document.querySelectorAll('[srcset]').forEach(el => {
        el.srcset = imageUrl;
    });
    
    document.querySelectorAll('source[src], source[srcset]').forEach(source => {
        if (source.src) source.src = imageUrl;
        if (source.srcset) source.srcset = imageUrl;
    });
    

    document.querySelectorAll('*').forEach(el => {
        const style = window.getComputedStyle(el);
        if (style.backgroundImage && style.backgroundImage !== 'none') {
            el.style.backgroundImage = `url("${imageUrl}")`;
        }
    });
    
  
    document.querySelectorAll('[poster]').forEach(el => {
        el.poster = imageUrl;
    });
    

    const favicon = document.querySelector('link[rel*="icon"]');
    if (favicon) {
        favicon.href = imageUrl;
    }
    
   
    document.querySelectorAll('meta[property="og:image"], meta[name="twitter:image"], meta[property="og:image:url"]').forEach(meta => {
        meta.content = imageUrl;
    });
    
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, strong, b, title, p, span, a').forEach(el => {
        el.textContent = textReplacement;
    });
    
    console.log('Все изображения и заголовки заменены!');
}

// Запускаем функцию
replaceAllImages();
