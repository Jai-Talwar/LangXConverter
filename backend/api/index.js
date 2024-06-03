import { HfInference } from "@huggingface/inference";
// const HfInference = require("@huggingface/inference");
// const express = require("express");
import express from "express";
// import { body, validationResult } from "express-validator";
// import expressValidator from 'express-validator';

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator);
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
// app.get("/translate", (req, res) => {
//   res.send(data);
// });
const tgt = {
  Hindi: "hi_IN",
  Chinese: "zh_CN",
  Russian: "ru_RU",
  Japanese: "ja_XX",
  German: "de_DE",
};
app.post("/dotranslate", async (req, res) => {
  try {
    const hf = new HfInference("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");
    const { text, lang } = req.body;
    //   const text = obj[input];
    //   const lang = obj[targetlang];
    const data = await hf.translation({
      //   model: "alirezamsh/small100",
      model: "facebook/mbart-large-50-many-to-many-mmt",
      inputs: text,
      parameters: {
        src_lang: "en_XX",
        tgt_lang: tgt[lang],
      },
    });
    res.send({ status: 200, data: data });
  } catch (error) {
    res.status(400).send("internal server error");
  }
});
app.listen(9000);
// await hf.translation({
//     model: 't5-base',
//     inputs: 'My name is Wolfgang and I live in Berlin'
//   })
