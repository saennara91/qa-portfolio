Started by user admin
Obtained Jenkinsfile from git https://github.com/saennara91/qa-ui-automation-cypress.git
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/UI-TEST-DEMO
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
using credential 9ba74959-2fe0-403f-8902-2f1f57f86f4b
Cloning the remote Git repository
Cloning repository https://github.com/saennara91/qa-ui-automation-cypress.git
 > git init /var/jenkins_home/workspace/UI-TEST-DEMO # timeout=10
Fetching upstream changes from https://github.com/saennara91/qa-ui-automation-cypress.git
 > git --version # timeout=10
 > git --version # 'git version 2.47.3'
using GIT_ASKPASS to set credentials 
 > git fetch --tags --force --progress -- https://github.com/saennara91/qa-ui-automation-cypress.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url https://github.com/saennara91/qa-ui-automation-cypress.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
Avoid second fetch
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
Checking out Revision 68d8b0cb2ab3b8e70c15dd6e9447fd649ebbc220 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 68d8b0cb2ab3b8e70c15dd6e9447fd649ebbc220 # timeout=10
Commit message: "Modified Jenkinsfile"
First time build. Skipping changelog.
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Tool Install)
[Pipeline] tool
Unpacking https://nodejs.org/dist/v18.19.0/node-v18.19.0-linux-arm64.tar.gz to /var/jenkins_home/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs on Jenkins
[Pipeline] envVarsForTool
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Checkout)
[Pipeline] tool
[Pipeline] envVarsForTool
[Pipeline] withEnv
[Pipeline] {
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
using credential 9ba74959-2fe0-403f-8902-2f1f57f86f4b
 > git rev-parse --resolve-git-dir /var/jenkins_home/workspace/UI-TEST-DEMO/.git # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/saennara91/qa-ui-automation-cypress.git # timeout=10
Fetching upstream changes from https://github.com/saennara91/qa-ui-automation-cypress.git
 > git --version # timeout=10
 > git --version # 'git version 2.47.3'
using GIT_ASKPASS to set credentials 
 > git fetch --tags --force --progress -- https://github.com/saennara91/qa-ui-automation-cypress.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
Checking out Revision 68d8b0cb2ab3b8e70c15dd6e9447fd649ebbc220 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 68d8b0cb2ab3b8e70c15dd6e9447fd649ebbc220 # timeout=10
Commit message: "Modified Jenkinsfile"
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Cache Dependencies)
[Pipeline] tool
[Pipeline] envVarsForTool
[Pipeline] withEnv
[Pipeline] {
[Pipeline] script
[Pipeline] {
[Pipeline] fileExists
[Pipeline] echo
Installing dependencies...
[Pipeline] sh
+ npm ci
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm WARN deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm WARN deprecated glob@7.2.3: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
npm WARN deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
npm WARN deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 255 packages, and audited 256 packages in 53s

62 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
[Pipeline] fileExists
[Pipeline] echo
Installing Cypress binary...
[Pipeline] sh
+ npx cypress install
Note: Overriding Cypress cache directory to: ~/.cache/Cypress

      Previous installs of Cypress may not be found.


Cypress 13.17.0 is installed in /root/.cache/Cypress/13.17.0

Skipping installation:

  Pass the --force option if you'd like to reinstall anyway.
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Check NodeJS)
[Pipeline] tool
[Pipeline] envVarsForTool
[Pipeline] withEnv
[Pipeline] {
[Pipeline] sh
+ node -v
v18.19.0
+ npm -v
10.2.3
+ npx cypress --version
Cypress package version: 13.17.0
Cypress binary version: 13.17.0
Electron version: 27.3.10
Bundled Node version: 18.17.1
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Run Cypress E2E)
[Pipeline] tool
[Pipeline] envVarsForTool
[Pipeline] withEnv
[Pipeline] {
[Pipeline] echo
Automate Test Start...
[Pipeline] sh
+ npm ci
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
npm WARN deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm WARN deprecated glob@7.2.3: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
npm WARN deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm WARN deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 255 packages, and audited 256 packages in 2s

62 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
[Pipeline] sh
+ npm run test

> qa-ui-automation-cypress@1.0.0 test
> cypress run

It looks like this is your first time using Cypress: 13.17.0

[STARTED] Task without title.
[SUCCESS] Task without title.

Opening Cypress...

DevTools listening on ws://127.0.0.1:40687/devtools/browser/5e206767-518a-4c0d-acde-d06c260f6d29

[90m====================================================================================================[39m

[0m  ([4m[1mRun Starting[22m[24m)[0m

tput: No value for $TERM and no -T specified
[90m  ┌[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┐[39m
[90m  │[39m [90mCypress:[39m        13.17.0                                                                        [90m│[39m
[90m  │[39m [90mBrowser:[39m        Electron 118 [90m(headless)[39m                                                        [90m│[39m
[90m  │[39m [90mNode Version:[39m   [0mv18.19.0 [90m(/var/jenkins_home/tools/jenkins.plugins.nodejs.tools.NodeJSInst[0m      [90m│[39m
[90m  │[39m                 [0mallation/nodejs/bin/node)[39m[0m                                                      [90m│[39m
[90m  │[39m [90mSpecs:[39m          [0m4 found (admin.cy.js, dashboard.cy.js, leave.cy.js, login.cy.js)[0m               [90m│[39m
[90m  │[39m [90mSearched:[39m       [0mcypress/e2e/**/*.cy.js[0m                                                         [90m│[39m
[90m  └[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┘[39m


[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m
                                                                                                    
  Running:  [90madmin.cy.js[39m                                                                     [90m(1 of 4)[39m

[0m[0m
[0m  Admin Module - UI Automation[0m
  [32m  ✓[0m[90m TC-01-Add User: Create a new ESS user[0m[33m (17102ms)[0m
  [32m  ✓[0m[90m TC-02-Duplicate Username: Negative test for duplicate[0m[33m (11657ms)[0m
  [32m  ✓[0m[90m TC-03-Organization General Info: Verify fields visible[0m[33m (10279ms)[0m
  [32m  ✓[0m[90m TC-04-Add Employment Status: Create new status[0m[33m (12505ms)[0m
  [32m  ✓[0m[90m TC-05-Search User by Role: Filter by Admin role[0m[90m (9360ms)[0m


[92m [0m[32m 5 passing[0m[90m (1m)[0m


[32m  ([4m[1mResults[22m[24m)[39m

[90m  ┌[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┐[39m
[90m  │[39m [90mTests:[39m        [32m5[39m                                                                                [90m│[39m
[90m  │[39m [90mPassing:[39m      [32m5[39m                                                                                [90m│[39m
[90m  │[39m [90mFailing:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mPending:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mSkipped:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mScreenshots:[39m  [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mVideo:[39m        [32mfalse[39m                                                                            [90m│[39m
[90m  │[39m [90mDuration:[39m     [32m1 minute, 1 second[39m                                                               [90m│[39m
[90m  │[39m [90mSpec Ran:[39m     [32m[32madmin.cy.js[32m[39m                                                                      [90m│[39m
[90m  └[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┘[39m


[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m
                                                                                                    
  Running:  [90mdashboard.cy.js[39m                                                                 [90m(2 of 4)[39m

[0m[0m
[0m  Dashboard Module - UI Automation[0m
  [32m  ✓[0m[90m TC-01-Widget Presence: Verify all core widgets are visible[0m[33m (11012ms)[0m
  [32m  ✓[0m[90m TC-02-Leave Today Display: Validate the section loads[0m[90m (9747ms)[0m
  [32m  ✓[0m[90m TC-03-Quick Launch Links: Verify Assign Leave navigation[0m[33m (13933ms)[0m
  [32m  ✓[0m[90m TC-04-Pending Self Review: Check the section exists[0m[90m (8689ms)[0m


[92m [0m[32m 4 passing[0m[90m (44s)[0m


[32m  ([4m[1mResults[22m[24m)[39m

[90m  ┌[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┐[39m
[90m  │[39m [90mTests:[39m        [32m4[39m                                                                                [90m│[39m
[90m  │[39m [90mPassing:[39m      [32m4[39m                                                                                [90m│[39m
[90m  │[39m [90mFailing:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mPending:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mSkipped:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mScreenshots:[39m  [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mVideo:[39m        [32mfalse[39m                                                                            [90m│[39m
[90m  │[39m [90mDuration:[39m     [32m43 seconds[39m                                                                       [90m│[39m
[90m  │[39m [90mSpec Ran:[39m     [32m[32mdashboard.cy.js[32m[39m                                                                  [90m│[39m
[90m  └[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┘[39m


[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m
                                                                                                    
  Running:  [90mleave.cy.js[39m                                                                     [90m(3 of 4)[39m

[0m[0m
[0m  Leave Module - UI Automation[0m
Warning: EGL_EXT_create_context_robustness must be supported
    at Create (../../third_party/dawn/src/dawn/native/opengl/ContextEGL.cpp:66)
    at Create (../../third_party/dawn/src/dawn/native/opengl/PhysicalDeviceGL.cpp:97)

  [32m  ✓[0m[90m TC-01-View Leave List: Search leave records[0m[33m (13140ms)[0m
  [32m  ✓[0m[90m TC-02-Assign Leave: Navigate to assign leave page[0m[90m (9668ms)[0m
  [32m  ✓[0m[90m TC-03-Leave Comments: Test leave assignment with comment[0m[33m (10222ms)[0m
  [32m  ✓[0m[90m TC-04-Invalid Date Range: Negative test for date validation[0m[33m (12156ms)[0m


[92m [0m[32m 4 passing[0m[90m (45s)[0m


[32m  ([4m[1mResults[22m[24m)[39m

[90m  ┌[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┐[39m
[90m  │[39m [90mTests:[39m        [32m4[39m                                                                                [90m│[39m
[90m  │[39m [90mPassing:[39m      [32m4[39m                                                                                [90m│[39m
[90m  │[39m [90mFailing:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mPending:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mSkipped:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mScreenshots:[39m  [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mVideo:[39m        [32mfalse[39m                                                                            [90m│[39m
[90m  │[39m [90mDuration:[39m     [32m45 seconds[39m                                                                       [90m│[39m
[90m  │[39m [90mSpec Ran:[39m     [32m[32mleave.cy.js[32m[39m                                                                      [90m│[39m
[90m  └[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┘[39m


[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m
                                                                                                    
  Running:  [90mlogin.cy.js[39m                                                                     [90m(4 of 4)[39m

[0m[0m
[0m  Login Module - UI Automation[0m
  [32m  ✓[0m[90m TC-01-Success Login: Authenticate with valid credentials and verify dashboard redirection[0m[33m (11282ms)[0m
  [32m  ✓[0m[90m TC-02-Invalid Password: Attempt login with correct username but wrong password[0m[90m (9747ms)[0m
  [32m  ✓[0m[90m TC-03-Invalid Username: Attempt login with non-existent username[0m[90m (9692ms)[0m
  [32m  ✓[0m[90m TC-04-Empty Credentials: Verify login form elements[0m[90m (3391ms)[0m
  [32m  ✓[0m[90m TC-05-Logout Functionality: Log in successfully and then log out to verify session termination[0m[33m (18927ms)[0m


[92m [0m[32m 5 passing[0m[90m (53s)[0m


[32m  ([4m[1mResults[22m[24m)[39m

[90m  ┌[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┐[39m
[90m  │[39m [90mTests:[39m        [32m5[39m                                                                                [90m│[39m
[90m  │[39m [90mPassing:[39m      [32m5[39m                                                                                [90m│[39m
[90m  │[39m [90mFailing:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mPending:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mSkipped:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mScreenshots:[39m  [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mVideo:[39m        [32mfalse[39m                                                                            [90m│[39m
[90m  │[39m [90mDuration:[39m     [32m53 seconds[39m                                                                       [90m│[39m
[90m  │[39m [90mSpec Ran:[39m     [32m[32mlogin.cy.js[32m[39m                                                                      [90m│[39m
[90m  └[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┘[39m


[90m====================================================================================================[39m

[0m  ([4m[1mRun Finished[22m[24m)[0m
tput: No value for $TERM and no -T specified


[90m   [39m    [90mSpec[39m                                              [90mTests[39m  [90mPassing[39m  [90mFailing[39m  [90mPending[39m  [90mSkipped[39m [90m [39m
[90m  ┌[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┐[39m
[90m  │[39m [32m✔[39m  [0madmin.cy.js[0m                              [90m01:01[39m        [0m5[0m        [32m5[39m        [90m-[39m        [90m-[39m        [90m-[39m [90m│[39m
[90m  ├[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┤[39m
[90m  │[39m [32m✔[39m  [0mdashboard.cy.js[0m                          [90m00:43[39m        [0m4[0m        [32m4[39m        [90m-[39m        [90m-[39m        [90m-[39m [90m│[39m
[90m  ├[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┤[39m
[90m  │[39m [32m✔[39m  [0mleave.cy.js[0m                              [90m00:45[39m        [0m4[0m        [32m4[39m        [90m-[39m        [90m-[39m        [90m-[39m [90m│[39m
[90m  ├[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┤[39m
[90m  │[39m [32m✔[39m  [0mlogin.cy.js[0m                              [90m00:53[39m        [0m5[0m        [32m5[39m        [90m-[39m        [90m-[39m        [90m-[39m [90m│[39m
[90m  └[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┘[39m
[90m   [39m [32m✔[39m  [32mAll specs passed![39m                        [90m03:23[39m       [0m18[0m       [32m18[39m        [90m-[39m        [90m-[39m        [90m-[39m [90m [39m

[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Declarative: Post Actions)
[Pipeline] echo
📦 Pipeline execution finished.
[Pipeline] echo
🎉 Test passed successfully!
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
