import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  /* reset CSS */
  ${reset}

  /* Pretendard font */
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css");  
/* Actor font */
@import url('https://fonts.googleapis.com/css2?family=Actor&family=Noto+Sans+KR:wght@100..900&display=swap');
:root {
  /* colors */
  --Grayscale-10: #FFFFFF;
  --Grayscale-20: #F9F9F9;
  --Grayscale-30: #CFCFCF;
  --Grayscale-40: #818181;
  --Grayscale-50: #515151;
  --Grayscale-60: #000000;
  --Brown-10: #F5F1EE;
  --Brown-20: #E4D5C9;
  --Brown-30: #C7BBB5;
  --Brown-40: #542F1A;
  --Brown-50: #341909;
  --Blue-50: #1877F2;
  --Yellow-50: #FEE500;
  --Red-50: #B93333;
  
  /* typography */
  /* Headings */
  --h1-font: 'Pretendard';
  --h1-size: 40px;
  --h1-weight: 400;
  --h1-lineHeight: normal;

  --h2-font: 'Pretendard';
  --h2-size: 32px;
  --h2-weight: 400;
  --h2-lineHeight: 40px;

  --h3-font: 'Pretendard';
  --h3-size: 24px;
  --h3-weight: 400;
  --h3-lineHeight: 30px;

  /* Body */
  --body1-regular-font: 'Pretendard';
  --body1-regular-size: 20px;
  --body1-regular-weight: 400;
  --body1-regular-lineHeight: 25px;

  --body1-bold-font: 'Pretendard';
  --body1-bold-size: 20px;
  --body1-bold-weight: 500;
  --body1-bold-lineHeight: 25px;

  --body2-regular-font: 'Pretendard';
  --body2-regular-size: 18px;
  --body2-regular-weight: 400;
  --body2-regular-lineHeight: 24px;

  --body2-bold-font: 'Pretendard';
  --body2-bold-size: 18px;
  --body2-bold-weight: 500;
  --body2-bold-lineHeight: 24px;

  --body3-regular-font: 'Pretendard';
  --body3-regular-size: 16px;
  --body3-regular-weight: 400;
  --body3-regular-lineHeight: 22px;

  --body3-bold-font: 'Pretendard';
  --body3-bold-size: 16px;
  --body3-bold-weight: 500;
  --body3-bold-lineHeight: 22px;

  /* caption */
  --caption1-regular-font: 'Pretendard';
  --caption1-regular-size: 14px;
  --caption1-regular-weight: 400;
  --caption1-regular-lineHeight: 18px;

  --caption1-medium-font: 'Pretendard';
  --caption1-medium-size: 14px;
  --caption1-medium-weight: 500;
  --caption1-medium-lineHeight: 18px;

  --caption1-bold-font: 'Actor';
  --caption1-bold-size: 14px;
  --caption1-bold-weight: 400;
  --caption1-bold-lineHeight: 18px;
}

/* Typography Classes */
h1 {
    font-family: var(--h1-font);
    font-size: var(--h1-size);
    font-weight: var(--h1-weight);
    line-height: var(--h1-lineHeight);
  }

  h2 {
    font-family: var(--h2-font);
    font-size: var(--h2-size);
    font-weight: var(--h2-weight);
    line-height: var(--h2-lineHeight);
  }

  h3 {
    font-family: var(--h3-font);
    font-size: var(--h3-size);
    font-weight: var(--h3-weight);
    line-height: var(--h3-lineHeight);
  }

  body {
    font-family: 'Pretendard', sans-serif;
    font-size: var(--body1-regular-size);
    font-weight: var(--body1-regular-weight);
    line-height: var(--body1-regular-lineHeight);
    color: var(--Grayscale-60);
    background-color: var(--Grayscale-10);
  }

  .body1-bold {
    font-size: var(--body1-regular-size);
    font-weight: var(--body1-bold-weight);
    line-height: var(--body1-regular-lineHeight);
  }

  .body2-regular {
    font-size: var(--body2-regular-size);
    font-weight: var(--body2-regular-weight);
    line-height: var(--body2-regular-lineHeight);
  }

  .body2-bold {
    font-size: var(--body2-regular-size);
    font-weight: var(--body2-bold-weight);
    line-height: var(--body2-regular-lineHeight);
  }

  .body3-regular {
    font-size: var(--body3-regular-size);
    font-weight: var(--body3-regular-weight);
    line-height: var(--body3-regular-lineHeight);
  }

  .body3-bold {
    font-size: var(--body3-regular-size);
    font-weight: var(--body3-bold-weight);
    line-height: var(--body3-regular-lineHeight);
  }

  .caption1-regular {
    font-size: var(--caption1-regular-size);
    font-weight: var(--caption1-regular-weight);
    line-height: var(--caption1-lineHeight);
  }

  .caption1-medium {
    font-size: var(--caption1-regular-size);
    font-weight: var(--caption1-medium-weight);
    line-height: var(--caption1-lineHeight);
  }

  .caption1-bold {
    font-size: var(--caption1-regular-size);
    font-weight: var(--caption1-bold-weight);
    line-height: var(--caption1-lineHeight);
  }
`;

export default GlobalStyles;
