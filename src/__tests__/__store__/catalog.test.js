import { CatalogDataTypes } from "../../store/actions/catalog";
import catalogReducer, { initState } from "../../store/reducers/catalog";

describe("catalog reducer", () => {
  it("should return the initial state", () => {
    expect(catalogReducer(undefined, {})).toEqual(initState);
  });

  it("should handle LOADING_CATALOGDATA_REQUEST", () => {
    expect(
      catalogReducer(undefined, {
        type: CatalogDataTypes.LOADING_CATALOGDATA_REQUEST,
      })
    ).toEqual({
      ...initState,
      isLoading: true,
    });
  });

  it("should handle LOADING_CATALOGDATA_SUCCESS", () => {
    expect(
      catalogReducer(undefined, {
        type: CatalogDataTypes.LOADING_CATALOGDATA_SUCCESS,
        payload: [
          {
            id: 1,
            imageUrl: "url",
            title: "title",
            rating: "rating",
            price: 1,
            priceSale: 1,
            quantity: 1,
            totalPrice: 1,
            specs: {
              title: "title",
              price: 1,
              description: "description",
              checked: false,
            },
          },
        ],
      })
    ).toEqual({
      ...initState,
      isLoading: false,
      catalogData: {
        ...initState.catalogData.results,
        results: [
          {
            id: 1,
            imageUrl: "url",
            title: "title",
            rating: "rating",
            price: 1,
            priceSale: 1,
            quantity: 1,
            totalPrice: 1,
            specs: {
              title: "title",
              price: 1,
              description: "description",
              checked: false,
            },
          },
        ],
      },
    });
  });
});
