import React from 'react';
import styled from "styled-components"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt=""/>
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla  Account</a>
                <CustomMenu />
            </RightMenu>
            <BurgerNav>
                <CloseWrapper>
                    <CloseMenu />
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>

        </Container>
    )
}

export default Header



const Container = styled.div`
    z-index: 1;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;


    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }

    @media(max-width: 768) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }

`

const CustomMenu = styled(MenuOpenIcon)`
    cursor: pointer;

`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }
`

const CloseMenu = styled(CloseIcon)`

    `
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`