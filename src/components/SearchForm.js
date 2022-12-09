import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const{setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');
  const searchCocktails = () =>{
    setSearchTerm(searchValue.current.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  React.useEffect(() =>{
    searchValue.current.focus();
  }, [])
  return (
    <section>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favourite drink</label>
          <input type="text" id='name' ref={searchValue} onChange={searchCocktails}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
