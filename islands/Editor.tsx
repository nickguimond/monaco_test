import { Button } from "../components/Button.tsx";

export default function Counter() {
  return (
    <div>
      <Button
        onClick={() => {
          // @ts-ignore
          const editor = globalThis.monaco_editor as monaco;

          const code = editor.getValue();
          console.log(code);
        }}
      >
        console log the code
      </Button>
    </div>
  );
}
