import type { EntryFieldTypes } from "contentful";

export interface Entry<T> {
  fields: T;
  contentTypeId: string;
}

export interface TextFields {
  title: string;
  textFormat: "Short" | "Long";
  shortContent?: string;
  longContent?: string;
  tag: "Title" | "H1" | "H2" | "H3" | "P";
}

export type TextEntry = Entry<TextFields>;

export interface PageFields {
  title: string;
  content: Entry<unknown>[];
}

export type PageEntry = Entry<PageFields>;
