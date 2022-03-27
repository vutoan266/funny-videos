import React from "react";
import { shareVideoAPI } from "../../apis";
import Button from "../../components/commons/Button";
import Input from "../../components/commons/Input";
import useUserStore from "../../store/userStore";

export default function SharePage() {
  const [url, setUrl] = React.useState();
  const user = useUserStore((state) => state.user);

  const handleSubmit = async () => {
    if (url) {
      await shareVideoAPI({ url: url, shared_by: user?.email });
      setUrl("");
    }
  };

  return (
    <fieldset className="max-w-[500px] my-10 mx-auto border-2 px-8 py-10 rounded">
      <legend>Share a Youtube Channel</legend>
      <div className="grid grid-cols-3 flex items-center">
        <span>Youtube URL</span>
        <Input
          className="col-span-2"
          placeholder="Url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 mt-4">
        <span />
        <Button className="col-span-2" onClick={handleSubmit}>
          Share
        </Button>
      </div>
    </fieldset>
  );
}
