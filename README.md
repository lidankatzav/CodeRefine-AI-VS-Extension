# 🚀 CodeRefine AI — AI-Powered Code Review & Optimization

**CodeRefine AI** is a professional VS Code extension that provides AI-powered code analysis and improvement suggestions.  
🔒 **100% Private & Local** — All processing happens on your machine. Your code never leaves your device.

---

## ✨ Features

- 🔍 **Intelligent Code Analysis** — Deep analysis of your codebase with actionable improvement suggestions
- 🏠 **Privacy-First Architecture** — Works with local LLM servers (LM Studio, Ollama, etc.) - no cloud dependencies
- 🎯 **Multi-Language Support** — Optimized for Python, TypeScript, and JavaScript
- ⚡ **Seamless Integration** — One-click access via toolbar, command palette, or context menu
- 📝 **Professional Output** — Detailed suggestions formatted in markdown for easy review
- 🛡️ **Enterprise-Ready** — Perfect for teams that require code privacy and security compliance

---

## 📋 Requirements

- **VS Code** (version 1.105.0 or higher)
- **Local LLM Server** running at `http://127.0.0.1:1234`
  - Compatible with LM Studio, Ollama, or any OpenAI-compatible API server

---

## 🛠️ Installation

### Option 1: Install from VSIX (if available)
1. Open VS Code
2. Go to Extensions view (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Click the `...` menu → "Install from VSIX..."
4. Select the `.vsix` file

### Option 2: Development Installation
1. Clone this repository: `git clone https://github.com/yourusername/coderefine-ai.git`
2. Open the `auto-code-improve` folder in VS Code
3. Run `npm install` to install dependencies
4. Press `F5` to open a new Extension Development Host window
5. The extension will be active in the new window

---

## 🎮 How to Use

### Step 1: Start Your Local LLM Server

**Using LM Studio:**
1. Open LM Studio
2. Load a model
3. Click "Start Server" 
4. Make sure the OpenAI-compatible endpoint is enabled (default port: 1234)

**Using Ollama:**
```bash
ollama serve
# Then run: ollama run <model-name>
```

### Step 2: Use the Extension

**Method 1: Toolbar Button** 🎯
1. Open any code file (Python, TypeScript, or JavaScript)
2. Click the **"✨ CodeRefine: Analyze Code"** button in the editor toolbar

**Method 2: Command Palette** ⌨️
1. Open any code file
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
3. Type "CodeRefine: Analyze Code"
4. Press Enter

**Method 3: Right-Click Context Menu** 🖱️
1. Right-click in your code editor
2. Select "CodeRefine: Analyze Code"

### Step 3: View Suggestions

- Suggestions will appear in a new markdown document opened beside your code
- Review the improvements and apply them manually to your code

---

## ⚙️ Configuration

The extension connects to your local LLM at:
- **Default URL**: `http://127.0.0.1:1234/v1/chat/completions`
- **Model**: `lmstudio-local`

To change the endpoint, modify the URL in `src/extension.ts` (line 39).

---

## 🧪 Supported Languages

- 🐍 **Python** (`.py`)
- 📘 **TypeScript** (`.ts`, `.tsx`)
- 📗 **JavaScript** (`.js`, `.jsx`)

---

## 🏗️ Development

### Building the Extension

```bash
cd auto-code-improve
npm install
npm run compile
```

### Running in Development Mode

1. Open the project in VS Code
2. Press `F5` to launch the Extension Development Host
3. Test the extension in the new window

### Project Structure

```
auto-code-improve/
├── src/
│   └── extension.ts      # Main extension code
├── package.json          # Extension manifest
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

---

## 🐛 Troubleshooting

### "Failed to call local LLM"
- ✅ Make sure your LLM server is running
- ✅ Check that the server is accessible at `http://127.0.0.1:1234`
- ✅ Verify the OpenAI-compatible API endpoint is enabled

### Extension not appearing
- ✅ Reload VS Code window (`Ctrl+R` / `Cmd+R`)
- ✅ Check that the extension is activated (check Output → "CodeRefine")
- ✅ Ensure you're using a supported file type

### No suggestions received
- ✅ Check your LLM server logs for errors
- ✅ Verify the model is loaded and responding
- ✅ Try a different model if available

---

## 📝 License

This project is open source and available for personal and commercial use.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📧 Contact

For questions or support, please open an issue on the repository.

---

**Built for professional developers and teams who prioritize code privacy, security, and quality**

---

## 📦 Repository

**coderefine-ai** — AI-powered code review extension for VS Code
