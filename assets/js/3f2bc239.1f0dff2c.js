"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[4263],{5312:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=s(1527),t=s(2175);const i={title:"Create a release",sidebar_position:3},r=void 0,o={id:"committers/release",title:"Create a release",description:"This document mainly introduces how the release manager",source:"@site/community/committers/release.md",sourceDirName:"committers",slug:"/committers/release",permalink:"/community/committers/release",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/community/committers/release.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Create a release",sidebar_position:3},sidebar:"docs",previous:{title:"Onboarding",permalink:"/community/committers/onboarding"},next:{title:"Verify a release candidate",permalink:"/community/committers/verify"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Some Terminology of release",id:"some-terminology-of-release",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Start discussion about the next release",id:"start-discussion-about-the-next-release",level:2},{value:"Start a tracking issue about the next release",id:"start-a-tracking-issue-about-the-next-release",level:2},{value:"GitHub Side",id:"github-side",level:2},{value:"Bump version in project",id:"bump-version-in-project",level:3},{value:"Update docs",id:"update-docs",level:3},{value:"Generate dependencies list",id:"generate-dependencies-list",level:3},{value:"Push release candidate tag",id:"push-release-candidate-tag",level:3},{value:"Check the GitHub action status",id:"check-the-github-action-status",level:3},{value:"ASF Side",id:"asf-side",level:2},{value:"Create an ASF Release",id:"create-an-asf-release",level:3},{value:"Upload artifacts to the SVN dist repo",id:"upload-artifacts-to-the-svn-dist-repo",level:3},{value:"Close the Nexus staging repo",id:"close-the-nexus-staging-repo",level:3},{value:"Rescue",id:"rescue",level:3},{value:"Voting",id:"voting",level:2},{value:"Official Release",id:"official-release",level:2},{value:"Push the release git tag",id:"push-the-release-git-tag",level:3},{value:"Publish artifacts to SVN RELEASE branch",id:"publish-artifacts-to-svn-release-branch",level:3},{value:"Change OpenDAL Website download link",id:"change-opendal-website-download-link",level:3},{value:"Release Maven artifacts",id:"release-maven-artifacts",level:3},{value:"Check the language binding artifacts",id:"check-the-language-binding-artifacts",level:3},{value:"Create a GitHub Release",id:"create-a-github-release",level:3},{value:"Send the announcement",id:"send-the-announcement",level:3},{value:"Post release",id:"post-release",level:2},{value:"Remove the old releases",id:"remove-the-old-releases",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This document mainly introduces how the release manager\nreleases a new version of Apache OpenDAL\u2122 in accordance with the Apache requirements."}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Source Release"})," is the key point which Apache values, and is also necessary for an ASF release."]}),"\n",(0,a.jsx)(n.p,{children:"Please remember that publishing software has legal consequences."}),"\n",(0,a.jsx)(n.p,{children:"This guide complements the foundation-wide policies and guides:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.apache.org/legal/release-policy.html",children:"Release Policy"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://infra.apache.org/release-distribution",children:"Release Distribution Policy"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://infra.apache.org/release-publishing.html",children:"Release Creation Process"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"some-terminology-of-release",children:"Some Terminology of release"}),"\n",(0,a.jsx)(n.p,{children:"In the context of our release, we use several terms to describe different stages of the release process."}),"\n",(0,a.jsx)(n.p,{children:"Here's an explanation of these terms:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"opendal_version"}),": the version of OpenDAL to be released, like ",(0,a.jsx)(n.code,{children:"0.36.0"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"release_version"}),": the version of release candidate, like ",(0,a.jsx)(n.code,{children:"0.36.0-rc.1"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"rc_version"}),": the minor version for voting round, like ",(0,a.jsx)(n.code,{children:"rc.1"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"maven_artifact_number"}),": the number for Maven staging artifacts, like ",(0,a.jsx)(n.code,{children:"1010"}),'. The number can be found by searching "opendal" on ',(0,a.jsx)(n.a,{href:"https://repository.apache.org/#stagingRepositories",children:"https://repository.apache.org/#stagingRepositories"}),". And the Maven staging artifacts will be created automatically when we push a git tag to GitHub for now."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"This section is the requirements for individuals who are new to the role of release manager."})}),"\n",(0,a.jsxs)(n.p,{children:["Refer to ",(0,a.jsx)(n.a,{href:"/community/committers/reference/setup_gpg",children:"Setup GPG Key"})," to make sure the GPG key has been set up."]}),"\n",(0,a.jsx)(n.h2,{id:"start-discussion-about-the-next-release",children:"Start discussion about the next release"}),"\n",(0,a.jsxs)(n.p,{children:["Start a discussion about the next release via sending email to: ",(0,a.jsx)(n.a,{href:"mailto:dev@opendal.apache.org",children:"dev@opendal.apache.org"}),":"]}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[DISCUSS] Release Apache OpenDAL ${release_version}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hello, Apache OpenDAL Community,\n\nThis is a call for a discussion to release Apache OpenDAL version ${opendal_version}.\n\nThe change lists about this release:\n\nhttps://github.com/apache/opendal/compare/v${opendal_last_version}...main\n\nPlease leave your comments here about this release plan. We will bump the version in the repo and start the release process after the discussion.\n\nThanks\n\n${name}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"start-a-tracking-issue-about-the-next-release",children:"Start a tracking issue about the next release"}),"\n",(0,a.jsx)(n.p,{children:"Start a tracking issue on GitHub for the upcoming release to track all tasks that need to be completed."}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Tracking issues of OpenDAL ${opendal_version} Release\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",children:"This issue is used to track tasks of the opendal ${opendal_version} release.\n\n## Tasks\n\n### Blockers\n\n> Blockers are the tasks that must be completed before the release.\n\n### Build Release\n\n#### GitHub Side\n\n- [ ] Bump version in project\n  - [ ] rust\n  - [ ] cpp\n  - [ ] haskell\n  - [ ] java\n  - [ ] nodejs\n- [ ] Update docs\n- [ ] Generate dependencies list\n- [ ] Push release candidate tag to GitHub\n\n#### ASF Side\n\n- [ ] Create an ASF Release\n- [ ] Upload artifacts to the SVN dist repo\n- [ ] Close the Nexus staging repo\n\n### Voting\n\n- [ ] Start VOTE at opendal community\n\n### Official Release\n\n- [ ] Push the release git tag\n- [ ] Publish artifacts to SVN RELEASE branch\n- [ ] Change OpenDAL Website download link\n- [ ] Release Maven artifacts\n- [ ] Send the announcement\n\nFor details of each step, please refer to: https://opendal.apache.org/community/committers/release\n"})}),"\n",(0,a.jsx)(n.h2,{id:"github-side",children:"GitHub Side"}),"\n",(0,a.jsx)(n.h3,{id:"bump-version-in-project",children:"Bump version in project"}),"\n",(0,a.jsx)(n.p,{children:"Bump all components' version in the project to the new opendal version.\nPlease note that this version is the exact version of the release, not the release candidate version."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["rust core: bump version in ",(0,a.jsx)(n.code,{children:"Cargo.toml"})]}),"\n",(0,a.jsxs)(n.li,{children:["cpp binding: bump version in ",(0,a.jsx)(n.code,{children:"bindings/cpp/CMakeLists.txt"})]}),"\n",(0,a.jsxs)(n.li,{children:["haskell binding: bump version and update the ",(0,a.jsx)(n.code,{children:"tag"})," field of ",(0,a.jsx)(n.code,{children:"source-repository this"})," in ",(0,a.jsx)(n.code,{children:"bindings/haskell/opendal.cabal"})]}),"\n",(0,a.jsxs)(n.li,{children:["java binding: bump version in ",(0,a.jsx)(n.code,{children:"bindings/java/pom.xml"})]}),"\n",(0,a.jsxs)(n.li,{children:["node.js binding: bump version in ",(0,a.jsx)(n.code,{children:"bindings/nodejs/package.json"})," and ",(0,a.jsx)(n.code,{children:"bindings/nodejs/npm/*/package.json"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"update-docs",children:"Update docs"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Update ",(0,a.jsx)(n.code,{children:"CHANGELOG.md"}),", refer to ",(0,a.jsx)(n.a,{href:"/community/committers/reference/generate_release_note",children:"Generate Release Note"})," for more information."]}),"\n",(0,a.jsxs)(n.li,{children:["Update ",(0,a.jsx)(n.code,{children:"core/src/docs/upgrade.md"})," if there are breaking changes in ",(0,a.jsx)(n.code,{children:"core"})]}),"\n",(0,a.jsxs)(n.li,{children:["Make sure every released bindings' ",(0,a.jsx)(n.code,{children:"upgrade.md"})," has been updated.\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["java: ",(0,a.jsx)(n.code,{children:"bindings/java/upgrade.md"})]}),"\n",(0,a.jsxs)(n.li,{children:["node.js: ",(0,a.jsx)(n.code,{children:"bindings/nodejs/upgrade.md"})]}),"\n",(0,a.jsxs)(n.li,{children:["python: ",(0,a.jsx)(n.code,{children:"bindings/python/upgrade.md"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"generate-dependencies-list",children:"Generate dependencies list"}),"\n",(0,a.jsxs)(n.p,{children:["Download and setup ",(0,a.jsx)(n.code,{children:"cargo-deny"}),". You can refer to ",(0,a.jsx)(n.a,{href:"https://embarkstudios.github.io/cargo-deny/cli/index.html",children:"cargo-deny"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Running ",(0,a.jsx)(n.code,{children:"python3 ./scripts/dependencies.py generate"})," to update the dependencies list of every package."]}),"\n",(0,a.jsx)(n.h3,{id:"push-release-candidate-tag",children:"Push release candidate tag"}),"\n",(0,a.jsx)(n.p,{children:"After bump version PR gets merged, we can create a GitHub release for the release candidate:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Create a tag at ",(0,a.jsx)(n.code,{children:"main"})," branch on the ",(0,a.jsx)(n.code,{children:"Bump Version"})," / ",(0,a.jsx)(n.code,{children:"Patch up version"})," commit: ",(0,a.jsx)(n.code,{children:'git tag -s "v0.36.0-rc.1"'}),", please correctly check out the corresponding commit instead of directly tagging on the main branch."]}),"\n",(0,a.jsxs)(n.li,{children:["Push tags to GitHub: ",(0,a.jsx)(n.code,{children:"git push --tags"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Pushing a Git tag to GitHub repo will trigger a GitHub Actions workflow that creates a staging Maven release on ",(0,a.jsx)(n.a,{href:"https://repository.apache.org",children:"https://repository.apache.org"})," which can be verified on voting."]})}),"\n",(0,a.jsx)(n.h3,{id:"check-the-github-action-status",children:"Check the GitHub action status"}),"\n",(0,a.jsx)(n.p,{children:"After pushing the tag, we need to check the GitHub action status to make sure the release candidate is created successfully."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Python: ",(0,a.jsx)(n.a,{href:"https://github.com/apache/opendal/actions/workflows/bindings_python.yml",children:"Bindings Python CI"})]}),"\n",(0,a.jsxs)(n.li,{children:["Java: ",(0,a.jsx)(n.a,{href:"https://github.com/apache/opendal/actions/workflows/bindings_java.yml",children:"Bindings Java CI"})," and ",(0,a.jsx)(n.a,{href:"https://github.com/apache/opendal/actions/workflows/release_java.yml",children:"Bindings Java Release"})]}),"\n",(0,a.jsxs)(n.li,{children:["Node.js: ",(0,a.jsx)(n.a,{href:"https://github.com/apache/opendal/actions/workflows/bindings_nodejs.yml",children:"Bindings Node.js CI"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In the most cases, it would be great to rerun the failed workflow directly when you find some failures. But if a new code patch is needed to fix the failure, you should create a new release candidate tag, increase the rc number and push it to GitHub."}),"\n",(0,a.jsx)(n.h2,{id:"asf-side",children:"ASF Side"}),"\n",(0,a.jsx)(n.p,{children:"If any step in the ASF Release process fails and requires code changes,\nwe will abandon that version and prepare for the next one.\nOur release page will only display ASF releases instead of GitHub Releases."}),"\n",(0,a.jsxs)(n.p,{children:["Additionally, we should also drop the staging Maven artifacts on ",(0,a.jsx)(n.a,{href:"https://repository.apache.org",children:"https://repository.apache.org"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"create-an-asf-release",children:"Create an ASF Release"}),"\n",(0,a.jsx)(n.p,{children:"After GitHub Release has been created, we can start to create ASF Release."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Checkout to released tag. (e.g. ",(0,a.jsx)(n.code,{children:"git checkout v0.36.0-rc.1"}),", tag is created in the previous step)"]}),"\n",(0,a.jsxs)(n.li,{children:["Use the release script to create a new release: ",(0,a.jsx)(n.code,{children:"python ./scripts/release.py"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["This script will generate the release candidate artifacts under ",(0,a.jsx)(n.code,{children:"dist"}),", including:\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"apache-opendal-{package}-{version}-src.tar.gz"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"apache-opendal-{package}-{version}-src.tar.gz.asc"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"apache-opendal-{package}-{version}-src.tar.gz.sha512"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Push the newly created branch to GitHub"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This script will create a new release under ",(0,a.jsx)(n.code,{children:"dist"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"dist\n\u251c\u2500\u2500 apache-opendal-bindings-c-0.44.2+core.0.45.0-src.tar.gz\n\u251c\u2500\u2500 apache-opendal-bindings-c-0.44.2+core.0.45.0-src.tar.gz.asc\n\u251c\u2500\u2500 apache-opendal-bindings-c-0.44.2+core.0.45.0-src.tar.gz.sha512\n...\n\u251c\u2500\u2500 apache-opendal-core-0.45.0-src.tar.gz\n\u251c\u2500\u2500 apache-opendal-core-0.45.0-src.tar.gz.asc\n\u251c\u2500\u2500 apache-opendal-core-0.45.0-src.tar.gz.sha512\n\u251c\u2500\u2500 apache-opendal-integrations-dav-server-0.0.0+core.0.45.0-src.tar.gz\n\u251c\u2500\u2500 apache-opendal-integrations-dav-server-0.0.0+core.0.45.0-src.tar.gz.asc\n\u251c\u2500\u2500 apache-opendal-integrations-dav-server-0.0.0+core.0.45.0-src.tar.gz.sha512\n\u251c\u2500\u2500 apache-opendal-integrations-object_store-0.42.0+core.0.45.0-src.tar.gz\n\u251c\u2500\u2500 apache-opendal-integrations-object_store-0.42.0+core.0.45.0-src.tar.gz.asc\n\u2514\u2500\u2500 apache-opendal-integrations-object_store-0.42.0+core.0.45.0-src.tar.gz.sha512\n\n1 directory, 60 files\n"})}),"\n",(0,a.jsx)(n.h3,{id:"upload-artifacts-to-the-svn-dist-repo",children:"Upload artifacts to the SVN dist repo"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"SVN is required for this step."})}),"\n",(0,a.jsxs)(n.p,{children:["The svn repository of the dev branch is: ",(0,a.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/dev/opendal",children:"https://dist.apache.org/repos/dist/dev/opendal"})]}),"\n",(0,a.jsx)(n.p,{children:"First, checkout OpenDAL to local directory:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\nsvn co https://dist.apache.org/repos/dist/dev/opendal opendal-dist-dev\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then, upload the artifacts:"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"${release_version}"})," here should be like ",(0,a.jsx)(n.code,{children:"0.36.0-rc.1"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'cd opendal-dist-dev\n# create a directory named by version\nmkdir ${release_version}\n# copy source code and signature package to the versioned directory\ncp ${repo_dir}/dist/* ${release_version}/\n# check svn status\nsvn status\n# add to svn\nsvn add ${release_version}\n# check svn status\nsvn status\n# commit to SVN remote server\nsvn commit -m "Prepare for ${release_version}"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Visit ",(0,a.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/dev/opendal/",children:"https://dist.apache.org/repos/dist/dev/opendal/"})," to make sure the artifacts are uploaded correctly."]}),"\n",(0,a.jsx)(n.h3,{id:"close-the-nexus-staging-repo",children:"Close the Nexus staging repo"}),"\n",(0,a.jsx)(n.p,{children:"To verify the Maven staging artifacts in the next step, close the Nexus staging repo as below."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Open ",(0,a.jsx)(n.a,{href:"https://repository.apache.org/#stagingRepositories",children:"https://repository.apache.org/#stagingRepositories"})," with your Apache ID login."]}),"\n",(0,a.jsxs)(n.li,{children:["Find the artifact ",(0,a.jsx)(n.code,{children:"orgapacheopendal-${maven_artifact_number}"}),', click the "Close" button.']}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"close"})," operation means that the artifacts are ready for voting."]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:'If the vote failed, click "Drop" to drop the staging Maven artifacts.'})}),"\n",(0,a.jsx)(n.h3,{id:"rescue",children:"Rescue"}),"\n",(0,a.jsxs)(n.p,{children:["If you accidentally published wrong or unexpected artifacts, like wrong signature files, wrong sha256 files,\nplease cancel the release for the current ",(0,a.jsx)(n.code,{children:"release_version"}),",\n",(0,a.jsx)(n.em,{children:"increase th RC counting"})," and re-initiate a release with the new ",(0,a.jsx)(n.code,{children:"release_version"}),".\nAnd remember to delete the wrong artifacts from the SVN dist repo.\nAdditionally, you should also drop the staging Maven artifacts on ",(0,a.jsx)(n.a,{href:"https://repository.apache.org",children:"https://repository.apache.org"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"voting",children:"Voting"}),"\n",(0,a.jsx)(n.p,{children:"OpenDAL requires votes from both the OpenDAL Community."}),"\n",(0,a.jsxs)(n.p,{children:["Vote should send email to: ",(0,a.jsx)(n.a,{href:"mailto:dev@opendal.apache.org",children:"dev@opendal.apache.org"}),":"]}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[VOTE] Release Apache OpenDAL ${release_version} - Vote Round 1\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hello, Apache OpenDAL Community,\n\nThis is a call for a vote to release Apache OpenDAL version ${opendal_version}.\n\nThe tag to be voted on is ${opendal_version}.\n\nThe release candidate:\n\nhttps://dist.apache.org/repos/dist/dev/opendal/${release_version}/\n\nKeys to verify the release candidate:\n\nhttps://downloads.apache.org/opendal/KEYS\n\nGit tag for the release:\n\nhttps://github.com/apache/opendal/releases/tag/v${release_version}\n\nMaven staging repo:\n\nhttps://repository.apache.org/content/repositories/orgapacheopendal-${maven_artifact_number}/\n\nPypi testing repo:\n\nhttps://test.pypi.org/project/opendal/\n\nPlease download, verify, and test.\n\nThe VOTE will be open for at least 72 hours and until the necessary\nnumber of votes are reached.\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nTo learn more about apache opendal, please see https://opendal.apache.org/\n\nChecklist for reference:\n\n[ ] Download links are valid.\n[ ] Checksums and signatures.\n[ ] LICENSE/NOTICE files exist\n[ ] No unexpected binary files\n[ ] All source files have ASF headers\n[ ] Can compile from source\n\nUse our verify.py to assist in the verify process:\n\nsvn co https://dist.apache.org/repos/dist/dev/opendal/${release_version}/ opendal-dev\ncd opendal-dev\ncurl -sSL https://github.com/apache/opendal/raw/v${release_version}/scripts/verify.py -o verify.py\npython verify.py\n\nThanks\n\n${name}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example: ",(0,a.jsx)(n.a,{href:"https://lists.apache.org/thread/c211gqq2yl15jbxqk4rcnq1bdqltjm5l",children:"https://lists.apache.org/thread/c211gqq2yl15jbxqk4rcnq1bdqltjm5l"})]}),"\n",(0,a.jsxs)(n.p,{children:["The vote should be open for ",(0,a.jsx)(n.strong,{children:"at least 72 hours"})," except the following cases:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Security issues"}),"\n",(0,a.jsx)(n.li,{children:"The wild user effected bug fixes"}),"\n",(0,a.jsx)(n.li,{children:"Any other emergency cases"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The Release manager should claim the emergency cases in the vote email if he want to vote it rapidly."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Tips: The 72 hours is the minimum time for voting, so we can ensure that community members from various time zones can participate in the verification process."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["After at least 3 ",(0,a.jsx)(n.code,{children:"+1"})," binding vote (",(0,a.jsx)(n.a,{href:"https://opendal.apache.org/community/#committers",children:"from OpenDAL Podling PMC member"}),") and no veto, claim the vote result:"]}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[RESULT][VOTE] Release Apache OpenDAL ${release_version} - Vote Round 1\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hello, Apache OpenDAL Community,\n\nThe vote to release Apache OpenDAL ${release_version} has passed.\n\nThe vote PASSED with 3 +1 binding and 1 +1 non-binding votes, no +0 or -1 votes:\n\nBinding votes:\n\n- xxx\n- yyy\n- zzz\n\nNon-Binding votes:\n\n- aaa\n\nVote thread: ${vote_thread_url}\n\nThanks\n\n${name}\n"})}),"\n",(0,a.jsx)(n.p,{children:"It's better to use the real name or the public name which is displayed on the voters' profile page,\nor Apache ID of the voter, to show who voted in the vote result email,\nand avoid using nicknames, it will make the vote result hard for others to track the voter.\nWe should make sure the binding votes are from the people who have the right to vote the binding one."}),"\n",(0,a.jsxs)(n.p,{children:["Example: ",(0,a.jsx)(n.a,{href:"https://lists.apache.org/thread/xk5myl10mztcfotn59oo59s4ckvojds6",children:"https://lists.apache.org/thread/xk5myl10mztcfotn59oo59s4ckvojds6"})]}),"\n",(0,a.jsx)(n.h2,{id:"official-release",children:"Official Release"}),"\n",(0,a.jsx)(n.h3,{id:"push-the-release-git-tag",children:"Push the release git tag"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# Checkout the tags that passed VOTE\ngit checkout ${release_version}\n# Tag with the opendal version\ngit tag -s ${opendal_version}\n# Push tags to GitHub to trigger releases\ngit push origin ${opendal_version}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"publish-artifacts-to-svn-release-branch",children:"Publish artifacts to SVN RELEASE branch"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'svn mv https://dist.apache.org/repos/dist/dev/opendal/${release_version} https://dist.apache.org/repos/dist/release/opendal/${opendal_version} -m "Release ${opendal_version}"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"change-opendal-website-download-link",children:"Change OpenDAL Website download link"}),"\n",(0,a.jsxs)(n.p,{children:["Change the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/opendal/blob/main/website/src/pages/download.md",children:"download"})," link in the website to the new release version."]}),"\n",(0,a.jsx)(n.p,{children:"Update the latest release link and add the new release link to the version list."}),"\n",(0,a.jsxs)(n.p,{children:["Take ",(0,a.jsx)(n.a,{href:"https://github.com/apache/opendal/pull/2882",children:"Add 0.39.0 release link to download.md"})," as an example."]}),"\n",(0,a.jsx)(n.h3,{id:"release-maven-artifacts",children:"Release Maven artifacts"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Open ",(0,a.jsx)(n.a,{href:"https://repository.apache.org/#stagingRepositories",children:"https://repository.apache.org/#stagingRepositories"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Find the artifact ",(0,a.jsx)(n.code,{children:"orgapacheopendal-${maven_artifact_number}"}),', click the "Release" button.']}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"It will take some time to sync the Maven artifacts to the Maven Central."}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:'If the vote failed, click "Drop" to drop the staging Maven artifacts.'})}),"\n",(0,a.jsx)(n.h3,{id:"check-the-language-binding-artifacts",children:"Check the language binding artifacts"}),"\n",(0,a.jsx)(n.p,{children:"We need to check the language binding artifacts in the language package repo to make sure they are released successfully."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Python: ",(0,a.jsx)(n.a,{href:"https://pypi.org/project/opendal/",children:"https://pypi.org/project/opendal/"})]}),"\n",(0,a.jsxs)(n.li,{children:["Java: ",(0,a.jsx)(n.a,{href:"https://repository.apache.org/#nexus-search;quick~opendal",children:"https://repository.apache.org/#nexus-search;quick~opendal"})]}),"\n",(0,a.jsxs)(n.li,{children:["Node.js: ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/opendal",children:"https://www.npmjs.com/package/opendal"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For Java binding, if we can not find the latest version of artifacts in the repo, we need to check the ",(0,a.jsx)(n.code,{children:"orgapacheopendal-${maven_artifact_number}"})," artifact status in staging repo."]}),"\n",(0,a.jsx)(n.p,{children:"For non-Java bindings, if we can not find the latest version of artifacts in the repo, we need to check the GitHub action status."}),"\n",(0,a.jsx)(n.h3,{id:"create-a-github-release",children:"Create a GitHub Release"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.a,{href:"https://github.com/apache/opendal/releases/new",children:"here"})," to create a new release."]}),"\n",(0,a.jsx)(n.li,{children:"Pick the git tag of this release version from the dropdown menu."}),"\n",(0,a.jsxs)(n.li,{children:["Make sure the branch target is ",(0,a.jsx)(n.code,{children:"main"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Generate the release note by clicking the ",(0,a.jsx)(n.code,{children:"Generate release notes"})," button."]}),"\n",(0,a.jsxs)(n.li,{children:["Add the release note from every component's ",(0,a.jsx)(n.code,{children:"upgrade.md"})," if there are breaking changes before the content generated by GitHub. Check them carefully."]}),"\n",(0,a.jsx)(n.li,{children:"Publish the release."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"send-the-announcement",children:"Send the announcement"}),"\n",(0,a.jsxs)(n.p,{children:["Send the release announcement to ",(0,a.jsx)(n.code,{children:"dev@opendal.apache.org"})," and CC ",(0,a.jsx)(n.code,{children:"announce@apache.org"}),"."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Tips: Please following the ",(0,a.jsx)(n.a,{href:"https://infra.apache.org/committer-email.html",children:"Committer Email"})," guide to make sure you have already set up the email SMTP. Otherwise, your email cannot be sent to the announcement mailing list."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'Instead of adding breaking changes, let\'s include the new features as "notable changes" in the announcement.'}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[ANNOUNCE] Release Apache OpenDAL ${opendal_version}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hi all,\n\nThe Apache OpenDAL community is pleased to announce\nthat Apache OpenDAL ${opendal_version} has been released!\n\nOpenDAL is a data access layer that allows users to easily and efficiently\nretrieve data from various storage services in a unified way.\n\nThe notable changes since ${opendal_version} include:\n1. xxxxx\n2. yyyyyy\n3. zzzzzz\n\nPlease refer to the change log for the complete list of changes:\nhttps://github.com/apache/opendal/releases/tag/v${opendal_version}\n\nApache OpenDAL website: https://opendal.apache.org/\n\nDownload Links: https://opendal.apache.org/download\n\nOpenDAL Resources:\n- Issue: https://github.com/apache/opendal/issues\n- Mailing list: dev@opendal.apache.org\n\nThanks\nOn behalf of Apache OpenDAL community\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example: ",(0,a.jsx)(n.a,{href:"https://lists.apache.org/thread/oy77n55brvk72tnlb2bjzfs9nz3cfd0s",children:"https://lists.apache.org/thread/oy77n55brvk72tnlb2bjzfs9nz3cfd0s"})]}),"\n",(0,a.jsx)(n.h2,{id:"post-release",children:"Post release"}),"\n",(0,a.jsx)(n.p,{children:"After the official release out, you may perform a few post actions."}),"\n",(0,a.jsx)(n.h3,{id:"remove-the-old-releases",children:"Remove the old releases"}),"\n",(0,a.jsx)(n.p,{children:"Remove the old releases if any. You only need the latest release there, and older releases are available through the Apache archive."}),"\n",(0,a.jsx)(n.p,{children:"To clean up old releases, run:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'# 1. Get the list of releases\nsvn ls https://dist.apache.org/repos/dist/release/opendal\n# 2. Delete each release (except for the last one)\nsvn del -m "Archiving OpenDAL release X.Y.Z" https://dist.apache.org/repos/dist/release/opendal/X.Y.Z\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2175:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var a=s(959);const t={},i=a.createContext(t);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);