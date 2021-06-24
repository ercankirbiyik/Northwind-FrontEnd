import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signedOut}) {
    return (
        <div> 
            <Menu.Item>
                <Image avatar spaced="right" src=" https://get.google.com/albumarchive/117303897415310468720/album/AF1QipMlQiDSmc2emFoFYwN3R0QWjTgajpMhHYFXNXOF/AF1QipNDpa23Cs0yefYvr4n9dZ5gE-FWTn7C7nPK7wVB"
                ></Image>                
                <Dropdown pointing="top left" text="Ercan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My information" icon="info"/>
                        <Dropdown.Item onClick={signedOut} text="Signed Out" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
