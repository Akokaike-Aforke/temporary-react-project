import React from 'react'
import { useGlobalContext } from './context';
import Loading from './Loading';
import Cocktail from './Cocktail'

const CocktailList = () => {
  const{ loading, cocktails } = useGlobalContext();
  if(loading){
    return <Loading />
  }
  if(cocktails.length < 1){
    return <div>
      <p>no cocktails matched your search criteria</p>
    </div>
  }
  return (
    <section>
      <h2 className='section-title'>CocktailList</h2>
      <div className='cocktail-center'>
        {cocktails.map((cocktail) =><Cocktail key={cocktail.id} {...cocktail} />)}
      </div>
    </section>
  )
}

export default CocktailList
