import { FC, ImgHTMLAttributes } from 'react';

import { createResource, preloadImage } from '../../../helper';
import { IResourcePayload } from '../../../interface/general';

const imgResourceCache: Record<string, IResourcePayload<string>> = {};

/**
 * Image Lazy Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.21
 */
const ImageLazy: FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  alt,
  src,
  ...props
}) => {
  let imgSrcResource = imgResourceCache[`${src}`];

  if (!imgSrcResource) {
    imgSrcResource = createResource(preloadImage(`${src}`));
    imgResourceCache[`${src}`] = imgSrcResource;
  }

  return <img src={imgSrcResource.read()} alt={alt} {...props} />;
};

export default ImageLazy;
