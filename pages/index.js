// src/App.js
import React, { useState, useEffect } from "react";
import NewsList from "@/components/NewsList";
import Pagination from "@/components/Pagination";
import CategoryFilter from "@/components/CategoryFilter";
import NewsService from "@/services/NewsService";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchNews();
  }, [currentPage, selectedCategory]);

  const fetchNews = async () => {
    try {
      const pageSize = 10;
      const response = await NewsService.getNews(
        selectedCategory,
        currentPage,
        pageSize
      );
      // console.log(response);
      setArticles(response.data.articles);
      setTotalPages(Math.ceil(response.data.totalResults / pageSize));
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/logo.png" alt="" className="w-20 h-20 text-white p-2 rounded-full"/>
            
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </nav>
         
        </div>
      </header>

      <NewsList articles={articles} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
