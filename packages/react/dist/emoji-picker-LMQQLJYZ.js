import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  inputVariants,
  toggleVariants,
  useHookUpdate
} from "./chunk-G4UICHH5.js";
import {
  Smile,
  twMerge
} from "./chunk-Y7FON2FE.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-BBZEL7EG.js";

// src/components/editor/emoji-picker.tsx
import { EmojiPicker } from "frimousse";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function EmojiPickerPopover({
  editor
}) {
  useHookUpdate(editor);
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Dialog, { onOpenChange: setIsOpen, open: isOpen, children: [
    /* @__PURE__ */ jsx(
      DialogTrigger,
      {
        type: "button",
        "aria-label": "\u65B0\u589E\u8868\u60C5\u7B26\u865F",
        className: twMerge(toggleVariants()),
        disabled: !editor.isEditable,
        children: /* @__PURE__ */ jsx(Smile, { className: "size-4" })
      }
    ),
    /* @__PURE__ */ jsxs(
      DialogContent,
      {
        full: true,
        onCloseAutoFocus: (e) => {
          editor.commands.focus();
          e.preventDefault();
        },
        children: [
          /* @__PURE__ */ jsx(DialogTitle, { className: "sr-only", children: "\u63D2\u5165\u8868\u60C5\u7B26\u865F" }),
          /* @__PURE__ */ jsxs(
            EmojiPicker.Root,
            {
              className: "flex w-full flex-col h-[368px] isolate max-sm:-mt-3",
              onEmojiSelect: (emoji) => {
                editor.chain().insertContent(emoji.emoji).focus().run();
                setIsOpen(false);
              },
              children: [
                /* @__PURE__ */ jsx(
                  EmojiPicker.Search,
                  {
                    placeholder: "\u641C\u5C0B\u8868\u60C5\u7B26\u865F",
                    type: "text",
                    className: twMerge(
                      inputVariants({
                        variant: "ghost"
                      })
                    )
                  }
                ),
                /* @__PURE__ */ jsxs(EmojiPicker.Viewport, { className: "relative flex-1 outline-hidden", children: [
                  /* @__PURE__ */ jsx(EmojiPicker.Loading, { className: "absolute inset-0 flex items-center justify-center text-fc-muted-foreground text-sm", children: "\u8F09\u5165\u4E2D\u2026" }),
                  /* @__PURE__ */ jsx(EmojiPicker.Empty, { className: "absolute inset-0 flex items-center justify-center text-fc-muted-foreground text-sm", children: "\u627E\u4E0D\u5230\u8868\u60C5\u7B26\u865F\u3002" }),
                  /* @__PURE__ */ jsx(
                    EmojiPicker.List,
                    {
                      className: "select-none pb-1.5",
                      components: {
                        CategoryHeader: (_a) => {
                          var _b = _a, { category } = _b, props = __objRest(_b, ["category"]);
                          return /* @__PURE__ */ jsx(
                            "div",
                            __spreadProps(__spreadValues({
                              className: "px-4 pt-3 pb-1.5 font-medium text-fc-muted-foreground bg-fc-popover text-xs"
                            }, props), {
                              children: category.label
                            })
                          );
                        },
                        Row: (_c) => {
                          var _d = _c, { children } = _d, props = __objRest(_d, ["children"]);
                          return /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({ className: "scroll-my-1.5 px-1.5" }, props), { children }));
                        },
                        Emoji: (_e) => {
                          var _f = _e, { emoji } = _f, props = __objRest(_f, ["emoji"]);
                          return /* @__PURE__ */ jsx(
                            "button",
                            __spreadProps(__spreadValues({
                              className: "flex size-11 items-center justify-center rounded-md text-3xl data-[active]:bg-fc-accent"
                            }, props), {
                              children: emoji.emoji
                            })
                          );
                        }
                      }
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  EmojiPickerPopover as default
};
