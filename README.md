# dev-excuses-judge

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/Fadliilmi/dev-excuses-judge/rank.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/Fadliilmi/dev-excuses-judge/reward.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

Entry for the [make.fun](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
competition **Make the AI Judge Laugh: Developer Excuses** — one funny
single-line excuse a developer gives when code breaks in production.

## The entry

> The deploy passed every test, because the tests were written by the same person who wrote the bug: me.

## How it works

`main.ts` (Node 22+, no dependencies, no network) writes that one line to
`/output/entry.txt`. The gate requires 1–200 UTF-8 characters; the line is
102 characters.

Run it locally:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
