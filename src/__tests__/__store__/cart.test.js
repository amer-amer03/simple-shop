import {
  cartItemsReducer,
  cartSpecsReducer,
  cartItemPriceReducer,
  cartTotalPriceReducer,
  initState,
} from "../../store/reducers/cart";
import {
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  toggleSpecs,
  setTotalPrice,
} from "../../store/reducers/utils";
import { CartTypes } from "../../store/actions/cart";

describe("cart reducer", () => {
  it("should return the initial state", () => {
    expect(cartItemsReducer(undefined, {})).toEqual(initState);
    expect(cartSpecsReducer(undefined, {})).toEqual(initState);
    expect(cartItemPriceReducer(undefined, {})).toEqual(initState);
    expect(cartTotalPriceReducer(undefined, {})).toEqual(initState);
  });

  it("should handle increaseCartItemQuantity", () => {
    const allCartItems = [
      {
        id: 14,
        imageUrl:
          "https://content1.rozetka.com.ua/goods/images/big/247214370.jpg",
        title: "Lenovo IdeaPad 3 15IIL05",
        rating: 4,
        price: 12000,
        priceSale: 11750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
            checked: true,
          },
        ],
        quantity: 1,
        totalPrice: 11855,
      },
      {
        id: 9,
        imageUrl:
          "https://content2.rozetka.com.ua/goods/images/big/238664318.jpg",
        title: "Ноутбук ASUS TUF Gaming F15",
        rating: 4,
        price: 35000,
        priceSale: 29750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
          },
        ],
        quantity: 1,
        totalPrice: 29750,
      },
    ];
    const currentCartItem = {
      id: 14,
      imageUrl:
        "https://content1.rozetka.com.ua/goods/images/big/247214370.jpg",
      title: "Lenovo IdeaPad 3 15IIL05",
      rating: 4,
      price: 12000,
      priceSale: 11750,
      specs: [
        {
          title: "antivirus",
          price: 980,
          description: "Antivirus ESEt Internet Security license",
        },
        {
          title: "os",
          price: 2100,
          description: "OS Windows 10 home edition 32/64-bit",
        },
        {
          title: "screencare",
          price: 105,
          description:
            "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
          checked: true,
        },
      ],
      quantity: 1,
      totalPrice: 11855,
    };

    const result = [
      {
        id: 14,
        imageUrl:
          "https://content1.rozetka.com.ua/goods/images/big/247214370.jpg",
        title: "Lenovo IdeaPad 3 15IIL05",
        rating: 4,
        price: 12000,
        priceSale: 11750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
            checked: true,
          },
        ],
        quantity: 2,
        totalPrice: 11855,
      },
      {
        id: 9,
        imageUrl:
          "https://content2.rozetka.com.ua/goods/images/big/238664318.jpg",
        title: "Ноутбук ASUS TUF Gaming F15",
        rating: 4,
        price: 35000,
        priceSale: 29750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
          },
        ],
        quantity: 1,
        totalPrice: 29750,
      },
    ];

    expect(increaseCartItemQuantity(allCartItems, currentCartItem)).toEqual(
      result
    );
  });

  it("should handle decreaseCartItemQuantity", () => {
    const allCartItems = [
      {
        id: 14,
        imageUrl:
          "https://content1.rozetka.com.ua/goods/images/big/247214370.jpg",
        title: "Lenovo IdeaPad 3 15IIL05",
        rating: 4,
        price: 12000,
        priceSale: 11750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
            checked: true,
          },
        ],
        quantity: 2,
        totalPrice: 23605,
      },
      {
        id: 9,
        imageUrl:
          "https://content2.rozetka.com.ua/goods/images/big/238664318.jpg",
        title: "Ноутбук ASUS TUF Gaming F15",
        rating: 4,
        price: 35000,
        priceSale: 29750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
          },
        ],
        quantity: 1,
        totalPrice: 29750,
      },
    ];
    const currentCartItem = {
      id: 14,
      imageUrl:
        "https://content1.rozetka.com.ua/goods/images/big/247214370.jpg",
      title: "Lenovo IdeaPad 3 15IIL05",
      rating: 4,
      price: 12000,
      priceSale: 11750,
      specs: [
        {
          title: "antivirus",
          price: 980,
          description: "Antivirus ESEt Internet Security license",
        },
        {
          title: "os",
          price: 2100,
          description: "OS Windows 10 home edition 32/64-bit",
        },
        {
          title: "screencare",
          price: 105,
          description:
            "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
          checked: true,
        },
      ],
      quantity: 2,
      totalPrice: 23605,
    };

    const result = [
      {
        id: 14,
        imageUrl:
          "https://content1.rozetka.com.ua/goods/images/big/247214370.jpg",
        title: "Lenovo IdeaPad 3 15IIL05",
        rating: 4,
        price: 12000,
        priceSale: 11750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
            checked: true,
          },
        ],
        quantity: 1,
        totalPrice: 23605,
      },
      {
        id: 9,
        imageUrl:
          "https://content2.rozetka.com.ua/goods/images/big/238664318.jpg",
        title: "Ноутбук ASUS TUF Gaming F15",
        rating: 4,
        price: 35000,
        priceSale: 29750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
          },
        ],
        quantity: 1,
        totalPrice: 29750,
      },
    ];

    expect(decreaseCartItemQuantity(allCartItems, currentCartItem)).toEqual(
      result
    );
  });

  it("should handle toggleSpecs", () => {
    const allCartItems = [
      {
        id: 14,
        imageUrl:
          "https://content1.rozetka.com.ua/goods/images/big/247214370.jpg",
        title: "Lenovo IdeaPad 3 15IIL05",
        rating: 4,
        price: 12000,
        priceSale: 11750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
            checked: false,
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
            checked: false,
          },
        ],
        quantity: 1,
        totalPrice: 11750,
      },
      {
        id: 9,
        imageUrl:
          "https://content2.rozetka.com.ua/goods/images/big/238664318.jpg",
        title: "Ноутбук ASUS TUF Gaming F15",
        rating: 4,
        price: 35000,
        priceSale: 29750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
          },
        ],
        quantity: 1,
        totalPrice: 29750,
      },
    ];
    const currentCartItem = {
      id: 14,
      imageUrl:
        "https://content1.rozetka.com.ua/goods/images/big/247214370.jpg",
      title: "Lenovo IdeaPad 3 15IIL05",
      rating: 4,
      price: 12000,
      priceSale: 11750,
      specs: [
        {
          title: "antivirus",
          price: 980,
          description: "Antivirus ESEt Internet Security license",
          checked: false,
        },
        {
          title: "os",
          price: 2100,
          description: "OS Windows 10 home edition 32/64-bit",
        },
        {
          title: "screencare",
          price: 105,
          description:
            "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
          checked: false,
        },
      ],
      quantity: 1,
      totalPrice: 11750,
    };
    const selectedSpec = "antivirus";
    const result = [
      {
        id: 14,
        imageUrl:
          "https://content1.rozetka.com.ua/goods/images/big/247214370.jpg",
        title: "Lenovo IdeaPad 3 15IIL05",
        rating: 4,
        price: 12000,
        priceSale: 11750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
            checked: true,
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
            checked: false,
          },
        ],
        quantity: 1,
        totalPrice: 11750,
      },
      {
        id: 9,
        imageUrl:
          "https://content2.rozetka.com.ua/goods/images/big/238664318.jpg",
        title: "Ноутбук ASUS TUF Gaming F15",
        rating: 4,
        price: 35000,
        priceSale: 29750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
          },
        ],
        quantity: 1,
        totalPrice: 29750,
      },
    ];

    expect(toggleSpecs(allCartItems, currentCartItem, selectedSpec)).toEqual(
      result
    );
  });

  it("should handle setTotalPrice", () => {
    const allCartItems = [
      {
        id: 14,
        imageUrl:
          "https://content1.rozetka.com.ua/goods/images/big/247214370.jpg",
        title: "Lenovo IdeaPad 3 15IIL05",
        rating: 4,
        price: 12000,
        priceSale: 11750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
            checked: true,
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
            checked: false,
          },
        ],
        quantity: 1,
        totalPrice: 12730,
      },
      {
        id: 9,
        imageUrl:
          "https://content2.rozetka.com.ua/goods/images/big/238664318.jpg",
        title: "Ноутбук ASUS TUF Gaming F15",
        rating: 4,
        price: 35000,
        priceSale: 29750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
          },
        ],
        quantity: 1,
        totalPrice: 29750,
      },
    ];
    const itemId = 9;
    const totalPrice = 29750;
    const result = [
      {
        id: 14,
        imageUrl:
          "https://content1.rozetka.com.ua/goods/images/big/247214370.jpg",
        title: "Lenovo IdeaPad 3 15IIL05",
        rating: 4,
        price: 12000,
        priceSale: 11750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
            checked: true,
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
            checked: false,
          },
        ],
        quantity: 1,
        totalPrice: 12730,
      },
      {
        id: 9,
        imageUrl:
          "https://content2.rozetka.com.ua/goods/images/big/238664318.jpg",
        title: "Ноутбук ASUS TUF Gaming F15",
        rating: 4,
        price: 35000,
        priceSale: 29750,
        specs: [
          {
            title: "antivirus",
            price: 980,
            description: "Antivirus ESEt Internet Security license",
          },
          {
            title: "os",
            price: 2100,
            description: "OS Windows 10 home edition 32/64-bit",
          },
          {
            title: "screencare",
            price: 105,
            description:
              "Pre-Moistened Electronic Wipes, Surface Cleaning for Computers",
          },
        ],
        quantity: 1,
        totalPrice: 29750,
      },
    ];

    expect(setTotalPrice(allCartItems, itemId, totalPrice)).toEqual(result);
  });

  it("should handle SET_CART_TOTAL_PRICE", () => {
    expect(
      cartTotalPriceReducer(undefined, {
        type: CartTypes.SET_CART_TOTAL_PRICE,
        payload: 1,
      })
    ).toEqual({
      ...initState,
      totalPrice: 1,
    });
  });
});
