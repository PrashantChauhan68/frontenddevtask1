import React, { useEffect, useState } from "react";
import axios from "axios";

// Add this line to help with CORS in CodeSandbox
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // ✅ Use CORS proxy + your actual API key
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://gnews.io/api/v4/top-headlines?topic=technology&lang=en&token=6332631a070d62ba59c87bca03c50a3c"
        );
        setArticles(response.data.articles);
      } catch (err) {
        setError("Failed to fetch news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p>🕒 Fetching news...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>📰 Latest Technology News</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {articles.map((article, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              background: "#fff",
            }}
          >
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
