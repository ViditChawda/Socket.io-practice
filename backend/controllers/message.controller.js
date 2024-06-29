import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        console.log('send message called')
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.uesr._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
    console.log("message sent", req.params.id)
}