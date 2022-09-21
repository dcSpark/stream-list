import Box from '@mui/material/Box';
import React from 'react';
import { useState } from 'react';

function ImageHolder(props: { show: string; image: undefined | string }) {
  const [imageContent, setImage] = useState<undefined | string>(undefined);

  React.useEffect(() => {
    if (props.image != null) {
      import(`../shows/${props.show}/${props.image}.png`)
        .then((image) => setImage(image.default))
        .catch((_e) => import(`../shows/${props.show}/${props.image}.jpg`))
        .then((image) => setImage(image.default));
    }
  }, [props.image]);

  if (props.image == null) {
    return (
      <Box
        sx={{
          border: 1
        }}
        width="640px"
        height="360px"
      />
    );
  }
  return (
    <Box
      sx={{
        border: 1
      }}
      display="flex"
      justifyContent="center"
      maxWidth="640px"
      maxHeight="360px"
    >
      <img style={{ objectFit: 'contain' }} src={imageContent} />
    </Box>
  );
}

export default ImageHolder;
