import React from "react";
import Button from "../../components/commons/Button";
import Input from "../../components/commons/Input";

export default function SharePage() {
  return (
    <fieldset className="max-w-[500px] my-10 mx-auto border-2 px-8 py-10 rounded">
      <legend>Share a Youtube Channel</legend>
      <div className="grid grid-cols-3 flex items-center">
        <span>Youtube URL</span>
        <Input className="col-span-2" placeholder="Url" />
      </div>
      <div className="grid grid-cols-3 mt-4">
        <span />
        <Button className="col-span-2">Share</Button>
      </div>
    </fieldset>
  );
}
