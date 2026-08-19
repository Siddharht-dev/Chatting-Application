import { Conversation } from "../Models/conversationModel.js";
import { Message } from "../Models/messageModel.js";
export const sendMessage = async (req, res) =>{
    try{
        const senderId = req.id;
        const receiverId = req.params.id; //It store the dynamic value.
        const {message} = req.body;

        let gotConversation = await Conversation.findOne({
            participants:{$all: [senderId, receiverId]}, //$all means the array must have both sender and receiver
        });

        if(!gotConversation){ //If the conversation between 2 person does not exist then create one
            gotConversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        };

        const newMessage = await Message.create({ //Creates actual message document in database.
            senderId,
            receiverId,
            message
        });

        if(newMessage){//Add that newMessage id to conversation Because conversation needs to know which messages belong to this chat
            gotConversation.messages.push(newMessage._id);
        };

        await gotConversation.save();


        //SOCKET IO

        return res.status(201).json({message: "Message sent successfully."});
    }
    catch(e){
        console.log(e);
    }
}

export const getMessage = async (req, res) => {
    try{
        const senderId = req.id;
        const receiverId = req.params.id;
        let conversation = await Conversation.findOne({
            participants:{$all : [senderId, receiverId]}
        }).populate("messages"); //Poupulate is inbuilt keyword of express which help to convert message Id to actual message.
        return res.status(200).json(conversation?.messages);
    }
    catch(e){
        console.log(e);
    }
}