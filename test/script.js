document.addEventListener('DOMContentLoaded', function() {
    const nailStylesData = [
        {
            id: 1,
            name: 'Francesinha Moderna',
            shortDescription: 'Um toque moderno na clássica francesinha, com cores vibrantes.',
            longDescription: 'A unha francesinha moderna reinventa o clássico com pontas coloridas, formatos inovadores ou detalhes artísticos. Perfeita para quem busca elegância com um toque de originalidade e personalização.',
            price: 'R$ 90,00',
            rating: 4, // out of 5
            imagePreview: '../img/image (1).png',
            imageDetail: '../img/image (1).png'
        },
        {
            id: 2,
            name: 'stiletto',
            shortDescription: 'Unhas de gel com ponta Stiletto, ousadas e cheias de estilo.',
            longDescription: 'O design stiletto, são um dos formatos de unhas mais ousados e chamativos do momento. Seu formato cônico e ponta fina e aguçada alonga os dedos e confere às mãos uma aparência poderosa e sofisticada. A manutenção pode ser mais delicada, mas o impacto visual é inegável. Ideal para quem busca um visual marcante e cheio de personalidade.',
            price: 'R$ 150,00',
            rating: 5,
            imagePreview: '../img/image (2).png',
            imageDetail: '../img/image (2).png'
        },
        {
            id: 3,
            name: 'Geométricas Artísticas',
            shortDescription: 'Designs geométricos para unhas com um visual contemporâneo.',
            longDescription: 'Unhas com design geométrico utilizam linhas, formas e padrões para criar um visual moderno e artístico. Podem variar de minimalistas a complexas, oferecendo inúmeras possibilidades de customização com cores e texturas.',
            price: 'R$ 120,00',
            rating: 4,
            imagePreview: '../img/image (3).png',
            imageDetail: '../img/image (3).png'
        }
    ];

    const stylesListDiv = document.querySelector('.styles-list');
    const detailImage = document.getElementById('detail-image');
    const detailName = document.getElementById('detail-name');
    const detailDescription = document.getElementById('detail-description');
    const detailPrice = document.getElementById('detail-price');
    const detailRating = document.getElementById('detail-rating');

    function displayNailStyles() {
        stylesListDiv.innerHTML = ''; // Clear existing items
        nailStylesData.forEach(style => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('style-item');
            itemDiv.innerHTML = `
                <img src="${style.imagePreview}" alt="${style.name}">
                <div class="style-item-info">
                    <h3>${style.name}</h3>
                    <p>${style.shortDescription}</p>
                    <button class="btn-see-more" data-id="${style.id}">Ver Mais</button>
                </div>
            `;
            stylesListDiv.appendChild(itemDiv);
        });

        addEventListenersToButtons();
    }

    function displayNailDetail(styleId) {
        const selectedStyle = nailStylesData.find(style => style.id === parseInt(styleId));
        if (selectedStyle) {
            detailImage.src = selectedStyle.imageDetail;
            detailImage.alt = selectedStyle.name;
            detailName.textContent = selectedStyle.name;
            detailDescription.textContent = selectedStyle.longDescription;
            detailPrice.textContent = selectedStyle.price;

            // Display stars
            detailRating.innerHTML = '';
            for (let i = 1; i <= 5; i++) {
                const starSpan = document.createElement('span');
                starSpan.classList.add('star');
                starSpan.classList.toggle('filled', i <= selectedStyle.rating);
                starSpan.classList.toggle('empty', i > selectedStyle.rating);
                starSpan.textContent = i <= selectedStyle.rating ? '★' : '☆';
                detailRating.appendChild(starSpan);
            }
        }
    }

    function addEventListenersToButtons() {
        const seeMoreButtons = document.querySelectorAll('.btn-see-more');
        seeMoreButtons.forEach(button => {
            button.addEventListener('click', function() {
                const styleId = this.dataset.id;
                displayNailDetail(styleId);
            });
        });
    }

    // Initial display
    displayNailStyles();

    // Display the first style's details by default (or a specific one like 'Stiletto')
    const stilettoStyle = nailStylesData.find(style => style.name.toLowerCase() === 'stiletto');
    if (stilettoStyle) {
        displayNailDetail(stilettoStyle.id);
    } else if (nailStylesData.length > 0) {
        displayNailDetail(nailStylesData[0].id); // Fallback to the first item
    }
});