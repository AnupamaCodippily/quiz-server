import { Injectable } from '@nestjs/common';
import OpenAI from "openai";


@Injectable()
export class OpenaiService {

    async evaluateQuestion(prompt: string) : Promise<number | null>{

        const openai = new OpenAI();

        const completion = await openai.chat.completions.create({
            model: "o1-mini",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ]
        });

        console.log(completion.choices[0].message.content);

        try {
            return parseInt(completion.choices[0].message.content);
        } catch(exception) {
            console.log(exception)
            return 0;
        }
    }
}
