import { getYoutubeVideoId } from "../src/utils/utils";

describe("Unit test", () => {
  it("get correct video ID", () => {
    const url = "https://www.youtube.com/watch?v=Sg04kKuQZIY";
    const id = getYoutubeVideoId(url);
    expect(id).toEqual("Sg04kKuQZIY");
  });
});
