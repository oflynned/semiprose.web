import { Button, Layout, Prompt } from "~/design-system";
import { prompt } from "~/constants";
import { useState } from "react";

export default function Compose() {
  const [content, setContent] = useState("");
  const [disablePublish, setDisablePublish] = useState(content.length === 0);
  const [disableSaveDraft, setDisableSaveDraft] = useState(
    content.length === 0
  );

  const handleSaveDraft = () => {
    if (!disableSaveDraft) {
      setDisableSaveDraft(true);
    }
  };

  const handleTextChange = (text: string) => {
    const content = text.trim();

    if (content.length === 0) {
      setDisableSaveDraft(true);
      setDisablePublish(true);
      setContent("");
    } else {
      setDisableSaveDraft(false);
      setDisablePublish(false);
      setContent(content);
    }
  };

  return (
    <Layout>
      <form className={"flex flex-col gap-8 max-w-screen-md"}>
        <input
          className={"text-4xl font-bold focus:outline-none"}
          placeholder={"Title"}
        />
        <Prompt {...prompt} />
        <div className={"flex flex-col gap-2"}>
          <textarea
            className={
              "border border-gray-100 focus:outline-gray-200 bg-gray-50 rounded-xl p-8"
            }
            id="title"
            rows={5}
            onChange={(e) => {
              handleTextChange(e.target.value);
            }}
          />
        </div>
        <div className={"flex gap-4 w-full justify-end"}>
          <Button
            variant={"outlined"}
            label={"Save draft"}
            disabled={disableSaveDraft}
            onClick={handleSaveDraft}
          />
          <Button label={"Publish"} disabled={disablePublish} />
        </div>
      </form>
    </Layout>
  );
}
