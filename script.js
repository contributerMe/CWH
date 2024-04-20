document.addEventListener('DOMContentLoaded', function() {
    const hoverImage1 = document.getElementById('hover-image1');
    const hoverImage2 = document.getElementById('hover-image2');
    const hoverImage3 = document.getElementById('hover-image3');
    const hoverImage4 = document.getElementById('hover-image4');
    
    const textContent = document.getElementById('text-content');
    const originalTextContent = textContent
    if (hoverImage1) {
        hoverImage1.addEventListener('mouseover', function() {
            // console.log('Mouse over the image1');
            textContent.textContent = "hello project1";
        });
        hoverImage1.addEventListener('mouseout', function() {
            // Code to execute on mouseover
            console.log('Mouse removed from 1');
            textContent.textContent = ' Hover on project to see the details. Click on image for source code';
        });

        // You can add other event listeners here (e.g., mouseout)
    } 
    if (hoverImage2) {
        hoverImage2.addEventListener('mouseover', function() {
            console.log('Mouse over the image2');
        });
        hoverImage2.addEventListener('mouseout', function() {
            // Code to execute on mouseover
            console.log('Mouse removed from 2');
            textContent.textContent = ' Hover on project to see the details. Click on image for source code';
            
        });

        // You can add other event listeners here (e.g., mouseout)
    } 
    if (hoverImage3) {
        hoverImage3.addEventListener('mouseover', function() {
            console.log('Mouse over the image3');
        });
        hoverImage3.addEventListener('mouseout', function() {
            // Code to execute on mouseover
            console.log('Mouse removed from 3');
            textContent.textContent = ' Hover on project to see the details. Click on image for source code';
        });

        // You can add other event listeners here (e.g., mouseout)
    } 
    if (hoverImage4) {
        hoverImage4.addEventListener('mouseover', function() {
            console.log('Mouse over the image4');
        });
        hoverImage4.addEventListener('mouseout', function() {
            // Code to execute on mouseover
            console.log('Mouse removed from 4');
            textContent.textContent = ' Hover on project to see the details. Click on image for source code';
        });

        // You can add other event listeners here (e.g., mouseout)
    } 
});
