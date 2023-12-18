import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handelSubmit}>
      <input
        placeholder="جستجوی سفارش"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-33 rounded-full bg-orange-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 sm:focus:w-72 sm:w-64  focus:ring focus:ring-yellow-500 focus:ring-opacity-50  "
      />
    </form>
  );
}

export default SearchOrder;
