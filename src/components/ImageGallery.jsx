import ImageCard from './';
import styles from './ImageGallery.module.css';


export default function ImageGallery({ images }) {
	if (!images || images.length === 0) {
	  return null; // Не рендеримо нічого, якщо масив порожній
	}
  
	return (
	  <ul >
		{images.map((image) => (
		  <li key={image.id} style={styles.item}>
			<ImageCard image={image} onClick={() => onImageClick(image)}/>
		  </li>
		))}
	  </ul>
	);
  }