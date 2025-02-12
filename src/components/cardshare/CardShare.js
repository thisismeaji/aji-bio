import React from 'react';
import Styles from "../cardshare/cardshare.module.css";

export default function CardShare(isOpen, onClose, shareUrl) {
  return (
    <div className={Styles.overlay}>
      <div className={Styles.modal}>
        <h2>Bagikan Link</h2>
        <input type="text" value={shareUrl} readOnly />
        <button onClick={() => navigator.clipboard.writeText(shareUrl)}>
          Copy Link
        </button>
        <button onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
}
