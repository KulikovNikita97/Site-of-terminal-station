import { CCollapse, CButton, CCard, CCardBody } from '@coreui/react'
import React, { useState } from 'react'

const News1 = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CButton href="#" onClick={(event) => {
                event.preventDefault()
                setVisible(!visible)
            }}>
                Link
            </CButton>
            <CButton onClick={() => setVisible(!visible)}>Button</CButton>
            <CCollapse visible={visible}>
                <CCard className="mt-3">
                    <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                        squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                        sapiente ea proident.
                    </CCardBody>
                </CCard>
            </CCollapse>
        </>
    )
}

export default News1;
