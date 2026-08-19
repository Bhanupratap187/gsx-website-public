// CLAUDE.md mandates // comments in TypeScript. The core multiline-comment-style
// rule only catches multi-line blocks, so single-line /** */ JSDoc slips past it.
const rule = {
  meta: {
    type: "layout",
    docs: {
      description: "Disallow block comments in TypeScript; use // instead.",
    },
    messages: {
      blockComment: "Use // comments, not /* */ or /** */ (CLAUDE.md).",
    },
    schema: [],
  },
  create(context) {
    const source = context.sourceCode;

    // JSX expression position has no line-comment form, so {/* */} stays legal.
    const isJsxComment = (comment) => {
      const text = source.getText();
      const before = text.slice(0, comment.range[0]).trimEnd();
      const after = text.slice(comment.range[1]).trimStart();
      return before.endsWith("{") && after.startsWith("}");
    };

    return {
      Program() {
        for (const comment of source.getAllComments()) {
          if (comment.type === "Block" && !isJsxComment(comment)) {
            context.report({ node: comment, messageId: "blockComment" });
          }
        }
      },
    };
  },
};

const plugin = { rules: { "no-block-comments": rule } };

export default plugin;
