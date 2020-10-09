import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

import { MdAddShoppingCart } from 'react-icons/md';

import PrismicDom from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import { client } from '@/libs/prismic';

import ProductContainer from '../../../components/ProductContainer';

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

  function handleAddProduct(id) {
    alert(" Success");
  }

return  (
  <ProductContainer>
    <h1>{PrismicDom.RichText.asText(product.data.title)}</h1>
    <img src={product.data.thumbnail.url} width="300" alt=""/>
    <div dangerouslySetInnerHTML={ { __html: PrismicDom.RichText.asHtml(product.data.description) } }></div>
    <p>Price: ${product.data.price} </p>

    <button type="button" onClick={() => handleAddProduct(product.id)}>
      <div>
        <MdAddShoppingCart size={16} color="#FFF" />{' '}
      </div>
      <span>ADD TO CART</span>
    </button>
  </ProductContainer>

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