import * as vscode from "vscode";
import fetch from "node-fetch";

// --- Types for LLM response ---
interface LLMMessage {
  role: string;
  content: string;
}

interface LLMChoice {
  message: LLMMessage;
}

interface LLMResponse {
  choices: LLMChoice[];
}

export function activate(context: vscode.ExtensionContext) {
  console.log("Auto Code Improve active!");

  const disposable = vscode.commands.registerCommand(
    "auto-code-improve.suggestImprovements",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("No active editor.");
        return;
      }

      const code = editor.document.getText();

      await vscode.window.withProgress(
        {
          location: vscode.ProgressLocation.Notification,
          title: "Contacting Local LLM…",
        },
        async () => {
          try {
            const response = await fetch("http://127.0.0.1:1234/v1/chat/completions", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                model: "lmstudio-local",
                messages: [
                  {
                    role: "user",
                    content: `Suggest improvements for this code:\n\n${code}`,
                  },
                ],
              }),
            });

            const reply = (await response.json()) as LLMResponse;

            const improved =
              reply.choices?.[0]?.message?.content ||
              "No suggestions received.";

            vscode.window.showInformationMessage("Improvements received!");

            const doc = await vscode.workspace.openTextDocument({
              content: improved,
              language: "markdown",
            });
            vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside);
          } catch (err) {
            vscode.window.showErrorMessage("Failed to call local LLM.");
            console.error(err);
          }
        }
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
