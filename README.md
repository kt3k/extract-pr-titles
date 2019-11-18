# extract-pr-titles v0.1.0

> Extract PR Titles between the 2 given git refs.

# Usage

```
npx extract-pr-titles --from <ref> --to <ref> [-r|--reverse] [--format <format>]
```

# Example

In some repository in some time:

```console
$ npx extract-pr-titles --from HEAD~10 --to HEAD
```

This lists the merged PR titles and numbers among recent 10 commits.

# Note

This command supports `Merged PRs` and `Squashed PRs`. This command doesn't support `Rebased PRs`.

# License

MIT
