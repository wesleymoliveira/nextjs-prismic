import { useRouter } from 'next/router';
import { GetServerSideProps  } from 'next';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import PrismicDom from 'prismic-dom';
import { FormEvent, useState } from 'react';
import { Document } from 'prismic-javascript/types/documents';
import { client } from '@/libs/prismic';

import { ProductList, ProductTitle, ProductPrice } from '../../styles/pages/Search';

import StyledInput from '../../components/Input';
import StyledButton from '../../components/Button';
import SearchContainer from '../../components/SearchContainer';

interface SearchProps {
  searchResults: Document[];
}

export default function  search({searchResults}: SearchProps){
  const router = useRouter();
  const [search, setSearch] = useState('');
  
  function handleSearch (e: FormEvent) {
    e.preventDefault();
  
    router.push(
      `/search?q=${encodeURIComponent(search)}`
      )
      setSearch('');
  }


  return (
    <SearchContainer>
      <form onSubmit={handleSearch}>
        <StyledInput type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Type here..."/>
        <StyledButton type="submit">Search</StyledButton>
      </form>
      <ProductList>
       {searchResults.map(product => {
         return (
           <li key={product.id}>
             <img src={product.data.thumbnail.url} width="200" alt=""/>

              <ProductTitle>
                 {PrismicDom.RichText.asText(product.data.title)}
              </ProductTitle>

             <Link href={`/catalog/products/${product.uid}`}>
               <button>Check Details</button>
            </Link>
            <ProductPrice>Price: ${product.data.price} </ProductPrice>
           </li>
         )
       })}
     </ProductList>

    </SearchContainer>
  );
}

export const getServerSideProps: GetServerSideProps<SearchProps> = async (context) => {
  const { q } = context.query;

  if (!q) {
    return { props: { searchResults: [] } };
  }

  const searchResults = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
    Prismic.Predicates.fulltext('my.product.title', String(q))
  ])

  return {
    props: { searchResults: searchResults.results  }
  }

};
