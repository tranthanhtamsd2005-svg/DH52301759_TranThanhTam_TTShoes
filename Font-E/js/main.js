const CART_KEY = "ttshoes_cart_v1";
const CATALOG_KEY = "ttshoes_catalog_v1";

const PRODUCT_DATA = [
  {
    id: "nike-air-force-1-07",
    name: "Nike Air Force 1 '07",
    brand: "Nike",
    gender: "unisex",
    category: "Lifestyle",
    price: 2929000,
    oldPrice: 3299000,
    rating: 4.9,
    badge: "-11%",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1400&q=80",
    desc: "Mẫu sneaker da trắng kinh điển, dễ phối đồ, form chắc chân và phù hợp đi hằng ngày.",
  },
  {
    id: "adidas-samba-og",
    name: "Adidas Samba OG",
    brand: "Adidas",
    gender: "unisex",
    category: "Lifestyle",
    price: 2700000,
    oldPrice: 3000000,
    rating: 4.8,
    badge: "BEST",
    img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Giay_Samba_OG_trang_B75806_01_00_standard.jpg",
    gallery: [
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ec595635a2994adea094a8bf0117ef1a_9366/Giay_Samba_OG_trang_B75806_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a8d5f9cb7444bd195f1a8bf01180e68_9366/Giay_Samba_OG_trang_B75806_05_standard.jpg",
    ],
    desc: "Thiết kế sân cỏ cổ điển với dáng thấp, đế gum và chất liệu dễ dùng cho phong cách tối giản.",
  },
  {
    id: "converse-chuck-70-hi",
    name: "Converse Chuck 70 Hi",
    brand: "Converse",
    gender: "unisex",
    category: "Canvas",
    price: 1900000,
    oldPrice: 2100000,
    rating: 4.7,
    badge: "HOT",
    img: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw10f77af3/images/a_107/162050C_A_107X1.jpg?sw=964&strip=false",
    gallery: [
      "https://www.converse.vn/media/catalog/product/cache/81be3f71803e8b19243c0cf4508ce3b1/0/8/0882-CON162050C000007-3.jpg",
      "https://www.converse.vn/media/catalog/product/cache/81be3f71803e8b19243c0cf4508ce3b1/0/8/0882-CON162050C000007-5.jpg",
    ],
    desc: "Canvas cao cổ, mũi cao su đặc trưng, hợp outfit streetwear và casual.",
  },
  {
    id: "vans-old-skool",
    name: "Vans Old Skool",
    brand: "Vans",
    gender: "unisex",
    category: "Skate",
    price: 1750000,
    oldPrice: 1950000,
    rating: 4.6,
    badge: "NEW",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/1-6c80db39-3b22-4ce5-bd23-1346c5db5d20.jpg?v=1771987878310",
    gallery: [
      "https://bizweb.dktcdn.net/100/140/774/products/3-f371e7e0-21ec-4fc9-965b-a222c0f71f65.jpg?v=1771987882910",
      "https://bizweb.dktcdn.net/100/140/774/products/4-49b8409d-9eb7-4fb2-8fc3-4b6c73ee0472.jpg?v=1771987884243",
    ],
    desc: "Giày skate dáng thấp với sọc side stripe, đế waffle bám tốt và phong cách bền thời gian.",
  },
  {
    id: "new-balance-530",
    name: "New Balance 530",
    brand: "New Balance",
    gender: "unisex",
    category: "Lifestyle",
    price: 2499000,
    oldPrice: 2799000,
    rating: 4.8,
    badge: "-10%",
    img: "https://sneakerdaily.vn/wp-content/uploads/2025/07/Giay-New-Balance-530-%E2%80%98Triple-White-MR530PA.jpg",
    gallery: [
      "https://sneakerdaily.vn/wp-content/uploads/2025/07/Giay-New-Balance-530-%E2%80%98Triple-White-MR530PA-5.jpg",
    ],
    desc: "Dáng running retro, upper thoáng, đệm êm và hợp cả đi học, đi làm lẫn đi chơi.",
  },
  {
    id: "nike-air-pegasus-40",
    name: "Nike Air Zoom Pegasus 40",
    brand: "Nike",
    gender: "men",
    category: "Running",
    price: 3519000,
    oldPrice: 4100000,
    rating: 4.7,
    badge: "RUN",
    img: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1abaae51-d7c4-4ca6-8e2b-8133b90d168b/AIR+ZOOM+PEGASUS+40.png",
    gallery: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fea7a909-e5b8-4dab-b636-90160b80652f/AIR+ZOOM+PEGASUS+40.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cdccdd52-6789-4bb2-b3a4-299403bd5515/AIR+ZOOM+PEGASUS+40.png",
    ],
    desc: "Giày chạy bộ nam ổn định, phản hồi tốt, phù hợp tập luyện mỗi ngày.",
  },
  {
    id: "asics-gel-kayano-30",
    name: "ASICS GEL-Kayano 32",
    brand: "ASICS",
    gender: "men",
    category: "Running",
    price: 4290000,
    oldPrice: 4990000,
    rating: 4.9,
    badge: "PRO",
    img: "https://images.asics.com/is/image/asics/1011C284_400_SL_LT_GLB?$zoom$",
    gallery: [
      "https://images.asics.com/is/image/asics/1011C284_400_SB_BT_GLB?$zoom$",
      "https://images.asics.com/is/image/asics/1011C284_400_SB_TP_GLB?$zoom$",
    ],
    desc: "Dòng stability cao cấp, hỗ trợ bàn chân khi chạy dài và mang lại cảm giác êm chắc.",
  },
  {
    id: "hoka-clifton-9",
    name: "HOKA Clifton 9",
    brand: "HOKA",
    gender: "men",
    category: "Running",
    price: 3990000,
    oldPrice: 4550000,
    rating: 4.8,
    badge: "-12%",
    img: "https://www.misterrunning.com/images/2025-media-02/hoka-clifton-9-scarpe-da-running-uomo-sea-moss-forest-lichen-1127895-ssfr-A.jpg",
    gallery: [
      "https://www.misterrunning.com/media/products/2025-media-02/hoka-clifton-9-scarpe-da-running-uomo-sea-moss-forest-lichen-1127895-ssfr-B-600x600.jpg",
    ],
    desc: "Đệm dày, nhẹ và êm cho chạy bộ đường dài hoặc đứng nhiều trong ngày.",
  },
  {
    id: "puma-palermo",
    name: "Puma Palermo",
    brand: "Puma",
    gender: "women",
    category: "Lifestyle",
    price: 2290000,
    oldPrice: 2600000,
    rating: 4.6,
    badge: "TREND",
    img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/397643/64/sv01/fnd/PNA/fmt/png/Palermo-Women's-Sneakers",
    gallery: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/397643/64/sv02/fnd/PNA/fmt/png/Palermo-Women's-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/397643/64/bv/fnd/PNA/fmt/png/Palermo-Women's-Sneakers",
    ],
    desc: "Sneaker terrace dáng gọn, màu nổi vừa đủ, hợp váy, jeans và quần ống rộng.",
  },
  {
    id: "adidas-gazelle-bold",
    name: "Adidas Gazelle Bold",
    brand: "Adidas",
    gender: "women",
    category: "Lifestyle",
    price: 2800000,
    oldPrice: 3200000,
    rating: 4.8,
    badge: "BEST",
    img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/cdd0c3c2547949b2b5e86871414fd729_9366/Giay_Gazelle_Bold_mau_xanh_la_IH7495_01_standard.jpg",
    gallery: [
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3fac7655411746c0ae72e472d34d317c_9366/Giay_Gazelle_Bold_mau_xanh_la_IH7495_03_standard.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/36661aa794f94a8594dcd0a9c6eb2eb1_9366/Giay_Gazelle_Bold_mau_xanh_la_IH7495_09_standard.jpg",
    ],
    desc: "Gazelle bản đế cao cá tính, chất liệu suede mềm và tỉ lệ đẹp cho outfit nữ.",
  },
  {
    id: "nike-dunk-low-panda",
    name: "Nike Dunk Low Suede",
    brand: "Nike",
    gender: "women",
    category: "Lifestyle",
    price: 3150000,
    oldPrice: 3590000,
    rating: 4.7,
    badge: "HOT",
    img: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/65d6f808-2eb7-4dce-bca9-db296b83cb5a/WMNS+NIKE+DUNK+LOW.png",
    gallery: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a4117c98-dded-4850-b0e8-502b7d9028e9/WMNS+NIKE+DUNK+LOW.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7e1b0351-b311-42fa-a2b1-007efd76cbd2/WMNS+NIKE+DUNK+LOW.png",
    ],
    desc: "Phối đen trắng dễ mặc, dáng thấp năng động, hợp phong cách basic lẫn streetwear.",
  },
  {
    id: "on-cloud-5",
    name: "On Cloud 5",
    brand: "On",
    gender: "women",
    category: "Walking",
    price: 3690000,
    oldPrice: 4200000,
    rating: 4.8,
    badge: "LIGHT",
    img: "https://images.ctfassets.net/hnk2vsx53n6l/4NY81Q3tO8NUnBx35mKX0y/5d7fc031bd7c57ef02362ffac236a0d5/644a3bec8c6cd4c662affe535b93700695d9f3a4.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
    gallery: [
      "https://images.ctfassets.net/hnk2vsx53n6l/4XXAjk04X1uEITpAyWPDcW/75cd09f979f74a812527882b68c8a66a/122c938274d11a3f40e7fd506a47954b053b019c.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
      "https://images.ctfassets.net/hnk2vsx53n6l/3NdtXe4509gEy2iiEOjnbp/f5d8e97fab9b032f71c9b868ea28774c/9e9c9ce670939dbbca276daa4ee29977056064ff.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
    ],
    desc: "Giày đi bộ nhẹ, thoáng và tiện xỏ nhanh, hợp di chuyển nhiều trong ngày.",
  },
  {
    id: "birkenstock-arizona",
    name: "Birkenstock Arizona",
    brand: "Birkenstock",
    gender: "unisex",
    category: "Sandal",
    price: 2650000,
    oldPrice: 2990000,
    rating: 4.6,
    badge: "SALE",
    img: "https://www.birkenstock.com/dw/image/v2/BLZD_PRD/on/demandware.static/-/Sites-master-catalog-amer/default/dw4fa59765/1011072/1011072.jpg?sw=1312&sh=1312&sm=fit&q=65",
    gallery: [
      "https://www.birkenstock.com/dw/image/v2/BLZD_PRD/on/demandware.static/-/Sites-master-catalog-amer/default/dw4fa59765/1011072/1011072.jpg?sw=1312&sh=1312&sm=fit&q=65",
      "https://www.birkenstock.com/dw/image/v2/BLZD_PRD/on/demandware.static/-/Sites-master-catalog-amer/default/dw878484a9/1011072/1011072_top.jpg?sw=1312&sh=1312&sm=fit&q=65",
    ],
    desc: "Sandal hai quai nổi tiếng với footbed ôm bàn chân, phù hợp đi chơi và du lịch.",
  },
  {
    id: "crocs-classic-clog",
    name: "Crocs Classic Clog",
    brand: "Crocs",
    gender: "unisex",
    category: "Clog",
    price: 1290000,
    oldPrice: 1490000,
    rating: 4.5,
    badge: "-13%",
    img: "https://media.crocs.com/images/f_auto%2Cq_auto%2Cw_900%2Ch_900%2Cc_pad%2Cb_transparent/products/10001_001_ALT100/crocs.jpg",
    gallery: [
      "https://media.crocs.com/images/f_auto%2Cq_auto%2Cw_480%2Ch_480%2Cc_pad%2Cb_transparent/products/10001_001_ALT130/crocs.jpg",
      "https://media.crocs.com/images/f_auto%2Cq_auto%2Cw_480%2Ch_480%2Cc_pad%2Cb_transparent/products/10001_001_ALT160/crocs.jpg",
    ],
    desc: "Dép clog nhẹ, chống nước, dễ vệ sinh và phù hợp sử dụng hằng ngày.",
  },
  {
    id: "new-balance-327",
    name: "New Balance 327",
    brand: "New Balance",
    gender: "women",
    category: "Lifestyle",
    price: 2590000,
    oldPrice: 2990000,
    rating: 4.7,
    badge: "NEW",
    img: "https://www.consortium.co.uk/media/catalog/product/cache/1/image/1000x/af097278c5db4767b0fe9bb92fe21690/w/o/women-s-new-balance-327-black-white-ws327bl_0000_cat.jpg",
    gallery: [
      "https://www.consortium.co.uk/media/catalog/product/cache/1/small_image/790x/040ec09b1e35df139433887a97daa66f/w/o/women-s-new-balance-327-black-white-ws327bl_0001_1.jpg",
      "https://www.consortium.co.uk/media/catalog/product/cache/1/small_image/790x/040ec09b1e35df139433887a97daa66f/w/o/women-s-new-balance-327-black-white-ws327bl_0003_3.jpg",
    ],
    desc: "Dáng retro thon, logo N lớn, đế bám nổi bật và phối đồ rất linh hoạt.",
  },
  {
    id: "nike-air-max-90",
    name: "Nike Air Max 90",
    brand: "Nike",
    gender: "men",
    category: "Lifestyle",
    price: 3750000,
    oldPrice: 4300000,
    rating: 4.8,
    badge: "NEW",
    img: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/51e86060-5beb-4bf3-8a79-c39dff901b71/NIKE+AIR+MAX+90.png",
    gallery: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a8e96bce-b844-4e05-9b70-cd817d1d6f58/NIKE+AIR+MAX+90.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b70f47ea-7109-4aec-bd2c-ab7e4f104bf8/NIKE+AIR+MAX+90.png",
    ],
    desc: "Biểu tượng Air Max với đệm khí êm, phom mạnh mẽ và chất street classic.",
  },
  {
    id: "nike-everyday-cushion-socks",
    name: "Nike Everyday Cushion Socks",
    brand: "Nike",
    gender: "unisex",
    category: "Phụ kiện",
    accessoryType: "Vớ",
    price: 390000,
    oldPrice: 450000,
    rating: 4.7,
    badge: "VỚ",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dfa68bbe-e102-4e33-9b6e-6763e2a75f19/U+NK+EVERYDAY+CSH+CRW+3PR+132.png",
    desc: "Vớ thể thao cổ trung, đệm êm ở lòng bàn chân, phù hợp sneaker và running.",
  },
  {
    id: "ortholite-comfort-insole",
    name: "Ortholite Comfort Insole",
    brand: "Ortholite",
    gender: "unisex",
    category: "Phụ kiện",
    accessoryType: "Lót đế",
    price: 290000,
    oldPrice: 350000,
    rating: 4.6,
    badge: "ÊM",
    img: "https://www.ortholite.com/wp-content/uploads/2018/12/X40LazyMolded_Bend.jpg",
    desc: "Lót đế êm, hỗ trợ giảm mỏi khi đi bộ lâu hoặc đứng nhiều trong ngày.",
  },
  {
    id: "premium-flat-shoelaces",
    name: "Premium Flat Shoelaces",
    brand: "TT Care",
    gender: "unisex",
    category: "Phụ kiện",
    accessoryType: "Dây giày",
    price: 79000,
    oldPrice: 99000,
    rating: 4.5,
    badge: "NEW",
    img: "https://m.media-amazon.com/images/I/71OqOGK+1KL._AC_SL1500_.jpg",
    desc: "Dây giày bản dẹt, dễ thay thế cho sneaker trắng, đen và các mẫu lifestyle.",
  },
  {
    id: "sneaker-deodorant-spray",
    name: "Sneaker Deodorant Spray",
    brand: "Crep Protect",
    gender: "unisex",
    category: "Phụ kiện",
    accessoryType: "Xịt khử mùi",
    price: 220000,
    oldPrice: 260000,
    rating: 4.7,
    badge: "CARE",
    img: "https://down-my.img.susercontent.com/file/my-11134207-7qukw-lj3n3of7dohy1d",
    desc: "Xịt khử mùi giày, giúp giảm mùi khó chịu sau khi vận động hoặc mang lâu.",
  },
  {
    id: "sneaker-cleaning-kit",
    name: "Sneaker Cleaning Kit",
    brand: "Jason Markk",
    gender: "unisex",
    category: "Phụ kiện",
    accessoryType: "Vệ sinh giày",
    price: 490000,
    oldPrice: 590000,
    rating: 4.8,
    badge: "KIT",
    img: "https://tse2.mm.bing.net/th/id/OIP.4mPdaKiQRMu5WnFmaJGGiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Bộ vệ sinh sneaker gồm dung dịch làm sạch và bàn chải mềm cho da, canvas, mesh.",
  },
  {
    id: "waterproof-sneaker-protector",
    name: "Waterproof Sneaker Protector",
    brand: "Crep Protect",
    gender: "unisex",
    category: "Phụ kiện",
    accessoryType: "Chống nước",
    price: 350000,
    oldPrice: 420000,
    rating: 4.6,
    badge: "PRO",
    img: "https://www.myshoesupplies.com/cdn/shop/files/LeatherHeroSneakerProtectorSpray-_10.6oz_ShoeProtectorWaterproofSprayforShoes_10oz_WhiteShoeWaterandStainRepellentSprayforCanvas_Mesh_Leather_Vinyl.webp?v=1767502526&width=1090",
    desc: "Dung dịch phủ bảo vệ giúp hạn chế bám nước và bụi bẩn trên bề mặt giày.",
  },
  {
    id: "travel-shoe-bag",
    name: "Travel Shoe Bag",
    brand: "TT Care",
    gender: "unisex",
    category: "Phụ kiện",
    accessoryType: "Túi đựng giày",
    price: 159000,
    oldPrice: 199000,
    rating: 4.5,
    badge: "TRAVEL",
    img: "https://m.media-amazon.com/images/I/71wkRWGljwL._AC_SL1500_.jpg",
    desc: "Túi đựng giày chống bụi, gọn nhẹ khi du lịch, tập gym hoặc cất giữ sneaker.",
  },
  {
    id: "heel-grip-pads",
    name: "Heel Grip Pads",
    brand: "TT Care",
    gender: "unisex",
    category: "Phụ kiện",
    accessoryType: "Miếng dán gót",
    price: 69000,
    oldPrice: 89000,
    rating: 4.4,
    badge: "FIT",
    img: "https://i5.walmartimages.com/seo/Adhesive-Back-Heel-Cushion-Pads-Heel-Grips-Inserts-Loose-Shoes-Big-Boots-Reusable-Heel-Guards-Liners-Women-Men-Improve-Shoe-Fit-6PCS-Black_46c96fcb-0d25-4312-bbcf-5e50f24bad88.7a00cebaadf857977c70f87897f3733c.jpeg",
    desc: "Miếng dán gót giúp giảm ma sát, hạn chế tuột gót khi giày hơi rộng.",
  },
];

window.TT_PRODUCT_DATA = PRODUCT_DATA;

function formatVnd(value) {
  try {
    return new Intl.NumberFormat("vi-VN").format(value) + "đ";
  } catch {
    return String(value) + "đ";
  }
}

function parseVnd(text) {
  const digits = String(text ?? "").replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
}

function productMatchesCollection(product, collection) {
  if (!collection || collection === "all") return true;
  if (collection === "men")
    return (
      product.category !== "Phụ kiện" &&
      (product.gender === "men" || product.gender === "unisex")
    );
  if (collection === "women")
    return (
      product.category !== "Phụ kiện" &&
      (product.gender === "women" || product.gender === "unisex")
    );
  if (collection === "sale")
    return Boolean(product.oldPrice && product.oldPrice > product.price);
  if (collection === "accessories") return product.category === "Phụ kiện";
  return true;
}

function collectionCount(collection) {
  return getCatalogProducts().filter((product) =>
    productMatchesCollection(product, collection),
  ).length;
}

function categoryTileTemplate(item) {
  return `
    <a class="category-tile" href="${item.href}" aria-label="Xem ${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p>${item.count} sản phẩm</p>
        <span>+ Xem thêm</span>
      </div>
      <img alt="${item.name}" src="${item.img}" />
    </a>
  `;
}

function productShelfTemplate(title, collection, limit, href) {
  const products = getCatalogProducts()
    .filter((product) => productMatchesCollection(product, collection))
    .slice(0, limit);

  return `
    <section class="product-shelf" aria-label="${title}">
      <div class="shelf-head">
        <h3>${title}</h3>
        <a class="link" href="${href}">+ Xem thêm</a>
      </div>
      <div class="grid">
        ${products.map(productCardTemplate).join("")}
      </div>
    </section>
  `;
}

function accessoryShelfTemplate(title, typeList) {
  const products = getCatalogProducts().filter(
    (product) =>
      product.category === "Phụ kiện" &&
      typeList.includes(product.accessoryType),
  );

  return `
    <section class="product-shelf" aria-label="${title}">
      <div class="shelf-head">
        <h3>${title}</h3>
        <span class="chip">${products.length} sản phẩm</span>
      </div>
      <div class="grid">
        ${products.map(productCardTemplate).join("")}
      </div>
    </section>
  `;
}

function renderAccessorySections(grid) {
  const tiles = [
    {
      name: "Vớ & lót đế",
      count: PRODUCT_DATA.filter((x) =>
        ["Vớ", "Lót đế"].includes(x.accessoryType),
      ).length,
      href: "#vo-lot-de",
      img: PRODUCT_DATA.find((x) => x.accessoryType === "Vớ")?.img || "",
    },
    {
      name: "Dây giày",
      count: PRODUCT_DATA.filter((x) => x.accessoryType === "Dây giày").length,
      href: "#day-giay",
      img: PRODUCT_DATA.find((x) => x.accessoryType === "Dây giày")?.img || "",
    },
    {
      name: "Vệ sinh & khử mùi",
      count: PRODUCT_DATA.filter((x) =>
        ["Xịt khử mùi", "Vệ sinh giày", "Chống nước"].includes(x.accessoryType),
      ).length,
      href: "#cham-soc-giay",
      img:
        PRODUCT_DATA.find((x) => x.accessoryType === "Vệ sinh giày")?.img || "",
    },
    {
      name: "Bảo quản & chỉnh fit",
      count: PRODUCT_DATA.filter((x) =>
        ["Túi đựng giày", "Miếng dán gót"].includes(x.accessoryType),
      ).length,
      href: "#bao-quan",
      img:
        PRODUCT_DATA.find((x) => x.accessoryType === "Túi đựng giày")?.img ||
        "",
    },
  ];

  grid.innerHTML = `
    <div class="featured-cats">
      ${tiles.map(categoryTileTemplate).join("")}
    </div>
    <div id="vo-lot-de">${accessoryShelfTemplate("Vớ & lót đế", ["Vớ", "Lót đế"])}</div>
    <div id="day-giay">${accessoryShelfTemplate("Dây giày thay thế", ["Dây giày"])}</div>
    <div id="cham-soc-giay">${accessoryShelfTemplate("Chăm sóc giày", ["Xịt khử mùi", "Vệ sinh giày", "Chống nước"])}</div>
    <div id="bao-quan">${accessoryShelfTemplate("Bảo quản & chỉnh fit", ["Túi đựng giày", "Miếng dán gót"])}</div>
  `;
}

function renderHomeProductSections(grid) {
  const tiles = [
    {
      name: "Giày nam",
      count: collectionCount("men"),
      href: "nam.html",
      img: PRODUCT_DATA.find((x) => x.gender === "men")?.img || "",
    },
    {
      name: "Giày nữ",
      count: collectionCount("women"),
      href: "nu.html",
      img: PRODUCT_DATA.find((x) => x.gender === "women")?.img || "",
    },
    {
      name: "Phụ kiện giày",
      count: collectionCount("accessories"),
      href: "phu-kien.html",
      img: PRODUCT_DATA.find((x) => x.category === "Phụ kiện")?.img || "",
    },
    {
      name: "Đang giảm giá",
      count: collectionCount("sale"),
      href: "#sale",
      img: PRODUCT_DATA.find((x) => x.oldPrice > x.price)?.img || "",
    },
  ];

  grid.innerHTML = `
    <div class="featured-cats">
      ${tiles.map(categoryTileTemplate).join("")}
    </div>
    ${productShelfTemplate("Bộ sưu tập mới", "all", 6, "#products")}
    ${productShelfTemplate("Dành cho nam", "men", 3, "nam.html")}
    ${productShelfTemplate("Dành cho nữ", "women", 3, "nu.html")}
    <div id="sale">${productShelfTemplate("Đang ưu đãi", "sale", 4, "#sale")}</div>
    ${productShelfTemplate("Phụ kiện cần có", "accessories", 4, "phu-kien.html")}
  `;
}

function getSearchTermFromHash() {
  const hash = window.location.hash || "";
  const queryIndex = hash.indexOf("?");
  if (queryIndex < 0) return "";
  return new URLSearchParams(hash.slice(queryIndex + 1)).get("q")?.trim() || "";
}

function productMatchesSearch(product, term) {
  if (!term) return true;
  const haystack = [
    product.name,
    product.brand,
    product.category,
    product.desc,
    product.gender,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(term.toLowerCase());
}

function productCardTemplate(product) {
  const oldPrice = product.oldPrice
    ? `<s>${formatVnd(product.oldPrice)}</s>`
    : "";
  return `
    <article
      class="card p-card"
      role="listitem"
      aria-label="Sản phẩm: ${product.name}"
      data-product-id="${product.id}"
    >
      <div class="p-media">
        <div class="p-badges">
          <span class="badge ${product.badge?.includes("%") || product.badge === "SALE" ? "badge-sale" : "badge-hot"}">${product.badge || product.category}</span>
        </div>
        <div class="p-actions" aria-label="Hành động nhanh">
          <a class="icon-btn" href="detail.html?id=${product.id}" aria-label="Xem chi tiết ${product.name}">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </a>
          <a class="icon-btn" href="cart.html" aria-label="Thêm ${product.name} vào giỏ">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6h15l-1.5 9h-12z"></path>
              <path d="M6 6l-2-3H2"></path>
            </svg>
          </a>
        </div>
        <a href="detail.html?id=${product.id}" aria-label="Xem chi tiết ${product.name}">
          <img alt="${product.name}" src="${product.img}" />
        </a>
      </div>
      <div class="p-body">
        <div>
          <h3 class="p-title">
            <a class="link" href="detail.html?id=${product.id}">${product.name}</a>
          </h3>
          <p style="color: var(--muted); font-size: 13px; margin-top: 6px">
            ${product.brand} · ${product.accessoryType || product.category} · ${product.gender === "men" ? "Nam" : product.gender === "women" ? "Nữ" : "Unisex"}
          </p>
        </div>
        <div class="p-meta">
          <div class="price">${oldPrice}${formatVnd(product.price)}</div>
          <div class="rating" aria-label="Đánh giá ${product.rating} trên 5">
            <svg class="star" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            ${product.rating}
          </div>
        </div>
        <a class="btn btn-primary" href="cart.html" aria-label="Thêm ${product.name} vào giỏ">
          Thêm vào giỏ
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" style="stroke: #fff">
            <path d="M12 5v14"></path>
            <path d="M5 12h14"></path>
          </svg>
        </a>
      </div>
    </article>
  `;
}

function renderProductGrids() {
  const grids = document.querySelectorAll("[data-product-grid]");
  grids.forEach((grid) => {
    if (grid.getAttribute("data-layout") === "grouped-home") {
      renderHomeProductSections(grid);
      return;
    }
    if (grid.getAttribute("data-layout") === "grouped-accessories") {
      renderAccessorySections(grid);
      return;
    }

    const collection = grid.getAttribute("data-collection") || "all";
    const limit =
      Number(grid.getAttribute("data-limit")) || PRODUCT_DATA.length;
    const searchTerm = collection === "all" ? getSearchTermFromHash() : "";
    const products = getCatalogProducts()
      .filter(
        (product) =>
          productMatchesCollection(product, collection) &&
          productMatchesSearch(product, searchTerm),
      )
      .slice(0, limit);

    grid.innerHTML = products.length
      ? products.map(productCardTemplate).join("")
      : '<div class="panel" style="grid-column:1/-1"><div class="panel-pad"><b>Không tìm thấy sản phẩm phù hợp.</b><p style="color:var(--muted);margin-top:6px">Thử tìm theo hãng như Nike, Adidas, New Balance hoặc loại như running, sandal.</p></div></div>';
  });
}

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function cartCount(cart) {
  return cart.reduce((sum, it) => sum + (it.qty || 0), 0);
}

function cartSubtotal(cart) {
  return cart.reduce((sum, it) => sum + (it.qty || 0) * (it.price || 0), 0);
}

function setCartCountBadge(count) {
  const el = document.querySelector("[data-cart-count]");
  if (!el) return;
  if (count > 0) {
    el.textContent = String(count);
    el.style.display = "inline-flex";
  } else {
    el.textContent = "0";
    el.style.display = "none";
  }
}

function upsertCartItem(nextItem) {
  const cart = loadCart();
  const idx = cart.findIndex((it) => it.id === nextItem.id);
  if (idx >= 0) {
    cart[idx].qty = (cart[idx].qty || 0) + (nextItem.qty || 1);
  } else {
    cart.push({ ...nextItem, qty: nextItem.qty || 1 });
  }
  saveCart(cart);
  setCartCountBadge(cartCount(cart));
  return cart;
}

function buildItemFromProductCard(card) {
  const name =
    card.querySelector(".p-title")?.textContent?.trim() || "Sản phẩm";
  const priceEl = card.querySelector(".price");
  let priceText = priceEl?.textContent?.trim() || "0đ";
  const oldPriceEl = priceEl?.querySelector("s");
  if (oldPriceEl?.textContent) {
    // Khi có giá cũ <s>, textContent thường bị dính: "990.000đ840.000đ"
    // => loại giá cũ để lấy giá hiện tại.
    priceText = priceText.replace(oldPriceEl.textContent, "").trim();
  }
  const price = parseVnd(priceText);
  const img = card.querySelector(".p-media img")?.getAttribute("src") || "";
  const id =
    card.getAttribute("data-product-id")?.trim() ||
    card.getAttribute("aria-label")?.trim() ||
    name.toLowerCase().replace(/\s+/g, "-");

  return { id, name, price, img };
}

function loadCatalog() {
  try {
    const raw = localStorage.getItem(CATALOG_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCatalog(items) {
  localStorage.setItem(CATALOG_KEY, JSON.stringify(items));
}

function getCatalogProducts() {
  const catalog = loadCatalog();
  return [...PRODUCT_DATA, ...catalog]
    .filter((item) => String(item.img || "").trim())
    .filter(
      (item, index, arr) => arr.findIndex((x) => x.id === item.id) === index,
    );
}

function snapshotCatalogFromDom() {
  const cards = document.querySelectorAll(".p-card[data-product-id]");
  const domItems = Array.from(cards).map((card) => {
    const base = buildItemFromProductCard(card);
    const desc =
      card.querySelector("p")?.textContent?.trim() ||
      "Thiết kế tối giản, dễ phối.";
    const ratingText =
      card.querySelector(".rating")?.textContent?.trim() || "4.7";
    const rating = Number(String(ratingText).replace(/[^\d.]/g, "")) || 4.7;
    return { ...base, desc, rating };
  });
  const existing = loadCatalog();
  const merged = [...PRODUCT_DATA, ...existing, ...domItems].filter(
    (item, index, arr) => arr.findIndex((x) => x.id === item.id) === index,
  );
  saveCatalog(merged);
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function renderDetailPage() {
  const nameEl = document.querySelector("[data-detail-name]");
  if (!nameEl) return; // not on detail.html

  const id = getQueryParam("id");
  const catalog = loadCatalog();
  const item =
    PRODUCT_DATA.find((x) => x.id === id) ||
    catalog.find((x) => x.id === id) ||
    catalog.find((x) => x.id === (id || "").toLowerCase()) ||
    null;

  const fallback = {
    id: id || "product",
    name: "Sản phẩm",
    price: 0,
    img: "",
    desc: "Không tìm thấy sản phẩm. Vui lòng quay lại lưới.",
    rating: 4.7,
  };
  const p = item || fallback;

  const imgEl = document.querySelector("[data-detail-img]");
  const thumbEls = document.querySelectorAll("[data-detail-thumb]");
  const priceEl = document.querySelector("[data-detail-price]");
  const descEl = document.querySelector("[data-detail-desc]");
  const ratingEl = document.querySelector("[data-detail-rating]");
  const addBtn = document.querySelector("[data-detail-add]");

  nameEl.textContent = p.name;
  if (descEl) descEl.textContent = p.desc;
  if (priceEl) priceEl.textContent = p.price ? formatVnd(p.price) : "Liên hệ";
  if (ratingEl) ratingEl.textContent = String(p.rating ?? 4.7);

  if (imgEl && p.img) {
    imgEl.setAttribute("src", p.img);
    imgEl.setAttribute("alt", p.name);
  }

  const galleryImages = Array.isArray(p.gallery) ? p.gallery : [];

  thumbEls.forEach((thumb, index) => {
    thumb.setAttribute("src", galleryImages[index] || p.img);
    thumb.setAttribute("alt", p.name);
  });

  if (addBtn) {
    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (!p.price) return;
      upsertCartItem({ id: p.id, name: p.name, price: p.price, img: p.img });
      window.location.href = "cart.html";
    });
  }
}

function wireAddToCartButtons() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(
      '.p-card a.btn.btn-primary, .p-card .p-actions a.icon-btn[aria-label*="vào giỏ"]',
    );
    if (!btn) return;

    e.preventDefault();
    const card = btn.closest(".p-card");
    if (!card) return;

    const item = buildItemFromProductCard(card);
    if (!item.price) return;

    upsertCartItem(item);
  });
}

function renderCartPage() {
  const tbody = document.querySelector("[data-cart-tbody]");
  const summarySubtotal = document.querySelector("[data-summary-subtotal]");
  const summaryTotal = document.querySelector("[data-summary-total]");
  const checkoutList = document.querySelector("[data-checkout-items]");
  const checkoutTotal = document.querySelector("[data-checkout-total]");

  if (!tbody) return;

  const cart = loadCart();

  const setTotals = () => {
    const sub = cartSubtotal(cart);
    if (summarySubtotal) summarySubtotal.textContent = formatVnd(sub);
    if (summaryTotal) summaryTotal.textContent = formatVnd(sub);
    if (checkoutTotal) checkoutTotal.textContent = formatVnd(sub);
  };

  const rerender = () => {
    tbody.innerHTML = "";

    if (checkoutList) checkoutList.innerHTML = "";

    if (cart.length === 0) {
      const tr = document.createElement("tr");
      tr.innerHTML =
        '<td colspan="3" style="padding:16px 0;color:rgba(17,17,17,.72)"><b>Giỏ hàng trống.</b> Hãy quay lại và thêm sản phẩm.</td>';
      tbody.appendChild(tr);
      setTotals();
      setCartCountBadge(0);
      return;
    }

    cart.forEach((it) => {
      const tr = document.createElement("tr");
      const line = (it.qty || 0) * (it.price || 0);

      tr.innerHTML = `
        <td>
          <div class="cart-item">
            <img alt="${it.name}" src="${it.img}" />
            <div>
              <div class="ci-title">${it.name}</div>
              <div class="ci-sub">SL ${it.qty || 0}</div>
            </div>
          </div>
        </td>
        <td>
          <div class="qty" aria-label="Chỉnh số lượng">
            <button class="mini" type="button" data-dec aria-label="Giảm số lượng">−</button>
            <b aria-label="Số lượng">${it.qty || 0}</b>
            <button class="mini" type="button" data-inc aria-label="Tăng số lượng">+</button>
          </div>
        </td>
        <td><b style="font-weight: 900">${formatVnd(line)}</b></td>
      `;

      tr.querySelector("[data-dec]")?.addEventListener("click", () => {
        it.qty = Math.max(0, (it.qty || 0) - 1);
        if (it.qty === 0) {
          const idx = cart.findIndex((x) => x.id === it.id);
          if (idx >= 0) cart.splice(idx, 1);
        }
        saveCart(cart);
        setCartCountBadge(cartCount(cart));
        rerender();
      });

      tr.querySelector("[data-inc]")?.addEventListener("click", () => {
        it.qty = (it.qty || 0) + 1;
        saveCart(cart);
        setCartCountBadge(cartCount(cart));
        rerender();
      });

      tbody.appendChild(tr);

      if (checkoutList) {
        const row = document.createElement("div");
        row.className = "cart-item";
        row.style.gridTemplateColumns = "64px 1fr";
        row.innerHTML = `
          <img alt="${it.name}" src="${it.img}" />
          <div>
            <div class="ci-title">${it.name}</div>
            <div class="ci-sub">SL ${it.qty || 0}</div>
          </div>
        `;
        checkoutList.appendChild(row);
      }
    });

    setTotals();
  };

  rerender();
}

function wireHeaderSearch() {
  const forms = document.querySelectorAll("[data-header-search-form]");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type='search']");
      const value = input?.value?.trim();
      if (!value) return;
      if (
        window.location.pathname.endsWith("index.html") ||
        window.location.pathname.endsWith("/")
      ) {
        window.location.hash = `products?q=${encodeURIComponent(value)}`;
        renderProductGrids();
        return;
      }
      window.location.href = `index.html#products?q=${encodeURIComponent(value)}`;
    });
  });
}

function init() {
  const cart = loadCart();
  setCartCountBadge(cartCount(cart));
  renderProductGrids();
  snapshotCatalogFromDom();
  wireAddToCartButtons();
  wireHeaderSearch();
  renderCartPage();
  renderDetailPage();
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("hashchange", renderProductGrids);
