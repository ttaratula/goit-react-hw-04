import { ClipLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <ClipLoader size={50} color="#36d7b7" />
    </div>
  );
}
