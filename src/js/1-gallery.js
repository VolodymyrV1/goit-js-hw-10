import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

function getGalleryElement(selector) {
  return document.querySelector(selector);
}

function renderGallery(images, galleryEl) {
  const markup = images
    .map(
      ({ preview, original, description }) =>
        `
    <li class="gallery-item">
    	<a class="gallery-link" href="${original}">
    		<img 
    		  class="gallery-image" 
    		  src="${preview}" 
    		  alt="${description}" 
    		/>
    	</a>
    </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
}




function initGallery(images, selector) {

    const galleryEl = getGalleryElement(selector);
    renderGallery(images, galleryEl);

    let gallery = new SimpleLightbox(`${selector} a`, {
        captionsData: "alt",
        captionDelay: 250,
    });

  gallery.on("show.simplelightbox", (e) => {
    console.log("Modal window open.");
    const imageLink = e.target;
    const href = imageLink ? imageLink.href : "посилання відсутнє";

      console.log("Open foto, link:", href);
        
        setTimeout(() => {
            const overlay = document.querySelector(".sl-overlay");
            if (overlay) {
                overlay.style.backgroundColor = "rgba(46, 47, 66, 0.8)";
            }

        }, 0);
       
  });
  
  gallery.on("changed.simplelightbox", (e) => {
    const imageLink = e.target; 
    const href = imageLink ? imageLink.href : "посилання відсутнє";
    console.log("Foto change, new link:", href);
      });
  
  
  gallery.on("close.simplelightbox", () => {
        console.log("Modal window close.");
        
        const overlay = document.querySelector(".sl-overlay");

        if (overlay) {
            overlay.style.backgroundColor = "";
        }
    })

}

initGallery(images, 'ul.gallery');

//   const galleryEl = getGalleryElement(selector);

//   renderGallery(images, galleryEl);

//   galleryEl.addEventListener('click', selectImg);
// }










// <li class="gallery-item">
// 	<a class="gallery-link" href="large-image.jpg">
// 		<img
// 		  class="gallery-image"
// 		  src="small-image.jpg"
// 		  alt="Image description"
// 		/>
// 	</a>
// </li>


// function selectImg(event) {
//   event.preventDefault();
//   const dataSet = event.target.dataset.source;
//   if (event.target.nodeName != 'IMG') return;
//   console.log(dataSet);
//   const instance = basicLightbox.create(
//     `
//     <img src="${dataSet}" style="width:1112px; height:640px;"  /> 
//     `,
//     {
//       closable: true,
//     }
//   );
//   instance.show();
// }
