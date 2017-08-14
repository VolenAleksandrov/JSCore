/**
 * Created by vo13n on 22-Jul-17.
 */
class MailBox {
    constructor(){
        this.mails = [];
    }
    addMessage(subject, text){
        this.mails.push({
            subject: subject,
            text: text
        });
        return this;
    }
    get messageCount(){
        return this.mails.length;
    }
    deleteAllMessages(){
        this.mails = [];
    }
    findBySubject(substr){
        let resultMessages = [];
        for(let message of this.mails){
            if(message.subject.includes(substr)){
                resultMessages.push(message);
            }
        }
        return resultMessages;
    }
    toString(){
        if(this.mails.length < 1){
            return ` * (empty mailbox)`;
        }
        let result = ``;
        for(let message of this.mails){
            result += ` * [${message.subject}] ${message.text}\n`;
        }
        return result;
    }
}
let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
