import {
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  FieldsType,
} from "contentful";

export interface EntrySkeleton<T extends FieldsType> extends EntrySkeletonType {
  fields: T;
}

export interface ComponentFields {
  title: EntryFieldTypes.Text;
  content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type ComponentFieldsSkeleton = EntrySkeleton<ComponentFields>;

export interface TextFields {
  title: EntryFieldTypes.Text;
  textFormat: EntryFieldTypes.Text<"Short" | "Long">;
  shortContent?: EntryFieldTypes.Text;
  longContent?: EntryFieldTypes.Text;
  tag: EntryFieldTypes.Text<"Title" | "H1" | "H2" | "H3" | "P">;
}

export type TextFieldsSkeleton = EntrySkeleton<TextFields>;
export type TextEntry = Entry<TextFieldsSkeleton, undefined>;

export interface LinkFields {
  title: EntryFieldTypes.Text;
  label?: EntryFieldTypes.Text;
  url: EntryFieldTypes.Text;
  icon: EntryFieldTypes.AssetLink;
  newTab?: EntryFieldTypes.Boolean;
}

export type LinkFieldsSkeleton = EntrySkeleton<LinkFields>;
export type LinkEntry = Entry<LinkFieldsSkeleton, undefined>;

export interface ImageFields {
  title: EntryFieldTypes.Text;
  asset: EntryFieldTypes.AssetLink;
}

export type ImageFieldsSkeleton = EntrySkeleton<ImageFields>;
export type ImageEntry = Entry<
  ImageFieldsSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS"
>;
