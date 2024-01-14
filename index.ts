
// import express, { Application, Request, Response } from "express"
// import cors from "cors"
// // import {Configuration, OpenAI} from "openai"
// // import Configuration from "openai";
// // import OpenAIApi from "openai"
// // const { OpenAIAPI } = require('openai');
// // import { OpenAIAPI } from 'openai';
// import OpenAI from 'openai';





// const PORT: number = 8000

// const app: Application = express()
// app.use(cors())
// app.use(express.json())


// // const API_KEY: string= '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'


// const openai = new OpenAI({
//     apiKey: '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'
// });


// app.post("/completions", async (req:Request, res:Response) => {
//     try {
//         // const completion = await openai.createChatCompletion({
//         const completion = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages: [
//                 {
//                     role: "user",
//                     content: "Create a SQL request to " + req.body.message
//                 }
//             ],
//             max_tokens: 30,
//         })
//         // res.send(completion.data.choices[0].message)
//         // res.send(completion.data.choices[0].message)
//         // console.log(completion.choices[0]);
//         console.log(completion.choices[0].message);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Server error")
//     }
// })


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });






// import express, { Application, Request, Response } from 'express';
// import cors from 'cors';
// import { OpenAI } from 'openai';

// const PORT: number = 8000;

// const app: Application = express();
// app.use(cors());
// app.use(express.json());

// const openai = new OpenAI({
//   apiKey: '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'
// });

// // Root route handler
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello, World!");
// });

// app.post("/completions", async (req: Request, res: Response) => {
//     try {
//       const completion = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             role: "user",
//             content: "Create a SQL request to " + req.body.message
//           }
//         ],
//         max_tokens: 30,
//       });
  
//       // Send the response back to the client
//       res.json({ message: completion.choices[0].message });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Server error" });
//     }
//   });
  

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });






















import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { OpenAI } from 'openai';

const PORT: number = 8000;

const app: Application = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: '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'
});

// Root route handler
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.post("/completions", async (req: Request, res: Response) => {
    try {
        const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: "Create a SQL request to " + req.body.message
            }
          ],
          // max_tokens: 30,
        });
        console.log("OpenAI API response:", completion);
        res.json({ message: completion.choices[0].message });
      } catch (error) {
        console.error("Error in try block:", error);
        res.status(500).json({ error: "Server error" });
      }
      
  });
  
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});