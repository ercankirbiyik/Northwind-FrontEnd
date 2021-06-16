import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src=" "/>
                <Dropdown pointing="top left" text="Ercan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My information" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Signed Out" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}