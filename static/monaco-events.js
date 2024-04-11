require.config({ paths: { vs: "./vs" } });

require(["vs/editor/editor.main"], () => {
  window.monaco_editor = monaco.editor.create(
    document.getElementById("container"),
    {
      value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join(
        "\n",
      ),
      language: "javascript",
    },
  );
});
