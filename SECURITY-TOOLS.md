# Security Tools Setup Guide

## SonarQube (via Docker)

Start SonarQube locally (requires Docker Desktop running):

```bash
docker-compose up -d
```

Access at: http://localhost:9000  
Default credentials: `admin` / `admin`

---

## OWASP ZAP

Already installed. Launch from Start Menu or run:
```bash
zap.bat -quickurl http://localhost:3001
```

---

## Snyk

```bash
# Authenticate (one time)
snyk auth

# Scan dependencies
cd typescript && snyk test
cd ../python && snyk test
cd ../javascript && snyk test

# Scan source code (SAST)
snyk code test
```

---

## Trivy

Binary location: `C:\Tools\trivy\trivy.exe`

```bash
# Scan filesystem for vulnerabilities
C:\Tools\trivy\trivy.exe fs .

# Scan specific directory
C:\Tools\trivy\trivy.exe fs typescript/
C:\Tools\trivy\trivy.exe fs python/
C:\Tools\trivy\trivy.exe fs javascript/

# JSON report
C:\Tools\trivy\trivy.exe fs . --format json --output trivy-report.json
```

---

## Add Trivy to PATH (optional)

```powershell
$env:PATH += ";C:\Tools\trivy"
# Or permanently:
[Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";C:\Tools\trivy", "User")
```
