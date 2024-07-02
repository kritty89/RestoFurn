import React from 'react'
import '../css/ProductsHome.css';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

import ProductsNavbar from '../components/ProductsNavbar';
import Image1 from '../assets/product_category/wooden_chair.jpg';
import Image2 from '../assets/product_category/table_chair2.jpg';
import Image3 from '../assets/product_category/office_desk2.jpg';
import Image4 from '../assets/product_category/sofa2.jpg';
import Image5 from '../assets/product_category/wooden_chair2.jpg';
import Image6 from '../assets/product_category/steel_chair1.jpg';
import Image7 from '../assets/product_category/plastic_chair.jpg';
import Image8 from '../assets/product_category/sofa1.jpg';
import Image9 from '../assets/product_category/table_chair.jpg';
import Image10 from '../assets/product_category/sofa.jpg';
import Image11 from '../assets/product_category/steel_chair2.jpg';
import Image12 from '../assets/product_category/bed1.jpg';
import Image13 from '../assets/product_category/office_desk1.jpg';
import Image14 from '../assets/product_category/dressing_table.jpg';
import Image15 from '../assets/product_category/steel_chair2.jpg';

function ProductsHome() {
  return (
    <div className='product-container'>
      <ProductsNavbar />
      <h2>Shop by Price</h2>
      <div className='category'>
        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image1}
              title="Under 25$"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Under 25$
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image2}
              title="Under 50$"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Under 50$
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image3}
              title="Under 75$"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Under 75$
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image4}
              title="Under 100$"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Under 100$
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <h2>Shop by Material</h2>
      <div className='category'>
        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image5}
              title="Wood"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Wood
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image6}
              title="Steel"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Steel
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image7}
              title="Plastic"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Plastic
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image8}
              title="Fabric"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Fabric
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <h2>Shop by Furniture Type</h2>
      <div className='category'>
        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image9}
              title="Table"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Table
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image10}
              title="Sofa"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Sofa
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image11}
              title="Chair"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Chair
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image12}
              title="Bed"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Bed
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image13}
              title="Desk"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Desk
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image14}
              title="Dressing Table"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Dressing Table
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea component={Link} to={`/products`}>
            <CardMedia
              component="img"
              alt="furniture"
              className="category-card-media"
              image={Image15}
              title="Crib"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Crib
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

      </div>
    </div>
  );
}

export default ProductsHome