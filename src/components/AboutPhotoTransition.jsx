import PixelTransition from './PixelTransition';

export default function AboutPhotoTransition() {
  return (
    <PixelTransition
      firstContent={
        <img
          src="/images/about-photo.webp"
          alt="Foto de Samuel Huaccha"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      }
      secondContent={
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'grid',
            placeItems: 'center',
            backgroundColor: '#111',
          }}
        >
          <p style={{ fontWeight: 900, fontSize: '3rem', color: '#ffffff', textAlign: 'center' }}>
            Samuel Huaccha
          </p>
        </div>
      }
      gridSize={8}
      pixelColor="#ffffff"
      once={false}
      animationStepDuration={0.4}
      className="custom-pixel-card w-full h-full"
    />
  );
}