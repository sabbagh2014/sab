import Express from "express";
import controller from "./controller";
import auth from "../../../../helper/auth";
import upload from '../../../../helper/uploadHandler';


export default Express.Router()

    .get('/deleteChatHistory', controller.deleteChatHistory)
    .post('/oneToOneChatApi', controller.oneToOneChatApi)

    
    
    .use(auth.verifyToken)
    .get('/readChat/:chatId', controller.readChat)
    .post('/chatHistory', controller.chatHistory)