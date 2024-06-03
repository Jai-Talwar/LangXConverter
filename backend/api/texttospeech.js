import { HfInference } from "@huggingface/inference";
import express from "express";
import cors from "cors";
import { arrayBuffer, blob } from "stream/consumers";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const app = express();
app.use(cors());
app.use(express.json());
// app.post("/audio", async (req, res) => {
//   try {
//     const { input } = req.body;
//     const hf = new HfInference("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");
//     const data = await hf.textToSpeech({
//       model: "espnet/kan-bayashi_ljspeech_vits",
//       inputs: input,
//     });
//     console.log(data);
//     res.send(data);
//   } catch (error) {
//     res.send(error);
//   }
// });
// app.listen(9000);
async function textToSpeech() {
  try {
    let input = "hey i am jai ";
    const hf = new HfInference("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");
    const data = await hf.textToSpeech({
      model: "espnet/kan-bayashi_ljspeech_vits",
      inputs: input,
    });
    // console.log(data);
    // let file = new File([data], "audio/flac", {
    //   type: data.type,
    // });
    let __filename = fileURLToPath(import.meta.url);
    let __dirname = path.dirname(__filename);
    let path1 = path.join(__dirname, "/temp");
    let array = await data.arrayBuffer();

    console.log(array["Uint8Contents"]);
    // fs.writeFileSync(`${path1}/tut.txt`, JSON.stringify(lastdata));
  } catch (error) {
    console.log(error);
  }
}
textToSpeech();
