import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xD37E15cd3B0835E72f35D7BD0Fc9e852a10185b4",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "VOTE!",
        description: "This NFT will give you access to vote in ConDAO!",
        image: readFileSync("scripts/assets/be-a-voter.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()