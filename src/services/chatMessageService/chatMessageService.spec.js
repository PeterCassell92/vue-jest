import { ChatMessageService } from './';
describe("the message service", ()=>{
    let chatMessageService;

    beforeEach(()=> {
        chatMessageService = ChatMessageService([]);
    });

    it("should add messages", async ()=>{
        expect(await chatMessageService.getMessages()).toHaveLength(0);

        const msg1={
            content: "This is my fight song"
        }

        await chatMessageService.submitMessage(msg1);

        expect(await chatMessageService.getMessages()).toHaveLength(1);

        let messages = await chatMessageService.getMessages();
        expect(messages[0].content).toEqual(msg1.content);
    });
})