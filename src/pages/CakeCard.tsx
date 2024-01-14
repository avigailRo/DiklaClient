// src/components/CakeCard.tsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface CakeCardProps {
    title: string;
    description: string;
    imageSrc: string;
    to: string; // קישור לדף המבוקש
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 16px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CakeImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const CakeImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
  cursor: pointer; /* יכול להיות טוב להציב סמל של יד כדי להקל על המשתמש לראות שזו קישור ניתן ללחיצה */
`;

const CakeTitle = styled.h2`
  margin-top: 8px;
  color: #333;
`;

const CakeDescription = styled.p`
  color: #666;
`;

const CakeCard: React.FC<CakeCardProps> = ({ title, description, imageSrc, to }) => {
    return (
        <CardContainer>
            <CakeImagesContainer>
                <Link to={to}>
                    <CakeImage src={imageSrc} alt={title} />
                </Link>
            </CakeImagesContainer>
            <CakeTitle>{title}</CakeTitle>
            <CakeDescription>{description}</CakeDescription>
        </CardContainer>
    );
};

export default CakeCard;
