import styled from 'styled-components'
import tags from './tags.json'

const TagTitle = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const TagContainer = styled.section`
    display: flex;
    align-items: center;
    margin-top: 56px;
    gap: 64px;

`

const Tag = styled.button`
    color: #ffffff;
    display: flex;
    gap: 12px;
    font-size: 18px;
    font-weight: 400;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 1px solid transparent;
        button{
            &:hover {
            border-color: #C98CF1;
        }
    }
`;

const TagRet =  styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;


`;

const Tags = () => {

    return (
         <TagContainer>
            <TagTitle>Busque por tags:</TagTitle>
            <TagRet>
                {tags.map(tag => <Tag key={tag.id}>{tag.title}</Tag>)}
            </TagRet>
        </TagContainer>
    )
}

export default Tags