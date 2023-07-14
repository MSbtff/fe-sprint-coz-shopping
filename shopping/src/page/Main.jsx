import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Product from '../component/product';

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 12px;
`;

const ListWrapper = styled.h3`
  width: 1280px;
  margin: 12px auto;
  font-size: 24px;
  font-weight: 700;
`;

export default function Main() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('http://cozshopping.codestates-seb.link/api/v1/products')
      .then((res) => {
        setProducts(res.data.map((el) => ({...el, checked: false})));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <MainWrapper>
      <section>
        <ListWrapper>상품 리스트</ListWrapper>
        <Product>
          {products
            .filter((product) => !product.checked)
            .slice(0, 4)
            .map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </Product>
      </section>
      <section>
        <ListWrapper>북마크 리스트</ListWrapper>
      </section>
    </MainWrapper>
  );
}
