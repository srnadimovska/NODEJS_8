let data = {
  books: [
    {
       
      name: "Fourth Wing",
      author: "Rebecca Yarros",
      year: 2023,
      image: "/images/img1.jpg",
      price: 12.99,
    },
    {
        
      name: "James",
      author: "Percival Everett",
      year: 2024,
      image: "/images/img2.jpg",
      price: 15.99,
    },
    {
        
      name: "The Women",
      author: "Kristin Hannah",
      year: 2024,
      image: "/images/img3.jpg",
      price: 10.99,
    },
    {
        
      name: "The Crash",
      author: "Freida McFaden",
      year: 2025,
      image: "/images/img4.jpg",
      price: 9.99,
    },
    {
        
      name: "Onyx Storm",
      author: "Rebecca Yarros",
      year: 2025,
      image: "/images/img5.jpg",
      price: 18.99,
    },
    {
        
      name: "Yellowface",
      author: "R.F.Kuang",
      year: 2023,
      image: "/images/img6.jpg",
      price: 8.99,
    },
    {
        
      name: "The Book of Bill",
      author: "Alex Hirsch",
      year: 2024,
      image: "/images/img7.jpg",
      price: 10.99,
    },
    {
        
      name: "Blue Sisters",
      author: "Coco Mellors",
      year: 2024,
      image: "/images/img8.jpg",
      price: 16.99,
    },
    {
        
      name: "Normal People",
      author: "Sally Rooney",
      year: 2018,
      image: "/images/img9.jpg",
      price: 12.99,
    },
    {
        
      name: "Katabasis",
      author: "R.F.Kuang",
      year: 2025,
      image: "/images/img10.jpg",
      price: 14.99,
    },
  ],
};

exports.getBook = (req, res) => {
  res.render("books", data);
};
exports.getTableBook = (req, res) => {
  res.render("newbooks", data);
};

exports.postNewBook = (req, res) => {
  console.log(req.body);
  const newBook = {
    name: req.body.name,
    author: req.body.author,
    year: req.body.year,
    price: req.body.price,
  };
  data.books.push(newBook);
  res.render("newbooks", data);
};
