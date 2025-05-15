import React, { useState } from "react";
import "./GroupDiscussion.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const initialGroups = [
  {
    id: 1,
    name: "Anxiety Support",
    messages: [
      { id: 1, sender: "Emma", text: "Hi, how are you feeling today?", time: "10:00 AM" },
      { id: 2, sender: "You", text: "A bit anxious but trying to stay calm.", time: "10:02 AM" },
    ],
  },
  {
    id: 2,
    name: "Depression Help",
    messages: [
      { id: 1, sender: "Liam", text: "Remember, you are not alone.", time: "9:45 AM" },
      { id: 2, sender: "You", text: "Thanks, that really helps.", time: "9:47 AM" },
    ],
  },
  {
    id: 3,
    name: "Mindfulness Practice",
    messages: [
      { id: 1, sender: "Sophia", text: "Let's take a deep breath together.", time: "11:00 AM" },
      { id: 2, sender: "You", text: "Feeling more relaxed now.", time: "11:05 AM" },
    ],
  },
];

export default function GroupDiscussion() {
  const [groups, setGroups] = useState(initialGroups);
  const [selectedGroupId, setSelectedGroupId] = useState(groups[0].id);
  const [newMessage, setNewMessage] = useState("");

  const selectedGroup = groups.find((g) => g.id === selectedGroupId);

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function handleSend() {
    if (newMessage.trim() === "") return;

    const updatedGroups = groups.map((group) => {
      if (group.id === selectedGroupId) {
        return {
          ...group,
          messages: [
            ...group.messages,
            { 
              id: group.messages.length + 1, 
              sender: "You", 
              text: newMessage,
              time: getCurrentTime(),
            },
          ],
        };
      }
      return group;
    });

    setGroups(updatedGroups);
    setNewMessage("");
  }

  return (
    <div className=" bg-mental-light">
    <div className="container">
    <div className="group-discussion container-fluid d-flex vh-100 p-4">
      <aside className="groups-list bg-white rounded shadow p-3 me-4">
        <h4 className="text-primary mb-3">Support Groups</h4>
        <div className="list-group">
          {groups.map((group) => (
            <button
              key={group.id}
              type="button"
              className={
                "list-group-item list-group-item-action " +
                (group.id === selectedGroupId ? "active" : "")
              }
              onClick={() => setSelectedGroupId(group.id)}
            >
              {group.name}
            </button>
          ))}
        </div>
      </aside>

      <main className="chat-area d-flex flex-column flex-grow-1 bg-white rounded shadow p-4">
        <header>
          <h4 className="text-success mb-4">{selectedGroup.name}</h4>
        </header>

        <section className="messages flex-grow-1 overflow-auto mb-4 p-3 border rounded bg-mental-chat-bg">
          {selectedGroup.messages.map((msg) => (
            <div
              key={msg.id}
              className={
                "message mb-3 p-3 rounded shadow-sm " +
                (msg.sender === "You" ? "message-sent text-end" : "message-received text-start")
              }
              aria-label={`${msg.sender} said: ${msg.text} at ${msg.time}`}
            >
              <div className="fw-bold sender">{msg.sender}</div>
              <div className="message-text">{msg.text}</div>
              <small className="text-muted">{msg.time}</small>
            </div>
          ))}
        </section>

        <footer className="input-group">
          <input
            type="text"
            className="form-control rounded-start"
            placeholder="Share your thoughts..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            aria-label="Message input"
          />
          <button 
            className="btn btn-success rounded-end" 
            onClick={handleSend}
            aria-label="Send message"
          >
            Send
          </button>
        </footer>
      </main>
    </div>
    </div>
    </div>
  );
}
