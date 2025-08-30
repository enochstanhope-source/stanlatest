// Preload all images in the document and in the images/ directory
(function() {
    // Preload all <img> tags
    const imgTags = Array.from(document.getElementsByTagName('img'));
    imgTags.forEach(img => {
        if (img.src) {
            const preloadImg = new Image();
            preloadImg.src = img.src;
        }
    });

    // Preload all images in the images/ directory (hardcoded list for now)
    const imageList = [
        'aa1.jpg','aa2.jpg','aa3.jpg','aa4.jpg','aa5.jpg','aa6.jpg','aa7.jpg','aa8.jpg','aa9.jpg','abouty.jpg','accc1.jpg','agba1.jpg','agba2.jpg','agba3.jpg','agba4.jpg','agba5.jpg','business.jpg','cam1.jpg','cam10.jpg','cam11.jpg','cam2.jpg','cam3.jpg','cam4.jpg','cam5.jpg','cam6.jpg','cam7.jpg','cam8.jpg','cam9.jpg','digital.jpeg','digital2.jpg','fa1.jpg','fa2.jpg','fa3.jpg','fa32.jpg','fa4.jpg','fa5.jpg','fa6.jpg','fa99.jpg','farah.mp4','hero.jpg','hero2.mp4','IMG-20250315-WA0001.jpg','IMG-20250315-WA0002.jpg','IMG-20250315-WA0003.jpg','IMG-20250315-WA0004.jpg','mama1.jpg','mama2.jpg','me1.jpg','me2.jpg','me20.jpg','me3.jpg','me4.jpg','me5.jpg','me7.jpg','me8.jpg','nophoto.jpg','obewa.jpg','photography1.jpeg','pol2.jpg','poly1.jpg','polybadge.png','polybay.png','rector.jpeg','serious1.jpg','seriuu.jpg','students.jpeg','students.jpg','tailor.jpeg','tailor2.jpg','teammember1.jpg','teammember2.jpg','teammember3.jpg','teammember4.jpg','teammember5.jpg','teammember6.jpg','teammember7.jpg','thread.jpeg','thread.jpg','web.jpeg','web.jpg','workshop.jpeg'
    ];
    imageList.forEach(filename => {
        if (!filename.match(/\.(mp4)$/i)) { // skip videos
            const img = new Image();
            img.src = 'images/' + filename;
        }
    });
})();
