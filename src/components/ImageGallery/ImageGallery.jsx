import "./ImageGallery.css";

export default function ImageGallery() {
  return (
    <div className="gallery">
      <div className="wrap">
        <div className="gallery-grid">
          <div className="image-placeholder">
            <div className="placeholder-content">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <p>Miejsce na zdjęcie sklepu z zewnątrz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
