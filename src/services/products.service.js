import { Products } from "../models/products.model.js";

export class ProductsService {
    //get all with filtering too
    static async getAllProducts(filter = {}) {

        const { stock, descriptionFilter, titleFilter, categoryFilter, sortByPrice, ...basicFilters } = filter;
   
        // const products = await Products.find({})

        let sortFilters = {}
    
        if (descriptionFilter) { 
          sortFilters.$text = { $search: descriptionFilter }; 
        }

        if (titleFilter) {  
    
          sortFilters.title = { $in: titleFilter }; 
        }

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
            
          

    //get by id
    static async getProductById(productId) {
       
        const foundProduct = await Products.findById(productId);

        if(!foundProduct) throw new Error("produt not found");

        return foundProduct;
    }
    //create
    static async createProduct(productData) {
        const newProduct = new Products(productData);

        const createdProduct = await newProduct.save();

        return createdProduct;
    }
    //update
    static async updateProduct(productId, updateData) {
        const foundProduct = await this.getProductById(productId);

        Object.assign(foundProduct, updateData);

        const updatedProduct = await foundProduct.save();

        return updatedProduct;
    }
    //delete one
    static async deleteProduct(productId) {
        const response = await Products.findByIdAndDelete(productId);

        if(!response) throw new Error("produc not found");

        console.log(response);
    }

  }