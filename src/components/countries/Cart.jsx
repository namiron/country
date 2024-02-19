import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
border-radius: 5px;
box-shadow: 0px 4px 8px rgba(13, 13, 13, 0.282);
cursor:pointer;
overflow:hidden;
`;


const CartImage = styled.img`
display:block;
width:100%;
height:150px;
object-fit:fill;
object-position:center;
box-shadow: 0px 4px 8px rgba(13, 13, 13, 0.282);
`

const CartBody = styled.div`
padding:10px;
`;

const CartTitle = styled.h3`
font-size:20px;
`;

const Cartlist = styled.ul``;

const CartListitem = styled.li``;

const Cart = ({ img, name, info = [], onClick }) => {
    return (
        <Wrapper onClick={onClick}>
            <CartImage src={img} alt='flag' />
            <CartBody>
                <CartTitle>{name}</CartTitle>
                <Cartlist>
                    {
                        info.map((el) => (
                            <CartListitem key={el.title}>
                                <b>{el.title}:</b>{el.description}
                            </CartListitem>
                        ))
                    }
                </Cartlist>
            </CartBody>
        </Wrapper>
    )
}

export default Cart