import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        console.log('send message called')
        const { message } = req.body;
        const { userId: receiverId } = req.params;
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })
        console.log('consversation', conversation)
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
            console.log('created a conversation')
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        await Promise.all([conversation.save(), newMessage.save()])


        res.status(201).json(newMessage)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
    console.log("message sent", req.params.id)
}