import { AuthTypes } from "../../store/actions/auth";
import authReducer, { initState } from "../../store/reducers/auth";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(authReducer(undefined, {})).toEqual(initState);
  });

  it("should handle REGISTRATION", () => {
    expect(
      authReducer(undefined, {
        type: AuthTypes.REGISTRATION,
        payload: {
          name: "user",
          email: "user@mail.com",
          phone: "123",
          password: "Password1@",
        },
      })
    ).toEqual({
      isLogin: true,
      userData: {
        name: "user",
        email: "user@mail.com",
        phone: "123",
        password: "Password1@",
      },
    });
  });

  it("should handle LOGIN", () => {
    expect(
      authReducer(undefined, {
        type: AuthTypes.LOGIN,
        isLogin: true,
      })
    ).toEqual({
      ...initState,
      isLogin: true,
    });
  });

  it("should handle LOGOUT", () => {
    expect(
      authReducer(undefined, {
        type: AuthTypes.LOGOUT,
        isLogin: false,
      })
    ).toEqual({
      ...initState,
      isLogin: false,
    });
  });
});
