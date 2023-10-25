import React from "react";
import '../loading/loading.scss'


const Loading = () => {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner-content">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
       
      </div>
    </div>
  );
};

export default Loading;
