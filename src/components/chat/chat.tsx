"use client";

import { useChat } from "ai/react";
import styles from "./Chat.module.sass";

export const Chat = (props: {agent: string}) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: '1',
        role: 'system',
        content: props.agent
      }
    ]
  });

  return (
    <div className={styles.Chat}>
      <div className={styles.Chat__header}>Chatea con Gemini</div>
      <div className={styles.Chat__window}>
        {messages
        .filter(m => m.role !== 'system')
        .map(m => (
          <ul key={m.id}>
            {m.role === "user" ? "Usuario: " : "Gemini: "}
            {m.content}
          </ul>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.Chat__form}>
        <input
          value={input}
          placeholder="Escribe aqui..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};
