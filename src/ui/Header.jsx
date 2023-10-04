import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

export default function Header() {
  return (
    <header className="font-pizza bg-yellow-500 uppercase px-4 py-3 border-b border-stone-400 sm:px-6 flex items-center justify-between">
      <Link to="/" className="tracking-widest	">
        Fast Pizza
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
