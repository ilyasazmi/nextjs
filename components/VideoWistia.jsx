import Iframe from "react-iframe";
import React from "react";

const VideoWistia = () => {

  const url = "https://fast.wistia.com/embed/iframe/ow8he6t5ri?videoFoam=false&playerColor=7AB85C";
  

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="mb-4 p-2">
        <Iframe
          url={url}
          width="100%"
          height="316px"
          position="relative"
        />
      </div>
      <div className="mb-4 p-2">
        <Iframe
          url={url}
          width="100%"
          height="316px"
          position="relative"
        />
      </div>
      <div className="mb-4 p-2">
        <Iframe
          url={url}
          width="100%"
          height="316px"
          position="relative"
        />
      </div>
      <div className="mb-4 p-2">
        <Iframe
          url={url}
          width="100%"
          height="316px"
          position="relative"
        />
      </div>
    </div>
  );
};

export default VideoWistia;
