export default function ImageCard({ image, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Image'}
        style={styles.image}
      />
    </div>
  );
}
