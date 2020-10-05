import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

import PrismicDom from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import { client } from '@/libs/prismic';


/* const AddToCartModal = dynamic(
  () => import('@/components/addToCartModal'),
  { loading: () => <p>Carregando ...</p>, ssr: false }
  ); */

  interface ProductProps {
    product : Document[];
  }

export default function Product ({product}: ProductProps) {
  const router = useRouter();
/*   const [isModalAddToCartVisible, setIsModalAddToCartVisible] = useState(false);

  function handleAddClick() {
    setIsModalAddToCartVisible(true)
  } */

  if (router.isFallback) {
    return <p>Carregando...</p>
  }

return  (
  <div>
    <h1>{PrismicDom.RichText.asText(product.data.title)}</h1>

    <img src={product.data.thumbnail.url} width="300" alt=""/>
    
    <div dangerouslySetInnerHTML={ { __html: PrismicDom.RichText.asHtml(product.data.description) } }></div>
    <p>Price: ${product.data.price} </p>
  </div>
);
}

export const getStaticPaths: GetStaticPaths = async () => { 
  return {
    paths: [],
    fallback: true,
  }
};

export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {

  const { slug } = context.params;

  const product = await client().getByUID('product', String(slug), {});

  return {
    props: { 
      product,
    },
    revalidate: 10,
}
}