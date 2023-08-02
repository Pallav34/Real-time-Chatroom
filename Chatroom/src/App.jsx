import { useEffect, useState } from "react";
import "./App.css";
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";

function App() {
  const [name, setName] = useState("");
  const  [chats, setChats] = useState([]);

  const[msg,setMsg] = useState('');

const db = getDatabase();

const chatListRef = ref(db,'chats');

useEffect(()=>{
  onChildAdded(chatListRef,(data)=>{
    // const c = [...chats]
    // c.push(data.val());
    setChats(chats => [...chats,data.val()]);
    console.log(data.val());
  })
},[])

  const sendChat = () =>{
    const chatRef = push(chatListRef);
    set(chatRef, {
      name,message:msg
    });
    // const c = [...chats];
    // c.push({name,message:msg});
    // setChats(c);
    setMsg('')
  }

  return (
    <div>
      {name?null:<div>
        <input type="text"placeholder="Enter your name"
        onBlur={e=>setName(e.target.value)} />
      </div>}
      {name ? <div>
      <h1>User:{name}</h1>
      <div className="chat-container">
        {chats.map(c=><div className={`container ${c.name===name ? 'me': ''}`} key={c.name}>
          <p className="chatbox">
            <strong>{c.name}:</strong>
            <span>{c.message}</span>
          </p>
        </div>)}
      </div>
      </div> : null}
      <div className="btm">
        <input type="text" 
        value={msg}
        onInput={e=>setMsg(e.target.value)}
        placeholder="Enter Message" />
        <button onClick={e=>sendChat()} >Send</button>
      </div>
    </div>
  );
}

export default App;
