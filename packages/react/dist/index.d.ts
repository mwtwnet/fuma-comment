import * as react from 'react';
import { HTMLAttributes, ReactNode, ComponentProps } from 'react';
import { C as CommentsProviderProps, a as CommentsPost } from './atom-BkQeB1jQ.js';
export { M as MentionContextType } from './atom-BkQeB1jQ.js';
export { S as StorageContext } from './storage-CRqS87xe.js';
import '@fuma-comment/server';
import '@tiptap/react';

type CommentsProps = Omit<HTMLAttributes<HTMLDivElement>, keyof CommentsProviderProps | keyof InnerProps> & CommentsProviderProps & InnerProps;
interface InnerProps {
    title?: ReactNode;
    /**
     * title to show when the user has not logged in.
     *
     * Fallbacks to default `title` when not specified.
     * @deprecated No longer used.
     */
    titleUnauthorized?: ReactNode;
    editor?: ComponentProps<typeof CommentsPost>;
}
declare const Comments: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, keyof CommentsProviderProps | keyof InnerProps> & CommentsProviderProps & InnerProps & react.RefAttributes<HTMLDivElement>>;

export { Comments, type CommentsProps };
