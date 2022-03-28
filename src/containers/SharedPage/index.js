import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { shareVideoAPI } from "../../apis";
import Button from "../../components/commons/Button";
import Input from "../../components/commons/Input";
import useAlertStore from "../../store/alertStore";
import useUserStore from "../../store/userStore";

export default function SharePage() {
  const [url, setUrl] = React.useState();
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const { showError, show } = useAlertStore((state) => state);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  const handleSubmit = async () => {
    if (!url) showError("Please fill URL");

    if (url) {
      try {
        await shareVideoAPI({ url: url, shared_by: user?.email });
        setUrl("");
        show("Shared successfully");
      } catch (e) {
        showError(e);
      }
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
