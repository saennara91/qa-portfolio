Started by user admin
Obtained Jenkinsfile from git https://github.com/saennara91/qa-api-automation-newman.git
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/qa-api-automation-newman
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
using credential 62ff4096-f708-459b-af2d-adc9f31c4d5f
Cloning the remote Git repository
Cloning repository https://github.com/saennara91/qa-api-automation-newman.git
 > git init /var/jenkins_home/workspace/qa-api-automation-newman # timeout=10
Fetching upstream changes from https://github.com/saennara91/qa-api-automation-newman.git
 > git --version # timeout=10
 > git --version # 'git version 2.47.3'
using GIT_ASKPASS to set credentials 
 > git fetch --tags --force --progress -- https://github.com/saennara91/qa-api-automation-newman.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url https://github.com/saennara91/qa-api-automation-newman.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
Avoid second fetch
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
Checking out Revision f0e2d23f4ec1e92152610f5e72c0471cfbd539ef (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f f0e2d23f4ec1e92152610f5e72c0471cfbd539ef # timeout=10
Commit message: "Fix: Add html reporter and fix dynamic username in user tests"
 > git rev-list --no-walk 2c195bd6e81b60ee84b12ada087580ed1c66c283 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Checkout)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
using credential 62ff4096-f708-459b-af2d-adc9f31c4d5f
 > git rev-parse --resolve-git-dir /var/jenkins_home/workspace/qa-api-automation-newman/.git # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/saennara91/qa-api-automation-newman.git # timeout=10
Fetching upstream changes from https://github.com/saennara91/qa-api-automation-newman.git
 > git --version # timeout=10
 > git --version # 'git version 2.47.3'
using GIT_ASKPASS to set credentials 
 > git fetch --tags --force --progress -- https://github.com/saennara91/qa-api-automation-newman.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
Checking out Revision f0e2d23f4ec1e92152610f5e72c0471cfbd539ef (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f f0e2d23f4ec1e92152610f5e72c0471cfbd539ef # timeout=10
Commit message: "Fix: Add html reporter and fix dynamic username in user tests"
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Install Dependencies)
[Pipeline] sh
+ npm install
npm warn deprecated har-validator@5.1.5: this library is no longer supported
npm warn deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm warn deprecated @faker-js/faker@5.5.3: Please update to a newer version.

added 148 packages, and audited 149 packages in 5s

21 packages are looking for funding
  run `npm fund` for details

15 vulnerabilities (5 moderate, 9 high, 1 critical)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Run Newman Tests)
[Pipeline] sh
+ mkdir -p newman-reports
+ newman run collections/PetStoreAPI.postman_collection.json -e environments/qa.postman_environment.json -r cli,html,json,junit --reporter-junit-export newman-reports/results.xml --reporter-json-export newman-reports/results.json --reporter-html-export newman-reports/html/report.html
newman: could not find "html" reporter
  ensure that the reporter is installed in the same directory as newman
  run `npm install newman-reporter-html`

newman

PetStore API Test Collection Original

❏ Smoke Tests
↳ TC-01: Health Check
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  GET https://petstore.swagger.io/v2/pet/1 [200 OK, 421B, 1260ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  Status code is 200
  ✓  Response is valid JSON
  ✓  Response contains pet data
  ✓  Response time is acceptable
  ✓  Response has correct Content-Type header
  ✓  The id field is a number
  ✓  The name field is a string
  ✓  The status field is a string with a valid value
  ✓  The category object has id and name properties
  ✓  The photoUrls field is an array
  ✓  The tags field is an array

↳ TC-02: Find Pet By Status - Available
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  GET https://petstore.swagger.io/v2/pet/findByStatus?status=available [200 OK, 41.42kB, 645ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  Status code is 200
  ✓  Content-Type is application/json
  ✓  Response is an array
  ✓  All pets have available status

❏ Regression Tests
↳ TC-03: Add New Pet
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  POST https://petstore.swagger.io/v2/pet [200 OK, 490B, 331ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  Status code is 200
  ✓  Pet is created successfully
  ✓  Store pet ID for后续 tests

↳ TC-04: Get Pet By ID
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  GET https://petstore.swagger.io/v2/pet/10 [200 OK, 464B, 350ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  Status code is 200
  ✓  Response contains valid pet data
  ✓  Pet name is returned

↳ TC-05: Update Pet
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  PUT https://petstore.swagger.io/v2/pet [200 OK, 497B, 254ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  Status code is 200
  ✓  Pet is updated successfully

↳ TC-06: Delete Pet
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  DELETE https://petstore.swagger.io/v2/pet/10 [200 OK, 370B, 276ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  Status code is 200
  ✓  Pet is deleted successfully
  ✓  Verify pet is deleted

↳ TC-07: Find Pets By Status - Pending
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  GET https://petstore.swagger.io/v2/pet/findByStatus?status=pending [200 OK, 5.04kB, 271ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  Status code is 200
  ✓  Response is an array
  ✓  All pets have pending status

↳ TC-08: Place Order
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  POST https://petstore.swagger.io/v2/store/order [200 OK, 410B, 272ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  Status code is 200
  ✓  Order is placed successfully
  ✓  Store order ID

↳ TC-09: Get Order By ID
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  GET https://petstore.swagger.io/v2/store/order/1 [200 OK, 433B, 256ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  API responds to order request
  ✓  Response has valid structure

↳ TC-10: Delete Order
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  DELETE https://petstore.swagger.io/v2/store/order/1 [200 OK, 369B, 277ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  API responds to delete request
  ✓  Response has valid structure

↳ TC-11: Get Store Inventory
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  GET https://petstore.swagger.io/v2/store/inventory [200 OK, 941B, 281ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  Status code is 200
  ✓  Inventory is returned as object
  ✓  Inventory contains status counts

↳ TC-12: Create User
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  POST https://petstore.swagger.io/v2/user [200 OK, 387B, 361ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  Status code is 200
  ✓  User is created successfully

↳ TC-13: Get User By Username
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  GET https://petstore.swagger.io/v2/user/testuser [200 OK, 505B, 356ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  Status code is 200
  ✓  User details are returned

↳ TC-14: Update User
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  PUT https://petstore.swagger.io/v2/user/testuser [200 OK, 369B, 363ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  Status code is 200
  ✓  User is updated successfully

↳ TC-15: Delete User
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  DELETE https://petstore.swagger.io/v2/user/testuser [200 OK, 376B, 365ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  Status code is 200
  ✓  User is deleted successfully

❏ Negative Tests
↳ TC-16: Get Non-existent Pet
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  GET https://petstore.swagger.io/v2/pet/999999999 [200 OK, 502B, 370ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  API responds to non-existent pet request
  ✓  Response has valid structure

↳ TC-17: Invalid Pet ID Format
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  GET https://petstore.swagger.io/v2/pet/invalid [404 Not Found, 437B, 372ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  Handles invalid ID format

↳ TC-18: Create User Without Required Fields
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  POST https://petstore.swagger.io/v2/user [200 OK, 369B, 365ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  API responds to incomplete user data

↳ TC-19: Get Non-existent Order
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  GET https://petstore.swagger.io/v2/store/order/999999999 [404 Not Found, 386B, 366ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  API responds to non-existent order request

↳ TC-20: Delete Non-existent User
  ┌
  │ 'PetStore API Test Collection started'
  │ 'Environment: QA Environment'
  └
  DELETE https://petstore.swagger.io/v2/user/nonexistentuser12345 [404 Not Found, 292B, 272ms]
  ┌
  │ 'Test completed for: undefined'
  └
  ✓  API responds to deletion request

┌─────────────────────────┬─────────────────────┬─────────────────────┐
│                         │            executed │              failed │
├─────────────────────────┼─────────────────────┼─────────────────────┤
│              iterations │                   1 │                   0 │
├─────────────────────────┼─────────────────────┼─────────────────────┤
│                requests │                  20 │                   0 │
├─────────────────────────┼─────────────────────┼─────────────────────┤
│            test-scripts │                  40 │                   0 │
├─────────────────────────┼─────────────────────┼─────────────────────┤
│      prerequest-scripts │                  22 │                   0 │
├─────────────────────────┼─────────────────────┼─────────────────────┤
│              assertions │                  53 │                   0 │
├─────────────────────────┴─────────────────────┴─────────────────────┤
│ total run duration: 8.5s                                            │
├─────────────────────────────────────────────────────────────────────┤
│ total data received: 47.97kB (approx)                               │
├─────────────────────────────────────────────────────────────────────┤
│ average response time: 383ms [min: 254ms, max: 1260ms, s.d.: 217ms] │
└─────────────────────────────────────────────────────────────────────┘
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Publish Reports)
[Pipeline] junit
Recording test results
No test report files were found. Configuration error?
None of the test reports contained any result
[Checks API] No suitable checks publisher found.
[Pipeline] publishHTML
[htmlpublisher] Archiving HTML reports...
***************
*** WARNING ***
***************
You appear to be relying on the HTML Publisher plugin to resolve variables in a Pipeline build. This is not considered best practice and will be removed in a future release. Please use a Groovy mechanism to evaluate the string.
[htmlpublisher] Archiving at BUILD level /var/jenkins_home/workspace/qa-api-automation-newman/${REPORT_DIR} to Newman_20HTML_20Report
ERROR: Specified HTML directory '/var/jenkins_home/workspace/qa-api-automation-newman/${REPORT_DIR}' does not exist.
[htmlpublisher] Copying recursive using current thread
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Declarative: Post Actions)
[Pipeline] cleanWs
[WS-CLEANUP] Deleting project workspace...
[WS-CLEANUP] Deferred wipeout is used...
[WS-CLEANUP] done
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
