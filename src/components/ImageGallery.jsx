export default function ImageGallery({ images }) {
	if (!images || images.length === 0) {
	  return null; // Не рендеримо нічого, якщо масив порожній
	}
  
	return (
	  <ul style={styles.gallery}>
		{images.map((image) => (
		  <li key={image.id} style={styles.item}>
			<ImageCard image={image} />
		  </li>
		))}
	  </ul>
	);
  }