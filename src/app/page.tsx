import { NotesProvider } from "./context/NotesContext";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NoteList";

export default function Home() {
  return (
    <NotesProvider>
      <main className="container mx-auto p-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Notes PWA</h1>

        <div className="mb-8">
          <NoteForm />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Your Notes</h2>
          <NotesList />
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            This app works offline! Try adding notes with no internet
            connection.
          </p>
        </div>
      </main>
    </NotesProvider>
  );
}
