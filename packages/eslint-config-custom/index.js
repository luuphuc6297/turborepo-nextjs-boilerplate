module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off",
    "jsx-a11y/role-supports-aria-props": "off",
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
    "react/self-closing-comp": ["error", { component: true, html: true }],
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
