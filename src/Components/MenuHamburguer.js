import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function MenuHamburguer() {
    return (
        <Menu>
            <MenuButton as={Button} borderColor={"black"} borderWidth={"1px"}>
                <GiHamburgerMenu />
            </MenuButton>
            <MenuList w={"150px"} minW={"unset"}>
                <Link to="/"><MenuItem >Inicio</MenuItem></Link>
                <Link to="/category"><MenuItem >Categoría</MenuItem></Link>
                <MenuItem >Cerrar sesión</MenuItem>
            </MenuList>
        </Menu>
    );
}
