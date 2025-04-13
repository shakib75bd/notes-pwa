"use client";

import { useNotes, Note } from "../context/NotesContext";

function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleString();
}

function NoteItem({ note, onDelete }: { note: Note; onDelete: () => void }) {
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-start">
        <p className="text-gray-800 whitespace-pre-wrap">{note.content}</p>
        <button
          onClick={onDelete}
          className="ml-2 text-red-500 hover:text-red-700"
          aria-label="Delete note"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="mt-2 text-xs text-gray-500">{formatDate(note.createdAt)}</p>
    </div>
  );
}

export default function NotesList() {
  const { notes, deleteNote } = useNotes();

  return (
    <div>
      {notes.length === 0 ? (
        <p className="text-center text-gray-500">
          No notes yet. Add your first note!
        </p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={() => deleteNote(note.id)}
          />
        ))
      )}
    </div>
  );
}
