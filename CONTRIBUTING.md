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

## Adding a resource

The top-level README is the resource index. Before contributing, check its
existing categories and confirm that the resource is not already listed.

1. Find the existing README category that best fits the resource. Use that
   category as the `type` in `data.yaml`.
2. If no category is appropriate, propose one in the same pull request. Add the
   new category to `template.hbs` and place the resource under it. New
   categories should only be introduced when the resource genuinely does not
   fit the existing structure.
3. Add the resource to `data.yaml` with its `name`, `url`, short
   `description`, `type`, and `level`. Keep category names consistent between
   the README and YAML.
4. Choose exactly one learning level based on the knowledge expected of the
   reader: `beginner`, `intermediate`, or `advanced`. The level does not rate
   the quality or importance of the resource.
5. Make sure the resource is publicly accessible and technically accurate. It
   must not teach incorrect or non-compliant JSON Schema behavior.
6. Run `npm start` to regenerate the README, then run `npm test` and
   `npm run lint`.
7. Open a focused pull request containing both `data.yaml` and the generated
   `README.md`, plus `template.hbs` when proposing a new category.

Community-created resources are welcome. Do not describe a community resource
as officially produced or endorsed by the JSON Schema organization unless it
actually is. Maintainers may review and fact-check resources before accepting
them. Follow the repository's existing formatting and contribution conventions
and keep the pull request focused on the resource or structural change being
proposed.
