const categories = [
    {
      id: 1,
      name: 'Fiction',
      image: 'https://via.placeholder.com/300x200',
      description: 'Books that are made up',
      books: [
        {
          id: 1,
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          price: 12.99,
          coverImage: 'https://via.placeholder.com/200x300',
          rating: 4.5,
          description: 'A classic novel set in the South',
          reviews: [
            {
              id: 1,
              username: 'johndoe',
              rating: 4,
              comment: 'Great book!'
            },
            {
              id: 2,
              username: 'janedoe',
              rating: 5,
              comment: 'One of my favorites'
            }
          ]
        },
        {
          id: 2,
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          price: 11.99,
          coverImage: 'https://via.placeholder.com/200x300',
          rating: 4,
          description: 'A novel set in the Roaring Twenties',
          reviews: [
            {
              id: 3,
              username: 'bobsmith',
              rating: 3.5,
              comment: 'Not bad, but not great either'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Nonfiction',
      image: 'https://via.placeholder.com/300x200',
      description: 'Books that are based on reality',
      books: [
        {
          id: 3,
          title: 'Becoming',
          author: 'Michelle Obama',
          price: 15.99,
          coverImage: 'https://via.placeholder.com/200x300',
          rating: 4.8,
          description: 'Memoir by the former First Lady',
          reviews: [
            {
              id: 4,
              username: 'sarahjones',
              rating: 5,
              comment: 'Amazing book!'
            },
            {
              id: 5,
              username: 'johndoe',
              rating: 4,
              comment: 'Well written and inspiring'
            }
          ]
        },
        {
          id: 4,
          title: 'Sapiens: A Brief History of Humankind',
          author: 'Yuval Noah Harari',
          price: 13.99,
          coverImage: 'https://via.placeholder.com/200x300',
          rating: 4.2,
          description: 'A history of the human species',
          reviews: [
            {
              id: 6,
              username: 'janedoe',
              rating: 4.5,
              comment: 'Very interesting book'
            },
            {
              id: 7,
              username: 'bobsmith',
              rating: 3,
              comment: 'Some parts were dry'
            }
          ]
        }
      ]
    }
  ];
  
  export default categories;
  