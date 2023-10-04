import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
function Home() {
  const { username } = useSelector((state) => state.user);

  return (
    <div className="my-10 text-center">
      <h1 className="text-xl md:text-4xl font-semibold mb-8 px-4 uppercase ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue Ordertig, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
