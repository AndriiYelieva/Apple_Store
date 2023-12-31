import React from 'react';

import './buttonBack.scss';

export const ButtonBack = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <button
        type="button"
        className="back"
        data-cy="backButton"
        onClick={handleGoBack}
      >
        back
      </button>
    </>
  );
};
