import { html } from "lit-element";
import "../../index.js";

export default {
  title: "Puzzle Shell/Examples/Web app with navigation",
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => html`
  <pzsh-container>
    <pzsh-topbar>
      <!-- prettier-ignore -->
      <svg slot="logo" width="214" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M110.578 13.523h-3.484V23h-2.344v-9.477h-3.438v-1.898h9.266v1.898zM114.414 23h-2.344V11.625h2.344V23zm5.242-11.375l2.922 8.25 2.906-8.25h3.078V23h-2.351v-3.11l.234-5.367-3.07 8.477h-1.609l-3.063-8.469.235 5.36V23h-2.344V11.625h3.062zm17.797 6.445h-4.5v3.047h5.281V23h-7.625V11.625h7.61v1.898h-5.266v2.711h4.5v1.836z" fill="#3FA8E0"/><path d="M27.45 4.686c-6.28-6.248-16.461-6.248-22.74 0-6.28 6.249-6.28 16.38 0 22.628 6.279 6.248 16.46 6.248 22.74 0 3.015-3 4.71-7.07 4.71-11.314a15.96 15.96 0 00-4.71-11.314zm-1.24 5.527C25.686 11.77 24 16.442 24 16.442c-.564 1.523-3.863 1.51-8.342 1.523 0 0 2.894-.407 3.73-2.015a38.073 38.073 0 001.822-4.864c-4.455 0-4.853 1.553-4.853 1.553s-2.814 7.836-3.82 10.727c-7.804 0-6.557-3.835-6.557-3.835L9.884 8.635h7.905l-.527 1.57s.643-1.57 5.002-1.57c.002 0 4.471.019 3.946 1.578zM41.45 19.15v4.023h-2.746V11.439h4.787a4.907 4.907 0 013.329 1.067 3.519 3.519 0 011.231 2.8 3.505 3.505 0 01-1.231 2.793 4.938 4.938 0 01-3.329 1.059l-2.042-.008zm0-2.095h2.041c.501.035.994-.142 1.356-.488.316-.34.484-.79.465-1.253a1.802 1.802 0 00-.465-1.281 1.762 1.762 0 00-1.356-.5H41.45v3.522zM58.88 11.437v7.689a3.805 3.805 0 01-1.34 3.112 5.347 5.347 0 01-3.51 1.103 5.402 5.402 0 01-3.54-1.103 3.8 3.8 0 01-1.34-3.112v-7.69h2.747v7.69a2.086 2.086 0 00.559 1.6c.439.37 1.005.556 1.58.52a2.185 2.185 0 001.558-.516 2.111 2.111 0 00.547-1.6v-7.693h2.74zM63.33 21.077h5.37v2.096h-8.74v-1.226l5.273-8.414h-5.297v-2.096h8.691v1.177l-5.298 8.463zM72.927 21.077h5.37v2.096h-8.74v-1.226l5.274-8.414h-5.297v-2.096h8.69v1.177l-5.297 8.463zM82.07 21.077h5.079v2.096h-7.823V11.439h2.747l-.003 9.638zM95.471 18.151H90.85v2.926h5.45v2.096h-8.2V11.439h8.213v2.096H90.85v2.523h4.625l-.004 2.093z" fill="#fff"/></svg>
    </pzsh-topbar>
    <pzsh-banner></pzsh-banner>
    <main>Web app with navigation</main>
    <pzsh-footer></pzsh-footer>
  </pzsh-container>
`;
Default.storyName = "Web app with navigation";
