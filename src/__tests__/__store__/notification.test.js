import { NotificationTypes } from "../../store/actions/notification";
import notificationReducer, {
  initState,
} from "../../store/reducers/notification";

describe("notification reducer", () => {
  it("should return the initial state", () => {
    expect(notificationReducer(undefined, {})).toEqual(initState);
  });

  it("should handle ADD_NOTIFICATION", () => {
    expect(
      notificationReducer(undefined, {
        type: NotificationTypes.ADD_NOTIFICATION,
        payload: "notification",
      })
    ).toEqual({
      ...initState,
      message: "notification",
    });
  });

  it("should handle REMOVE_NOTIFICATION", () => {
    expect(
      notificationReducer(undefined, {
        type: NotificationTypes.REMOVE_NOTIFICATION,
        message: "",
      })
    ).toEqual({
      ...initState,
      message: "",
    });
  });
});
