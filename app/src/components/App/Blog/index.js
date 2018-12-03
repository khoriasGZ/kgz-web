/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */

// Datas
import posts from 'src/datas/posts';
import categories from 'src/datas/categories';
// Component
import Footer from 'src/components/App/Blog/Footer';
import Header from 'src/components/App/Blog/Header';
import Posts from 'src/components/App/Blog/Posts';


/*
 * Code
 */
/* eslint-disable react/prefer-stateless-function */
class Blog extends React.Component {
/**
   * State
   * @type {Object}
   */
  state = {
    selectedCategory: 'all',
  }


  /**
   * handleClick
   * Le handler de l'événement click
   */
  handleClick = selectedCategory => () => {
    this.setState({ selectedCategory });
  }


  /**
   * Render
   * La méthode qui doit rendre la vue en JSX
   */
  render() {
    /*
     * Vars
     */
    // const selectedCategory = this.state.selectedCategory;
    const { selectedCategory } = this.state;
    const selectedPosts = posts.filter(post => (
      post.category === selectedCategory
      // ou
      ||
      // On prend tout le monde, si la catégorie c'est all
      selectedCategory === 'all'
    ));

    /*
     * View
     */
    return (
      <div id="blog">
        <Header
          categories={categories}
          onCategoryClick={this.handleClick}
        />
        <Posts posts={selectedPosts} />
        <Footer />
      </div>
    );
  }
}


/*
 * Export default
 */
export default Blog;
