export default function LoadMoreBtn({ onClick }) {
    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button
          onClick={onClick}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '8px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
          }}
        >
          Load more
        </button>
      </div>
    );
  }
  