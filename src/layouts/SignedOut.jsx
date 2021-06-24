import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

export default function SignedOut({ signedIn }) {
    return (
        <div>
            <Menu.Item>
                <Button
                    onClick={signedIn} primary> Login
                </Button>
                <Button
                    style={{ marginLeft: '0.7em' }}> Register  //Parametre olarak obje istendiği için style'da iki tane süslü parantez kullandık
                </Button>
            </Menu.Item>
        </div>
    )
}
