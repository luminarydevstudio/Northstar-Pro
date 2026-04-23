const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const root = process.cwd();
const port = Number(process.env.PORT || 5500);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

function safeJoin(requestPath) {
  const decoded = decodeURIComponent(requestPath.split("?")[0]);
  const target = path.normalize(path.join(root, decoded));
  if (!target.startsWith(root)) {
    return null;
  }
  return target;
}

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname || "/";
  let filePath = safeJoin(pathname);

  if (!filePath) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  if (filePath.endsWith(path.sep)) {
    filePath = path.join(filePath, "index.html");
  }

  fs.stat(filePath, (err, st) => {
    if (err || !st.isFile()) {
      const idx = path.join(root, "index.html");
      fs.readFile(idx, (e2, data) => {
        if (e2) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = types[ext] || "application/octet-stream";

    fs.readFile(filePath, (e3, data) => {
      if (e3) {
        res.writeHead(500);
        res.end("Server error");
        return;
      }

      res.writeHead(200, {
        "Content-Type": contentType,
        "Cache-Control": "no-cache",
      });
      res.end(data);
    });
  });
});

server.listen(port, () => {
  console.log(`Local server running: http://localhost:${port}/`);
  console.log(`Serving from: ${root}`);
});
