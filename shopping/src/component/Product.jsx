import React from 'react';
import {styled} from 'styled-components';
const StyleProductCard = styled.li`
  width: calc(25% - 18px);
  position: relative;
  div:not(:nth-child(1)) {
    display: flex;
    margin-top: 4px;
  }
  span:first-child {
    flex: 1;
  }
  .title {
    font-weight: 800;
    line-height: normal;
  }
  .discount {
    color: #452cdd;
    font-weight: 800;
  }
  .price {
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .interest_count {
    font-weight: 700;
  }
  .star {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 10px;
    cursor: pointer;
    bottom: 10px;
  }
  .logo_box {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    cursor: pointer;
    img {
      max-width: 100%;
      object-fit: cover;
      aspect-ratio: 1/0.7;
    }
  }
`;
function formatNumber(number) {
  const formattedNumber = new Intl.NumberFormat('ko-KR').format(number);
  return formattedNumber;
}

export default function Product({product, bookMarkHandler, modalHandler}) {
  const {
    title,
    brand_image_url,
    brand_name,
    checked,
    discountPercentage,
    follower,
    image_url,
    price,
    sub_title,
    type,
  } = product;

  switch (type) {
    case 'Product':
      return (
        <StyleProductCard>
          <div className="logo_box">
            <img
              src={image_url}
              alt="Product Logo"
              onClick={() => modalHandler(product)}
            />
            <img
              onClick={() => bookMarkHandler(product)}
              className="star"
              src={checked ? '/img/checkedStar.svg' : '/img/uncheckedStar.svg'}
              alt="book mark"
            />
          </div>

          <div>
            <span className="title">{title}</span>
            <span className="discount">
              {discountPercentage ? `${discountPercentage}%` : ''}
            </span>
          </div>
          <div>
            <span></span>
            <span className="price">{formatNumber(price)}원</span>
          </div>
        </StyleProductCard>
      );

    case 'Category':
      return (
        <StyleProductCard>
          <div className="logo_box">
            <img
              src={image_url}
              alt="Category Logo"
              onClick={() => modalHandler(product)}
            />
            <img
              onClick={() => bookMarkHandler(product)}
              className="star"
              src={checked ? '/img/checkedStar.svg' : '/img/uncheckedStar.svg'}
              alt="book mark"
            />
          </div>
          <div>
            <span className="title"># {title}</span>
            <span>{discountPercentage ? `${discountPercentage}%` : ''}</span>
          </div>
        </StyleProductCard>
      );
    case 'Exhibition':
      return (
        <StyleProductCard>
          <div className="logo_box">
            <img
              src={image_url}
              alt="Category Logo"
              onClick={() => modalHandler(product)}
            />
            <img
              onClick={() => bookMarkHandler(product)}
              className="star"
              src={checked ? '/img/checkedStar.svg' : '/img/uncheckedStar.svg'}
              alt="book mark"
            />
          </div>
          <div>
            <span className="title">{title}</span>
          </div>
          <div>
            <span className="sub_title">{sub_title}</span>
          </div>
        </StyleProductCard>
      );
    case 'Brand':
      return (
        <StyleProductCard>
          {' '}
          <div className="logo_box">
            <img
              src={brand_image_url}
              alt="Brand Logo"
              onClick={() => modalHandler(product)}
            />
            <img
              onClick={() => bookMarkHandler(product)}
              className="star"
              src={checked ? '/img/checkedStar.svg' : '/img/uncheckedStar.svg'}
              alt="book mark"
            />
          </div>
          <div>
            <span className="title">{brand_name}</span>
            <span className="interest_count">관심고객수</span>
          </div>
          <div>
            <span></span>
            <span className="follower">{formatNumber(follower)}</span>
          </div>
        </StyleProductCard>
      );
    default:
  }
}