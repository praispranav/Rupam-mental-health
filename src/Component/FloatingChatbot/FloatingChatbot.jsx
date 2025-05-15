import React, { useState, useRef, useEffect } from 'react';
import Message from './Message';
import './FloatingChatbot.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faXmark } from '@fortawesome/free-solid-svg-icons';

const FloatingChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! I'm here to support you. How are you feeling today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const botReply = generateBotReply(userMsg.text);
            setMessages(prev => [...prev, botReply]);
            setIsTyping(false);
        }, 800);
    };

    const generateBotReply = (text) => {
        const lower = text.toLowerCase();
        let reply = "I'm here for you. Can you tell me more?";
    
        if (lower.includes('sad') || lower.includes('depressed') || lower.includes('unhappy')) {
            reply = "I'm really sorry you're feeling down. Remember, it's okay to have tough days. Would you like to talk about what's troubling you?";
        } else if (lower.includes('anxious') || lower.includes('panic') || lower.includes('worried')) {
            reply = "It’s natural to feel anxious sometimes. Try to focus on your breathing with me: breathe in deeply... and slowly breathe out. How are you feeling now?";
        } else if (lower.includes('happy') || lower.includes('good') || lower.includes('joy')) {
            reply = "That's wonderful to hear! What’s been making you feel happy lately?";
        } else if (lower.includes('alone') || lower.includes('lonely') || lower.includes('isolated')) {
            reply = "Feeling alone can be hard. But remember, I’m here to listen anytime you want to share.";
        } else if (lower.includes('stress') || lower.includes('stressed') || lower.includes('overwhelmed')) {
            reply = "Stress can really weigh on us. Have you tried any relaxing activities, like listening to music or taking a short walk?";
        } else if (lower.includes('help') || lower.includes('support') || lower.includes('assist')) {
            reply = "I'm here to help you. Can you tell me more about how I can support you?";
        } else if (lower.includes('tired') || lower.includes('exhausted') || lower.includes('fatigued')) {
            reply = "It sounds like you might need some rest. Taking a little break can sometimes help clear your mind.";
        } else if (lower.includes('angry') || lower.includes('frustrated') || lower.includes('mad')) {
            reply = "It's okay to feel angry sometimes. Would you like to talk about what's making you feel this way?";
        } else if (lower.includes('thank')) {
            reply = "You're very welcome! Remember, I'm always here whenever you want to chat.";
        } else if (lower.includes('bored') || lower.includes('dull') || lower.includes('uninterested')) {
            reply = "Feeling bored? Maybe trying a new hobby or a quick stretch can refresh your mind.";
        } else if (lower.includes('excited') || lower.includes('thrilled') || lower.includes('energetic')) {
            reply = "Exciting times! What's got you feeling so upbeat?";
        } else if (lower.includes('fear') || lower.includes('scared') || lower.includes('afraid')) {
            reply = "Fear is a natural feeling. Take a moment, breathe deeply, and let's talk about what’s worrying you.";
        } else if (lower.includes('confused') || lower.includes('lost') || lower.includes('uncertain')) {
            reply = "It's okay to feel confused sometimes. Want to try to sort through it together?";
        } else if (lower.includes('hurt') || lower.includes('pain') || lower.includes('upset')) {
            reply = "I'm sorry you're hurting. Would you like to share what happened?";
        } else if (lower.includes('love') || lower.includes('relationship') || lower.includes('affection')) {
            reply = "Relationships can be complex. I'm here to listen if you want to talk about it.";
        } else if (lower.includes('sleep') || lower.includes('insomnia') || lower.includes('restless')) {
            reply = "Good rest is important. Are you having trouble sleeping?";
        } else if (lower.includes('motivated') || lower.includes('inspired') || lower.includes('determined')) {
            reply = "That's fantastic! What’s inspiring you these days?";
        } else if (lower.includes('disappointed') || lower.includes('let down') || lower.includes('unhappy')) {
            reply = "Disappointment can be tough. Would you like to talk about what didn’t go as planned?";
        } else if (lower.includes('proud') || lower.includes('accomplished') || lower.includes('confident')) {
            reply = "You should be proud of yourself! What achievement are you celebrating?";
        } else if (lower.includes('hopeful') || lower.includes('optimistic') || lower.includes('positive')) {
            reply = "Hope is powerful. What are you hopeful about?";
        } else if (lower.includes('grateful') || lower.includes('thankful') || lower.includes('appreciative')) {
            reply = "Gratitude is a beautiful feeling. What are you grateful for today?";
        } else if (lower.includes('nervous') || lower.includes('anxious') || lower.includes('uneasy')) {
            reply = "Nervousness is normal before important moments. Want to share what’s coming up?";
        } else if (lower.includes('calm') || lower.includes('peaceful') || lower.includes('relaxed')) {
            reply = "It’s great you feel calm. What helps you relax?";
        } else if (lower.includes('joyful') || lower.includes('cheerful') || lower.includes('happy')) {
            reply = "Joy is contagious! What brought you joy recently?";
        } else if (lower.includes('overwhelmed') || lower.includes('stressed') || lower.includes('swamped')) {
            reply = "Feeling overwhelmed can be really hard. Remember to take it one step at a time.";
        } else if (lower.includes('grief') || lower.includes('loss') || lower.includes('mourning')) {
            reply = "I'm deeply sorry for your loss. It’s okay to grieve and take your time.";
        } else if (lower.includes('curious') || lower.includes('interested') || lower.includes('inquiring')) {
            reply = "Curiosity is a wonderful thing! What are you curious about?";
        } else if (lower.includes('shy') || lower.includes('timid') || lower.includes('reserved')) {
            reply = "It’s okay to feel shy sometimes. Would you like to talk about it?";
        } else if (lower.includes('lonely')) {
            reply = "Sometimes loneliness hits hard. I'm here if you want to share your thoughts.";
        } else if (lower.includes('joy')) {
            reply = "Joy is wonderful to experience! Tell me what made you happy.";
        } else if (lower.includes('hope')) {
            reply = "Hope keeps us moving forward. What are you looking forward to?";
        } else if (lower.includes('relaxed')) {
            reply = "Being relaxed is wonderful. How do you achieve that state?";
        } else if (lower.includes('lost')) {
            reply = "Feeling lost can be confusing. I’m here to listen if you want to talk.";
        } else if (lower.includes('thankful')) {
            reply = "Thank you for sharing! I'm glad to hear that.";
        } else if (lower.includes('excited')) {
            reply = "Excitement is contagious! What’s got you energized?";
        } else if (lower.includes('hopeful')) {
            reply = "Hope fuels the soul. What’s giving you hope today?";
        } else if (lower.includes('frustrated')) {
            reply = "Frustration is tough. Want to vent or talk it through?";
        } else if (lower.includes('calm')) {
            reply = "It’s great to feel calm. What helps you relax?";
        } else if (lower.includes('peace')) {
            reply = "Peace of mind is valuable. What brings you peace?";
        } else if (lower.includes('distracted')) {
            reply = "It’s hard to focus sometimes. Would you like tips to regain concentration?";
        } else if (lower.includes('lonely')) {
            reply = "I'm here for you. You're not alone.";
        } else if (lower.includes('excited')) {
            reply = "Awesome! What are you looking forward to?";
        } else if (lower.includes('motivated')) {
            reply = "Keep that energy up! What’s driving you?";
        } else if (lower.includes('creative')) {
            reply = "Creativity is amazing! What are you working on?";
        } else if (lower.includes('help')) {
            reply = "I'm here to support you. What do you need help with?";
        } else if (lower.includes('curious')) {
            reply = "Curiosity opens doors. What questions do you have?";
        } else if (lower.includes('inspired')) {
            reply = "Inspiration can change everything! What inspired you today?";
        } else if (lower.includes('grateful')) {
            reply = "Gratitude is a beautiful thing. What are you grateful for?";
        } else if (lower.includes('disappointed')) {
            reply = "It’s okay to feel disappointed. Want to talk about it?";
        } else if (lower.includes('worried')) {
            reply = "Worrying is hard. What’s on your mind?";
        } else if (lower.includes('scared')) {
            reply = "Fear can be strong. Would you like to share what's frightening you?";
        } else if (lower.includes('angry')) {
            reply = "Anger is natural. Want to talk about it?";
        } else if (lower.includes('hurt')) {
            reply = "I'm sorry you’re hurt. I'm here to listen.";
        } else if (lower.includes('thank')) {
            reply = "You're welcome! I'm always here if you need to chat.";
        }
    
        return { text: reply, sender: 'bot' };
    };
    
    

    return (
        <div className="floating-chatbot" aria-live="polite">
            {!isOpen && (
                <button className="chatbot-toggle" onClick={toggleChat}>
                    <FontAwesomeIcon icon={faCommentDots} size="2x" />
                </button>
            )}

            {isOpen && (
                <div className="chat-window card shadow fade-in">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Mental Health Support</h5>
                        <button className="btn btn-link text-white p-0" onClick={toggleChat}>
                            <FontAwesomeIcon icon={faXmark} size="lg" />
                        </button>
                    </div>

                    <div className="card-body messages">
                        {messages.map((msg, idx) => (
                            <Message key={idx} text={msg.text} sender={msg.sender} />
                        ))}
                        {isTyping && <Message text="Typing..." sender="bot" />}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="card-footer input-group">
                        <input
                            ref={inputRef}
                            type="text"
                            className="form-control"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button className="btn btn-success" onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default FloatingChatbot;
