import Editor from "../islands/Editor.tsx";

export default function Home() {
  return (
    <div>
      <h2>Monaco Editor Sample</h2>
      <div
        id="container"
        style="width: 800px; height: 600px; border: 1px solid grey"
      >
      </div>

      <script src="./vs/loader.js"></script>
      <script src="./monaco-events.js"></script>

      <Editor />
    </div>
  );
}
