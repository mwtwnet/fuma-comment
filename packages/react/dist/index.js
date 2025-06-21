"use client";
import {
  CommentsList,
  CommentsPost,
  CommentsProvider
} from "./chunk-ROJ24SN7.js";
import "./chunk-PRHA7YAK.js";
import "./chunk-B5523HTG.js";
import "./chunk-G7JSBTAE.js";
import "./chunk-G4UICHH5.js";
import {
  twMerge
} from "./chunk-Y7FON2FE.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-BBZEL7EG.js";

// src/comments.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Comments = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      page,
      className,
      title,
      storage,
      editor,
      mention,
      auth,
      apiUrl
    } = _b, props = __objRest(_b, [
      "page",
      "className",
      "title",
      "storage",
      "editor",
      "mention",
      "auth",
      "apiUrl"
    ]);
    return /* @__PURE__ */ jsx(
      CommentsProvider,
      {
        page,
        apiUrl,
        auth,
        storage,
        mention,
        children: /* @__PURE__ */ jsxs(
          "div",
          __spreadProps(__spreadValues({
            className: twMerge(
              "overflow-hidden rounded-xl border border-fc-border bg-fc-background text-fc-foreground",
              className
            ),
            ref
          }, props), {
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col gap-2", children: [
                title,
                /* @__PURE__ */ jsx(CommentsPost, __spreadValues({}, editor))
              ] }),
              /* @__PURE__ */ jsx(CommentsList, {})
            ]
          })
        )
      }
    );
  }
);
Comments.displayName = "Comments";
export {
  Comments
};
