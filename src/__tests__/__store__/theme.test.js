import { ThemeTypes } from "../../store/actions/theme";
import themeReducer, { initState } from "../../store/reducers/theme";

describe("theme reducer", () => {
  it("should return the initial state", () => {
    expect(themeReducer(undefined, {})).toEqual(initState);
  });

  it("should handle HIDE_MODAL", () => {
    expect(
      themeReducer(undefined, {
        type: ThemeTypes.TOGGLE_THEME,
        isDarkTheme: initState.isDarkTheme,
      })
    ).toEqual({
      isDarkTheme: !initState.isDarkTheme,
    });
  });
});
