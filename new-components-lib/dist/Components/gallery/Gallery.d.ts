import { FC } from 'react';
export interface MyGalleryProps {
    images: Array<any>;
    count: number;
}
declare const Gallery: FC<MyGalleryProps>;
export default Gallery;
