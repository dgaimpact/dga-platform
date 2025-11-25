const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { marked } = require('marked');

const app = express();
const PORT = 5000;

// Serve static assets
app.use('/static', express.static('public'));

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  mangle: false
});

// Helper function to recursively get all markdown files
async function getMarkdownFiles(dir = '.', baseDir = '.') {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);
    
    // Skip node_modules, .git, and other hidden directories
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'public') {
      continue;
    }
    
    if (entry.isDirectory()) {
      const subFiles = await getMarkdownFiles(fullPath, baseDir);
      files.push(...subFiles);
    } else if (entry.name.endsWith('.md')) {
      files.push(relativePath);
    }
  }
  
  return files.sort();
}

// Helper to build tree structure
function buildTree(files) {
  const tree = {};
  
  files.forEach(file => {
    const parts = file.split(path.sep);
    let current = tree;
    
    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        // It's a file
        if (!current._files) current._files = [];
        current._files.push({ name: part, path: file });
      } else {
        // It's a directory
        if (!current[part]) current[part] = {};
        current = current[part];
      }
    });
  });
  
  return tree;
}

// Helper to render tree HTML
function renderTree(tree, level = 0) {
  let html = '<ul class="' + (level === 0 ? 'tree-root' : 'tree-branch') + '">';
  
  // Render directories first
  const dirs = Object.keys(tree).filter(k => k !== '_files').sort();
  dirs.forEach(dir => {
    html += `<li class="tree-dir">
      <details ${level === 0 ? 'open' : ''}>
        <summary>📁 ${dir}</summary>
        ${renderTree(tree[dir], level + 1)}
      </details>
    </li>`;
  });
  
  // Then render files
  if (tree._files) {
    tree._files.forEach(file => {
      html += `<li class="tree-file">
        <a href="/view?file=${encodeURIComponent(file.path)}">📄 ${file.name}</a>
      </li>`;
    });
  }
  
  html += '</ul>';
  return html;
}

// Main page with navigation
app.get('/', async (req, res) => {
  try {
    const files = await getMarkdownFiles('.');
    const tree = buildTree(files);
    
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DGA Platform Knowledge Base</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      background: #f5f5f5;
      color: #333;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 2rem;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .header h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    .header p {
      opacity: 0.9;
      font-size: 1.1rem;
    }
    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 2rem;
      display: grid;
      grid-template-columns: 350px 1fr;
      gap: 2rem;
    }
    .sidebar {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      height: fit-content;
      position: sticky;
      top: 2rem;
      max-height: calc(100vh - 4rem);
      overflow-y: auto;
    }
    .sidebar h2 {
      margin-bottom: 1rem;
      color: #667eea;
      font-size: 1.3rem;
    }
    .content {
      background: white;
      border-radius: 8px;
      padding: 2.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      min-height: 500px;
    }
    .tree-root, .tree-branch {
      list-style: none;
      margin-left: 0;
    }
    .tree-branch {
      margin-left: 1.2rem;
    }
    .tree-dir, .tree-file {
      margin: 0.3rem 0;
    }
    details summary {
      cursor: pointer;
      padding: 0.4rem;
      border-radius: 4px;
      user-select: none;
      font-weight: 500;
    }
    details summary:hover {
      background: #f0f0f0;
    }
    .tree-file a {
      display: block;
      padding: 0.4rem;
      text-decoration: none;
      color: #333;
      border-radius: 4px;
      transition: all 0.2s;
    }
    .tree-file a:hover {
      background: #667eea;
      color: white;
    }
    .welcome {
      text-align: center;
      padding: 3rem;
    }
    .welcome h2 {
      color: #667eea;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .welcome p {
      color: #666;
      font-size: 1.1rem;
      line-height: 1.6;
    }
    @media (max-width: 900px) {
      .container {
        grid-template-columns: 1fr;
      }
      .sidebar {
        position: static;
        max-height: none;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>📚 Digital Growth Accelerator (DGA)</h1>
    <p>Platform Knowledge Base — Version-Controlled Architecture</p>
  </div>
  <div class="container">
    <div class="sidebar">
      <h2>Navigation</h2>
      ${renderTree(tree)}
    </div>
    <div class="content">
      <div class="welcome">
        <h2>Welcome to the DGA Knowledge Base</h2>
        <p>Select a document from the navigation menu to begin exploring the frameworks, systems, standards, and operational workflows that power the Digital Growth Accelerator platform.</p>
        <p style="margin-top: 2rem;">This repository serves as the single source of truth for all DGA components, ensuring documentation is auditable, upgradeable, and future-proof.</p>
      </div>
    </div>
  </div>
</body>
</html>`;
    
    res.send(html);
  } catch (error) {
    res.status(500).send('Error loading documentation: ' + error.message);
  }
});

// View specific markdown file
app.get('/view', async (req, res) => {
  try {
    const filePath = req.query.file;
    
    if (!filePath || !filePath.endsWith('.md')) {
      return res.status(400).send('Invalid file path');
    }
    
    // Security: prevent directory traversal
    const safePath = path.normalize(filePath).replace(/^(\.\.(\/|\\|$))+/, '');
    const fullPath = path.join(process.cwd(), safePath);
    
    // Check if file exists and is within project directory
    if (!fullPath.startsWith(process.cwd())) {
      return res.status(403).send('Access denied');
    }
    
    const content = await fs.readFile(fullPath, 'utf-8');
    const htmlContent = marked(content);
    const files = await getMarkdownFiles('.');
    const tree = buildTree(files);
    
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${path.basename(filePath)} - DGA Knowledge Base</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      background: #f5f5f5;
      color: #333;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1.5rem 2rem;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .header h1 {
      font-size: 1.5rem;
    }
    .header a {
      color: white;
      text-decoration: none;
      opacity: 0.9;
      font-size: 0.9rem;
      display: inline-block;
      margin-top: 0.5rem;
    }
    .header a:hover {
      opacity: 1;
      text-decoration: underline;
    }
    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 2rem;
      display: grid;
      grid-template-columns: 350px 1fr;
      gap: 2rem;
    }
    .sidebar {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      height: fit-content;
      position: sticky;
      top: 2rem;
      max-height: calc(100vh - 4rem);
      overflow-y: auto;
    }
    .sidebar h2 {
      margin-bottom: 1rem;
      color: #667eea;
      font-size: 1.3rem;
    }
    .content {
      background: white;
      border-radius: 8px;
      padding: 2.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      line-height: 1.7;
    }
    .breadcrumb {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e0e0e0;
    }
    .tree-root, .tree-branch {
      list-style: none;
      margin-left: 0;
    }
    .tree-branch {
      margin-left: 1.2rem;
    }
    .tree-dir, .tree-file {
      margin: 0.3rem 0;
    }
    details summary {
      cursor: pointer;
      padding: 0.4rem;
      border-radius: 4px;
      user-select: none;
      font-weight: 500;
    }
    details summary:hover {
      background: #f0f0f0;
    }
    .tree-file a {
      display: block;
      padding: 0.4rem;
      text-decoration: none;
      color: #333;
      border-radius: 4px;
      transition: all 0.2s;
    }
    .tree-file a:hover, .tree-file a.active {
      background: #667eea;
      color: white;
    }
    .markdown-content h1 {
      color: #667eea;
      margin: 1.5rem 0 1rem;
      font-size: 2rem;
    }
    .markdown-content h2 {
      color: #764ba2;
      margin: 1.5rem 0 0.8rem;
      font-size: 1.6rem;
      border-bottom: 2px solid #f0f0f0;
      padding-bottom: 0.5rem;
    }
    .markdown-content h3 {
      color: #555;
      margin: 1.2rem 0 0.6rem;
      font-size: 1.3rem;
    }
    .markdown-content p {
      margin: 0.8rem 0;
    }
    .markdown-content ul, .markdown-content ol {
      margin: 0.8rem 0;
      padding-left: 2rem;
    }
    .markdown-content li {
      margin: 0.4rem 0;
    }
    .markdown-content code {
      background: #f5f5f5;
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
    }
    .markdown-content pre {
      background: #f5f5f5;
      padding: 1rem;
      border-radius: 5px;
      overflow-x: auto;
      margin: 1rem 0;
    }
    .markdown-content pre code {
      background: none;
      padding: 0;
    }
    .markdown-content blockquote {
      border-left: 4px solid #667eea;
      padding-left: 1rem;
      margin: 1rem 0;
      color: #666;
      font-style: italic;
    }
    .markdown-content table {
      border-collapse: collapse;
      width: 100%;
      margin: 1rem 0;
    }
    .markdown-content th, .markdown-content td {
      border: 1px solid #ddd;
      padding: 0.8rem;
      text-align: left;
    }
    .markdown-content th {
      background: #667eea;
      color: white;
    }
    .markdown-content hr {
      border: none;
      border-top: 2px solid #e0e0e0;
      margin: 2rem 0;
    }
    .markdown-content a {
      color: #667eea;
      text-decoration: none;
    }
    .markdown-content a:hover {
      text-decoration: underline;
    }
    @media (max-width: 900px) {
      .container {
        grid-template-columns: 1fr;
      }
      .sidebar {
        position: static;
        max-height: none;
      }
    }
  </style>
  <script>
    window.addEventListener('DOMContentLoaded', function() {
      const currentFile = "${filePath}";
      const links = document.querySelectorAll('.tree-file a');
      links.forEach(link => {
        if (decodeURIComponent(link.getAttribute('href')).includes(currentFile)) {
          link.classList.add('active');
        }
      });
    });
  </script>
</head>
<body>
  <div class="header">
    <h1>📚 DGA Platform Knowledge Base</h1>
    <a href="/">← Back to Home</a>
  </div>
  <div class="container">
    <div class="sidebar">
      <h2>Navigation</h2>
      ${renderTree(tree)}
    </div>
    <div class="content">
      <div class="breadcrumb">📍 ${filePath}</div>
      <div class="markdown-content">
        ${htmlContent}
      </div>
    </div>
  </div>
</body>
</html>`;
    
    res.send(html);
  } catch (error) {
    res.status(500).send('Error loading file: ' + error.message);
  }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`DGA Documentation Server running on http://0.0.0.0:${PORT}`);
});
