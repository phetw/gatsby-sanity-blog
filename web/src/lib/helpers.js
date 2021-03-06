import { format, isFuture } from "date-fns";

export function cn(...args) {
  return args.filter(Boolean).join(" ");
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map(edge => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current;
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(publishedAt);
}

export function getBlogUrl(publishedAt, slug) {
  return `/blog/${format(publishedAt, "YYYY/MM")}/${slug.current || slug}/`;
}

export function wordCount(rawbody) {
  let wordCount = 0;

  if (rawbody && rawbody.length !== 0) {
    rawbody.forEach(body => {
      if (body.children) {
        body.children.forEach(child => {
          wordCount = wordCount + child.text.split(" ").length;
        });
      }
    });
  }
  const result = Math.round(wordCount / 180);
  return result === 0 ? 1 : result;
}

export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id }
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}
