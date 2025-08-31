import React, { useState } from 'react';

export default function HeroTerminal() {
  const [lines, setLines] = useState<string[]>(["Welcome to the Dev Playground! Type 'help' to begin."]);
  const [input, setInput] = useState('');

  function handleCommand(cmd: string) {
    const trimmed = cmd.trim();
    if (!trimmed) return;
    if (trimmed === 'help') setLines((l) => [...l, "Available: about, projects, skills, contact"]);
    else if (trimmed === 'about') setLines((l) => [...l, JSON.stringify({ name: 'Your Name', role: 'Full-stack dev' }, null, 2)]);
    else setLines((l) => [...l, `Command not found: ${trimmed}`]);
  }

  return (
    <section className="terminal">
      <div className="terminal-screen">
        {lines.map((line, i) => (
          <pre key={i}>{line}</pre>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(input);
          setInput('');
        }}
      >
        <label className="prompt">guest@devplay:~$</label>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </form>
    </section>
  );
}
