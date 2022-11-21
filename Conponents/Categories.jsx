import React from 'react';
import styled from 'styled-components';
import {categories} from '../pages/api/data.page'
import { mobile } from '../functions/responsive.page';
import CategoryItem from './CategoryItem';
const Container=styled.div`
display: flex;
padding: 20px;
${mobile({padding:"0px",flexDirection:"column"})}

` 
const Categories = () => {

    return (
        <Container>
        {
                categories.map(item=>(
                    <>
                    <CategoryItem item={item} key={item.id}/>
                    </>
                    
                ))
            }
        </Container>
    );
};

export default Categories;