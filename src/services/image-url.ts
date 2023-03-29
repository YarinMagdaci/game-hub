import noImage from '../assets/No_image_available.webp';
const getCroppedImageUrl = (url: string) => {
   if(!url) return noImage;
   const target = 'media/';
   const idx = url.indexOf(target) + target.length; // https://...media/
   return url.slice(0, idx) + 'crop/600/400/' + url.slice(idx);
}

export default getCroppedImageUrl;