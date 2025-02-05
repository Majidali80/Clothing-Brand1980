import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    *[_type == "product"]{
  _id,
  title,
  productImage {
    asset->{
      url
    }
  },
  price,
  tags,
  discountPercentage,
  isNew
}
  
`);
   
export const furniture = defineQuery(`
    *[_type == "product"][0..7]{
  _id,
  title,
  productImage {
    asset->{
      url
    }
  },
  price,
  tags,
  discountPercentage,
  isNew
}
  
`);


export const productQuery = defineQuery(`
  *[_type == "product" && _id == $id][0]{
  _id,
  title,
  description,
  price,
  productImage {
    asset->{
      url
    }
  },
  tags,
  stockStatus,
  discountPrice,
}
  
`);

export const categoryQuery = (`
  *[_type == "category"] {
    _id,
    title
}
  
`);

