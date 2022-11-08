import Image from 'next/image';

const MyImage = (props) => {
  if (props.optimize == 'disable') {
    return <img {...props} />;
  }

  return (
    <Image {...props} placeholder="blur" blurDataURL="/assets/img/loader.png" />
  );
};

MyImage.defaultProps = {
  optimize: 'disable',
};

export default MyImage;
