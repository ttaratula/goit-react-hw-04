export default function ErrorMessage({ message }) {
    return (
      <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
        {message || 'Oops! Something went wrong. Please try again later.'}
      </div>
    );
  }
  