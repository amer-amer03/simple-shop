import { ModalTypes } from "../../store/actions/modal";
import modalReducer, { initState } from "../../store/reducers/modal";

describe("modal reducer", () => {
  it("should return the initial state", () => {
    expect(modalReducer(undefined, {})).toEqual(initState);
  });

  it("should handle SHOW_MODAL", () => {
    expect(
      modalReducer(undefined, {
        type: ModalTypes.SHOW_MODAL,
        payload: "registration",
      })
    ).toEqual({
      ...initState,
      modalType: "registration",
    });
  });

  it("should handle HIDE_MODAL", () => {
    expect(
      modalReducer(undefined, {
        type: ModalTypes.HIDE_MODAL,
        modalType: "",
      })
    ).toEqual({
      ...initState,
      modalType: "",
    });
  });
});
