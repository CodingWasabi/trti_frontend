import React from 'react';

const Alarm = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 450 450">
      <image
        width="600"
        height="600"
        transform="scale(0.75)"
        xlinkHref="data:image/png;base64,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"
      />
    </svg>
  );
};

export default Alarm;