import Article from "../../models/Article";
import BlogSummary from "../../models/BlogSummary";

export default interface IBlogState {
  blogSummaries: BlogSummary;
  blogArticles: Article[];
  blogSummariesLoading: boolean;
  blogArticlesLoading: boolean;
}
