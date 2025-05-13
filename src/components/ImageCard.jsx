export default function ImageCard() {
    return <>
  <div>
  <img
        src={image.urls.small}
        alt={image.alt_description || 'Image'}
        style={styles.image}
      />
</div>


    </>;
  }
  