# Contributing

If you know of a resource discussing JSON Schema or have created a tool or
website about JSON Schema, [open a GitHub
issue](https://github.com/jviotti/awesome-jsonschema/issues/new/choose) or
add it directly to
[`data.yaml`](https://github.com/jviotti/awesome-jsonschema/blob/master/data.yaml)
The README is auto-generated from `data.yaml`. You can render the README as 
follows:

```sh
npm install
npm start
```

After rendering the README with your changes, send a pull request that includes 
*both* the `data.yaml` and the `README.md`.

## Adding a Resource Hub resource

The Resource Hub organizes community-authored resources using three levels:

- **Journey stage**: where the resource fits in the JSON Schema journey.
- **Topic**: what the resource teaches or covers.
- **Resource type**: whether it is an article, tutorial, video, course, book,
  tool, library, paper, specification, registry, or another useful format.

To contribute a resource:

1. Open `resource-hub/` and choose the journey stage that best matches it.
2. Open that stage's `README.md` and find an existing topic that fits.
3. Add the link under the appropriate resource-type heading.
4. Check that the resource is not already listed in the hub.
5. Keep any description concise and factual.
6. Prefer existing topics instead of creating unnecessary new categories. If
   none fits, explain why a new topic is needed in the pull request.
7. Run `npm start`, `npm test`, and `npm run lint`.
8. Open a pull request with the Markdown change.
