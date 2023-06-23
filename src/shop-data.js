const SHOP_DATA = [
  {
    title: 'Bags',
    items: [
      {
        id: 1,
        name: 'Cream Shoulder Bag',
        imageUrl: 'https://staticimg.titan.co.in/Irth/Catalog/R223SHMEP02WH1_1.jpg',
        price: 42,
      },
      {
        id: 2,
        name: 'Pink Tote Bag',
        imageUrl: 'https://www.lavieworld.com/cdn/shop/products/HNGH959296M4_1_900x.jpg?v=1684481345',
        price: 40,
      },
      {
        id: 3,
        name: 'Mint Satchel',
        imageUrl: 'https://www.lavieworld.com/cdn/shop/products/HDFQ674238N3_1_5683fa43-5c81-4d02-9d3b-4d97288faeed_900x.jpg?v=1683794723',
        price: 35,
      },
      {
        id: 4,
        name: 'Laptop Handbag',
        imageUrl: 'https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011884919-1000011884918_01-2100.jpg',
        price: 30,
      },
      {
        id: 5,
        name: 'Metro Handbag',
        imageUrl: 'https://kxadmin.metroshoes.com/product/66-6912-80-10/1200/66-6912M80.jpg',
        price: 28,
      },
      {
        id: 6,
        name: 'Ivory Backpack',
        imageUrl: 'https://images.dailyobjects.com/marche/product-images/1201/natural-white---navy-9-to-9-backpack-images/Natural-White-Navy-9-to-9-Backpack.png?tr=cm-pad_resize,v-2,w-384,h-565,dpr-1',
        price: 24,
      },
      {
        id: 7,
        name: 'Pink Purse',
        imageUrl: 'https://5.imimg.com/data5/CO/XW/MY-44197581/ladies-stylish-purse-500x500.jpg',
        price: 18,
      },
      {
        id: 8,
        name: 'Tan Shoulder Bag',
        imageUrl: 'https://staticimg.titan.co.in/Irth/Catalog/R223SHMEP07TN1_1.jpg',
        price: 36,
      },
      {
        id: 9,
        name: 'Pumps',
        imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20220224/ipIm/62179df7f997dd03e2ee0d97/-473Wx593H-410227222-0c8203-MODEL9.jpg',
        price: 790,
      },
    ],
  },
  {
    title: 'Makeup',
    items: [
      {
        id: 10,
        name: 'Lipstick',
        imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1095060/ram3ae4gdy-1095060_1.jpg?dpr=1',
        price: 30,
      },
      {
        id: 11,
        name: 'Eyeliner',
        imageUrl: 'https://www.lancome.in/dw/image/v2/BJSQ_PRD/on/demandware.static/-/Sites-lancome-ng-master-catalog/default/dw90065557/images/PACKSHOTS/MAKEUP/eyes/00093-LAC-Grandiose-Liner/Lancome-Eyeliners-And-Eye-pencils-Grandiose-Liner-01_Noir_Mirifique-000-3614271312235_v2.jpg?sw=969&sh=969&sm=cut&sfrm=png&q=70',
        price: 28,
      },
      {
        id: 12,
        name: 'Foundation',
        imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1081517/17aM4u5-23-716170184128_1.jpg?dpr=1',
        price: 56,
      },
      {
        id: 13,
        name: 'Countour',
        imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/colorbar/938612/0/g5rDUs3UG_-NlyHXOVmKv-aa7qr-7GBP-938612_1.jpg?dpr=1',
        price: 16,
      },
      {
        id: 14,
        name: 'Kajal',
        imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1051251/pOIWPCX8eM-8017834850260_1.jpg?dpr=1',
        price: 26,
      },
      {
        id: 15,
        name: 'Mascara',
        imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/bobbi-brown/1015896/0/wu8m5DLdlS-_O7tbwH6Vq-1015896_1.jpg?dpr=1',
        price: 38,
      },
      {
        id: 16,
        name: 'Primer',
        imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1070604/RuVSExGah9-607710004733_1.jpg?dpr=1',
        price: 40,
      },
      {
        id: 17,
        name: 'Lip Gloss',
        imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1082239/-BUZwJbIeS-773602411573_1.jpg?dpr=1',
        price: 30,
      },
    ],
  },
  {
    title: 'Fragrances',
    items: [
      {
        id: 18,
        name: 'Chanel N5',
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theceomagazine.com%2Flifestyle%2Fstyle-indulgence%2Fmost-expensive-perfumes%2F&psig=AOvVaw2is5SCux2u0jY_-PNMQOhi&ust=1687538252105000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjG74Ko1_8CFQAAAAAdAAAAABAH',
        price: 125,
      },
      {
        id: 19,
        name: 'Midnight Rose',
        imageUrl: 'https://www.lancome.in/dw/image/v2/BJSQ_PRD/on/demandware.static/-/Sites-lancome-ng-master-catalog/default/dwe81ca9d6/images/PACKSHOTS/FRAGRANCE/Tresor/00034-LAC-Tresor-Midnight-Rose/Lancome-Tresor-Tresor-Midnight-Rose-75_ml-000-3605532423265-alt3.jpg?sw=750&sh=750&sm=cut&sfrm=jpg&q=70',
        price: 90,
      },
      {
        id: 20,
        name: 'Dolce & Gabbana',
        imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1077136/9yEFPKRw9i-3423478966352_1.jpg?dpr=1',
        price: 90,
      },
      {
        id: 21,
        name: 'Prada La Femme',
        imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1109598/HoTODkB5w-8435137765065_1.jpg?dpr=1',
        price: 165,
      },
      {
        id: 22,
        name: 'Mocemba Celeb',
        imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1070930/AlQn2_Dvxk-1070930_1.jpg?dpr=1',
        price: 85,
      },
    ],
  },
  {
    title: 'Beauty & Grooming',
    items: [
      {
        id: 23,
        name: 'Face Wash',
        imageUrl: 'https://www.esteelauder.in/media/export/cms/products/558x768/el_sku_P78A01_558x768_0.jpg',
        price: 45,
      },
      {
        id: 24,
        name: 'Night Cream',
        imageUrl: 'https://images.forestessentialsindia.com/pub/media/catalog/product/cache/9bb9d677791f8666003e194c8a94aeff/8/8/8894_night_treatment_cream_sandalwood_saffron_50g_front_copy_1.png',
        price: 28,
      },
      {
        id: 25,
        name: 'Face Serum',
        imageUrl: 'https://img.loccitane.com/ocms/img/P.aspx?l=hi-IN&s=500&e=png&name=harmonie-divine-serum-anti-aging-serum-loccitane-india&id=27HS030I18&v=2',
        price: 80,
      },
      {
        id: 26,
        name: 'Toner',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0084/7357/5520/products/0003_4_900x.jpg?v=1671636354',
        price: 38,
      },
      {
        id: 27,
        name: 'Korean Face Mask',
        imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/face-pack/z/k/i/250-korean-face-care-mask-sheet-combo-kit-korean-skin-care-pack-original-imagkfmjkhwah67d.jpeg?q=70',
        price: 45,
      },
      {
        id: 28,
        name: 'Face Pack',
        imageUrl: 'https://images.forestessentialsindia.com/pub/media/catalog/product/cache/9bb9d677791f8666003e194c8a94aeff/1/5/15588.jpg',
        price: 35,
      },
      {
        id: 29,
        name: 'Sunscreen',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Uniqaya_Tinted_Sunscreen_SPF_50_PA_For_Oily_Dry_Skin_Blue_Light_Protection_No_White_Cast_1f9f601a-70e3-4df5-8ffc-83bf186a0ba7.jpg?v=1686048309&width=720',
        price: 20,
      },
    ],
  },
  {
    title: 'hair Care',
    items: [
      {
        id: 30,
        name: 'Hair Serum',
        imageUrl: 'https://www.kerastase.in/dw/image/v2/BJSQ_PRD/on/demandware.static/-/Sites-kerastase-master-catalog/default/dw5b62bf54/2022/KER_00026/3474636728336%20(1).jpg?sw=930&sh=930&sm=cut&sfrm=jpg&q=80',
        price: 32,
      },
      {
        id: 31,
        name: 'Hair Oil',
        imageUrl: 'https://images.forestessentialsindia.com/pub/media/catalog/product/cache/9bb9d677791f8666003e194c8a94aeff/9/7/9728.jpg',
        price: 20,
      },
      {
        id: 32,
        name: 'Hair Mask',
        imageUrl: 'https://images.indulgexpress.com/uploads/user/imagelibrary/2022/10/29/original/Veganbeauty.jpeg?w=376&dpr=1.3',
        price: 25,
      },
      {
        id: 33,
        name: 'Shampoo',
        imageUrl: 'https://m.media-amazon.com/images/I/51oMHx657vL._SX300_SY300_QL70_FMwebp_.jpg',
        price: 25,
      },
      {
        id: 34,
        name: 'Conditioner',
        imageUrl: 'https://m.media-amazon.com/images/I/41yVQyO8gLL._SX425_.jpg',
        price: 40,
      },
      {
        id: 35,
        name: 'Hair Spray',
        imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1106442/RR3gCTIviF-8005610579283_1.jpg?dpr=1',
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA