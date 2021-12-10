# Consent modal

A consent modal implemented in pure JavaScript. This is part of a larger demo on https://consent-modal-demo.github.io

The consent modal is distributed on the GitHub Pages [releases branch](https://github.com/consent-modal-demo/consent-modal/tree/releases).
It is intended to be consumed as a script tag

```
<script src="https://consent-modal-demo.github.io/consent-modal/consent-modal-2.0.0-min.js"></script>
```

While this allows the consent modal to be in control of its own dependencies (IE. its able to bake npm depdencies into the distributed bundle), it still should not include frameworks such as React. This bundle will run in the same JavaScript context as the main site and will conflict with the global natural of React's event system. For more on this issue see https://github.com/facebook/react/issues/13991
