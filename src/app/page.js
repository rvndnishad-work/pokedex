import { Headers } from '../components/headers';
import { Search } from '../components/search';

export default function Home() {
  return (
    <div className='p-10'>
      <Headers />
      <Search />
      <div> POKEMON LIST WILL COME HERE</div>
    </div>
  );
}
