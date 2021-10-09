import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand("vsmail.helloWorld", () => {
            vscode.window.showInformationMessage("Hello World from VSMail!");
        })
    );
}

export function deactivate() {}
