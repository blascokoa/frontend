import * as React from "react";
import { useTranslations } from "../../utils/use-translation";
import TwitterProfile from "../TwitterCommunity/TwitterProfile";

type Empty = { type: "empty" };
type FollowedBy = {
  type: "followedByCount";
  count: number;
  followers: TwitterProfile[];
};
type HandleNotFound = { type: "handleNotFound" };
type Searching = { type: "searching" };

type FollowedByResult = FollowedBy | HandleNotFound | Empty | Searching;

const FollowingYou: React.FC = () => {
  const { translations: t } = useTranslations();
  const [handle, setHandle] = React.useState<string>("");
  const [followers, setFollowers] = React.useState<FollowedByResult>({
    type: "empty",
  });

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    setFollowers({ type: "searching" });

    const cleanHandle = handle.startsWith("@") ? handle.slice(1) : handle;

    const res = await fetch(
      `https://api.ultrasound.money/fam/${cleanHandle}/followed-by`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status === 404) {
      setFollowers({ type: "handleNotFound" });
      return;
    }

    const body = await res.json();
    setFollowers({
      type: "followedByCount",
      count: body.count,
      followers: body.followers,
    });
  };

  return (
    <>
      <h1 className="text-white text-2xl md:text-3xl text-center font-light mb-8">
        {t.title_following_you}
      </h1>
      <p
        className={`text-white leading-6 md:leading-none text-center font-light text-base lg:text-lg mb-14`}
      >
        {t.teaser_following_you}
      </p>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <input
          className="md:w-96 p-4 pr-32 bg-transparent border border-gray-500 rounded-full text-xs text-white"
          type="text"
          placeholder="@vitalikbuterin"
          value={handle}
          onChange={(event) => setHandle(event.target.value)}
        />
        <button
          className="md:w-32 -ml-28 md:-ml-32 px-6 text-xs text-white border border-white bg-transparent rounded-full hover:bg-gray-700"
          type="submit"
        >
          show me →
        </button>
      </form>
      {followers.type === "empty" ? null : followers.type ===
        "handleNotFound" ? (
        <p className="text-white text-xl p-8 text-center">handle not found</p>
      ) : followers.type === "searching" ? (
        <p className="text-white text-xl p-8 text-center">searching...</p>
      ) : followers.type === "followedByCount" ? (
        <div className="my-8">
          <TwitterProfile profileList={followers.followers} />
          {followers.count > followers.followers.length && (
            <p className="text-white text-xl p-8 text-center">{`+${
              followers.count - followers.followers.length
            } more!`}</p>
          )}
        </div>
      ) : (
        <p>error</p>
      )}
    </>
  );
};

export default FollowingYou;
