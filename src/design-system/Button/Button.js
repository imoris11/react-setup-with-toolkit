import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BaseButton = styled.button`
  background-color: #003232;
  height: 3em;
  color: white;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  width: 200px;
`;

export const Button = ({ text, onClick, ...props }) => {
  return (
    <BaseButton onClick={onClick} {...props}>
      {text}
    </BaseButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
