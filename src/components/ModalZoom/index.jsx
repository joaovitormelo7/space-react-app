import styled from "styled-components"
import Image from "../Galery/Image"
import IconButton from "../IconButton"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0, 7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

`

const DialogStyle = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
        form {
            button{
                position: relative;
                top: 20px;
                right: 60px;
            }
        }
`

const ModalZoom = ({ picture, onClose, onAlternateFav }) => {
    if (!picture) return null;

    return (
        <>
            {picture && <>
                <Overlay /> 
                <DialogStyle open={!!picture} onClose={onClose}>
                    <Image picture={picture} expand={true} onAlternateFav={onAlternateFav} />
                    <form method="dialog">
                        <IconButton formMethod="dialog">
                            <img src="/image/icon/close.png" alt="Close icon" />
                        </IconButton>       
                    </form>
                </DialogStyle>
            </>}
        </>
    )
}

export default ModalZoom