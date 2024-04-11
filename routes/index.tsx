import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div>
      <h2>Monaco Editor Sample</h2>
      <div
        id="container"
        style="width: 800px; height: 600px; border: 1px solid grey"
      >
      </div>

      <script src="./vs/loader.js"></script>
      <script>
        {`require.config({ paths: { vs: './vs' } });

        require(['vs/editor/editor.main'], function () {
          var editor = monaco.editor.create(document.getElementById('container'), {
            value: ['function x() {', '\\tconsole.log("Hello world!");', '}'].join('\\n'),
            language: 'javascript'
          });
        });`}
      </script>
    </div>
  );
}
