import { useSelector } from 'react-redux';

export default function UserName() {
  const { username } = useSelector((state) => state.user);

  if (!useSelector) return null;

  return (
    <div className="text-sm font-semibold hidden md:block">{username}</div>
  );
}
