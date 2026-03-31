# Newman Configuration Options

## Basic Options

| Option | Description | Example |
|--------|-------------|---------|
| `-e, --environment <path>` | Path to the environment file | `-e environments/qa.postman_environment.json` |
| `-g, --globals <path>` | Path to global variables | `-g globals.json` |
| `-d, --iteration-data <path>` | Path to CSV data file | `-d test-data/pet-data.csv` |
| `-n, --iteration-count <number>` | Number of iterations | `-n 5` |
| `--folder <name>` | Run specific folder | `--folder "Smoke Tests"` |

## Reporters

| Option | Description |
|--------|-------------|
| `-r cli` | CLI output (default) |
| `-r json` | JSON report |
| `-r html` | HTML report |
| `-r junit` | JUnit XML report |
| `-r htmlextreme` | Enhanced HTML report |

## Reporter Export Options

```bash
--reporter-json-export <path>     # Export JSON report
--reporter-html-export <path>     # Export HTML report
--reporter-junit-export <path>    # Export JUnit report
```

## Timing Options

| Option | Description | Default |
|--------|-------------|---------|
| `--timeout <ms>` | Request timeout | 30000 |
| `--timeout-request <ms>` | Request timeout | 30000 |
| `--timeout-script <ms>` | Script timeout | 5000 |
| `--delay-request <ms>` | Delay between requests | 0 |

## Other Options

| Option | Description |
|--------|-------------|
| `--insecure` | Allow insecure connections |
| `--ssl-client-cert` | SSL client certificate path |
| `--ignore-redirects` | Do not follow redirects |
| `--silent` | Suppress terminal output |
| `--bail` | Stop on first test failure |
| `--color off` | Disable colored output |
| `--working-dir <path>` | Working directory |

## Examples

### Basic Run
```bash
newman run collection.json
```

### With Environment
```bash
newman run collection.json -e environment.json
```

### Data-Driven Testing
```bash
newman run collection.json -d data.csv -n 10
```

### HTML Report with Export
```bash
newman run collection.json -r html --reporter-html-export report.html
```

### Run Specific Folder
```bash
newman run collection.json --folder "Smoke Tests"
```

### With Timing Options
```bash
newman run collection.json --timeout 60000 --delay-request 1000
```

### CI/CD Pipeline
```bash
newman run collection.json \
  -e environment.json \
  -r cli,json,html \
  --reporter-json-export reports/json-report.json \
  --reporter-html-export reports/html-report.html \
  --timeout-request 30000 \
  --timeout-global 60000
```

## Exit Codes

| Code | Description |
|------|-------------|
| 0 | All tests passed |
| 1 | One or more tests failed |
| 2 | Collection not found |
| 4 | Error in Newman itself |

## Environment Variables in Newman

Access collection variables:
```bash
newman run collection.json --variable "baseUrl=https://api.example.com"
```

Multiple variables:
```bash
newman run collection.json \
  --variable "baseUrl=https://api.example.com" \
  --variable "apiKey=secret123"
```
