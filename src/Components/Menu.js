import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MenuHamburguer() {
    return (
        <Menu>
            <MenuButton as={Button} borderColor={"black"} borderWidth={"1px"}>
                <GiHamburgerMenu />
            </MenuButton>

            <MenuList w={"150px"} minW={"unset"}>
                <MenuItem >Inicio</MenuItem>
                <MenuItem >Perfil</MenuItem>
                <MenuItem >Configuración</MenuItem>
                <MenuItem >Cerrar sesión</MenuItem>
            </MenuList>
        </Menu>
    );
}
