import { FC, ImgHTMLAttributes } from 'react';

/**
 * Image Default Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.11.21
 */
const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  alt,
  src,
  ...props
}) => <img src={src} alt={alt} {...props} />;

export default Image;
