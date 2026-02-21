# IDS339 DevOps — Polyglot Dummy Project

[![CI Pipeline](https://github.com/YOUR_USERNAME/IDS339-DevOps/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_USERNAME/IDS339-DevOps/actions/workflows/ci.yml)

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Source of truth / integration |
| `Prod` | Production environment |
| `Stagg` | Staging environment |
| `Qa` | Quality Assurance / Testing |
| `Dev` | Active development |

## Project Structure

```
IDS339-DevOps/
├── .github/workflows/ci.yml   # GitHub Actions CI
├── typescript/                # TypeScript Express API (port 3001)
│   ├── src/index.ts
│   ├── package.json
│   └── tsconfig.json
├── python/                    # Python Flask API (port 5001)
│   ├── app.py
│   └── requirements.txt
└── javascript/                # JavaScript Express API (port 3002)
    ├── src/index.js
    └── package.json
```

## Quick Start

### TypeScript Service
```bash
cd typescript
npm install
npm run dev        # Development
npm run build      # Compile
npm start          # Production
```

### Python Service
```bash
cd python
pip install -r requirements.txt
python app.py
```

### JavaScript Service
```bash
cd javascript
npm install
npm run dev        # Development with hot reload
npm start          # Production
```

## API Endpoints (all services)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/api/items` | GET | List all items |
| `/api/items` | POST | Create item (`{ "name": "..." }`) |
| `/api/greet/:name` | GET | Greeting endpoint |

## Security Tools

| Tool | Purpose | Access |
|------|---------|--------|
| SonarQube | Static code analysis | http://localhost:9000 |
| OWASP ZAP | Dynamic security testing | http://localhost:8080 |
| Snyk | Dependency vulnerability scanning | `snyk test` |
| Trivy | Container/FS vulnerability scanning | `trivy fs .` |
