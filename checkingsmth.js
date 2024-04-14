 const { stock, descriptionFilter, titleFilter, categoryFilter, sortByPrice, ...basicFilters } = filter;
    
        let sortFilters = {}
    
        if (descriptionFilter) { 
          sortFilters.$text = { $search: descriptionFilter }; 
        }
    
        if (titleFilter) {  
    
          sortFilters.title = { $in: titleFilter }; 
    
        if (categoryFilter) { 
         
          sortFilters.category = { $in: categoryFilter }; 
        }
    
        if (stock !== undefined) { 
          if (stock >= 1) { 
            sortFilters.stock = { $gte: Number(stock) };  
          } else if (stock < 1) {
            sortFilters.stock = { $lt: 1 }; 
          }
        }
        //http://localhost:3000/api/products/?sortByPrice=desc

        let sortingHat = {}; 

        if (sortByPrice) {
            if (sortByPrice === "asc") {
                sortingHat.price = 1;
            } else if (sortByPrice === "desc") {
                sortingHat.price = -1;
            }
        }

        if (basicFilters.price) basicFilters.price = { $gte: Number(basicFilters.price)};

        const allFilters = { ...sortFilters, ...basicFilters };

        const products = await Products.find(allFilters).sort(sortingHat);
    
        console.log(`getAllProducts`);

        return products; 
    }