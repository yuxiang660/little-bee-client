export interface MarkdownRemark {
  html: string;
  id: string;
  fields: {
    slug: string;
    date: string;
    categorySlug: string;
    tagSlugs: string[];
  };
  frontmatter: {
    category: string;
    title: string;
    description: string;
    tags: string[];
  };
}

export interface Edge {
  edge: MarkdownRemark;
}

export interface Edges {
  edges: {
    node: MarkdownRemark;
  }[];
}

export interface AllMarkdownRemark {
  allMarkdownRemark: Edges;
  group: {
    fieldValue: string;
    totalCount: number;
  }[];
}

export interface PageContext {
  tag: string;
  category: string;
  currentPage: number;
  prevPagePath: string;
  nextPagePath: string;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}
