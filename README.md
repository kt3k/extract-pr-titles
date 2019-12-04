# extract-pr-titles v1.1.0

[![CircleCI](https://circleci.com/gh/kt3k/extract-pr-titles.svg?style=svg)](https://circleci.com/gh/kt3k/extract-pr-titles)
[![codecov](https://codecov.io/gh/kt3k/extract-pr-titles/branch/master/graph/badge.svg)](https://codecov.io/gh/kt3k/extract-pr-titles)

> A cli command for extracting PR Titles between the given 2 git refs.

# Usage

The command takes the options like the below:

```sh
npx extract-pr-titles --from <ref> --to <ref> [-r|--reverse] [--format <format>]
```

See the below for more details of options.

# Example

In some repository at some time:

```console
$ npx extract-pr-titles --from HEAD~10 --to HEAD
npx: installed 8 in 1.763s
feat: add --check for deno fmt #3369
feat: Add std/encoding/yaml module #3361
fix deno_core_http_bench #3364
refactor: fixes for futures #3363
Use async to replace FutureExt in lib.rs #3359
Use futures 0.3 API #3358
fmt: respect prettierrc and prettierignore #3346
fix: std/datetime toIMF bug #3357
run std test with cargo test #3344
Add wasm example to manual #3353
```

This lists the merged PR titles and numbers among recent 10 commits.

# Options

- `--from <commit>`
  - Shows the list from this commit
- `--to <commit>`
  - Shows the list until this commit
- `[-r | --reverse]`
  - Shows the list in reversed order. Default is false.
- `[--format <format>]`
  - Specify the format of title and number (PR number).
  - Default is `{title} #{number}`.
  - The format is rendered as [pupa][] templating language. Please see [the document][pupa] for details.

# Note

This command supports `Merged PRs` and `Squashed PRs`. This command doesn't support `Rebased PRs`.

# License

MIT

[pupa]: https://github.com/sindresorhus/pupa
