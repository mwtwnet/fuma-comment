import {
  Bold,
  Code,
  Italic,
  Link,
  Strikethrough,
  X,
  buttonVariants,
  twMerge,
  useMention,
  useStorage
} from "./chunk-Y7FON2FE.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-BBZEL7EG.js";

// src/components/input.tsx
import { cva } from "class-variance-authority";
var inputVariants = cva(
  "appearance-none px-2 py-1.5 placeholder:text-fc-muted-foreground focus-visible:outline-none",
  {
    variants: {
      variant: {
        ghost: "px-4 py-3.5 border-b",
        default: "rounded-md border border-fc-border bg-fc-background focus-visible:ring-2 focus-visible:ring-fc-ring"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

// src/components/dialog.tsx
import * as Primitive from "@radix-ui/react-dialog";

// src/utils/use-media-query.ts
import { useEffect, useState } from "react";
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (event) => {
      setMatches(event.matches);
    };
    media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);
  return matches;
}
function useIsMobile() {
  return useMediaQuery("(max-width: 768px)");
}

// src/components/dialog.tsx
import { cva as cva2 } from "class-variance-authority";
import {
  createContext,
  use,
  useMemo,
  useRef,
  useState as useState2
} from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Context = createContext(null);
function Dialog(props) {
  var _a;
  const [open, setOpen] = props.open !== void 0 ? [props.open, (_a = props.onOpenChange) != null ? _a : () => {
  }] : useState2(false);
  return /* @__PURE__ */ jsx(Primitive.Root, __spreadProps(__spreadValues({}, props), { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsx(
    Context.Provider,
    {
      value: useMemo(
        () => ({
          open,
          setOpen
        }),
        [open, setOpen]
      ),
      children: props.children
    }
  ) }));
}
var DialogTrigger = Primitive.Trigger;
function DialogDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    Primitive.Description,
    __spreadValues({
      className: twMerge(
        "text-fc-muted-foreground text-sm mb-4 max-sm:text-center",
        className
      )
    }, props)
  );
}
var overlayVariants = cva2(
  "fixed inset-0 bg-black/50 data-[state=open]:animate-fc-overlayShow data-[state=closed]:animate-fc-overlayHide"
);
var contentVariants = cva2(
  "fixed left-1/2 flex w-full -translate-x-1/2 flex-col bg-fc-popover text-fc-popover-foreground shadow-lg overflow-hidden",
  {
    variants: {
      full: {
        true: "p-0",
        false: "p-4"
      },
      variant: {
        drawer: "rounded-t-3xl outline-none pt-2 pb-10 transition-transform data-[state=closed]:animate-fc-drawerHide data-[state=open]:animate-fc-drawerShow",
        modal: "rounded-2xl border border-fc-border max-w-md top-1/2 -translate-y-1/2 data-[state=closed]:animate-fc-dialogHide data-[state=open]:animate-fc-dialogShow"
      }
    }
  }
);
function DialogContent(props) {
  const isMobile = useIsMobile();
  if (isMobile) {
    return /* @__PURE__ */ jsx(DrawerContent, __spreadValues({}, props));
  }
  const _a = props, { children, full = false, className } = _a, rest = __objRest(_a, ["children", "full", "className"]);
  return /* @__PURE__ */ jsxs(Primitive.Portal, { children: [
    /* @__PURE__ */ jsx(Primitive.Overlay, { className: overlayVariants() }),
    /* @__PURE__ */ jsxs(
      Primitive.Content,
      __spreadProps(__spreadValues({
        className: twMerge(contentVariants({ variant: "modal", full, className }))
      }, rest), {
        children: [
          children,
          /* @__PURE__ */ jsx(
            Primitive.Close,
            {
              className: twMerge(
                buttonVariants({
                  variant: "ghost",
                  size: "icon",
                  className: "absolute text-fc-muted-foreground right-3.5 top-3.5"
                })
              ),
              children: /* @__PURE__ */ jsx(X, { className: "size-4" })
            }
          )
        ]
      })
    )
  ] });
}
function DrawerContent(_a) {
  var _b = _a, {
    full = false,
    children,
    className
  } = _b, props = __objRest(_b, [
    "full",
    "children",
    "className"
  ]);
  var _a2;
  const bottomPadding = 20;
  const contentRef = useRef(null);
  const targetRef = useRef(null);
  const offsetRef = useRef(0);
  const lastMovementRef = useRef(0);
  const [pressing, setPressing] = useState2(false);
  const { setOpen } = useContext();
  function setOffset(v) {
    offsetRef.current = v;
    const element = contentRef.current;
    if (element) {
      element.style.setProperty("--drawer-offset", `${offsetRef.current}px`);
    }
  }
  function shouldDrag(target, movement) {
    var _a3;
    if (target.isContentEditable) return false;
    const highlightedText = (_a3 = window.getSelection()) == null ? void 0 : _a3.toString();
    if (highlightedText && highlightedText.length > 0) {
      return false;
    }
    if (target.tagName === "SELECT" || target.tagName === "INPUT") {
      return false;
    }
    let element = target;
    while (element) {
      if (element.getAttribute("role") === "dialog") break;
      if (element.scrollHeight > element.clientHeight && (element.scrollTop > 0 || movement < 0)) {
        return false;
      }
      element = element.parentNode;
    }
    return true;
  }
  function onStopDrag() {
    if (!pressing) return;
    setOffset(0);
    setPressing(false);
  }
  return /* @__PURE__ */ jsxs(Primitive.Portal, { children: [
    /* @__PURE__ */ jsx(Primitive.Overlay, { className: overlayVariants() }),
    /* @__PURE__ */ jsxs(
      Primitive.Content,
      __spreadProps(__spreadValues({
        "data-fc-drawer": true,
        ref: contentRef,
        onPointerDown: (e) => {
          if (!(e.target instanceof HTMLElement) || !shouldDrag(e.target, e.movementY))
            return;
          setPressing(true);
          targetRef.current = e.target;
          lastMovementRef.current = 0;
          window.addEventListener("touchend", onStopDrag, { once: true });
        },
        onPointerMove: (e) => {
          if (!pressing || !targetRef.current || !shouldDrag(targetRef.current, e.movementY))
            return;
          const newOffset = Math.max(
            -bottomPadding,
            offsetRef.current + e.movementY
          );
          lastMovementRef.current = e.movementY;
          setOffset(newOffset);
          e.preventDefault();
        },
        onAnimationEnd: () => {
          setOffset(0);
        },
        onPointerLeave: onStopDrag,
        onPointerUp: () => {
          if (contentRef.current && offsetRef.current > contentRef.current.clientHeight / 3 || lastMovementRef.current > 15) {
            setOpen(false);
            setPressing(false);
          } else {
            onStopDrag();
          }
        },
        className: twMerge(
          contentVariants({
            variant: "drawer",
            full,
            className
          })
        )
      }, props), {
        style: __spreadProps(__spreadValues({}, props.style), {
          bottom: -bottomPadding,
          transition: pressing ? "none" : (_a2 = props.style) == null ? void 0 : _a2.transition,
          transform: "translateY(var(--drawer-offset))"
        }),
        children: [
          !full && /* @__PURE__ */ jsx("div", { className: "z-[2] mb-3 mx-auto w-12 h-1 rounded-full bg-fc-primary/30" }),
          children
        ]
      })
    )
  ] });
}
function DialogTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    Primitive.Title,
    __spreadProps(__spreadValues({
      className: twMerge("mb-2 font-semibold max-sm:text-center", className)
    }, props), {
      children: props.children
    })
  );
}
function useContext() {
  const ctx = use(Context);
  if (!ctx) throw new Error("Root missing");
  return ctx;
}

// src/components/editor/index.tsx
import { EditorContent } from "@tiptap/react";
import {
  useLayoutEffect as useLayoutEffect2,
  forwardRef,
  useState as useState4,
  useRef as useRef2,
  useEffect as useEffect2,
  lazy
} from "react";
import { cva as cva3 } from "class-variance-authority";

// src/components/editor/hyper-link.tsx
import { useLayoutEffect, useState as useState3 } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function HyperLink({
  editor,
  onClose
}) {
  const [name, setName] = useState3("");
  const [value, setValue] = useState3("");
  const isInsert = editor.state.selection.empty;
  useLayoutEffect(() => {
    editor.commands.extendMarkRange("link");
    const href = editor.getAttributes("link").href;
    const selection = editor.state.selection;
    const selected = editor.state.doc.textBetween(selection.from, selection.to);
    setName(selected);
    setValue(href != null ? href : "");
  }, [editor]);
  return /* @__PURE__ */ jsxs2(
    "form",
    {
      className: "flex flex-col gap-2",
      onSubmit: (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (value.trim().length === 0) return;
        const content = name.length > 0 ? name : value;
        onClose();
        if (!editor.state.selection.empty) {
          editor.chain().deleteSelection().setLink({ href: value }).insertContent(content).focus().run();
        } else {
          editor.chain().setLink({ href: value }).insertContent(content).unsetMark("link").insertContent(" ").focus().run();
        }
      },
      children: [
        /* @__PURE__ */ jsx2("label", { className: "font-medium text-sm content-center", htmlFor: "url", children: "\u9023\u7D50" }),
        /* @__PURE__ */ jsx2(
          "input",
          {
            id: "url",
            className: twMerge(inputVariants(), "mb-2"),
            onChange: (e) => {
              setValue(e.target.value);
            },
            placeholder: "https://example.com",
            required: true,
            type: "url",
            value
          }
        ),
        /* @__PURE__ */ jsx2("label", { className: "font-medium text-sm content-center", htmlFor: "name", children: "\u540D\u7A31" }),
        /* @__PURE__ */ jsx2(
          "input",
          {
            id: "name",
            className: twMerge(inputVariants(), "mb-2"),
            value: name,
            onChange: (e) => {
              setName(e.target.value);
            },
            placeholder: "\u6211\u7684\u9023\u7D50 (\u9078\u586B)"
          }
        ),
        /* @__PURE__ */ jsxs2("div", { className: "flex gap-1 mt-2", children: [
          /* @__PURE__ */ jsx2("button", { className: twMerge(buttonVariants()), type: "submit", children: isInsert ? "\u63D2\u5165" : "\u5132\u5B58" }),
          editor.isActive("link") ? /* @__PURE__ */ jsx2(
            "button",
            {
              className: twMerge(buttonVariants({ variant: "secondary" })),
              onClick: () => {
                onClose();
                editor.chain().focus().unsetMark("link").run();
              },
              type: "button",
              children: "\u79FB\u9664"
            }
          ) : null
        ] })
      ]
    }
  );
}

// src/components/editor/lazy-load.ts
function createEditorLazy(options) {
  return __async(this, null, function* () {
    return import("./create-editor-AP4L4UOD.js").then((mod) => mod.createEditor(options));
  });
}

// src/components/editor/index.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var editorVariants = cva3(
  "rounded-xl border border-fc-border bg-fc-card text-base transition-colors focus-within:ring-2 focus-within:ring-fc-ring aria-disabled:cursor-not-allowed aria-disabled:opacity-80"
);
var toggleVariants = cva3(
  "inline-flex rounded-md p-1.5 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      active: {
        true: "bg-fc-accent text-fc-accent-foreground"
      }
    },
    defaultVariants: {
      active: false
    }
  }
);
function getPersistentId(id) {
  const storageKey = `fc_textarea_${id}`;
  const cached = sessionStorage.getItem(storageKey);
  return cached ? JSON.parse(cached) : null;
}
function setPersistentId(id, value) {
  const storageKey = `fc_textarea_${id}`;
  sessionStorage.setItem(storageKey, JSON.stringify(value));
}
function clearPersistentId(id) {
  const storageKey = `fc_textarea_${id}`;
  sessionStorage.removeItem(storageKey);
}
var EmojiPickerButton = lazy(() => import("./emoji-picker-LMQQLJYZ.js"));
var CodeBlockButton = lazy(() => import("./codeblock-ZCMDCVCK.js"));
var ImageUploadButton = lazy(() => import("./image-upload-TQ7QADZX.js"));
var CommentEditor = forwardRef(
  (_a, ref) => {
    var _b = _a, { editorRef, disabled = false, containerProps, children } = _b, props = __objRest(_b, ["editorRef", "disabled", "containerProps", "children"]);
    var _a2, _b2;
    const [editor, setEditor] = useState4();
    const mention = useMention();
    const storage = useStorage();
    const propsRef = useRef2(__spreadProps(__spreadValues({}, props), {
      mentionEnabled: mention.enabled
    }));
    useLayoutEffect2(() => {
      var _a3;
      let instance;
      const { persistentId, defaultValue } = propsRef.current;
      let timeout;
      const save = () => {
        if (instance && persistentId)
          setPersistentId(persistentId, instance.getJSON());
      };
      void createEditorLazy({
        autofocus: false,
        content: persistentId ? (_a3 = getPersistentId(persistentId)) != null ? _a3 : defaultValue : defaultValue,
        editorProps: {
          attributes: {
            class: "flex-1 px-3 pt-2.5 focus-visible:outline-none"
          }
        },
        onEscape: () => {
          var _a4, _b3;
          if (instance) (_b3 = (_a4 = propsRef.current).onEscape) == null ? void 0 : _b3.call(_a4, instance);
          return true;
        },
        onSubmit: () => {
          var _a4, _b3;
          if (instance) (_b3 = (_a4 = propsRef.current).onSubmit) == null ? void 0 : _b3.call(_a4, instance);
          return true;
        },
        mentionEnabled: propsRef.current.mentionEnabled,
        placeholder: propsRef.current.placeholder,
        onTransaction(v) {
          var _a4, _b3;
          (_b3 = (_a4 = propsRef.current).onChange) == null ? void 0 : _b3.call(_a4, v.editor);
          if (persistentId && v.transaction.docChanged) {
            clearTimeout(timeout);
            timeout = window.setTimeout(save, 500);
          }
        }
      }).then((res) => {
        instance = res;
        setEditor(instance);
      });
      return () => {
        if (!instance) return;
        instance.destroy();
      };
    }, []);
    if (!editor) {
      return /* @__PURE__ */ jsx3(
        "div",
        __spreadProps(__spreadValues({}, containerProps), {
          ref,
          className: twMerge(editorVariants(), "p-1", containerProps == null ? void 0 : containerProps.className),
          children: /* @__PURE__ */ jsx3(
            "p",
            __spreadProps(__spreadValues({}, props.editorProps), {
              className: twMerge(
                "px-3 py-2.5 h-[38px] text-fc-muted-foreground mb-9",
                (_a2 = props.editorProps) == null ? void 0 : _a2.className
              ),
              children: props.placeholder
            })
          )
        })
      );
    }
    if (editorRef) editorRef.current = editor;
    if (editor.isEditable === disabled) {
      editor.setEditable(!disabled);
    }
    return /* @__PURE__ */ jsxs3(
      "div",
      __spreadProps(__spreadValues({}, containerProps), {
        "aria-disabled": disabled,
        className: twMerge(editorVariants(), containerProps == null ? void 0 : containerProps.className),
        ref,
        children: [
          /* @__PURE__ */ jsx3(
            EditorContent,
            __spreadProps(__spreadValues({
              editor
            }, props.editorProps), {
              className: twMerge("min-h-[38px]", (_b2 = props.editorProps) == null ? void 0 : _b2.className)
            })
          ),
          /* @__PURE__ */ jsxs3("div", { className: "flex flex-row items-center p-1", children: [
            /* @__PURE__ */ jsx3(
              MarkButton,
              {
                editor,
                name: "bold",
                icon: /* @__PURE__ */ jsx3(Bold, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsx3(
              MarkButton,
              {
                editor,
                name: "italic",
                icon: /* @__PURE__ */ jsx3(Italic, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsx3(
              MarkButton,
              {
                editor,
                name: "strike",
                icon: /* @__PURE__ */ jsx3(Strikethrough, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsx3(
              MarkButton,
              {
                editor,
                name: "code",
                icon: /* @__PURE__ */ jsx3(Code, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsx3("div", { className: "w-px h-4 bg-fc-border mx-0.5 last:hidden" }),
            /* @__PURE__ */ jsx3(UpdateLink, { editor }),
            /* @__PURE__ */ jsx3(CodeBlockButton, { editor }),
            /* @__PURE__ */ jsx3(EmojiPickerButton, { editor }),
            storage.enabled ? /* @__PURE__ */ jsx3(ImageUploadButton, { editor }) : null,
            /* @__PURE__ */ jsx3("div", { className: "flex-1" }),
            children
          ] })
        ]
      })
    );
  }
);
CommentEditor.displayName = "Editor";
function MarkButton({
  editor,
  name,
  icon
}) {
  useHookUpdate(editor);
  return /* @__PURE__ */ jsx3(
    "button",
    {
      type: "button",
      "aria-label": `\u5207\u63DB ${name}`,
      className: twMerge(
        toggleVariants({
          active: editor.isActive(name)
        })
      ),
      disabled: !editor.can().toggleMark(name) || !editor.isEditable,
      onMouseDown: (e) => {
        editor.commands.toggleMark(name);
        e.preventDefault();
      },
      children: icon
    },
    name
  );
}
function UpdateLink({ editor }) {
  useHookUpdate(editor);
  const [isOpen, setIsOpen] = useState4(false);
  return /* @__PURE__ */ jsxs3(Dialog, { onOpenChange: setIsOpen, open: isOpen, children: [
    /* @__PURE__ */ jsx3(
      DialogTrigger,
      {
        type: "button",
        "aria-label": "\u5207\u63DB\u9023\u7D50",
        className: twMerge(toggleVariants({ active: editor.isActive("link") })),
        disabled: !editor.can().setLink({ href: "" }) || !editor.isEditable,
        children: /* @__PURE__ */ jsx3(Link, { className: "size-4" })
      }
    ),
    /* @__PURE__ */ jsxs3(DialogContent, { onCloseAutoFocus: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsx3(DialogTitle, { children: "\u65B0\u589E\u9023\u7D50" }),
      /* @__PURE__ */ jsx3(
        HyperLink,
        {
          editor,
          onClose: () => {
            setIsOpen(false);
            editor.commands.focus();
          }
        }
      )
    ] })
  ] });
}
function useHookUpdate(editor) {
  const [, forceUpdate] = useState4(0);
  useEffect2(() => {
    const onUpdate = () => {
      forceUpdate((prev) => prev + 1);
    };
    editor.on("transaction", onUpdate);
    return () => {
      editor.off("transaction", onUpdate);
    };
  }, [editor]);
}

export {
  inputVariants,
  useIsMobile,
  Dialog,
  DialogTrigger,
  DialogDescription,
  DialogContent,
  DialogTitle,
  toggleVariants,
  clearPersistentId,
  CommentEditor,
  useHookUpdate
};
