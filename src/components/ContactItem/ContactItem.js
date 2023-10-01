import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Wrapper, Text, SpanText, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <Wrapper>
      <Text>
        {name}:<SpanText>{phone}</SpanText>
      </Text>
      <DeleteBtn type="button" onClick={onDelete}>
        Delete
      </DeleteBtn>
    </Wrapper>
  );
};
